var dns = require("dns");
var promisify = require("./_promisify.js");
var bind = function(c, f) { return f && f.bind(c); };
Object.defineProperties(module.exports, {
  ADDRCONFIG: { enumerable: true, value: dns.ADDRCONFIG },
  ADDRGETNETWORKPARAMS: { enumerable: true, value: dns.ADDRGETNETWORKPARAMS },
  BADFAMILY: { enumerable: true, value: dns.BADFAMILY },
  BADFLAGS: { enumerable: true, value: dns.BADFLAGS },
  BADHINTS: { enumerable: true, value: dns.BADHINTS },
  BADNAME: { enumerable: true, value: dns.BADNAME },
  BADQUERY: { enumerable: true, value: dns.BADQUERY },
  BADRESP: { enumerable: true, value: dns.BADRESP },
  BADSTR: { enumerable: true, value: dns.BADSTR },
  CANCELLED: { enumerable: true, value: dns.CANCELLED },
  CONNREFUSED: { enumerable: true, value: dns.CONNREFUSED },
  DESTRUCTION: { enumerable: true, value: dns.DESTRUCTION },
  EOF: { enumerable: true, value: dns.EOF },
  FILE: { enumerable: true, value: dns.FILE },
  FORMERR: { enumerable: true, value: dns.FORMERR },
  LOADIPHLPAPI: { enumerable: true, value: dns.LOADIPHLPAPI },
  NODATA: { enumerable: true, value: dns.NODATA },
  NOMEM: { enumerable: true, value: dns.NOMEM },
  NONAME: { enumerable: true, value: dns.NONAME },
  NOTFOUND: { enumerable: true, value: dns.NOTFOUND },
  NOTIMP: { enumerable: true, value: dns.NOTIMP },
  NOTINITIALIZED: { enumerable: true, value: dns.NOTINITIALIZED },
  REFUSED: { enumerable: true, value: dns.REFUSED },
  Resolver: { enumerable: true, value: dns.Resolver },
  SERVFAIL: { enumerable: true, value: dns.SERVFAIL },
  TIMEOUT: { enumerable: true, value: dns.TIMEOUT },
  V4MAPPED: { enumerable: true, value: dns.V4MAPPED },
  getServers: { enumerable: true, value: bind(dns, dns.getServers) },
  lookup: { enumerable: true, value: promisify(dns, dns.lookup, 1) },
  lookupService: { enumerable: true, value: promisify(dns, dns.lookupService, 2, {"pattern":["hostname","service"]}) },
  resolve: { enumerable: true, value: promisify(dns, dns.resolve, 1) },
  resolve4: { enumerable: true, value: promisify(dns, dns.resolve4, 1) },
  resolve6: { enumerable: true, value: promisify(dns, dns.resolve6, 1) },
  resolveAny: { enumerable: true, value: promisify(dns, dns.resolveAny, 1) },
  resolveCname: { enumerable: true, value: promisify(dns, dns.resolveCname, 1) },
  resolveMx: { enumerable: true, value: promisify(dns, dns.resolveMx, 1) },
  resolveNaptr: { enumerable: true, value: promisify(dns, dns.resolveNaptr, 1) },
  resolveNs: { enumerable: true, value: promisify(dns, dns.resolveNs, 1) },
  resolvePtr: { enumerable: true, value: promisify(dns, dns.resolvePtr, 1) },
  resolveSoa: { enumerable: true, value: promisify(dns, dns.resolveSoa, 1) },
  resolveSrv: { enumerable: true, value: promisify(dns, dns.resolveSrv, 1) },
  resolveTxt: { enumerable: true, value: promisify(dns, dns.resolveTxt, 1) },
  reverse: { enumerable: true, value: promisify(dns, dns.reverse, 1) },
  setServers: { enumerable: true, value: bind(dns, dns.setServers) },
});