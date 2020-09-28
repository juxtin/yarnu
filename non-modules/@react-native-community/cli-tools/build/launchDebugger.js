"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _open() {
  const data = _interopRequireDefault(require("open"));

  _open = function () {
    return data;
  };

  return data;
}

function _child_process() {
  const data = require("child_process");

  _child_process = function () {
    return data;
  };

  return data;
}

var _logger = _interopRequireDefault(require("./logger"));

var _launchDefaultBrowser = _interopRequireDefault(require("./launchDefaultBrowser"));

function _chalk() {
  const data = _interopRequireDefault(require("chalk"));

  _chalk = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
function commandExistsUnixSync(commandName) {
  try {
    const stdout = (0, _child_process().execSync)(`command -v ${commandName} 2>/dev/null` + ` && { echo >&1 '${commandName} found'; exit 0; }`);
    return !!stdout;
  } catch (error) {
    return false;
  }
}

function getChromeAppName() {
  switch (process.platform) {
    case 'darwin':
      return 'google chrome';

    case 'win32':
      {
        const possibleDebuggingApps = ['chrome.exe', 'msedge.exe'];
        const output = (0, _child_process().execSync)('tasklist /NH /FO CSV /FI "SESSIONNAME ne Services"').toString();
        const runningProcesses = output.split('\n').map(line => line.replace(/^"|".*\r$/gm, ''));

        for (const app of possibleDebuggingApps) {
          if (runningProcesses.includes(app)) {
            return app;
          }
        }

        return 'chrome';
      }

    case 'linux':
      if (commandExistsUnixSync('google-chrome')) {
        return 'google-chrome';
      }

      if (commandExistsUnixSync('chromium-browser')) {
        return 'chromium-browser';
      }

      return 'chromium';

    default:
      return 'google-chrome';
  }
}

function launchChrome(url) {
  return (0, _open().default)(url, {
    app: [getChromeAppName()],
    wait: true
  });
}

async function launchDebugger(url) {
  try {
    await launchChrome(url);
  } catch (error) {
    _logger.default.debug(error);

    _logger.default.info(`For a better debugging experience please install Google Chrome from: ${_chalk().default.underline.dim('https://www.google.com/chrome/')}`);

    (0, _launchDefaultBrowser.default)(url);
  }
}

var _default = launchDebugger;
exports.default = _default;

//# sourceMappingURL=launchDebugger.js.map