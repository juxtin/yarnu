/*
 Copyright 2012-2015, Yahoo Inc.
 Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
const path = require('path');
function CoberturaReport(opts) {
    this.cw = null;
    this.xml = null;
    this.projectRoot = opts.projectRoot || process.cwd();
    this.file = opts.file || 'cobertura-coverage.xml';
}

function asJavaPackage(node) {
    return node
        .getRelativeName()
        .replace(/\//g, '.')
        .replace(/\\/g, '.')
        .replace(/\.$/, '');
}

function asClassName(node) {
    return node.getRelativeName().replace(/.*[\\/]/, '');
}

CoberturaReport.prototype.onStart = function(root, context) {
    this.cw = context.writer.writeFile(this.file);
    this.xml = context.getXMLWriter(this.cw);
    this.writeRootStats(root);
};

CoberturaReport.prototype.onEnd = function() {
    this.xml.closeAll();
    this.cw.close();
};

CoberturaReport.prototype.writeRootStats = function(node) {
    const metrics = node.getCoverageSummary();
    this.cw.println('<?xml version="1.0" ?>');
    this.cw.println(
        '<!DOCTYPE coverage SYSTEM "http://cobertura.sourceforge.net/xml/coverage-04.dtd">'
    );
    this.xml.openTag('coverage', {
        'lines-valid': metrics.lines.total,
        'lines-covered': metrics.lines.covered,
        'line-rate': metrics.lines.pct / 100.0,
        'branches-valid': metrics.branches.total,
        'branches-covered': metrics.branches.covered,
        'branch-rate': metrics.branches.pct / 100.0,
        timestamp: Date.now().toString(),
        complexity: '0',
        version: '0.1'
    });
    this.xml.openTag('sources');
    this.xml.inlineTag('source', null, this.projectRoot);
    this.xml.closeTag('sources');
    this.xml.openTag('packages');
};

CoberturaReport.prototype.onSummary = function(node) {
    if (node.isRoot()) {
        return;
    }
    const metrics = node.getCoverageSummary(true);
    if (!metrics) {
        return;
    }
    this.xml.openTag('package', {
        name: asJavaPackage(node),
        'line-rate': metrics.lines.pct / 100.0,
        'branch-rate': metrics.branches.pct / 100.0
    });
    this.xml.openTag('classes');
};

CoberturaReport.prototype.onSummaryEnd = function(node) {
    if (node.isRoot()) {
        return;
    }
    this.xml.closeTag('classes');
    this.xml.closeTag('package');
};

CoberturaReport.prototype.onDetail = function(node) {
    const fileCoverage = node.getFileCoverage();
    const metrics = node.getCoverageSummary();
    const branchByLine = fileCoverage.getBranchCoverageByLine();

    this.xml.openTag('class', {
        name: asClassName(node),
        filename: path.relative(this.projectRoot, fileCoverage.path),
        'line-rate': metrics.lines.pct / 100.0,
        'branch-rate': metrics.branches.pct / 100.0
    });

    this.xml.openTag('methods');
    const fnMap = fileCoverage.fnMap;
    Object.keys(fnMap).forEach(k => {
        const name = fnMap[k].name;
        const hits = fileCoverage.f[k];
        this.xml.openTag('method', {
            name,
            hits,
            signature: '()V' //fake out a no-args void return
        });
        this.xml.openTag('lines');
        //Add the function definition line and hits so that jenkins cobertura plugin records method hits
        this.xml.inlineTag('line', {
            number: fnMap[k].decl.start.line,
            hits
        });
        this.xml.closeTag('lines');
        this.xml.closeTag('method');
    });
    this.xml.closeTag('methods');

    this.xml.openTag('lines');
    const lines = fileCoverage.getLineCoverage();
    Object.keys(lines).forEach(k => {
        const attrs = {
            number: k,
            hits: lines[k],
            branch: 'false'
        };
        const branchDetail = branchByLine[k];

        if (branchDetail) {
            attrs.branch = true;
            attrs['condition-coverage'] =
                branchDetail.coverage +
                '% (' +
                branchDetail.covered +
                '/' +
                branchDetail.total +
                ')';
        }
        this.xml.inlineTag('line', attrs);
    });

    this.xml.closeTag('lines');
    this.xml.closeTag('class');
};

module.exports = CoberturaReport;
