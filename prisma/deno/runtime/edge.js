"use strict";
var Hc = Object.create;
var lr = Object.defineProperty;
var Qc = Object.getOwnPropertyDescriptor;
var Kc = Object.getOwnPropertyNames;
var Yc = Object.getPrototypeOf, Zc = Object.prototype.hasOwnProperty;
var u = (e, t) => lr(e, "name", { value: t, configurable: !0 });
var fr = (e, t) => () => (e && (t = e(e = 0)), t);
var H = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  oo = (e, t) => {
    for (var r in t) lr(e, r, { get: t[r], enumerable: !0 });
  },
  Ui = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function") {
      for (let o of Kc(t)) {
        !Zc.call(e, o) && o !== r &&
          lr(e, o, {
            get: () => t[o],
            enumerable: !(n = Qc(t, o)) || n.enumerable,
          });
      }
    }
    return e;
  };
var Z = (
    e,
    t,
    r,
  ) => (r = e != null ? Hc(Yc(e)) : {},
    Ui(
      t || !e || !e.__esModule
        ? lr(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )),
  Vi = (e) => Ui(lr({}, "__esModule", { value: !0 }), e);
function L(e) {
  return () => e;
}
function Ce() {
  return v;
}
var Xc,
  v,
  m = fr(() => {
    "use strict";
    u(L, "noop");
    Xc = Promise.resolve();
    u(Ce, "getProcess");
    v = {
      abort: L(void 0),
      addListener: L(Ce()),
      allowedNodeEnvironmentFlags: new Set(),
      arch: "x64",
      argv: ["/bin/node"],
      argv0: "node",
      chdir: L(void 0),
      config: {
        target_defaults: {
          cflags: [],
          default_configuration: "",
          defines: [],
          include_dirs: [],
          libraries: [],
        },
        variables: {
          clang: 0,
          host_arch: "x64",
          node_install_npm: !1,
          node_install_waf: !1,
          node_prefix: "",
          node_shared_openssl: !1,
          node_shared_v8: !1,
          node_shared_zlib: !1,
          node_use_dtrace: !1,
          node_use_etw: !1,
          node_use_openssl: !1,
          target_arch: "x64",
          v8_no_strict_aliasing: 0,
          v8_use_snapshot: !1,
          visibility: "",
        },
      },
      connected: !1,
      cpuUsage: () => ({ user: 0, system: 0 }),
      cwd: () => "/",
      debugPort: 0,
      disconnect: L(void 0),
      domain: {
        run: L(void 0),
        add: L(void 0),
        remove: L(void 0),
        bind: L(void 0),
        intercept: L(void 0),
        ...Ce(),
      },
      emit: L(Ce()),
      emitWarning: L(void 0),
      env: {},
      eventNames: () => [],
      execArgv: [],
      execPath: "/",
      exit: L(void 0),
      features: {
        inspector: !1,
        debug: !1,
        uv: !1,
        ipv6: !1,
        tls_alpn: !1,
        tls_sni: !1,
        tls_ocsp: !1,
        tls: !1,
      },
      getMaxListeners: L(0),
      getegid: L(0),
      geteuid: L(0),
      getgid: L(0),
      getgroups: L([]),
      getuid: L(0),
      hasUncaughtExceptionCaptureCallback: L(!1),
      hrtime: L([0, 0]),
      platform: "linux",
      kill: L(!0),
      listenerCount: L(0),
      listeners: L([]),
      memoryUsage: L({
        arrayBuffers: 0,
        external: 0,
        heapTotal: 0,
        heapUsed: 0,
        rss: 0,
      }),
      nextTick: (e, ...t) => {
        Xc.then(() => e(...t)).catch((r) => {
          setTimeout(() => {
            throw r;
          }, 0);
        });
      },
      off: L(Ce()),
      on: L(Ce()),
      once: L(Ce()),
      openStdin: L({}),
      pid: 0,
      ppid: 0,
      prependListener: L(Ce()),
      prependOnceListener: L(Ce()),
      rawListeners: L([]),
      release: { name: "node" },
      removeAllListeners: L(Ce()),
      removeListener: L(Ce()),
      resourceUsage: L({
        fsRead: 0,
        fsWrite: 0,
        involuntaryContextSwitches: 0,
        ipcReceived: 0,
        ipcSent: 0,
        majorPageFault: 0,
        maxRSS: 0,
        minorPageFault: 0,
        sharedMemorySize: 0,
        signalsCount: 0,
        swappedOut: 0,
        systemCPUTime: 0,
        unsharedDataSize: 0,
        unsharedStackSize: 0,
        userCPUTime: 0,
        voluntaryContextSwitches: 0,
      }),
      setMaxListeners: L(Ce()),
      setUncaughtExceptionCaptureCallback: L(void 0),
      setegid: L(void 0),
      seteuid: L(void 0),
      setgid: L(void 0),
      setgroups: L(void 0),
      setuid: L(void 0),
      stderr: { fd: 2 },
      stdin: { fd: 0 },
      stdout: { fd: 1 },
      title: "node",
      traceDeprecation: !1,
      umask: L(0),
      uptime: L(0),
      version: "",
      versions: {
        http_parser: "",
        node: "",
        v8: "",
        ares: "",
        uv: "",
        zlib: "",
        modules: "",
        openssl: "",
      },
    };
  });
var E,
  g = fr(() => {
    "use strict";
    E = u(() => {}, "fn");
    E.prototype = E;
  });
var us = H((Nt) => {
  "use strict";
  d();
  m();
  g();
  var Hi = u(
      (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      "q",
    ),
    el = Hi((e) => {
      "use strict";
      e.byteLength = c, e.toByteArray = f, e.fromByteArray = y;
      var t = [],
        r = [],
        n = typeof Uint8Array < "u" ? Uint8Array : Array,
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      for (i = 0, s = o.length; i < s; ++i) t[i] = o[i], r[o.charCodeAt(i)] = i;
      var i, s;
      r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63;
      function a(w) {
        var b = w.length;
        if (b % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }
        var A = w.indexOf("=");
        A === -1 && (A = b);
        var P = A === b ? 0 : 4 - A % 4;
        return [A, P];
      }
      u(a, "j");
      function c(w) {
        var b = a(w), A = b[0], P = b[1];
        return (A + P) * 3 / 4 - P;
      }
      u(c, "sr");
      function l(w, b, A) {
        return (b + A) * 3 / 4 - A;
      }
      u(l, "lr");
      function f(w) {
        var b,
          A = a(w),
          P = A[0],
          T = A[1],
          S = new n(l(w, P, T)),
          M = 0,
          _ = T > 0 ? P - 4 : P,
          R;
        for (R = 0; R < _; R += 4) {
          b = r[w.charCodeAt(R)] << 18 | r[w.charCodeAt(R + 1)] << 12 |
            r[w.charCodeAt(R + 2)] << 6 | r[w.charCodeAt(R + 3)],
            S[M++] = b >> 16 & 255,
            S[M++] = b >> 8 & 255,
            S[M++] = b & 255;
        }
        return T === 2 &&
          (b = r[w.charCodeAt(R)] << 2 | r[w.charCodeAt(R + 1)] >> 4,
            S[M++] = b & 255),
          T === 1 &&
          (b = r[w.charCodeAt(R)] << 10 | r[w.charCodeAt(R + 1)] << 4 |
            r[w.charCodeAt(R + 2)] >> 2,
            S[M++] = b >> 8 & 255,
            S[M++] = b & 255),
          S;
      }
      u(f, "ar");
      function p(w) {
        return t[w >> 18 & 63] + t[w >> 12 & 63] + t[w >> 6 & 63] + t[w & 63];
      }
      u(p, "yr");
      function h(w, b, A) {
        for (var P, T = [], S = b; S < A; S += 3) {
          P = (w[S] << 16 & 16711680) + (w[S + 1] << 8 & 65280) +
            (w[S + 2] & 255), T.push(p(P));
        }
        return T.join("");
      }
      u(h, "wr");
      function y(w) {
        for (
          var b, A = w.length, P = A % 3, T = [], S = 16383, M = 0, _ = A - P;
          M < _;
          M += S
        ) {
          T.push(h(w, M, M + S > _ ? _ : M + S));
        }
        return P === 1
          ? (b = w[A - 1], T.push(t[b >> 2] + t[b << 4 & 63] + "=="))
          : P === 2 &&
            (b = (w[A - 2] << 8) + w[A - 1],
              T.push(t[b >> 10] + t[b >> 4 & 63] + t[b << 2 & 63] + "=")),
          T.join("");
      }
      u(y, "xr");
    }),
    tl = Hi((e) => {
      e.read = function (t, r, n, o, i) {
        var s,
          a,
          c = i * 8 - o - 1,
          l = (1 << c) - 1,
          f = l >> 1,
          p = -7,
          h = n ? i - 1 : 0,
          y = n ? -1 : 1,
          w = t[r + h];
        for (
          h += y, s = w & (1 << -p) - 1, w >>= -p, p += c;
          p > 0;
          s = s * 256 + t[r + h], h += y, p -= 8
        );
        for (
          a = s & (1 << -p) - 1, s >>= -p, p += o;
          p > 0;
          a = a * 256 + t[r + h], h += y, p -= 8
        );
        if (s === 0) s = 1 - f;
        else {
          if (s === l) return a ? NaN : (w ? -1 : 1) * (1 / 0);
          a = a + Math.pow(2, o), s = s - f;
        }
        return (w ? -1 : 1) * a * Math.pow(2, s - o);
      },
        e.write = function (t, r, n, o, i, s) {
          var a,
            c,
            l,
            f = s * 8 - i - 1,
            p = (1 << f) - 1,
            h = p >> 1,
            y = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            w = o ? 0 : s - 1,
            b = o ? 1 : -1,
            A = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (
            r = Math.abs(r),
              isNaN(r) || r === 1 / 0
                ? (c = isNaN(r) ? 1 : 0, a = p)
                : (a = Math.floor(Math.log(r) / Math.LN2),
                  r * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2),
                  a + h >= 1 ? r += y / l : r += y * Math.pow(2, 1 - h),
                  r * l >= 2 && (a++, l /= 2),
                  a + h >= p
                    ? (c = 0, a = p)
                    : a + h >= 1
                    ? (c = (r * l - 1) * Math.pow(2, i), a = a + h)
                    : (c = r * Math.pow(2, h - 1) * Math.pow(2, i), a = 0));
            i >= 8;
            t[n + w] = c & 255, w += b, c /= 256, i -= 8
          );
          for (
            a = a << i | c, f += i;
            f > 0;
            t[n + w] = a & 255, w += b, a /= 256, f -= 8
          );
          t[n + w - b] |= A * 128;
        };
    }),
    io = el(),
    Dt = tl(),
    Gi = typeof Symbol == "function" && typeof Symbol.for == "function"
      ? Symbol.for("nodejs.util.inspect.custom")
      : null;
  Nt.Buffer = O;
  Nt.SlowBuffer = al;
  Nt.INSPECT_MAX_BYTES = 50;
  var tn = 2147483647;
  Nt.kMaxLength = tn;
  O.TYPED_ARRAY_SUPPORT = rl();
  !O.TYPED_ARRAY_SUPPORT && typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    );
  function rl() {
    try {
      let e = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(e, t),
        e.foo() === 42;
    } catch (e) {
      return !1;
    }
  }
  u(rl, "Br");
  Object.defineProperty(O.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (O.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(O.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (O.isBuffer(this)) return this.byteOffset;
    },
  });
  function Qe(e) {
    if (e > tn) {
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    }
    let t = new Uint8Array(e);
    return Object.setPrototypeOf(t, O.prototype), t;
  }
  u(Qe, "d");
  function O(e, t, r) {
    if (typeof e == "number") {
      if (typeof t == "string") {
        throw new TypeError(
          'The "string" argument must be of type string. Received type number',
        );
      }
      return uo(e);
    }
    return Qi(e, t, r);
  }
  u(O, "h");
  O.poolSize = 8192;
  function Qi(e, t, r) {
    if (typeof e == "string") return ol(e, t);
    if (ArrayBuffer.isView(e)) return il(e);
    if (e == null) {
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof e,
      );
    }
    if (
      qe(e, ArrayBuffer) || e && qe(e.buffer, ArrayBuffer) ||
      typeof SharedArrayBuffer < "u" &&
        (qe(e, SharedArrayBuffer) || e && qe(e.buffer, SharedArrayBuffer))
    ) {
      return Yi(e, t, r);
    }
    if (typeof e == "number") {
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number',
      );
    }
    let n = e.valueOf && e.valueOf();
    if (n != null && n !== e) return O.from(n, t, r);
    let o = sl(e);
    if (o) return o;
    if (
      typeof Symbol < "u" && Symbol.toPrimitive != null &&
      typeof e[Symbol.toPrimitive] == "function"
    ) {
      return O.from(e[Symbol.toPrimitive]("string"), t, r);
    }
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof e,
    );
  }
  u(Qi, "Z");
  O.from = function (e, t, r) {
    return Qi(e, t, r);
  };
  Object.setPrototypeOf(O.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(O, Uint8Array);
  function Ki(e) {
    if (typeof e != "number") {
      throw new TypeError('"size" argument must be of type number');
    }
    if (e < 0) {
      throw new RangeError(
        'The value "' + e + '" is invalid for option "size"',
      );
    }
  }
  u(Ki, "Q");
  function nl(e, t, r) {
    return Ki(e),
      e <= 0
        ? Qe(e)
        : t !== void 0
        ? typeof r == "string" ? Qe(e).fill(t, r) : Qe(e).fill(t)
        : Qe(e);
  }
  u(nl, "Er");
  O.alloc = function (e, t, r) {
    return nl(e, t, r);
  };
  function uo(e) {
    return Ki(e), Qe(e < 0 ? 0 : co(e) | 0);
  }
  u(uo, "P");
  O.allocUnsafe = function (e) {
    return uo(e);
  };
  O.allocUnsafeSlow = function (e) {
    return uo(e);
  };
  function ol(e, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !O.isEncoding(t)) {
      throw new TypeError("Unknown encoding: " + t);
    }
    let r = Zi(e, t) | 0, n = Qe(r), o = n.write(e, t);
    return o !== r && (n = n.slice(0, o)), n;
  }
  u(ol, "dr");
  function so(e) {
    let t = e.length < 0 ? 0 : co(e.length) | 0, r = Qe(t);
    for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
    return r;
  }
  u(so, "D");
  function il(e) {
    if (qe(e, Uint8Array)) {
      let t = new Uint8Array(e);
      return Yi(t.buffer, t.byteOffset, t.byteLength);
    }
    return so(e);
  }
  u(il, "gr");
  function Yi(e, t, r) {
    if (t < 0 || e.byteLength < t) {
      throw new RangeError('"offset" is outside of buffer bounds');
    }
    if (e.byteLength < t + (r || 0)) {
      throw new RangeError('"length" is outside of buffer bounds');
    }
    let n;
    return t === void 0 && r === void 0
      ? n = new Uint8Array(e)
      : r === void 0
      ? n = new Uint8Array(e, t)
      : n = new Uint8Array(e, t, r),
      Object.setPrototypeOf(n, O.prototype),
      n;
  }
  u(Yi, "$");
  function sl(e) {
    if (O.isBuffer(e)) {
      let t = co(e.length) | 0, r = Qe(t);
      return r.length === 0 || e.copy(r, 0, 0, t), r;
    }
    if (e.length !== void 0) {
      return typeof e.length != "number" || fo(e.length) ? Qe(0) : so(e);
    }
    if (e.type === "Buffer" && Array.isArray(e.data)) return so(e.data);
  }
  u(sl, "mr");
  function co(e) {
    if (e >= tn) {
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          tn.toString(16) + " bytes",
      );
    }
    return e | 0;
  }
  u(co, "O");
  function al(e) {
    return +e != e && (e = 0), O.alloc(+e);
  }
  u(al, "Ir");
  O.isBuffer = function (e) {
    return e != null && e._isBuffer === !0 && e !== O.prototype;
  };
  O.compare = function (e, t) {
    if (
      qe(e, Uint8Array) && (e = O.from(e, e.offset, e.byteLength)),
        qe(t, Uint8Array) && (t = O.from(t, t.offset, t.byteLength)),
        !O.isBuffer(e) || !O.isBuffer(t)
    ) {
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    }
    if (e === t) return 0;
    let r = e.length, n = t.length;
    for (let o = 0, i = Math.min(r, n); o < i; ++o) {
      if (e[o] !== t[o]) {
        r = e[o], n = t[o];
        break;
      }
    }
    return r < n ? -1 : n < r ? 1 : 0;
  };
  O.isEncoding = function (e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  O.concat = function (e, t) {
    if (!Array.isArray(e)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    if (e.length === 0) return O.alloc(0);
    let r;
    if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
    let n = O.allocUnsafe(t), o = 0;
    for (r = 0; r < e.length; ++r) {
      let i = e[r];
      if (qe(i, Uint8Array)) {
        o + i.length > n.length
          ? (O.isBuffer(i) || (i = O.from(i)), i.copy(n, o))
          : Uint8Array.prototype.set.call(n, i, o);
      } else if (O.isBuffer(i)) i.copy(n, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += i.length;
    }
    return n;
  };
  function Zi(e, t) {
    if (O.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || qe(e, ArrayBuffer)) return e.byteLength;
    if (typeof e != "string") {
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof e,
      );
    }
    let r = e.length, n = arguments.length > 2 && arguments[2] === !0;
    if (!n && r === 0) return 0;
    let o = !1;
    for (;;) {
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;
        case "utf8":
        case "utf-8":
          return ao(e).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return r * 2;
        case "hex":
          return r >>> 1;
        case "base64":
          return as(e).length;
        default:
          if (o) return n ? -1 : ao(e).length;
          t = ("" + t).toLowerCase(), o = !0;
      }
    }
  }
  u(Zi, "v");
  O.byteLength = Zi;
  function ul(e, t, r) {
    let n = !1;
    if (
      (t === void 0 || t < 0) && (t = 0),
        t > this.length ||
        ((r === void 0 || r > this.length) && (r = this.length), r <= 0) ||
        (r >>>= 0, t >>>= 0, r <= t)
    ) {
      return "";
    }
    for (e || (e = "utf8");;) {
      switch (e) {
        case "hex":
          return bl(this, t, r);
        case "utf8":
        case "utf-8":
          return es(this, t, r);
        case "ascii":
          return hl(this, t, r);
        case "latin1":
        case "binary":
          return yl(this, t, r);
        case "base64":
          return gl(this, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return wl(this, t, r);
        default:
          if (n) throw new TypeError("Unknown encoding: " + e);
          e = (e + "").toLowerCase(), n = !0;
      }
    }
  }
  u(ul, "Fr");
  O.prototype._isBuffer = !0;
  function Tt(e, t, r) {
    let n = e[t];
    e[t] = e[r], e[r] = n;
  }
  u(Tt, "I");
  O.prototype.swap16 = function () {
    let e = this.length;
    if (e % 2 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    }
    for (let t = 0; t < e; t += 2) Tt(this, t, t + 1);
    return this;
  };
  O.prototype.swap32 = function () {
    let e = this.length;
    if (e % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let t = 0; t < e; t += 4) Tt(this, t, t + 3), Tt(this, t + 1, t + 2);
    return this;
  };
  O.prototype.swap64 = function () {
    let e = this.length;
    if (e % 8 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    }
    for (let t = 0; t < e; t += 8) {
      Tt(this, t, t + 7),
        Tt(this, t + 1, t + 6),
        Tt(this, t + 2, t + 5),
        Tt(this, t + 3, t + 4);
    }
    return this;
  };
  O.prototype.toString = function () {
    let e = this.length;
    return e === 0
      ? ""
      : arguments.length === 0
      ? es(this, 0, e)
      : ul.apply(this, arguments);
  };
  O.prototype.toLocaleString = O.prototype.toString;
  O.prototype.equals = function (e) {
    if (!O.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : O.compare(this, e) === 0;
  };
  O.prototype.inspect = function () {
    let e = "", t = Nt.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(),
      this.length > t && (e += " ... "),
      "<Buffer " + e + ">";
  };
  Gi && (O.prototype[Gi] = O.prototype.inspect);
  O.prototype.compare = function (e, t, r, n, o) {
    if (
      qe(e, Uint8Array) && (e = O.from(e, e.offset, e.byteLength)),
        !O.isBuffer(e)
    ) {
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof e,
      );
    }
    if (
      t === void 0 && (t = 0),
        r === void 0 && (r = e ? e.length : 0),
        n === void 0 && (n = 0),
        o === void 0 && (o = this.length),
        t < 0 || r > e.length || n < 0 || o > this.length
    ) {
      throw new RangeError("out of range index");
    }
    if (n >= o && t >= r) return 0;
    if (n >= o) return -1;
    if (t >= r) return 1;
    if (t >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === e) return 0;
    let i = o - n,
      s = r - t,
      a = Math.min(i, s),
      c = this.slice(n, o),
      l = e.slice(t, r);
    for (let f = 0; f < a; ++f) {
      if (c[f] !== l[f]) {
        i = c[f], s = l[f];
        break;
      }
    }
    return i < s ? -1 : s < i ? 1 : 0;
  };
  function Xi(e, t, r, n, o) {
    if (e.length === 0) return -1;
    if (
      typeof r == "string"
        ? (n = r, r = 0)
        : r > 2147483647
        ? r = 2147483647
        : r < -2147483648 && (r = -2147483648),
        r = +r,
        fo(r) && (r = o ? 0 : e.length - 1),
        r < 0 && (r = e.length + r),
        r >= e.length
    ) {
      if (o) return -1;
      r = e.length - 1;
    } else if (r < 0) {
      if (o) r = 0;
      else return -1;
    }
    if (typeof t == "string" && (t = O.from(t, n)), O.isBuffer(t)) {
      return t.length === 0 ? -1 : zi(e, t, r, n, o);
    }
    if (typeof t == "number") {
      return t = t & 255,
        typeof Uint8Array.prototype.indexOf == "function"
          ? o
            ? Uint8Array.prototype.indexOf.call(e, t, r)
            : Uint8Array.prototype.lastIndexOf.call(e, t, r)
          : zi(e, [t], r, n, o);
    }
    throw new TypeError("val must be string, number or Buffer");
  }
  u(Xi, "rr");
  function zi(e, t, r, n, o) {
    let i = 1, s = e.length, a = t.length;
    if (
      n !== void 0 &&
      (n = String(n).toLowerCase(),
        n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (e.length < 2 || t.length < 2) return -1;
      i = 2, s /= 2, a /= 2, r /= 2;
    }
    function c(f, p) {
      return i === 1 ? f[p] : f.readUInt16BE(p * i);
    }
    u(c, "c");
    let l;
    if (o) {
      let f = -1;
      for (l = r; l < s; l++) {
        if (c(e, l) === c(t, f === -1 ? 0 : l - f)) {
          if (f === -1 && (f = l), l - f + 1 === a) {
            return f * i;
          }
        } else f !== -1 && (l -= l - f), f = -1;
      }
    } else {
      for (r + a > s && (r = s - a), l = r; l >= 0; l--) {
        let f = !0;
        for (let p = 0; p < a; p++) {
          if (c(e, l + p) !== c(t, p)) {
            f = !1;
            break;
          }
        }
        if (f) return l;
      }
    }
    return -1;
  }
  u(zi, "z");
  O.prototype.includes = function (e, t, r) {
    return this.indexOf(e, t, r) !== -1;
  };
  O.prototype.indexOf = function (e, t, r) {
    return Xi(this, e, t, r, !0);
  };
  O.prototype.lastIndexOf = function (e, t, r) {
    return Xi(this, e, t, r, !1);
  };
  function cl(e, t, r, n) {
    r = Number(r) || 0;
    let o = e.length - r;
    n ? (n = Number(n), n > o && (n = o)) : n = o;
    let i = t.length;
    n > i / 2 && (n = i / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let a = parseInt(t.substr(s * 2, 2), 16);
      if (fo(a)) return s;
      e[r + s] = a;
    }
    return s;
  }
  u(cl, "Ar");
  function ll(e, t, r, n) {
    return rn(ao(t, e.length - r), e, r, n);
  }
  u(ll, "Ur");
  function fl(e, t, r, n) {
    return rn(Al(t), e, r, n);
  }
  u(fl, "Rr");
  function pl(e, t, r, n) {
    return rn(as(t), e, r, n);
  }
  u(pl, "Tr");
  function ml(e, t, r, n) {
    return rn(Tl(t, e.length - r), e, r, n);
  }
  u(ml, "Cr");
  O.prototype.write = function (e, t, r, n) {
    if (t === void 0) n = "utf8", r = this.length, t = 0;
    else if (r === void 0 && typeof t == "string") {
      n = t, r = this.length, t = 0;
    } else if (isFinite(t)) {
      t = t >>> 0,
        isFinite(r)
          ? (r = r >>> 0, n === void 0 && (n = "utf8"))
          : (n = r, r = void 0);
    } else {
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported",
      );
    }
    let o = this.length - t;
    if (
      (r === void 0 || r > o) && (r = o),
        e.length > 0 && (r < 0 || t < 0) || t > this.length
    ) {
      throw new RangeError("Attempt to write outside buffer bounds");
    }
    n || (n = "utf8");
    let i = !1;
    for (;;) {
      switch (n) {
        case "hex":
          return cl(this, e, t, r);
        case "utf8":
        case "utf-8":
          return ll(this, e, t, r);
        case "ascii":
        case "latin1":
        case "binary":
          return fl(this, e, t, r);
        case "base64":
          return pl(this, e, t, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ml(this, e, t, r);
        default:
          if (i) throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), i = !0;
      }
    }
  };
  O.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function gl(e, t, r) {
    return t === 0 && r === e.length
      ? io.fromByteArray(e)
      : io.fromByteArray(e.slice(t, r));
  }
  u(gl, "Sr");
  function es(e, t, r) {
    r = Math.min(e.length, r);
    let n = [], o = t;
    for (; o < r;) {
      let i = e[o], s = null, a = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
      if (o + a <= r) {
        let c, l, f, p;
        switch (a) {
          case 1:
            i < 128 && (s = i);
            break;
          case 2:
            c = e[o + 1],
              (c & 192) === 128 &&
              (p = (i & 31) << 6 | c & 63, p > 127 && (s = p));
            break;
          case 3:
            c = e[o + 1],
              l = e[o + 2],
              (c & 192) === 128 && (l & 192) === 128 &&
              (p = (i & 15) << 12 | (c & 63) << 6 | l & 63,
                p > 2047 && (p < 55296 || p > 57343) && (s = p));
            break;
          case 4:
            c = e[o + 1],
              l = e[o + 2],
              f = e[o + 3],
              (c & 192) === 128 && (l & 192) === 128 && (f & 192) === 128 &&
              (p = (i & 15) << 18 | (c & 63) << 12 | (l & 63) << 6 | f & 63,
                p > 65535 && p < 1114112 && (s = p));
        }
      }
      s === null ? (s = 65533, a = 1) : s > 65535 &&
        (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023),
        n.push(s),
        o += a;
    }
    return dl(n);
  }
  u(es, "tr");
  var Ji = 4096;
  function dl(e) {
    let t = e.length;
    if (t <= Ji) return String.fromCharCode.apply(String, e);
    let r = "", n = 0;
    for (; n < t;) r += String.fromCharCode.apply(String, e.slice(n, n += Ji));
    return r;
  }
  u(dl, "_r");
  function hl(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o] & 127);
    return n;
  }
  u(hl, "Lr");
  function yl(e, t, r) {
    let n = "";
    r = Math.min(e.length, r);
    for (let o = t; o < r; ++o) n += String.fromCharCode(e[o]);
    return n;
  }
  u(yl, "Nr");
  function bl(e, t, r) {
    let n = e.length;
    (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
    let o = "";
    for (let i = t; i < r; ++i) o += Ml[e[i]];
    return o;
  }
  u(bl, "Mr");
  function wl(e, t, r) {
    let n = e.slice(t, r), o = "";
    for (let i = 0; i < n.length - 1; i += 2) {
      o += String.fromCharCode(n[i] + n[i + 1] * 256);
    }
    return o;
  }
  u(wl, "kr");
  O.prototype.slice = function (e, t) {
    let r = this.length;
    e = ~~e,
      t = t === void 0 ? r : ~~t,
      e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r),
      t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r),
      t < e && (t = e);
    let n = this.subarray(e, t);
    return Object.setPrototypeOf(n, O.prototype), n;
  };
  function oe(e, t, r) {
    if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
    if (e + t > r) {
      throw new RangeError("Trying to access beyond buffer length");
    }
  }
  u(oe, "a");
  O.prototype.readUintLE = O.prototype.readUIntLE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || oe(e, t, this.length);
    let n = this[e], o = 1, i = 0;
    for (; ++i < t && (o *= 256);) n += this[e + i] * o;
    return n;
  };
  O.prototype.readUintBE = O.prototype.readUIntBE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || oe(e, t, this.length);
    let n = this[e + --t], o = 1;
    for (; t > 0 && (o *= 256);) n += this[e + --t] * o;
    return n;
  };
  O.prototype.readUint8 = O.prototype.readUInt8 = function (e, t) {
    return e = e >>> 0, t || oe(e, 1, this.length), this[e];
  };
  O.prototype.readUint16LE = O.prototype.readUInt16LE = function (e, t) {
    return e = e >>> 0, t || oe(e, 2, this.length), this[e] | this[e + 1] << 8;
  };
  O.prototype.readUint16BE = O.prototype.readUInt16BE = function (e, t) {
    return e = e >>> 0, t || oe(e, 2, this.length), this[e] << 8 | this[e + 1];
  };
  O.prototype.readUint32LE = O.prototype.readUInt32LE = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 4, this.length),
      (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  };
  O.prototype.readUint32BE = O.prototype.readUInt32BE = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 4, this.length),
      this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  };
  O.prototype.readBigUInt64LE = ot(function (e) {
    e = e >>> 0, kt(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && pr(e, this.length - 8);
    let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      o = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
    return BigInt(n) + (BigInt(o) << BigInt(32));
  });
  O.prototype.readBigUInt64BE = ot(function (e) {
    e = e >>> 0, kt(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && pr(e, this.length - 8);
    let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e],
      o = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
    return (BigInt(n) << BigInt(32)) + BigInt(o);
  });
  O.prototype.readIntLE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || oe(e, t, this.length);
    let n = this[e], o = 1, i = 0;
    for (; ++i < t && (o *= 256);) n += this[e + i] * o;
    return o *= 128, n >= o && (n -= Math.pow(2, 8 * t)), n;
  };
  O.prototype.readIntBE = function (e, t, r) {
    e = e >>> 0, t = t >>> 0, r || oe(e, t, this.length);
    let n = t, o = 1, i = this[e + --n];
    for (; n > 0 && (o *= 256);) i += this[e + --n] * o;
    return o *= 128, i >= o && (i -= Math.pow(2, 8 * t)), i;
  };
  O.prototype.readInt8 = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 1, this.length),
      this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  };
  O.prototype.readInt16LE = function (e, t) {
    e = e >>> 0, t || oe(e, 2, this.length);
    let r = this[e] | this[e + 1] << 8;
    return r & 32768 ? r | 4294901760 : r;
  };
  O.prototype.readInt16BE = function (e, t) {
    e = e >>> 0, t || oe(e, 2, this.length);
    let r = this[e + 1] | this[e] << 8;
    return r & 32768 ? r | 4294901760 : r;
  };
  O.prototype.readInt32LE = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 4, this.length),
      this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  };
  O.prototype.readInt32BE = function (e, t) {
    return e = e >>> 0,
      t || oe(e, 4, this.length),
      this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  };
  O.prototype.readBigInt64LE = ot(function (e) {
    e = e >>> 0, kt(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && pr(e, this.length - 8);
    let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 +
      (r << 24);
    return (BigInt(n) << BigInt(32)) +
      BigInt(
        t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24,
      );
  });
  O.prototype.readBigInt64BE = ot(function (e) {
    e = e >>> 0, kt(e, "offset");
    let t = this[e], r = this[e + 7];
    (t === void 0 || r === void 0) && pr(e, this.length - 8);
    let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (BigInt(n) << BigInt(32)) +
      BigInt(
        this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r,
      );
  });
  O.prototype.readFloatLE = function (e, t) {
    return e = e >>> 0, t || oe(e, 4, this.length), Dt.read(this, e, !0, 23, 4);
  };
  O.prototype.readFloatBE = function (e, t) {
    return e = e >>> 0, t || oe(e, 4, this.length), Dt.read(this, e, !1, 23, 4);
  };
  O.prototype.readDoubleLE = function (e, t) {
    return e = e >>> 0, t || oe(e, 8, this.length), Dt.read(this, e, !0, 52, 8);
  };
  O.prototype.readDoubleBE = function (e, t) {
    return e = e >>> 0, t || oe(e, 8, this.length), Dt.read(this, e, !1, 52, 8);
  };
  function we(e, t, r, n, o, i) {
    if (!O.isBuffer(e)) {
      throw new TypeError('"buffer" argument must be a Buffer instance');
    }
    if (t > o || t < i) {
      throw new RangeError('"value" argument is out of bounds');
    }
    if (r + n > e.length) throw new RangeError("Index out of range");
  }
  u(we, "y");
  O.prototype.writeUintLE = O.prototype.writeUIntLE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
      let s = Math.pow(2, 8 * r) - 1;
      we(this, e, t, r, s, 0);
    }
    let o = 1, i = 0;
    for (this[t] = e & 255; ++i < r && (o *= 256);) this[t + i] = e / o & 255;
    return t + r;
  };
  O.prototype.writeUintBE = O.prototype.writeUIntBE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
      let s = Math.pow(2, 8 * r) - 1;
      we(this, e, t, r, s, 0);
    }
    let o = r - 1, i = 1;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
      this[t + o] = e / i & 255;
    }
    return t + r;
  };
  O.prototype.writeUint8 = O.prototype.writeUInt8 = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 1, 255, 0),
      this[t] = e & 255,
      t + 1;
  };
  O.prototype.writeUint16LE = O.prototype.writeUInt16LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 2, 65535, 0),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      t + 2;
  };
  O.prototype.writeUint16BE = O.prototype.writeUInt16BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 2, 65535, 0),
      this[t] = e >>> 8,
      this[t + 1] = e & 255,
      t + 2;
  };
  O.prototype.writeUint32LE = O.prototype.writeUInt32LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 4, 4294967295, 0),
      this[t + 3] = e >>> 24,
      this[t + 2] = e >>> 16,
      this[t + 1] = e >>> 8,
      this[t] = e & 255,
      t + 4;
  };
  O.prototype.writeUint32BE = O.prototype.writeUInt32BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 4, 4294967295, 0),
      this[t] = e >>> 24,
      this[t + 1] = e >>> 16,
      this[t + 2] = e >>> 8,
      this[t + 3] = e & 255,
      t + 4;
  };
  function ts(e, t, r, n, o) {
    ss(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    e[r++] = i,
      i = i >> 8,
      e[r++] = i,
      i = i >> 8,
      e[r++] = i,
      i = i >> 8,
      e[r++] = i;
    let s = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      s = s >> 8,
      e[r++] = s,
      r;
  }
  u(ts, "ir");
  function rs(e, t, r, n, o) {
    ss(t, n, o, e, r, 7);
    let i = Number(t & BigInt(4294967295));
    e[r + 7] = i,
      i = i >> 8,
      e[r + 6] = i,
      i = i >> 8,
      e[r + 5] = i,
      i = i >> 8,
      e[r + 4] = i;
    let s = Number(t >> BigInt(32) & BigInt(4294967295));
    return e[r + 3] = s,
      s = s >> 8,
      e[r + 2] = s,
      s = s >> 8,
      e[r + 1] = s,
      s = s >> 8,
      e[r] = s,
      r + 8;
  }
  u(rs, "nr");
  O.prototype.writeBigUInt64LE = ot(function (e, t = 0) {
    return ts(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  O.prototype.writeBigUInt64BE = ot(function (e, t = 0) {
    return rs(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  O.prototype.writeIntLE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, !n) {
      let a = Math.pow(2, 8 * r - 1);
      we(this, e, t, r, a - 1, -a);
    }
    let o = 0, i = 1, s = 0;
    for (this[t] = e & 255; ++o < r && (i *= 256);) {
      e < 0 && s === 0 && this[t + o - 1] !== 0 && (s = 1),
        this[t + o] = (e / i >> 0) - s & 255;
    }
    return t + r;
  };
  O.prototype.writeIntBE = function (e, t, r, n) {
    if (e = +e, t = t >>> 0, !n) {
      let a = Math.pow(2, 8 * r - 1);
      we(this, e, t, r, a - 1, -a);
    }
    let o = r - 1, i = 1, s = 0;
    for (this[t + o] = e & 255; --o >= 0 && (i *= 256);) {
      e < 0 && s === 0 && this[t + o + 1] !== 0 && (s = 1),
        this[t + o] = (e / i >> 0) - s & 255;
    }
    return t + r;
  };
  O.prototype.writeInt8 = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 1, 127, -128),
      e < 0 && (e = 255 + e + 1),
      this[t] = e & 255,
      t + 1;
  };
  O.prototype.writeInt16LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 2, 32767, -32768),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      t + 2;
  };
  O.prototype.writeInt16BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 2, 32767, -32768),
      this[t] = e >>> 8,
      this[t + 1] = e & 255,
      t + 2;
  };
  O.prototype.writeInt32LE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 4, 2147483647, -2147483648),
      this[t] = e & 255,
      this[t + 1] = e >>> 8,
      this[t + 2] = e >>> 16,
      this[t + 3] = e >>> 24,
      t + 4;
  };
  O.prototype.writeInt32BE = function (e, t, r) {
    return e = +e,
      t = t >>> 0,
      r || we(this, e, t, 4, 2147483647, -2147483648),
      e < 0 && (e = 4294967295 + e + 1),
      this[t] = e >>> 24,
      this[t + 1] = e >>> 16,
      this[t + 2] = e >>> 8,
      this[t + 3] = e & 255,
      t + 4;
  };
  O.prototype.writeBigInt64LE = ot(function (e, t = 0) {
    return ts(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  O.prototype.writeBigInt64BE = ot(function (e, t = 0) {
    return rs(
      this,
      e,
      t,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  });
  function ns(e, t, r, n, o, i) {
    if (r + n > e.length) throw new RangeError("Index out of range");
    if (r < 0) throw new RangeError("Index out of range");
  }
  u(ns, "er");
  function os(e, t, r, n, o) {
    return t = +t,
      r = r >>> 0,
      o || ns(e, t, r, 4, 34028234663852886e22, -34028234663852886e22),
      Dt.write(e, t, r, n, 23, 4),
      r + 4;
  }
  u(os, "or");
  O.prototype.writeFloatLE = function (e, t, r) {
    return os(this, e, t, !0, r);
  };
  O.prototype.writeFloatBE = function (e, t, r) {
    return os(this, e, t, !1, r);
  };
  function is(e, t, r, n, o) {
    return t = +t,
      r = r >>> 0,
      o || ns(e, t, r, 8, 17976931348623157e292, -17976931348623157e292),
      Dt.write(e, t, r, n, 52, 8),
      r + 8;
  }
  u(is, "ur");
  O.prototype.writeDoubleLE = function (e, t, r) {
    return is(this, e, t, !0, r);
  };
  O.prototype.writeDoubleBE = function (e, t, r) {
    return is(this, e, t, !1, r);
  };
  O.prototype.copy = function (e, t, r, n) {
    if (!O.isBuffer(e)) throw new TypeError("argument should be a Buffer");
    if (
      r || (r = 0),
        !n && n !== 0 && (n = this.length),
        t >= e.length && (t = e.length),
        t || (t = 0),
        n > 0 && n < r && (n = r),
        n === r || e.length === 0 || this.length === 0
    ) {
      return 0;
    }
    if (t < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      e.length - t < n - r && (n = e.length - t + r);
    let o = n - r;
    return this === e && typeof Uint8Array.prototype.copyWithin == "function"
      ? this.copyWithin(t, r, n)
      : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
      o;
  };
  O.prototype.fill = function (e, t, r, n) {
    if (typeof e == "string") {
      if (
        typeof t == "string"
          ? (n = t, t = 0, r = this.length)
          : typeof r == "string" && (n = r, r = this.length),
          n !== void 0 && typeof n != "string"
      ) {
        throw new TypeError("encoding must be a string");
      }
      if (typeof n == "string" && !O.isEncoding(n)) {
        throw new TypeError("Unknown encoding: " + n);
      }
      if (e.length === 1) {
        let i = e.charCodeAt(0);
        (n === "utf8" && i < 128 || n === "latin1") && (e = i);
      }
    } else {
      typeof e == "number"
        ? e = e & 255
        : typeof e == "boolean" && (e = Number(e));
    }
    if (t < 0 || this.length < t || this.length < r) {
      throw new RangeError("Out of range index");
    }
    if (r <= t) return this;
    t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
    let o;
    if (typeof e == "number") for (o = t; o < r; ++o) this[o] = e;
    else {
      let i = O.isBuffer(e) ? e : O.from(e, n), s = i.length;
      if (s === 0) {
        throw new TypeError(
          'The value "' + e + '" is invalid for argument "value"',
        );
      }
      for (o = 0; o < r - t; ++o) this[o + t] = i[o % s];
    }
    return this;
  };
  var Rt = {};
  function lo(e, t, r) {
    Rt[e] = class extends r {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          this.name = `${this.name} [${e}]`,
          this.stack,
          delete this.name;
      }
      get code() {
        return e;
      }
      set code(n) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${e}]: ${this.message}`;
      }
    };
  }
  u(lo, "G");
  lo("ERR_BUFFER_OUT_OF_BOUNDS", function (e) {
    return e
      ? `${e} is outside of buffer bounds`
      : "Attempt to access memory outside buffer bounds";
  }, RangeError);
  lo("ERR_INVALID_ARG_TYPE", function (e, t) {
    return `The "${e}" argument must be of type number. Received type ${typeof t}`;
  }, TypeError);
  lo("ERR_OUT_OF_RANGE", function (e, t, r) {
    let n = `The value of "${e}" is out of range.`, o = r;
    return Number.isInteger(r) && Math.abs(r) > 2 ** 32
      ? o = Wi(String(r))
      : typeof r == "bigint" &&
        (o = String(r),
          (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
          (o = Wi(o)),
          o += "n"),
      n += ` It must be ${t}. Received ${o}`,
      n;
  }, RangeError);
  function Wi(e) {
    let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
    for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
    return `${e.slice(0, r)}${t}`;
  }
  u(Wi, "K");
  function vl(e, t, r) {
    kt(t, "offset"),
      (e[t] === void 0 || e[t + r] === void 0) && pr(t, e.length - (r + 1));
  }
  u(vl, "Dr");
  function ss(e, t, r, n, o, i) {
    if (e > r || e < t) {
      let s = typeof t == "bigint" ? "n" : "", a;
      throw i > 3
        ? t === 0 || t === BigInt(0)
          ? a = `>= 0${s} and < 2${s} ** ${(i + 1) * 8}${s}`
          : a = `>= -(2${s} ** ${(i + 1) * 8 - 1}${s}) and < 2 ** ${
            (i + 1) * 8 - 1
          }${s}`
        : a = `>= ${t}${s} and <= ${r}${s}`,
        new Rt.ERR_OUT_OF_RANGE("value", a, e);
    }
    vl(n, o, i);
  }
  u(ss, "hr");
  function kt(e, t) {
    if (typeof e != "number") throw new Rt.ERR_INVALID_ARG_TYPE(t, "number", e);
  }
  u(kt, "R");
  function pr(e, t, r) {
    throw Math.floor(e) !== e
      ? (kt(e, r), new Rt.ERR_OUT_OF_RANGE(r || "offset", "an integer", e))
      : t < 0
      ? new Rt.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Rt.ERR_OUT_OF_RANGE(
        r || "offset",
        `>= ${r ? 1 : 0} and <= ${t}`,
        e,
      );
  }
  u(pr, "T");
  var xl = /[^+/0-9A-Za-z-_]/g;
  function El(e) {
    if (e = e.split("=")[0], e = e.trim().replace(xl, ""), e.length < 2) {
      return "";
    }
    for (; e.length % 4 !== 0;) e = e + "=";
    return e;
  }
  u(El, "br");
  function ao(e, t) {
    t = t || 1 / 0;
    let r, n = e.length, o = null, i = [];
    for (let s = 0; s < n; ++s) {
      if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
        if (!o) {
          if (r > 56319) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          o = r;
          continue;
        }
        if (r < 56320) {
          (t -= 3) > -1 && i.push(239, 191, 189), o = r;
          continue;
        }
        r = (o - 55296 << 10 | r - 56320) + 65536;
      } else o && (t -= 3) > -1 && i.push(239, 191, 189);
      if (o = null, r < 128) {
        if ((t -= 1) < 0) break;
        i.push(r);
      } else if (r < 2048) {
        if ((t -= 2) < 0) break;
        i.push(r >> 6 | 192, r & 63 | 128);
      } else if (r < 65536) {
        if ((t -= 3) < 0) break;
        i.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
      } else if (r < 1114112) {
        if ((t -= 4) < 0) break;
        i.push(
          r >> 18 | 240,
          r >> 12 & 63 | 128,
          r >> 6 & 63 | 128,
          r & 63 | 128,
        );
      } else throw new Error("Invalid code point");
    }
    return i;
  }
  u(ao, "b");
  function Al(e) {
    let t = [];
    for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
    return t;
  }
  u(Al, "Pr");
  function Tl(e, t) {
    let r, n, o, i = [];
    for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) {
      r = e.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
    }
    return i;
  }
  u(Tl, "Or");
  function as(e) {
    return io.toByteArray(El(e));
  }
  u(as, "fr");
  function rn(e, t, r, n) {
    let o;
    for (o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) {
      t[o + r] = e[o];
    }
    return o;
  }
  u(rn, "_");
  function qe(e, t) {
    return e instanceof t ||
      e != null && e.constructor != null && e.constructor.name != null &&
        e.constructor.name === t.name;
  }
  u(qe, "E");
  function fo(e) {
    return e !== e;
  }
  u(fo, "Y");
  var Ml = function () {
    let e = "0123456789abcdef", t = new Array(256);
    for (let r = 0; r < 16; ++r) {
      let n = r * 16;
      for (let o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
    }
    return t;
  }();
  function ot(e) {
    return typeof BigInt > "u" ? Pl : e;
  }
  u(ot, "g");
  function Pl() {
    throw new Error("BigInt not supported");
  }
  u(Pl, "Yr");
});
var x,
  d = fr(() => {
    "use strict";
    x = Z(us());
  });
var cs = H((md, nn) => {
  d();
  m();
  g();
  var Sl = function () {
    var e = String.fromCharCode,
      t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
      n = {};
    function o(s, a) {
      if (!n[s]) {
        n[s] = {};
        for (var c = 0; c < s.length; c++) n[s][s.charAt(c)] = c;
      }
      return n[s][a];
    }
    u(o, "getBaseValue");
    var i = {
      compressToBase64: function (s) {
        if (s == null) return "";
        var a = i._compress(s, 6, function (c) {
          return t.charAt(c);
        });
        switch (a.length % 4) {
          default:
          case 0:
            return a;
          case 1:
            return a + "===";
          case 2:
            return a + "==";
          case 3:
            return a + "=";
        }
      },
      decompressFromBase64: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 32, function (a) {
            return o(t, s.charAt(a));
          });
      },
      compressToUTF16: function (s) {
        return s == null ? "" : i._compress(s, 15, function (a) {
          return e(a + 32);
        }) + " ";
      },
      decompressFromUTF16: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 16384, function (a) {
            return s.charCodeAt(a) - 32;
          });
      },
      compressToUint8Array: function (s) {
        for (
          var a = i.compress(s),
            c = new Uint8Array(a.length * 2),
            l = 0,
            f = a.length;
          l < f;
          l++
        ) {
          var p = a.charCodeAt(l);
          c[l * 2] = p >>> 8, c[l * 2 + 1] = p % 256;
        }
        return c;
      },
      decompressFromUint8Array: function (s) {
        if (s == null) return i.decompress(s);
        for (
          var a = new Array(s.length / 2), c = 0, l = a.length;
          c < l;
          c++
        ) {
          a[c] = s[c * 2] * 256 + s[c * 2 + 1];
        }
        var f = [];
        return a.forEach(function (p) {
          f.push(e(p));
        }),
          i.decompress(f.join(""));
      },
      compressToEncodedURIComponent: function (s) {
        return s == null ? "" : i._compress(s, 6, function (a) {
          return r.charAt(a);
        });
      },
      decompressFromEncodedURIComponent: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : (s = s.replace(/ /g, "+"),
            i._decompress(s.length, 32, function (a) {
              return o(r, s.charAt(a));
            }));
      },
      compress: function (s) {
        return i._compress(s, 16, function (a) {
          return e(a);
        });
      },
      _compress: function (s, a, c) {
        if (s == null) return "";
        var l,
          f,
          p = {},
          h = {},
          y = "",
          w = "",
          b = "",
          A = 2,
          P = 3,
          T = 2,
          S = [],
          M = 0,
          _ = 0,
          R;
        for (R = 0; R < s.length; R += 1) {
          if (
            y = s.charAt(R),
              Object.prototype.hasOwnProperty.call(p, y) ||
              (p[y] = P++, h[y] = !0),
              w = b + y,
              Object.prototype.hasOwnProperty.call(p, w)
          ) {
            b = w;
          } else {
            if (Object.prototype.hasOwnProperty.call(h, b)) {
              if (b.charCodeAt(0) < 256) {
                for (l = 0; l < T; l++) {
                  M = M << 1, _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++;
                }
                for (
                  f = b.charCodeAt(0), l = 0;
                  l < 8;
                  l++
                ) {
                  M = M << 1 | f & 1,
                    _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
                    f = f >> 1;
                }
              } else {
                for (f = 1, l = 0; l < T; l++) {
                  M = M << 1 | f,
                    _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
                    f = 0;
                }
                for (
                  f = b.charCodeAt(0), l = 0;
                  l < 16;
                  l++
                ) {
                  M = M << 1 | f & 1,
                    _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
                    f = f >> 1;
                }
              }
              A--, A == 0 && (A = Math.pow(2, T), T++), delete h[b];
            } else {
              for (f = p[b], l = 0; l < T; l++) {
                M = M << 1 | f & 1,
                  _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
                  f = f >> 1;
              }
            }
            A--, A == 0 && (A = Math.pow(2, T), T++), p[w] = P++, b = String(y);
          }
        }
        if (b !== "") {
          if (Object.prototype.hasOwnProperty.call(h, b)) {
            if (b.charCodeAt(0) < 256) {
              for (l = 0; l < T; l++) {
                M = M << 1, _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++;
              }
              for (f = b.charCodeAt(0), l = 0; l < 8; l++) {
                M = M << 1 | f & 1,
                  _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
                  f = f >> 1;
              }
            } else {
              for (f = 1, l = 0; l < T; l++) {
                M = M << 1 | f,
                  _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
                  f = 0;
              }
              for (f = b.charCodeAt(0), l = 0; l < 16; l++) {
                M = M << 1 | f & 1,
                  _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
                  f = f >> 1;
              }
            }
            A--, A == 0 && (A = Math.pow(2, T), T++), delete h[b];
          } else {
            for (f = p[b], l = 0; l < T; l++) {
              M = M << 1 | f & 1,
                _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
                f = f >> 1;
            }
          }
          A--, A == 0 && (A = Math.pow(2, T), T++);
        }
        for (f = 2, l = 0; l < T; l++) {
          M = M << 1 | f & 1,
            _ == a - 1 ? (_ = 0, S.push(c(M)), M = 0) : _++,
            f = f >> 1;
        }
        for (;;) {
          if (M = M << 1, _ == a - 1) {
            S.push(c(M));
            break;
          } else _++;
        }
        return S.join("");
      },
      decompress: function (s) {
        return s == null
          ? ""
          : s == ""
          ? null
          : i._decompress(s.length, 32768, function (a) {
            return s.charCodeAt(a);
          });
      },
      _decompress: function (s, a, c) {
        var l = [],
          f,
          p = 4,
          h = 4,
          y = 3,
          w = "",
          b = [],
          A,
          P,
          T,
          S,
          M,
          _,
          R,
          F = { val: c(0), position: a, index: 1 };
        for (A = 0; A < 3; A += 1) l[A] = A;
        for (T = 0, M = Math.pow(2, 2), _ = 1; _ != M;) {
          S = F.val & F.position,
            F.position >>= 1,
            F.position == 0 && (F.position = a, F.val = c(F.index++)),
            T |= (S > 0 ? 1 : 0) * _,
            _ <<= 1;
        }
        switch (f = T) {
          case 0:
            for (T = 0, M = Math.pow(2, 8), _ = 1; _ != M;) {
              S = F.val & F.position,
                F.position >>= 1,
                F.position == 0 && (F.position = a, F.val = c(F.index++)),
                T |= (S > 0 ? 1 : 0) * _,
                _ <<= 1;
            }
            R = e(T);
            break;
          case 1:
            for (T = 0, M = Math.pow(2, 16), _ = 1; _ != M;) {
              S = F.val & F.position,
                F.position >>= 1,
                F.position == 0 && (F.position = a, F.val = c(F.index++)),
                T |= (S > 0 ? 1 : 0) * _,
                _ <<= 1;
            }
            R = e(T);
            break;
          case 2:
            return "";
        }
        for (l[3] = R, P = R, b.push(R);;) {
          if (F.index > s) return "";
          for (T = 0, M = Math.pow(2, y), _ = 1; _ != M;) {
            S = F.val & F.position,
              F.position >>= 1,
              F.position == 0 && (F.position = a, F.val = c(F.index++)),
              T |= (S > 0 ? 1 : 0) * _,
              _ <<= 1;
          }
          switch (R = T) {
            case 0:
              for (T = 0, M = Math.pow(2, 8), _ = 1; _ != M;) {
                S = F.val & F.position,
                  F.position >>= 1,
                  F.position == 0 && (F.position = a, F.val = c(F.index++)),
                  T |= (S > 0 ? 1 : 0) * _,
                  _ <<= 1;
              }
              l[h++] = e(T), R = h - 1, p--;
              break;
            case 1:
              for (T = 0, M = Math.pow(2, 16), _ = 1; _ != M;) {
                S = F.val & F.position,
                  F.position >>= 1,
                  F.position == 0 && (F.position = a, F.val = c(F.index++)),
                  T |= (S > 0 ? 1 : 0) * _,
                  _ <<= 1;
              }
              l[h++] = e(T), R = h - 1, p--;
              break;
            case 2:
              return b.join("");
          }
          if (p == 0 && (p = Math.pow(2, y), y++), l[R]) w = l[R];
          else if (R === h) w = P + P.charAt(0);
          else return null;
          b.push(w),
            l[h++] = P + w.charAt(0),
            p--,
            P = w,
            p == 0 && (p = Math.pow(2, y), y++);
        }
      },
    };
    return i;
  }();
  typeof nn != "undefined" && nn != null && (nn.exports = Sl);
});
var fs = H((hd, ls) => {
  "use strict";
  d();
  m();
  g();
  ls.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };
});
var mo = H((yd, ms) => {
  d();
  m();
  g();
  var mr = fs(), ps = {};
  for (let e of Object.keys(mr)) ps[mr[e]] = e;
  var k = {
    rgb: { channels: 3, labels: "rgb" },
    hsl: { channels: 3, labels: "hsl" },
    hsv: { channels: 3, labels: "hsv" },
    hwb: { channels: 3, labels: "hwb" },
    cmyk: { channels: 4, labels: "cmyk" },
    xyz: { channels: 3, labels: "xyz" },
    lab: { channels: 3, labels: "lab" },
    lch: { channels: 3, labels: "lch" },
    hex: { channels: 1, labels: ["hex"] },
    keyword: { channels: 1, labels: ["keyword"] },
    ansi16: { channels: 1, labels: ["ansi16"] },
    ansi256: { channels: 1, labels: ["ansi256"] },
    hcg: { channels: 3, labels: ["h", "c", "g"] },
    apple: { channels: 3, labels: ["r16", "g16", "b16"] },
    gray: { channels: 1, labels: ["gray"] },
  };
  ms.exports = k;
  for (let e of Object.keys(k)) {
    if (!("channels" in k[e])) {
      throw new Error("missing channels property: " + e);
    }
    if (!("labels" in k[e])) {
      throw new Error("missing channel labels property: " + e);
    }
    if (k[e].labels.length !== k[e].channels) {
      throw new Error("channel and label counts mismatch: " + e);
    }
    let { channels: t, labels: r } = k[e];
    delete k[e].channels,
      delete k[e].labels,
      Object.defineProperty(k[e], "channels", { value: t }),
      Object.defineProperty(k[e], "labels", { value: r });
  }
  k.rgb.hsl = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.min(t, r, n),
      i = Math.max(t, r, n),
      s = i - o,
      a,
      c;
    i === o
      ? a = 0
      : t === i
      ? a = (r - n) / s
      : r === i
      ? a = 2 + (n - t) / s
      : n === i && (a = 4 + (t - r) / s),
      a = Math.min(a * 60, 360),
      a < 0 && (a += 360);
    let l = (o + i) / 2;
    return i === o ? c = 0 : l <= .5 ? c = s / (i + o) : c = s / (2 - i - o),
      [a, c * 100, l * 100];
  };
  k.rgb.hsv = function (e) {
    let t,
      r,
      n,
      o,
      i,
      s = e[0] / 255,
      a = e[1] / 255,
      c = e[2] / 255,
      l = Math.max(s, a, c),
      f = l - Math.min(s, a, c),
      p = u(function (h) {
        return (l - h) / 6 / f + 1 / 2;
      }, "diffc");
    return f === 0
      ? (o = 0, i = 0)
      : (i = f / l,
        t = p(s),
        r = p(a),
        n = p(c),
        s === l
          ? o = n - r
          : a === l
          ? o = 1 / 3 + t - n
          : c === l && (o = 2 / 3 + r - t),
        o < 0 ? o += 1 : o > 1 && (o -= 1)),
      [o * 360, i * 100, l * 100];
  };
  k.rgb.hwb = function (e) {
    let t = e[0],
      r = e[1],
      n = e[2],
      o = k.rgb.hsl(e)[0],
      i = 1 / 255 * Math.min(t, Math.min(r, n));
    return n = 1 - 1 / 255 * Math.max(t, Math.max(r, n)), [o, i * 100, n * 100];
  };
  k.rgb.cmyk = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.min(1 - t, 1 - r, 1 - n),
      i = (1 - t - o) / (1 - o) || 0,
      s = (1 - r - o) / (1 - o) || 0,
      a = (1 - n - o) / (1 - o) || 0;
    return [i * 100, s * 100, a * 100, o * 100];
  };
  function Ol(e, t) {
    return (e[0] - t[0]) ** 2 + (e[1] - t[1]) ** 2 + (e[2] - t[2]) ** 2;
  }
  u(Ol, "comparativeDistance");
  k.rgb.keyword = function (e) {
    let t = ps[e];
    if (t) return t;
    let r = 1 / 0, n;
    for (let o of Object.keys(mr)) {
      let i = mr[o], s = Ol(e, i);
      s < r && (r = s, n = o);
    }
    return n;
  };
  k.keyword.rgb = function (e) {
    return mr[e];
  };
  k.rgb.xyz = function (e) {
    let t = e[0] / 255, r = e[1] / 255, n = e[2] / 255;
    t = t > .04045 ? ((t + .055) / 1.055) ** 2.4 : t / 12.92,
      r = r > .04045 ? ((r + .055) / 1.055) ** 2.4 : r / 12.92,
      n = n > .04045 ? ((n + .055) / 1.055) ** 2.4 : n / 12.92;
    let o = t * .4124 + r * .3576 + n * .1805,
      i = t * .2126 + r * .7152 + n * .0722,
      s = t * .0193 + r * .1192 + n * .9505;
    return [o * 100, i * 100, s * 100];
  };
  k.rgb.lab = function (e) {
    let t = k.rgb.xyz(e), r = t[0], n = t[1], o = t[2];
    r /= 95.047,
      n /= 100,
      o /= 108.883,
      r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116,
      n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116,
      o = o > .008856 ? o ** (1 / 3) : 7.787 * o + 16 / 116;
    let i = 116 * n - 16, s = 500 * (r - n), a = 200 * (n - o);
    return [i, s, a];
  };
  k.hsl.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, o, i, s;
    if (r === 0) return s = n * 255, [s, s, s];
    n < .5 ? o = n * (1 + r) : o = n + r - n * r;
    let a = 2 * n - o, c = [0, 0, 0];
    for (let l = 0; l < 3; l++) {
      i = t + 1 / 3 * -(l - 1),
        i < 0 && i++,
        i > 1 && i--,
        6 * i < 1
          ? s = a + (o - a) * 6 * i
          : 2 * i < 1
          ? s = o
          : 3 * i < 2
          ? s = a + (o - a) * (2 / 3 - i) * 6
          : s = a,
        c[l] = s * 255;
    }
    return c;
  };
  k.hsl.hsv = function (e) {
    let t = e[0], r = e[1] / 100, n = e[2] / 100, o = r, i = Math.max(n, .01);
    n *= 2, r *= n <= 1 ? n : 2 - n, o *= i <= 1 ? i : 2 - i;
    let s = (n + r) / 2, a = n === 0 ? 2 * o / (i + o) : 2 * r / (n + r);
    return [t, a * 100, s * 100];
  };
  k.hsv.rgb = function (e) {
    let t = e[0] / 60,
      r = e[1] / 100,
      n = e[2] / 100,
      o = Math.floor(t) % 6,
      i = t - Math.floor(t),
      s = 255 * n * (1 - r),
      a = 255 * n * (1 - r * i),
      c = 255 * n * (1 - r * (1 - i));
    switch (n *= 255, o) {
      case 0:
        return [n, c, s];
      case 1:
        return [a, n, s];
      case 2:
        return [s, n, c];
      case 3:
        return [s, a, n];
      case 4:
        return [c, s, n];
      case 5:
        return [n, s, a];
    }
  };
  k.hsv.hsl = function (e) {
    let t = e[0], r = e[1] / 100, n = e[2] / 100, o = Math.max(n, .01), i, s;
    s = (2 - r) * n;
    let a = (2 - r) * o;
    return i = r * o,
      i /= a <= 1 ? a : 2 - a,
      i = i || 0,
      s /= 2,
      [t, i * 100, s * 100];
  };
  k.hwb.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100, o = r + n, i;
    o > 1 && (r /= o, n /= o);
    let s = Math.floor(6 * t), a = 1 - n;
    i = 6 * t - s, (s & 1) !== 0 && (i = 1 - i);
    let c = r + i * (a - r), l, f, p;
    switch (s) {
      default:
      case 6:
      case 0:
        l = a, f = c, p = r;
        break;
      case 1:
        l = c, f = a, p = r;
        break;
      case 2:
        l = r, f = a, p = c;
        break;
      case 3:
        l = r, f = c, p = a;
        break;
      case 4:
        l = c, f = r, p = a;
        break;
      case 5:
        l = a, f = r, p = c;
        break;
    }
    return [l * 255, f * 255, p * 255];
  };
  k.cmyk.rgb = function (e) {
    let t = e[0] / 100,
      r = e[1] / 100,
      n = e[2] / 100,
      o = e[3] / 100,
      i = 1 - Math.min(1, t * (1 - o) + o),
      s = 1 - Math.min(1, r * (1 - o) + o),
      a = 1 - Math.min(1, n * (1 - o) + o);
    return [i * 255, s * 255, a * 255];
  };
  k.xyz.rgb = function (e) {
    let t = e[0] / 100, r = e[1] / 100, n = e[2] / 100, o, i, s;
    return o = t * 3.2406 + r * -1.5372 + n * -.4986,
      i = t * -.9689 + r * 1.8758 + n * .0415,
      s = t * .0557 + r * -.204 + n * 1.057,
      o = o > .0031308 ? 1.055 * o ** (1 / 2.4) - .055 : o * 12.92,
      i = i > .0031308 ? 1.055 * i ** (1 / 2.4) - .055 : i * 12.92,
      s = s > .0031308 ? 1.055 * s ** (1 / 2.4) - .055 : s * 12.92,
      o = Math.min(Math.max(0, o), 1),
      i = Math.min(Math.max(0, i), 1),
      s = Math.min(Math.max(0, s), 1),
      [o * 255, i * 255, s * 255];
  };
  k.xyz.lab = function (e) {
    let t = e[0], r = e[1], n = e[2];
    t /= 95.047,
      r /= 100,
      n /= 108.883,
      t = t > .008856 ? t ** (1 / 3) : 7.787 * t + 16 / 116,
      r = r > .008856 ? r ** (1 / 3) : 7.787 * r + 16 / 116,
      n = n > .008856 ? n ** (1 / 3) : 7.787 * n + 16 / 116;
    let o = 116 * r - 16, i = 500 * (t - r), s = 200 * (r - n);
    return [o, i, s];
  };
  k.lab.xyz = function (e) {
    let t = e[0], r = e[1], n = e[2], o, i, s;
    i = (t + 16) / 116, o = r / 500 + i, s = i - n / 200;
    let a = i ** 3, c = o ** 3, l = s ** 3;
    return i = a > .008856 ? a : (i - 16 / 116) / 7.787,
      o = c > .008856 ? c : (o - 16 / 116) / 7.787,
      s = l > .008856 ? l : (s - 16 / 116) / 7.787,
      o *= 95.047,
      i *= 100,
      s *= 108.883,
      [o, i, s];
  };
  k.lab.lch = function (e) {
    let t = e[0], r = e[1], n = e[2], o;
    o = Math.atan2(n, r) * 360 / 2 / Math.PI, o < 0 && (o += 360);
    let s = Math.sqrt(r * r + n * n);
    return [t, s, o];
  };
  k.lch.lab = function (e) {
    let t = e[0],
      r = e[1],
      o = e[2] / 360 * 2 * Math.PI,
      i = r * Math.cos(o),
      s = r * Math.sin(o);
    return [t, i, s];
  };
  k.rgb.ansi16 = function (e, t = null) {
    let [r, n, o] = e, i = t === null ? k.rgb.hsv(e)[2] : t;
    if (i = Math.round(i / 50), i === 0) return 30;
    let s = 30 +
      (Math.round(o / 255) << 2 | Math.round(n / 255) << 1 |
        Math.round(r / 255));
    return i === 2 && (s += 60), s;
  };
  k.hsv.ansi16 = function (e) {
    return k.rgb.ansi16(k.hsv.rgb(e), e[2]);
  };
  k.rgb.ansi256 = function (e) {
    let t = e[0], r = e[1], n = e[2];
    return t === r && r === n
      ? t < 8 ? 16 : t > 248 ? 231 : Math.round((t - 8) / 247 * 24) + 232
      : 16 + 36 * Math.round(t / 255 * 5) + 6 * Math.round(r / 255 * 5) +
        Math.round(n / 255 * 5);
  };
  k.ansi16.rgb = function (e) {
    let t = e % 10;
    if (t === 0 || t === 7) {
      return e > 50 && (t += 3.5), t = t / 10.5 * 255, [t, t, t];
    }
    let r = (~~(e > 50) + 1) * .5,
      n = (t & 1) * r * 255,
      o = (t >> 1 & 1) * r * 255,
      i = (t >> 2 & 1) * r * 255;
    return [n, o, i];
  };
  k.ansi256.rgb = function (e) {
    if (e >= 232) {
      let i = (e - 232) * 10 + 8;
      return [i, i, i];
    }
    e -= 16;
    let t,
      r = Math.floor(e / 36) / 5 * 255,
      n = Math.floor((t = e % 36) / 6) / 5 * 255,
      o = t % 6 / 5 * 255;
    return [r, n, o];
  };
  k.rgb.hex = function (e) {
    let r =
      (((Math.round(e[0]) & 255) << 16) + ((Math.round(e[1]) & 255) << 8) +
        (Math.round(e[2]) & 255)).toString(16).toUpperCase();
    return "000000".substring(r.length) + r;
  };
  k.hex.rgb = function (e) {
    let t = e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!t) return [0, 0, 0];
    let r = t[0];
    t[0].length === 3 && (r = r.split("").map((a) => a + a).join(""));
    let n = parseInt(r, 16), o = n >> 16 & 255, i = n >> 8 & 255, s = n & 255;
    return [o, i, s];
  };
  k.rgb.hcg = function (e) {
    let t = e[0] / 255,
      r = e[1] / 255,
      n = e[2] / 255,
      o = Math.max(Math.max(t, r), n),
      i = Math.min(Math.min(t, r), n),
      s = o - i,
      a,
      c;
    return s < 1 ? a = i / (1 - s) : a = 0,
      s <= 0
        ? c = 0
        : o === t
        ? c = (r - n) / s % 6
        : o === r
        ? c = 2 + (n - t) / s
        : c = 4 + (t - r) / s,
      c /= 6,
      c %= 1,
      [c * 360, s * 100, a * 100];
  };
  k.hsl.hcg = function (e) {
    let t = e[1] / 100,
      r = e[2] / 100,
      n = r < .5 ? 2 * t * r : 2 * t * (1 - r),
      o = 0;
    return n < 1 && (o = (r - .5 * n) / (1 - n)), [e[0], n * 100, o * 100];
  };
  k.hsv.hcg = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t * r, o = 0;
    return n < 1 && (o = (r - n) / (1 - n)), [e[0], n * 100, o * 100];
  };
  k.hcg.rgb = function (e) {
    let t = e[0] / 360, r = e[1] / 100, n = e[2] / 100;
    if (r === 0) return [n * 255, n * 255, n * 255];
    let o = [0, 0, 0], i = t % 1 * 6, s = i % 1, a = 1 - s, c = 0;
    switch (Math.floor(i)) {
      case 0:
        o[0] = 1, o[1] = s, o[2] = 0;
        break;
      case 1:
        o[0] = a, o[1] = 1, o[2] = 0;
        break;
      case 2:
        o[0] = 0, o[1] = 1, o[2] = s;
        break;
      case 3:
        o[0] = 0, o[1] = a, o[2] = 1;
        break;
      case 4:
        o[0] = s, o[1] = 0, o[2] = 1;
        break;
      default:
        o[0] = 1, o[1] = 0, o[2] = a;
    }
    return c = (1 - r) * n,
      [(r * o[0] + c) * 255, (r * o[1] + c) * 255, (r * o[2] + c) * 255];
  };
  k.hcg.hsv = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t), o = 0;
    return n > 0 && (o = t / n), [e[0], o * 100, n * 100];
  };
  k.hcg.hsl = function (e) {
    let t = e[1] / 100, n = e[2] / 100 * (1 - t) + .5 * t, o = 0;
    return n > 0 && n < .5
      ? o = t / (2 * n)
      : n >= .5 && n < 1 && (o = t / (2 * (1 - n))),
      [e[0], o * 100, n * 100];
  };
  k.hcg.hwb = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = t + r * (1 - t);
    return [e[0], (n - t) * 100, (1 - n) * 100];
  };
  k.hwb.hcg = function (e) {
    let t = e[1] / 100, r = e[2] / 100, n = 1 - r, o = n - t, i = 0;
    return o < 1 && (i = (n - o) / (1 - o)), [e[0], o * 100, i * 100];
  };
  k.apple.rgb = function (e) {
    return [e[0] / 65535 * 255, e[1] / 65535 * 255, e[2] / 65535 * 255];
  };
  k.rgb.apple = function (e) {
    return [e[0] / 255 * 65535, e[1] / 255 * 65535, e[2] / 255 * 65535];
  };
  k.gray.rgb = function (e) {
    return [e[0] / 100 * 255, e[0] / 100 * 255, e[0] / 100 * 255];
  };
  k.gray.hsl = function (e) {
    return [0, 0, e[0]];
  };
  k.gray.hsv = k.gray.hsl;
  k.gray.hwb = function (e) {
    return [0, 100, e[0]];
  };
  k.gray.cmyk = function (e) {
    return [0, 0, 0, e[0]];
  };
  k.gray.lab = function (e) {
    return [e[0], 0, 0];
  };
  k.gray.hex = function (e) {
    let t = Math.round(e[0] / 100 * 255) & 255,
      n = ((t << 16) + (t << 8) + t).toString(16).toUpperCase();
    return "000000".substring(n.length) + n;
  };
  k.rgb.gray = function (e) {
    return [(e[0] + e[1] + e[2]) / 3 / 255 * 100];
  };
});
var ds = H((bd, gs) => {
  d();
  m();
  g();
  var on = mo();
  function _l() {
    let e = {}, t = Object.keys(on);
    for (let r = t.length, n = 0; n < r; n++) {
      e[t[n]] = { distance: -1, parent: null };
    }
    return e;
  }
  u(_l, "buildGraph");
  function Il(e) {
    let t = _l(), r = [e];
    for (t[e].distance = 0; r.length;) {
      let n = r.pop(), o = Object.keys(on[n]);
      for (let i = o.length, s = 0; s < i; s++) {
        let a = o[s], c = t[a];
        c.distance === -1 &&
          (c.distance = t[n].distance + 1, c.parent = n, r.unshift(a));
      }
    }
    return t;
  }
  u(Il, "deriveBFS");
  function Cl(e, t) {
    return function (r) {
      return t(e(r));
    };
  }
  u(Cl, "link");
  function Fl(e, t) {
    let r = [t[e].parent, e], n = on[t[e].parent][e], o = t[e].parent;
    for (; t[o].parent;) {
      r.unshift(t[o].parent), n = Cl(on[t[o].parent][o], n), o = t[o].parent;
    }
    return n.conversion = r, n;
  }
  u(Fl, "wrapConversion");
  gs.exports = function (e) {
    let t = Il(e), r = {}, n = Object.keys(t);
    for (let o = n.length, i = 0; i < o; i++) {
      let s = n[i];
      t[s].parent !== null && (r[s] = Fl(s, t));
    }
    return r;
  };
});
var ys = H((wd, hs) => {
  d();
  m();
  g();
  var go = mo(), Rl = ds(), $t = {}, Dl = Object.keys(go);
  function kl(e) {
    let t = u(function (...r) {
      let n = r[0];
      return n == null ? n : (n.length > 1 && (r = n), e(r));
    }, "wrappedFn");
    return "conversion" in e && (t.conversion = e.conversion), t;
  }
  u(kl, "wrapRaw");
  function Nl(e) {
    let t = u(function (...r) {
      let n = r[0];
      if (n == null) return n;
      n.length > 1 && (r = n);
      let o = e(r);
      if (typeof o == "object") {
        for (let i = o.length, s = 0; s < i; s++) o[s] = Math.round(o[s]);
      }
      return o;
    }, "wrappedFn");
    return "conversion" in e && (t.conversion = e.conversion), t;
  }
  u(Nl, "wrapRounded");
  Dl.forEach((e) => {
    $t[e] = {},
      Object.defineProperty($t[e], "channels", { value: go[e].channels }),
      Object.defineProperty($t[e], "labels", { value: go[e].labels });
    let t = Rl(e);
    Object.keys(t).forEach((n) => {
      let o = t[n];
      $t[e][n] = Nl(o), $t[e][n].raw = kl(o);
    });
  });
  hs.exports = $t;
});
var As = H((vd, Es) => {
  "use strict";
  d();
  m();
  g();
  var bs = u((e, t) => (...r) => `\x1B[${e(...r) + t}m`, "wrapAnsi16"),
    ws = u((e, t) =>
      (...r) => {
        let n = e(...r);
        return `\x1B[${38 + t};5;${n}m`;
      }, "wrapAnsi256"),
    vs = u((e, t) =>
      (...r) => {
        let n = e(...r);
        return `\x1B[${38 + t};2;${n[0]};${n[1]};${n[2]}m`;
      }, "wrapAnsi16m"),
    sn = u((e) => e, "ansi2ansi"),
    xs = u((e, t, r) => [e, t, r], "rgb2rgb"),
    jt = u((e, t, r) => {
      Object.defineProperty(e, t, {
        get: () => {
          let n = r();
          return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
          }),
            n;
        },
        enumerable: !0,
        configurable: !0,
      });
    }, "setLazyProperty"),
    ho,
    Bt = u((e, t, r, n) => {
      ho === void 0 && (ho = ys());
      let o = n ? 10 : 0, i = {};
      for (let [s, a] of Object.entries(ho)) {
        let c = s === "ansi16" ? "ansi" : s;
        s === t ? i[c] = e(r, o) : typeof a == "object" && (i[c] = e(a[t], o));
      }
      return i;
    }, "makeDynamicStyles");
  function $l() {
    let e = new Map(),
      t = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29],
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39],
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49],
        },
      };
    t.color.gray = t.color.blackBright,
      t.bgColor.bgGray = t.bgColor.bgBlackBright,
      t.color.grey = t.color.blackBright,
      t.bgColor.bgGrey = t.bgColor.bgBlackBright;
    for (let [r, n] of Object.entries(t)) {
      for (let [o, i] of Object.entries(n)) {
        t[o] = { open: `\x1B[${i[0]}m`, close: `\x1B[${i[1]}m` },
          n[o] = t[o],
          e.set(i[0], i[1]);
      }
      Object.defineProperty(t, r, { value: n, enumerable: !1 });
    }
    return Object.defineProperty(t, "codes", { value: e, enumerable: !1 }),
      t.color.close = "\x1B[39m",
      t.bgColor.close = "\x1B[49m",
      jt(t.color, "ansi", () => Bt(bs, "ansi16", sn, !1)),
      jt(t.color, "ansi256", () => Bt(ws, "ansi256", sn, !1)),
      jt(t.color, "ansi16m", () => Bt(vs, "rgb", xs, !1)),
      jt(t.bgColor, "ansi", () => Bt(bs, "ansi16", sn, !0)),
      jt(t.bgColor, "ansi256", () => Bt(ws, "ansi256", sn, !0)),
      jt(t.bgColor, "ansi16m", () => Bt(vs, "rgb", xs, !0)),
      t;
  }
  u($l, "assembleStyles");
  Object.defineProperty(Es, "exports", { enumerable: !0, get: $l });
});
var yo = H(() => {
  d();
  m();
  g();
});
var Ms = H((Ad, Ts) => {
  "use strict";
  d();
  m();
  g();
  var jl = u((e, t, r) => {
      let n = e.indexOf(t);
      if (n === -1) return e;
      let o = t.length, i = 0, s = "";
      do s += e.substr(i, n - i) + t + r,
        i = n + o,
        n = e.indexOf(t, i); while (n !== -1);
      return s += e.substr(i), s;
    }, "stringReplaceAll"),
    Bl = u((e, t, r, n) => {
      let o = 0, i = "";
      do {
        let s = e[n - 1] === "\r";
        i += e.substr(o, (s ? n - 1 : n) - o) + t + (s
          ? `\r
`
          : `
`) +
          r,
          o = n + 1,
          n = e.indexOf(
            `
`,
            o,
          );
      } while (n !== -1);
      return i += e.substr(o), i;
    }, "stringEncaseCRLFWithFirstIndex");
  Ts.exports = { stringReplaceAll: jl, stringEncaseCRLFWithFirstIndex: Bl };
});
var Is = H((Td, _s) => {
  "use strict";
  d();
  m();
  g();
  var Ll =
      /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
    Ps = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
    ql = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
    Ul = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi,
    Vl = new Map([
      [
        "n",
        `
`,
      ],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"],
    ]);
  function Os(e) {
    let t = e[0] === "u", r = e[1] === "{";
    return t && !r && e.length === 5 || e[0] === "x" && e.length === 3
      ? String.fromCharCode(parseInt(e.slice(1), 16))
      : t && r
      ? String.fromCodePoint(parseInt(e.slice(2, -1), 16))
      : Vl.get(e) || e;
  }
  u(Os, "unescape");
  function Gl(e, t) {
    let r = [], n = t.trim().split(/\s*,\s*/g), o;
    for (let i of n) {
      let s = Number(i);
      if (!Number.isNaN(s)) r.push(s);
      else if (o = i.match(ql)) {
        r.push(o[2].replace(Ul, (a, c, l) => c ? Os(c) : l));
      } else {
        throw new Error(
          `Invalid Chalk template style argument: ${i} (in style '${e}')`,
        );
      }
    }
    return r;
  }
  u(Gl, "parseArguments");
  function zl(e) {
    Ps.lastIndex = 0;
    let t = [], r;
    for (; (r = Ps.exec(e)) !== null;) {
      let n = r[1];
      if (r[2]) {
        let o = Gl(n, r[2]);
        t.push([n].concat(o));
      } else t.push([n]);
    }
    return t;
  }
  u(zl, "parseStyle");
  function Ss(e, t) {
    let r = {};
    for (let o of t) {
      for (let i of o.styles) {
        r[i[0]] = o.inverse ? null : i.slice(1);
      }
    }
    let n = e;
    for (let [o, i] of Object.entries(r)) {
      if (!!Array.isArray(i)) {
        if (!(o in n)) throw new Error(`Unknown Chalk style: ${o}`);
        n = i.length > 0 ? n[o](...i) : n[o];
      }
    }
    return n;
  }
  u(Ss, "buildStyle");
  _s.exports = (e, t) => {
    let r = [], n = [], o = [];
    if (
      t.replace(Ll, (i, s, a, c, l, f) => {
        if (s) o.push(Os(s));
        else if (c) {
          let p = o.join("");
          o = [],
            n.push(r.length === 0 ? p : Ss(e, r)(p)),
            r.push({ inverse: a, styles: zl(c) });
        } else if (l) {
          if (r.length === 0) {
            throw new Error("Found extraneous } in Chalk template literal");
          }
          n.push(Ss(e, r)(o.join(""))), o = [], r.pop();
        } else o.push(f);
      }),
        n.push(o.join("")),
        r.length > 0
    ) {
      let i = `Chalk template literal is missing ${r.length} closing bracket${
        r.length === 1 ? "" : "s"
      } (\`}\`)`;
      throw new Error(i);
    }
    return n.join("");
  };
});
var Pt = H((Md, Ns) => {
  "use strict";
  d();
  m();
  g();
  var gr = As(),
    { stdout: wo, stderr: vo } = yo(),
    { stringReplaceAll: Jl, stringEncaseCRLFWithFirstIndex: Wl } = Ms(),
    { isArray: un } = Array,
    Fs = ["ansi", "ansi", "ansi256", "ansi16m"],
    Lt = Object.create(null),
    Hl = u((e, t = {}) => {
      if (
        t.level && !(Number.isInteger(t.level) && t.level >= 0 && t.level <= 3)
      ) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      let r = wo ? wo.level : 0;
      e.level = t.level === void 0 ? r : t.level;
    }, "applyOptions"),
    an = class {
      constructor(t) {
        return Rs(t);
      }
    };
  u(an, "ChalkClass");
  var Rs = u((e) => {
    let t = {};
    return Hl(t, e),
      t.template = (...r) => ks(t.template, ...r),
      Object.setPrototypeOf(t, cn.prototype),
      Object.setPrototypeOf(t.template, t),
      t.template.constructor = () => {
        throw new Error(
          "`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.",
        );
      },
      t.template.Instance = an,
      t.template;
  }, "chalkFactory");
  function cn(e) {
    return Rs(e);
  }
  u(cn, "Chalk");
  for (let [e, t] of Object.entries(gr)) {
    Lt[e] = {
      get() {
        let r = ln(this, xo(t.open, t.close, this._styler), this._isEmpty);
        return Object.defineProperty(this, e, { value: r }), r;
      },
    };
  }
  Lt.visible = {
    get() {
      let e = ln(this, this._styler, !0);
      return Object.defineProperty(this, "visible", { value: e }), e;
    },
  };
  var Ds = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
  for (let e of Ds) {
    Lt[e] = {
      get() {
        let { level: t } = this;
        return function (...r) {
          let n = xo(gr.color[Fs[t]][e](...r), gr.color.close, this._styler);
          return ln(this, n, this._isEmpty);
        };
      },
    };
  }
  for (let e of Ds) {
    let t = "bg" + e[0].toUpperCase() + e.slice(1);
    Lt[t] = {
      get() {
        let { level: r } = this;
        return function (...n) {
          let o = xo(
            gr.bgColor[Fs[r]][e](...n),
            gr.bgColor.close,
            this._styler,
          );
          return ln(this, o, this._isEmpty);
        };
      },
    };
  }
  var Ql = Object.defineProperties(() => {}, {
      ...Lt,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level;
        },
        set(e) {
          this._generator.level = e;
        },
      },
    }),
    xo = u((e, t, r) => {
      let n, o;
      return r === void 0
        ? (n = e, o = t)
        : (n = r.openAll + e, o = t + r.closeAll),
        { open: e, close: t, openAll: n, closeAll: o, parent: r };
    }, "createStyler"),
    ln = u((e, t, r) => {
      let n = u(
        (...o) =>
          un(o[0]) && un(o[0].raw)
            ? Cs(n, ks(n, ...o))
            : Cs(n, o.length === 1 ? "" + o[0] : o.join(" ")),
        "builder",
      );
      return Object.setPrototypeOf(n, Ql),
        n._generator = e,
        n._styler = t,
        n._isEmpty = r,
        n;
    }, "createBuilder"),
    Cs = u((e, t) => {
      if (e.level <= 0 || !t) return e._isEmpty ? "" : t;
      let r = e._styler;
      if (r === void 0) return t;
      let { openAll: n, closeAll: o } = r;
      if (t.indexOf("\x1B") !== -1) {
        for (; r !== void 0;) t = Jl(t, r.close, r.open), r = r.parent;
      }
      let i = t.indexOf(`
`);
      return i !== -1 && (t = Wl(t, o, n, i)), n + t + o;
    }, "applyStyle"),
    bo,
    ks = u((e, ...t) => {
      let [r] = t;
      if (!un(r) || !un(r.raw)) return t.join(" ");
      let n = t.slice(1), o = [r.raw[0]];
      for (let i = 1; i < r.length; i++) {
        o.push(String(n[i - 1]).replace(/[{}\\]/g, "\\$&"), String(r.raw[i]));
      }
      return bo === void 0 && (bo = Is()), bo(e, o.join(""));
    }, "chalkTag");
  Object.defineProperties(cn.prototype, Lt);
  var fn = cn();
  fn.supportsColor = wo;
  fn.stderr = cn({ level: vo ? vo.level : 0 });
  fn.stderr.supportsColor = vo;
  Ns.exports = fn;
});
var Oo = H((Sd, Ys) => {
  "use strict";
  d();
  m();
  g();
  Ys.exports = (e, t = 1, r) => {
    if (
      r = { indent: " ", includeEmptyLines: !1, ...r }, typeof e != "string"
    ) {
      throw new TypeError(
        `Expected \`input\` to be a \`string\`, got \`${typeof e}\``,
      );
    }
    if (typeof t != "number") {
      throw new TypeError(
        `Expected \`count\` to be a \`number\`, got \`${typeof t}\``,
      );
    }
    if (typeof r.indent != "string") {
      throw new TypeError(
        `Expected \`options.indent\` to be a \`string\`, got \`${typeof r
          .indent}\``,
      );
    }
    if (t === 0) return e;
    let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
    return e.replace(n, r.indent.repeat(t));
  };
});
var _o = H((Od, Zs) => {
  "use strict";
  d();
  m();
  g();
  Zs.exports = function () {
    function e(t, r, n, o, i) {
      return t < r || n < r ? t > n ? n + 1 : t + 1 : o === i ? r : r + 1;
    }
    return u(e, "_min"), function (t, r) {
      if (t === r) return 0;
      if (t.length > r.length) {
        var n = t;
        t = r, r = n;
      }
      for (
        var o = t.length, i = r.length;
        o > 0 && t.charCodeAt(o - 1) === r.charCodeAt(i - 1);
      ) {
        o--, i--;
      }
      for (var s = 0; s < o && t.charCodeAt(s) === r.charCodeAt(s);) s++;
      if (o -= s, i -= s, o === 0 || i < 3) return i;
      var a = 0, c, l, f, p, h, y, w, b, A, P, T, S, M = [];
      for (c = 0; c < o; c++) M.push(c + 1), M.push(t.charCodeAt(s + c));
      for (var _ = M.length - 1; a < i - 3;) {
        for (
          A = r.charCodeAt(s + (l = a)),
            P = r.charCodeAt(s + (f = a + 1)),
            T = r.charCodeAt(s + (p = a + 2)),
            S = r.charCodeAt(s + (h = a + 3)),
            y = a += 4,
            c = 0;
          c < _;
          c += 2
        ) {
          w = M[c],
            b = M[c + 1],
            l = e(w, l, f, A, b),
            f = e(l, f, p, P, b),
            p = e(f, p, h, T, b),
            y = e(p, h, y, S, b),
            M[c] = y,
            h = p,
            p = f,
            f = l,
            l = w;
        }
      }
      for (; a < i;) {
        for (A = r.charCodeAt(s + (l = a)), y = ++a, c = 0; c < _; c += 2) {
          w = M[c], M[c] = y = e(w, l, y, A, M[c + 1]), l = w;
        }
      }
      return y;
    };
  }();
});
var qo = H((z) => {
  d();
  m();
  g();
  var te = u(
      (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
      "c",
    ),
    ia = te((e, t) => {
      "use strict";
      t.exports = function () {
        if (
          typeof Symbol != "function" ||
          typeof Object.getOwnPropertySymbols != "function"
        ) {
          return !1;
        }
        if (typeof Symbol.iterator == "symbol") return !0;
        var r = {}, n = Symbol("test"), o = Object(n);
        if (
          typeof n == "string" ||
          Object.prototype.toString.call(n) !== "[object Symbol]" ||
          Object.prototype.toString.call(o) !== "[object Symbol]"
        ) {
          return !1;
        }
        var i = 42;
        r[n] = i;
        for (n in r) return !1;
        if (
          typeof Object.keys == "function" && Object.keys(r).length !== 0 ||
          typeof Object.getOwnPropertyNames == "function" &&
            Object.getOwnPropertyNames(r).length !== 0
        ) {
          return !1;
        }
        var s = Object.getOwnPropertySymbols(r);
        if (
          s.length !== 1 || s[0] !== n ||
          !Object.prototype.propertyIsEnumerable.call(r, n)
        ) {
          return !1;
        }
        if (typeof Object.getOwnPropertyDescriptor == "function") {
          var a = Object.getOwnPropertyDescriptor(r, n);
          if (a.value !== i || a.enumerable !== !0) return !1;
        }
        return !0;
      };
    }),
    On = te((e, t) => {
      "use strict";
      var r = ia();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    }),
    Kf = te((e, t) => {
      "use strict";
      var r = typeof Symbol < "u" && Symbol, n = ia();
      t.exports = function () {
        return typeof r != "function" || typeof Symbol != "function" ||
            typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol"
          ? !1
          : n();
      };
    }),
    Yf = te((e, t) => {
      "use strict";
      var r = "Function.prototype.bind called on incompatible ",
        n = Array.prototype.slice,
        o = Object.prototype.toString,
        i = "[object Function]";
      t.exports = function (s) {
        var a = this;
        if (typeof a != "function" || o.call(a) !== i) {
          throw new TypeError(r + a);
        }
        for (
          var c = n.call(arguments, 1),
            l,
            f = function () {
              if (this instanceof l) {
                var b = a.apply(this, c.concat(n.call(arguments)));
                return Object(b) === b ? b : this;
              } else return a.apply(s, c.concat(n.call(arguments)));
            },
            p = Math.max(0, a.length - c.length),
            h = [],
            y = 0;
          y < p;
          y++
        ) {
          h.push("$" + y);
        }
        if (
          l = E(
            "binder",
            "return function (" + h.join(",") +
              "){ return binder.apply(this,arguments); }",
          )(f), a.prototype
        ) {
          var w = u(function () {}, "p");
          w.prototype = a.prototype, l.prototype = new w(), w.prototype = null;
        }
        return l;
      };
    }),
    No = te((e, t) => {
      "use strict";
      var r = Yf();
      t.exports = E.prototype.bind || r;
    }),
    Zf = te((e, t) => {
      "use strict";
      var r = No();
      t.exports = r.call(E.call, Object.prototype.hasOwnProperty);
    }),
    $o = te((e, t) => {
      "use strict";
      var r,
        n = SyntaxError,
        o = E,
        i = TypeError,
        s = u(function (U) {
          try {
            return o('"use strict"; return (' + U + ").constructor;")();
          } catch (Q) {}
        }, "cr"),
        a = Object.getOwnPropertyDescriptor;
      if (a) {
        try {
          a({}, "");
        } catch (U) {
          a = null;
        }
      }
      var c = u(function () {
          throw new i();
        }, "lr"),
        l = a
          ? function () {
            try {
              return arguments.callee, c;
            } catch (U) {
              try {
                return a(arguments, "callee").get;
              } catch (Q) {
                return c;
              }
            }
          }()
          : c,
        f = Kf()(),
        p = Object.getPrototypeOf || function (U) {
          return U.__proto__;
        },
        h = {},
        y = typeof Uint8Array > "u" ? r : p(Uint8Array),
        w = {
          "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": h,
          "%AsyncGenerator%": h,
          "%AsyncGeneratorFunction%": h,
          "%AsyncIteratorPrototype%": h,
          "%Atomics%": typeof Atomics > "u" ? r : Atomics,
          "%BigInt%": typeof BigInt > "u" ? r : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView > "u" ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": void 0,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
          "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
          "%FinalizationRegistry%": typeof FinalizationRegistry > "u"
            ? r
            : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": h,
          "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
          "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
          "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : r,
          "%JSON%": typeof JSON == "object" ? JSON : r,
          "%Map%": typeof Map > "u" ? r : Map,
          "%MapIteratorPrototype%": typeof Map > "u" || !f
            ? r
            : p(new Map()[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise > "u" ? r : Promise,
          "%Proxy%": typeof Proxy > "u" ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect > "u" ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set > "u" ? r : Set,
          "%SetIteratorPrototype%": typeof Set > "u" || !f
            ? r
            : p(new Set()[Symbol.iterator]()),
          "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u"
            ? r
            : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": f ? p(""[Symbol.iterator]()) : r,
          "%Symbol%": f ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": l,
          "%TypedArray%": y,
          "%TypeError%": i,
          "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
          "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u"
            ? r
            : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
          "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
          "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
          "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet,
        },
        b = u(function U(Q) {
          var W;
          if (Q === "%AsyncFunction%") W = s("async function () {}");
          else if (Q === "%GeneratorFunction%") W = s("function* () {}");
          else if (Q === "%AsyncGeneratorFunction%") {
            W = s("async function* () {}");
          } else if (Q === "%AsyncGenerator%") {
            var G = U("%AsyncGeneratorFunction%");
            G && (W = G.prototype);
          } else if (Q === "%AsyncIteratorPrototype%") {
            var K = U("%AsyncGenerator%");
            K && (W = p(K.prototype));
          }
          return w[Q] = W, W;
        }, "r"),
        A = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        P = No(),
        T = Zf(),
        S = P.call(E.call, Array.prototype.concat),
        M = P.call(E.apply, Array.prototype.splice),
        _ = P.call(E.call, String.prototype.replace),
        R = P.call(E.call, String.prototype.slice),
        F =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        $ = /\\(\\)?/g,
        J = u(function (U) {
          var Q = R(U, 0, 1), W = R(U, -1);
          if (Q === "%" && W !== "%") {
            throw new n("invalid intrinsic syntax, expected closing `%`");
          }
          if (W === "%" && Q !== "%") {
            throw new n("invalid intrinsic syntax, expected opening `%`");
          }
          var G = [];
          return _(U, F, function (K, V, ue, tt) {
            G[G.length] = ue ? _(tt, $, "$1") : V || K;
          }),
            G;
        }, "gt"),
        X = u(function (U, Q) {
          var W = U, G;
          if (T(A, W) && (G = A[W], W = "%" + G[0] + "%"), T(w, W)) {
            var K = w[W];
            if (K === h && (K = b(W)), typeof K > "u" && !Q) {
              throw new i(
                "intrinsic " + U +
                  " exists, but is not available. Please file an issue!",
              );
            }
            return { alias: G, name: W, value: K };
          }
          throw new n("intrinsic " + U + " does not exist!");
        }, "dt");
      t.exports = function (U, Q) {
        if (typeof U != "string" || U.length === 0) {
          throw new i("intrinsic name must be a non-empty string");
        }
        if (arguments.length > 1 && typeof Q != "boolean") {
          throw new i('"allowMissing" argument must be a boolean');
        }
        var W = J(U),
          G = W.length > 0 ? W[0] : "",
          K = X("%" + G + "%", Q),
          V = K.name,
          ue = K.value,
          tt = !1,
          cr = K.alias;
        cr && (G = cr[0], M(W, S([0, 1], cr)));
        for (var He = 1, rt = !0; He < W.length; He += 1) {
          var be = W[He], At = R(be, 0, 1), nt = R(be, -1);
          if (
            (At === '"' || At === "'" || At === "`" || nt === '"' ||
              nt === "'" || nt === "`") && At !== nt
          ) {
            throw new n("property names with quotes must have matching quotes");
          }
          if (
            (be === "constructor" || !rt) && (tt = !0),
              G += "." + be,
              V = "%" + G + "%",
              T(w, V)
          ) {
            ue = w[V];
          } else if (ue != null) {
            if (!(be in ue)) {
              if (!Q) {
                throw new i(
                  "base intrinsic for " + U +
                    " exists, but the property is not available.",
                );
              }
              return;
            }
            if (a && He + 1 >= W.length) {
              var Le = a(ue, be);
              rt = !!Le,
                rt && "get" in Le && !("originalValue" in Le.get)
                  ? ue = Le.get
                  : ue = ue[be];
            } else rt = T(ue, be), ue = ue[be];
            rt && !tt && (w[V] = ue);
          }
        }
        return ue;
      };
    }),
    Xf = te((e, t) => {
      "use strict";
      var r = No(),
        n = $o(),
        o = n("%Function.prototype.apply%"),
        i = n("%Function.prototype.call%"),
        s = n("%Reflect.apply%", !0) || r.call(i, o),
        a = n("%Object.getOwnPropertyDescriptor%", !0),
        c = n("%Object.defineProperty%", !0),
        l = n("%Math.max%");
      if (c) {
        try {
          c({}, "a", { value: 1 });
        } catch (p) {
          c = null;
        }
      }
      t.exports = function (p) {
        var h = s(r, i, arguments);
        if (a && c) {
          var y = a(h, "length");
          y.configurable &&
            c(h, "length", {
              value: 1 + l(0, p.length - (arguments.length - 1)),
            });
        }
        return h;
      };
      var f = u(function () {
        return s(r, o, arguments);
      }, "Qr");
      c ? c(t.exports, "apply", { value: f }) : t.exports.apply = f;
    }),
    jo = te((e, t) => {
      "use strict";
      var r = $o(), n = Xf(), o = n(r("String.prototype.indexOf"));
      t.exports = function (i, s) {
        var a = r(i, !!s);
        return typeof a == "function" && o(i, ".prototype.") > -1 ? n(a) : a;
      };
    }),
    ep = te((e, t) => {
      "use strict";
      var r = On()(),
        n = jo(),
        o = n("Object.prototype.toString"),
        i = u(function (c) {
          return r && c && typeof c == "object" && Symbol.toStringTag in c
            ? !1
            : o(c) === "[object Arguments]";
        }, "H"),
        s = u(function (c) {
          return i(c) ? !0 : c !== null && typeof c == "object" &&
            typeof c.length == "number" && c.length >= 0 &&
            o(c) !== "[object Array]" && o(c.callee) === "[object Function]";
        }, "ae"),
        a = function () {
          return i(arguments);
        }();
      i.isLegacyArguments = s, t.exports = a ? i : s;
    }),
    tp = te((e, t) => {
      "use strict";
      var r = Object.prototype.toString,
        n = E.prototype.toString,
        o = /^\s*(?:function)?\*/,
        i = On()(),
        s = Object.getPrototypeOf,
        a = u(function () {
          if (!i) return !1;
          try {
            return E("return function*() {}")();
          } catch (l) {}
        }, "jt"),
        c;
      t.exports = function (l) {
        if (typeof l != "function") return !1;
        if (o.test(n.call(l))) return !0;
        if (!i) {
          var f = r.call(l);
          return f === "[object GeneratorFunction]";
        }
        if (!s) return !1;
        if (typeof c > "u") {
          var p = a();
          c = p ? s(p) : !1;
        }
        return s(l) === c;
      };
    }),
    rp = te((e, t) => {
      "use strict";
      var r = E.prototype.toString,
        n = typeof Reflect == "object" && Reflect !== null && Reflect.apply,
        o,
        i;
      if (
        typeof n == "function" && typeof Object.defineProperty == "function"
      ) {
        try {
          o = Object.defineProperty({}, "length", {
            get: function () {
              throw i;
            },
          }),
            i = {},
            n(
              function () {
                throw 42;
              },
              null,
              o,
            );
        } catch (w) {
          w !== i && (n = null);
        }
      } else n = null;
      var s = /^\s*class\b/,
        a = u(function (w) {
          try {
            var b = r.call(w);
            return s.test(b);
          } catch (A) {
            return !1;
          }
        }, "Sr"),
        c = u(function (w) {
          try {
            return a(w) ? !1 : (r.call(w), !0);
          } catch (b) {
            return !1;
          }
        }, "Et"),
        l = Object.prototype.toString,
        f = "[object Function]",
        p = "[object GeneratorFunction]",
        h = typeof Symbol == "function" && !!Symbol.toStringTag,
        y = typeof document == "object" && typeof document.all > "u" &&
            document.all !== void 0
          ? document.all
          : {};
      t.exports = n
        ? function (w) {
          if (w === y) return !0;
          if (!w || typeof w != "function" && typeof w != "object") return !1;
          if (typeof w == "function" && !w.prototype) return !0;
          try {
            n(w, null, o);
          } catch (b) {
            if (b !== i) return !1;
          }
          return !a(w);
        }
        : function (w) {
          if (w === y) return !0;
          if (!w || typeof w != "function" && typeof w != "object") return !1;
          if (typeof w == "function" && !w.prototype) return !0;
          if (h) return c(w);
          if (a(w)) return !1;
          var b = l.call(w);
          return b === f || b === p;
        };
    }),
    sa = te((e, t) => {
      "use strict";
      var r = rp(),
        n = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty,
        i = u(function (l, f, p) {
          for (var h = 0, y = l.length; h < y; h++) {
            o.call(l, h) && (p == null ? f(l[h], h, l) : f.call(p, l[h], h, l));
          }
        }, "kt"),
        s = u(function (l, f, p) {
          for (var h = 0, y = l.length; h < y; h++) {
            p == null ? f(l.charAt(h), h, l) : f.call(p, l.charAt(h), h, l);
          }
        }, "Dt"),
        a = u(function (l, f, p) {
          for (var h in l) {
            o.call(l, h) && (p == null ? f(l[h], h, l) : f.call(p, l[h], h, l));
          }
        }, "xt"),
        c = u(function (l, f, p) {
          if (!r(f)) throw new TypeError("iterator must be a function");
          var h;
          arguments.length >= 3 && (h = p),
            n.call(l) === "[object Array]"
              ? i(l, f, h)
              : typeof l == "string"
              ? s(l, f, h)
              : a(l, f, h);
        }, "Nt");
      t.exports = c;
    }),
    aa = te((e, t) => {
      "use strict";
      var r = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray",
        ],
        n = typeof globalThis > "u" ? global : globalThis;
      t.exports = function () {
        for (
          var o = [], i = 0;
          i < r.length;
          i++
        ) {
          typeof n[r[i]] == "function" && (o[o.length] = r[i]);
        }
        return o;
      };
    }),
    ua = te((e, t) => {
      "use strict";
      var r = $o(), n = r("%Object.getOwnPropertyDescriptor%", !0);
      if (n) {
        try {
          n([], "length");
        } catch (o) {
          n = null;
        }
      }
      t.exports = n;
    }),
    ca = te((e, t) => {
      "use strict";
      var r = sa(),
        n = aa(),
        o = jo(),
        i = o("Object.prototype.toString"),
        s = On()(),
        a = typeof globalThis > "u" ? global : globalThis,
        c = n(),
        l = o("Array.prototype.indexOf", !0) || function (b, A) {
          for (var P = 0; P < b.length; P += 1) if (b[P] === A) return P;
          return -1;
        },
        f = o("String.prototype.slice"),
        p = {},
        h = ua(),
        y = Object.getPrototypeOf;
      s && h && y && r(c, function (b) {
        var A = new a[b]();
        if (Symbol.toStringTag in A) {
          var P = y(A), T = h(P, Symbol.toStringTag);
          if (!T) {
            var S = y(P);
            T = h(S, Symbol.toStringTag);
          }
          p[b] = T.get;
        }
      });
      var w = u(function (b) {
        var A = !1;
        return r(p, function (P, T) {
          if (!A) {
            try {
              A = P.call(b) === T;
            } catch (S) {}
          }
        }),
          A;
      }, "zt");
      t.exports = function (b) {
        if (!b || typeof b != "object") return !1;
        if (!s || !(Symbol.toStringTag in b)) {
          var A = f(i(b), 8, -1);
          return l(c, A) > -1;
        }
        return h ? w(b) : !1;
      };
    }),
    np = te((e, t) => {
      "use strict";
      var r = sa(),
        n = aa(),
        o = jo(),
        i = o("Object.prototype.toString"),
        s = On()(),
        a = typeof globalThis > "u" ? global : globalThis,
        c = n(),
        l = o("String.prototype.slice"),
        f = {},
        p = ua(),
        h = Object.getPrototypeOf;
      s && p && h && r(c, function (b) {
        if (typeof a[b] == "function") {
          var A = new a[b]();
          if (Symbol.toStringTag in A) {
            var P = h(A), T = p(P, Symbol.toStringTag);
            if (!T) {
              var S = h(P);
              T = p(S, Symbol.toStringTag);
            }
            f[b] = T.get;
          }
        }
      });
      var y = u(function (b) {
          var A = !1;
          return r(f, function (P, T) {
            if (!A) {
              try {
                var S = P.call(b);
                S === T && (A = S);
              } catch (M) {}
            }
          }),
            A;
        }, "Zt"),
        w = ca();
      t.exports = function (b) {
        return w(b)
          ? !s || !(Symbol.toStringTag in b) ? l(i(b), 8, -1) : y(b)
          : !1;
      };
    }),
    op = te((e) => {
      "use strict";
      var t = ep(), r = tp(), n = np(), o = ca();
      function i(C) {
        return C.call.bind(C);
      }
      u(i, "U");
      var s = typeof BigInt < "u",
        a = typeof Symbol < "u",
        c = i(Object.prototype.toString),
        l = i(Number.prototype.valueOf),
        f = i(String.prototype.valueOf),
        p = i(Boolean.prototype.valueOf);
      s && (h = i(BigInt.prototype.valueOf));
      var h;
      a && (y = i(Symbol.prototype.valueOf));
      var y;
      function w(C, Wc) {
        if (typeof C != "object") return !1;
        try {
          return Wc(C), !0;
        } catch (sd) {
          return !1;
        }
      }
      u(w, "N"),
        e.isArgumentsObject = t,
        e.isGeneratorFunction = r,
        e.isTypedArray = o;
      function b(C) {
        return typeof Promise < "u" && C instanceof Promise ||
          C !== null && typeof C == "object" && typeof C.then == "function" &&
            typeof C.catch == "function";
      }
      u(b, "tn"), e.isPromise = b;
      function A(C) {
        return typeof ArrayBuffer < "u" && ArrayBuffer.isView
          ? ArrayBuffer.isView(C)
          : o(C) || At(C);
      }
      u(A, "nn"), e.isArrayBufferView = A;
      function P(C) {
        return n(C) === "Uint8Array";
      }
      u(P, "on"), e.isUint8Array = P;
      function T(C) {
        return n(C) === "Uint8ClampedArray";
      }
      u(T, "an"), e.isUint8ClampedArray = T;
      function S(C) {
        return n(C) === "Uint16Array";
      }
      u(S, "fn"), e.isUint16Array = S;
      function M(C) {
        return n(C) === "Uint32Array";
      }
      u(M, "un"), e.isUint32Array = M;
      function _(C) {
        return n(C) === "Int8Array";
      }
      u(_, "yn"), e.isInt8Array = _;
      function R(C) {
        return n(C) === "Int16Array";
      }
      u(R, "sn"), e.isInt16Array = R;
      function F(C) {
        return n(C) === "Int32Array";
      }
      u(F, "pn"), e.isInt32Array = F;
      function $(C) {
        return n(C) === "Float32Array";
      }
      u($, "cn"), e.isFloat32Array = $;
      function J(C) {
        return n(C) === "Float64Array";
      }
      u(J, "ln"), e.isFloat64Array = J;
      function X(C) {
        return n(C) === "BigInt64Array";
      }
      u(X, "gn"), e.isBigInt64Array = X;
      function U(C) {
        return n(C) === "BigUint64Array";
      }
      u(U, "dn"), e.isBigUint64Array = U;
      function Q(C) {
        return c(C) === "[object Map]";
      }
      u(Q, "Q"), Q.working = typeof Map < "u" && Q(new Map());
      function W(C) {
        return typeof Map > "u" ? !1 : Q.working ? Q(C) : C instanceof Map;
      }
      u(W, "bn"), e.isMap = W;
      function G(C) {
        return c(C) === "[object Set]";
      }
      u(G, "X"), G.working = typeof Set < "u" && G(new Set());
      function K(C) {
        return typeof Set > "u" ? !1 : G.working ? G(C) : C instanceof Set;
      }
      u(K, "mn"), e.isSet = K;
      function V(C) {
        return c(C) === "[object WeakMap]";
      }
      u(V, "rr"), V.working = typeof WeakMap < "u" && V(new WeakMap());
      function ue(C) {
        return typeof WeakMap > "u"
          ? !1
          : V.working
          ? V(C)
          : C instanceof WeakMap;
      }
      u(ue, "An"), e.isWeakMap = ue;
      function tt(C) {
        return c(C) === "[object WeakSet]";
      }
      u(tt, "Br"), tt.working = typeof WeakSet < "u" && tt(new WeakSet());
      function cr(C) {
        return tt(C);
      }
      u(cr, "Sn"), e.isWeakSet = cr;
      function He(C) {
        return c(C) === "[object ArrayBuffer]";
      }
      u(He, "er"),
        He.working = typeof ArrayBuffer < "u" && He(new ArrayBuffer());
      function rt(C) {
        return typeof ArrayBuffer > "u"
          ? !1
          : He.working
          ? He(C)
          : C instanceof ArrayBuffer;
      }
      u(rt, "Me"), e.isArrayBuffer = rt;
      function be(C) {
        return c(C) === "[object DataView]";
      }
      u(be, "tr"),
        be.working = typeof ArrayBuffer < "u" && typeof DataView < "u" &&
          be(new DataView(new ArrayBuffer(1), 0, 1));
      function At(C) {
        return typeof DataView > "u"
          ? !1
          : be.working
          ? be(C)
          : C instanceof DataView;
      }
      u(At, "qe"), e.isDataView = At;
      var nt = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : void 0;
      function Le(C) {
        return c(C) === "[object SharedArrayBuffer]";
      }
      u(Le, "x");
      function Ni(C) {
        return typeof nt > "u"
          ? !1
          : (typeof Le.working > "u" && (Le.working = Le(new nt())),
            Le.working ? Le(C) : C instanceof nt);
      }
      u(Ni, "Ge"), e.isSharedArrayBuffer = Ni;
      function Lc(C) {
        return c(C) === "[object AsyncFunction]";
      }
      u(Lc, "hn"), e.isAsyncFunction = Lc;
      function qc(C) {
        return c(C) === "[object Map Iterator]";
      }
      u(qc, "vn"), e.isMapIterator = qc;
      function Uc(C) {
        return c(C) === "[object Set Iterator]";
      }
      u(Uc, "On"), e.isSetIterator = Uc;
      function Vc(C) {
        return c(C) === "[object Generator]";
      }
      u(Vc, "Pn"), e.isGeneratorObject = Vc;
      function Gc(C) {
        return c(C) === "[object WebAssembly.Module]";
      }
      u(Gc, "jn"), e.isWebAssemblyCompiledModule = Gc;
      function $i(C) {
        return w(C, l);
      }
      u($i, "$e"), e.isNumberObject = $i;
      function ji(C) {
        return w(C, f);
      }
      u(ji, "Ce"), e.isStringObject = ji;
      function Bi(C) {
        return w(C, p);
      }
      u(Bi, "We"), e.isBooleanObject = Bi;
      function Li(C) {
        return s && w(C, h);
      }
      u(Li, "_e"), e.isBigIntObject = Li;
      function qi(C) {
        return a && w(C, y);
      }
      u(qi, "ze"), e.isSymbolObject = qi;
      function zc(C) {
        return $i(C) || ji(C) || Bi(C) || Li(C) || qi(C);
      }
      u(zc, "wn"), e.isBoxedPrimitive = zc;
      function Jc(C) {
        return typeof Uint8Array < "u" && (rt(C) || Ni(C));
      }
      u(Jc, "En"),
        e.isAnyArrayBuffer = Jc,
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(
          function (C) {
            Object.defineProperty(e, C, {
              enumerable: !1,
              value: function () {
                throw new Error(C + " is not supported in userland");
              },
            });
          },
        );
    }),
    ip = te((e, t) => {
      t.exports = function (r) {
        return r instanceof x.Buffer;
      };
    }),
    sp = te((e, t) => {
      typeof Object.create == "function"
        ? t.exports = function (r, n) {
          n &&
            (r.super_ = n,
              r.prototype = Object.create(n.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
        }
        : t.exports = function (r, n) {
          if (n) {
            r.super_ = n;
            var o = u(function () {}, "n");
            o.prototype = n.prototype,
              r.prototype = new o(),
              r.prototype.constructor = r;
          }
        };
    }),
    la = Object.getOwnPropertyDescriptors || function (e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n]);
      }
      return r;
    },
    ap = /%[sdj%]/g;
  z.format = function (e) {
    if (!In(e)) {
      for (var t = [], r = 0; r < arguments.length; r++) {
        t.push(ft(arguments[r]));
      }
      return t.join(" ");
    }
    for (
      var r = 1,
        n = arguments,
        o = n.length,
        i = String(e).replace(ap, function (c) {
          if (c === "%%") return "%";
          if (r >= o) return c;
          switch (c) {
            case "%s":
              return String(n[r++]);
            case "%d":
              return Number(n[r++]);
            case "%j":
              try {
                return JSON.stringify(n[r++]);
              } catch (l) {
                return "[Circular]";
              }
            default:
              return c;
          }
        }),
        s = n[r];
      r < o;
      s = n[++r]
    ) {
      _n(s) || !Ht(s) ? i += " " + s : i += " " + ft(s);
    }
    return i;
  };
  z.deprecate = function (e, t) {
    if (typeof v < "u" && v.noDeprecation === !0) return e;
    if (typeof v > "u") {
      return function () {
        return z.deprecate(e, t).apply(this, arguments);
      };
    }
    var r = !1;
    function n() {
      if (!r) {
        if (v.throwDeprecation) throw new Error(t);
        v.traceDeprecation ? console.trace(t) : console.error(t), r = !0;
      }
      return e.apply(this, arguments);
    }
    return u(n, "n"), n;
  };
  var An = {}, fa = /^$/;
  v.env.NODE_DEBUG &&
    (Tn = v.env.NODE_DEBUG,
      Tn = Tn.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*")
        .replace(/,/g, "$|^").toUpperCase(),
      fa = new RegExp("^" + Tn + "$", "i"));
  var Tn;
  z.debuglog = function (e) {
    if (e = e.toUpperCase(), !An[e]) {
      if (fa.test(e)) {
        var t = v.pid;
        An[e] = function () {
          var r = z.format.apply(z, arguments);
          console.error("%s %d: %s", e, t, r);
        };
      } else An[e] = function () {};
    }
    return An[e];
  };
  function ft(e, t) {
    var r = { seen: [], stylize: cp };
    return arguments.length >= 3 && (r.depth = arguments[2]),
      arguments.length >= 4 && (r.colors = arguments[3]),
      Bo(t) ? r.showHidden = t : t && z._extend(r, t),
      _t(r.showHidden) && (r.showHidden = !1),
      _t(r.depth) && (r.depth = 2),
      _t(r.colors) && (r.colors = !1),
      _t(r.customInspect) && (r.customInspect = !0),
      r.colors && (r.stylize = up),
      Pn(r, e, r.depth);
  }
  u(ft, "A");
  z.inspect = ft;
  ft.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39],
  };
  ft.styles = {
    special: "cyan",
    number: "yellow",
    boolean: "yellow",
    undefined: "grey",
    null: "bold",
    string: "green",
    date: "magenta",
    regexp: "red",
  };
  function up(e, t) {
    var r = ft.styles[t];
    return r
      ? "\x1B[" + ft.colors[r][0] + "m" + e + "\x1B[" + ft.colors[r][1] + "m"
      : e;
  }
  u(up, "Fn");
  function cp(e, t) {
    return e;
  }
  u(cp, "In");
  function lp(e) {
    var t = {};
    return e.forEach(function (r, n) {
      t[r] = !0;
    }),
      t;
  }
  u(lp, "Bn");
  function Pn(e, t, r) {
    if (
      e.customInspect && t && Mn(t.inspect) && t.inspect !== z.inspect &&
      !(t.constructor && t.constructor.prototype === t)
    ) {
      var n = t.inspect(r, e);
      return In(n) || (n = Pn(e, n, r)), n;
    }
    var o = fp(e, t);
    if (o) return o;
    var i = Object.keys(t), s = lp(i);
    if (
      e.showHidden && (i = Object.getOwnPropertyNames(t)),
        Mr(t) && (i.indexOf("message") >= 0 || i.indexOf("description") >= 0)
    ) {
      return Ro(t);
    }
    if (i.length === 0) {
      if (Mn(t)) {
        var a = t.name ? ": " + t.name : "";
        return e.stylize("[Function" + a + "]", "special");
      }
      if (Tr(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
      if (Sn(t)) return e.stylize(Date.prototype.toString.call(t), "date");
      if (Mr(t)) return Ro(t);
    }
    var c = "", l = !1, f = ["{", "}"];
    if (pa(t) && (l = !0, f = ["[", "]"]), Mn(t)) {
      var p = t.name ? ": " + t.name : "";
      c = " [Function" + p + "]";
    }
    if (
      Tr(t) && (c = " " + RegExp.prototype.toString.call(t)),
        Sn(t) && (c = " " + Date.prototype.toUTCString.call(t)),
        Mr(t) && (c = " " + Ro(t)),
        i.length === 0 && (!l || t.length == 0)
    ) {
      return f[0] + c + f[1];
    }
    if (r < 0) {
      return Tr(t)
        ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
        : e.stylize("[Object]", "special");
    }
    e.seen.push(t);
    var h;
    return l ? h = pp(e, t, r, s, i) : h = i.map(function (y) {
      return ko(e, t, r, s, y, l);
    }),
      e.seen.pop(),
      mp(h, c, f);
  }
  u(Pn, "ar");
  function fp(e, t) {
    if (_t(t)) return e.stylize("undefined", "undefined");
    if (In(t)) {
      var r = "'" +
        JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(
          /\\"/g,
          '"',
        ) + "'";
      return e.stylize(r, "string");
    }
    if (ma(t)) return e.stylize("" + t, "number");
    if (Bo(t)) return e.stylize("" + t, "boolean");
    if (_n(t)) return e.stylize("null", "null");
  }
  u(fp, "Un");
  function Ro(e) {
    return "[" + Error.prototype.toString.call(e) + "]";
  }
  u(Ro, "Rr");
  function pp(e, t, r, n, o) {
    for (var i = [], s = 0, a = t.length; s < a; ++s) {
      ga(t, String(s)) ? i.push(ko(e, t, r, n, String(s), !0)) : i.push("");
    }
    return o.forEach(function (c) {
      c.match(/^\d+$/) || i.push(ko(e, t, r, n, c, !0));
    }),
      i;
  }
  u(pp, "Rn");
  function ko(e, t, r, n, o, i) {
    var s, a, c;
    if (
      c = Object.getOwnPropertyDescriptor(t, o) || { value: t[o] },
        c.get
          ? c.set
            ? a = e.stylize("[Getter/Setter]", "special")
            : a = e.stylize("[Getter]", "special")
          : c.set && (a = e.stylize("[Setter]", "special")),
        ga(n, o) || (s = "[" + o + "]"),
        a ||
        (e.seen.indexOf(c.value) < 0
          ? (_n(r) ? a = Pn(e, c.value, null) : a = Pn(e, c.value, r - 1),
            a.indexOf(`
`) > -1 && (i
                ? a = a.split(`
`).map(function (l) {
                  return "  " + l;
                }).join(`
`).substr(2)
                : a = `
` + a.split(`
`).map(function (l) {
                  return "   " + l;
                }).join(`
`)))
          : a = e.stylize("[Circular]", "special")),
        _t(s)
    ) {
      if (i && o.match(/^\d+$/)) return a;
      s = JSON.stringify("" + o),
        s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name"))
          : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(
            /(^"|"$)/g,
            "'",
          ),
            s = e.stylize(s, "string"));
    }
    return s + ": " + a;
  }
  u(ko, "Dr");
  function mp(e, t, r) {
    var n = 0,
      o = e.reduce(function (i, s) {
        return n++,
          s.indexOf(`
`) >= 0 && n++,
          i + s.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
    return o > 60
      ? r[0] + (t === "" ? "" : t + `
 `) + " " + e.join(`,
  `) + " " + r[1]
      : r[0] + t + " " + e.join(", ") + " " + r[1];
  }
  u(mp, "kn");
  z.types = op();
  function pa(e) {
    return Array.isArray(e);
  }
  u(pa, "Ke");
  z.isArray = pa;
  function Bo(e) {
    return typeof e == "boolean";
  }
  u(Bo, "xr");
  z.isBoolean = Bo;
  function _n(e) {
    return e === null;
  }
  u(_n, "ur");
  z.isNull = _n;
  function gp(e) {
    return e == null;
  }
  u(gp, "Dn");
  z.isNullOrUndefined = gp;
  function ma(e) {
    return typeof e == "number";
  }
  u(ma, "Qe");
  z.isNumber = ma;
  function In(e) {
    return typeof e == "string";
  }
  u(In, "yr");
  z.isString = In;
  function dp(e) {
    return typeof e == "symbol";
  }
  u(dp, "xn");
  z.isSymbol = dp;
  function _t(e) {
    return e === void 0;
  }
  u(_t, "P");
  z.isUndefined = _t;
  function Tr(e) {
    return Ht(e) && Lo(e) === "[object RegExp]";
  }
  u(Tr, "M");
  z.isRegExp = Tr;
  z.types.isRegExp = Tr;
  function Ht(e) {
    return typeof e == "object" && e !== null;
  }
  u(Ht, "R");
  z.isObject = Ht;
  function Sn(e) {
    return Ht(e) && Lo(e) === "[object Date]";
  }
  u(Sn, "fr");
  z.isDate = Sn;
  z.types.isDate = Sn;
  function Mr(e) {
    return Ht(e) && (Lo(e) === "[object Error]" || e instanceof Error);
  }
  u(Mr, "q");
  z.isError = Mr;
  z.types.isNativeError = Mr;
  function Mn(e) {
    return typeof e == "function";
  }
  u(Mn, "ir");
  z.isFunction = Mn;
  function hp(e) {
    return e === null || typeof e == "boolean" || typeof e == "number" ||
      typeof e == "string" || typeof e == "symbol" || typeof e > "u";
  }
  u(hp, "Nn");
  z.isPrimitive = hp;
  z.isBuffer = ip();
  function Lo(e) {
    return Object.prototype.toString.call(e);
  }
  u(Lo, "Nr");
  function Do(e) {
    return e < 10 ? "0" + e.toString(10) : e.toString(10);
  }
  u(Do, "kr");
  var yp = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  function bp() {
    var e = new Date(),
      t = [Do(e.getHours()), Do(e.getMinutes()), Do(e.getSeconds())].join(":");
    return [e.getDate(), yp[e.getMonth()], t].join(" ");
  }
  u(bp, "qn");
  z.log = function () {
    console.log("%s - %s", bp(), z.format.apply(z, arguments));
  };
  z.inherits = sp();
  z._extend = function (e, t) {
    if (!t || !Ht(t)) return e;
    for (var r = Object.keys(t), n = r.length; n--;) e[r[n]] = t[r[n]];
    return e;
  };
  function ga(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  u(ga, "Xe");
  var Ot = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
  z.promisify = function (e) {
    if (typeof e != "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    if (Ot && e[Ot]) {
      var t = e[Ot];
      if (typeof t != "function") {
        throw new TypeError(
          'The "util.promisify.custom" argument must be of type Function',
        );
      }
      return Object.defineProperty(t, Ot, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0,
      }),
        t;
    }
    function t() {
      for (
        var r,
          n,
          o = new Promise(function (a, c) {
            r = a, n = c;
          }),
          i = [],
          s = 0;
        s < arguments.length;
        s++
      ) {
        i.push(arguments[s]);
      }
      i.push(function (a, c) {
        a ? n(a) : r(c);
      });
      try {
        e.apply(this, i);
      } catch (a) {
        n(a);
      }
      return o;
    }
    return u(t, "t"),
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Ot &&
      Object.defineProperty(t, Ot, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0,
      }),
      Object.defineProperties(t, la(e));
  };
  z.promisify.custom = Ot;
  function wp(e, t) {
    if (!e) {
      var r = new Error("Promise was rejected with a falsy value");
      r.reason = e, e = r;
    }
    return t(e);
  }
  u(wp, "Gn");
  function vp(e) {
    if (typeof e != "function") {
      throw new TypeError('The "original" argument must be of type Function');
    }
    function t() {
      for (var r = [], n = 0; n < arguments.length; n++) r.push(arguments[n]);
      var o = r.pop();
      if (typeof o != "function") {
        throw new TypeError("The last argument must be of type Function");
      }
      var i = this,
        s = u(function () {
          return o.apply(i, arguments);
        }, "i");
      e.apply(this, r).then(function (a) {
        v.nextTick(s.bind(null, null, a));
      }, function (a) {
        v.nextTick(wp.bind(null, a, s));
      });
    }
    return u(t, "e"),
      Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
      Object.defineProperties(t, la(e)),
      t;
  }
  u(vp, "$n");
  z.callbackify = vp;
});
var ha = H((qd, da) => {
  d();
  m();
  g();
  var Qt = 1e3,
    Kt = Qt * 60,
    Yt = Kt * 60,
    It = Yt * 24,
    xp = It * 7,
    Ep = It * 365.25;
  da.exports = function (e, t) {
    t = t || {};
    var r = typeof e;
    if (r === "string" && e.length > 0) return Ap(e);
    if (r === "number" && isFinite(e)) return t.long ? Mp(e) : Tp(e);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(e),
    );
  };
  function Ap(e) {
    if (e = String(e), !(e.length > 100)) {
      var t =
        /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
          .exec(e);
      if (!!t) {
        var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
        switch (n) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return r * Ep;
          case "weeks":
          case "week":
          case "w":
            return r * xp;
          case "days":
          case "day":
          case "d":
            return r * It;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return r * Yt;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return r * Kt;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return r * Qt;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return r;
          default:
            return;
        }
      }
    }
  }
  u(Ap, "parse");
  function Tp(e) {
    var t = Math.abs(e);
    return t >= It
      ? Math.round(e / It) + "d"
      : t >= Yt
      ? Math.round(e / Yt) + "h"
      : t >= Kt
      ? Math.round(e / Kt) + "m"
      : t >= Qt
      ? Math.round(e / Qt) + "s"
      : e + "ms";
  }
  u(Tp, "fmtShort");
  function Mp(e) {
    var t = Math.abs(e);
    return t >= It
      ? Cn(e, t, It, "day")
      : t >= Yt
      ? Cn(e, t, Yt, "hour")
      : t >= Kt
      ? Cn(e, t, Kt, "minute")
      : t >= Qt
      ? Cn(e, t, Qt, "second")
      : e + " ms";
  }
  u(Mp, "fmtLong");
  function Cn(e, t, r, n) {
    var o = t >= r * 1.5;
    return Math.round(e / r) + " " + n + (o ? "s" : "");
  }
  u(Cn, "plural");
});
var Uo = H((Ud, ya) => {
  d();
  m();
  g();
  function Pp(e) {
    r.debug = r,
      r.default = r,
      r.coerce = c,
      r.disable = i,
      r.enable = o,
      r.enabled = s,
      r.humanize = ha(),
      r.destroy = l,
      Object.keys(e).forEach((f) => {
        r[f] = e[f];
      }),
      r.names = [],
      r.skips = [],
      r.formatters = {};
    function t(f) {
      let p = 0;
      for (let h = 0; h < f.length; h++) {
        p = (p << 5) - p + f.charCodeAt(h), p |= 0;
      }
      return r.colors[Math.abs(p) % r.colors.length];
    }
    u(t, "selectColor"), r.selectColor = t;
    function r(f) {
      let p, h = null, y, w;
      function b(...A) {
        if (!b.enabled) return;
        let P = b, T = Number(new Date()), S = T - (p || T);
        P.diff = S,
          P.prev = p,
          P.curr = T,
          p = T,
          A[0] = r.coerce(A[0]),
          typeof A[0] != "string" && A.unshift("%O");
        let M = 0;
        A[0] = A[0].replace(/%([a-zA-Z%])/g, (R, F) => {
          if (R === "%%") return "%";
          M++;
          let $ = r.formatters[F];
          if (typeof $ == "function") {
            let J = A[M];
            R = $.call(P, J), A.splice(M, 1), M--;
          }
          return R;
        }),
          r.formatArgs.call(P, A),
          (P.log || r.log).apply(P, A);
      }
      return u(b, "debug"),
        b.namespace = f,
        b.useColors = r.useColors(),
        b.color = r.selectColor(f),
        b.extend = n,
        b.destroy = r.destroy,
        Object.defineProperty(b, "enabled", {
          enumerable: !0,
          configurable: !1,
          get: () =>
            h !== null
              ? h
              : (y !== r.namespaces && (y = r.namespaces, w = r.enabled(f)), w),
          set: (A) => {
            h = A;
          },
        }),
        typeof r.init == "function" && r.init(b),
        b;
    }
    u(r, "createDebug");
    function n(f, p) {
      let h = r(this.namespace + (typeof p == "undefined" ? ":" : p) + f);
      return h.log = this.log, h;
    }
    u(n, "extend");
    function o(f) {
      r.save(f), r.namespaces = f, r.names = [], r.skips = [];
      let p, h = (typeof f == "string" ? f : "").split(/[\s,]+/), y = h.length;
      for (p = 0; p < y; p++) {
        !h[p] ||
          (f = h[p].replace(/\*/g, ".*?"),
            f[0] === "-"
              ? r.skips.push(new RegExp("^" + f.slice(1) + "$"))
              : r.names.push(new RegExp("^" + f + "$")));
      }
    }
    u(o, "enable");
    function i() {
      let f = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(
        ",",
      );
      return r.enable(""), f;
    }
    u(i, "disable");
    function s(f) {
      if (f[f.length - 1] === "*") return !0;
      let p, h;
      for (p = 0, h = r.skips.length; p < h; p++) {
        if (r.skips[p].test(f)) return !1;
      }
      for (p = 0, h = r.names.length; p < h; p++) {
        if (r.names[p].test(f)) return !0;
      }
      return !1;
    }
    u(s, "enabled");
    function a(f) {
      return f.toString().substring(2, f.toString().length - 2).replace(
        /\.\*\?$/,
        "*",
      );
    }
    u(a, "toNamespace");
    function c(f) {
      return f instanceof Error ? f.stack || f.message : f;
    }
    u(c, "coerce");
    function l() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
      );
    }
    return u(l, "destroy"), r.enable(r.load()), r;
  }
  u(Pp, "setup");
  ya.exports = Pp;
});
var ba = H((Te, Fn) => {
  d();
  m();
  g();
  Te.formatArgs = Op;
  Te.save = _p;
  Te.load = Ip;
  Te.useColors = Sp;
  Te.storage = Cp();
  Te.destroy = (() => {
    let e = !1;
    return () => {
      e ||
        (e = !0,
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
          ));
    };
  })();
  Te.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33",
  ];
  function Sp() {
    return typeof window != "undefined" && window.process &&
        (window.process.type === "renderer" || window.process.__nwjs)
      ? !0
      : typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ? !1
      : typeof document != "undefined" && document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance ||
        typeof window != "undefined" && window.console &&
          (window.console.firebug ||
            window.console.exception && window.console.table) ||
        typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31 ||
        typeof navigator != "undefined" && navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  u(Sp, "useColors");
  function Op(e) {
    if (
      e[0] = (this.useColors ? "%c" : "") + this.namespace +
        (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") +
        "+" + Fn.exports.humanize(this.diff), !this.useColors
    ) {
      return;
    }
    let t = "color: " + this.color;
    e.splice(1, 0, t, "color: inherit");
    let r = 0, n = 0;
    e[0].replace(/%[a-zA-Z%]/g, (o) => {
      o !== "%%" && (r++, o === "%c" && (n = r));
    }), e.splice(n, 0, t);
  }
  u(Op, "formatArgs");
  Te.log = console.debug || console.log || (() => {});
  function _p(e) {
    try {
      e ? Te.storage.setItem("debug", e) : Te.storage.removeItem("debug");
    } catch (t) {}
  }
  u(_p, "save");
  function Ip() {
    let e;
    try {
      e = Te.storage.getItem("debug");
    } catch (t) {}
    return !e && typeof v != "undefined" && "env" in v && (e = v.env.DEBUG), e;
  }
  u(Ip, "load");
  function Cp() {
    try {
      return localStorage;
    } catch (e) {}
  }
  u(Cp, "localstorage");
  Fn.exports = Uo()(Te);
  var { formatters: Fp } = Fn.exports;
  Fp.j = function (e) {
    try {
      return JSON.stringify(e);
    } catch (t) {
      return "[UnexpectedJSONParseError]: " + t.message;
    }
  };
});
var wa = H((Rn) => {
  d();
  m();
  g();
  Rn.isatty = function () {
    return !1;
  };
  function Rp() {
    throw new Error("tty.ReadStream is not implemented");
  }
  u(Rp, "t");
  Rn.ReadStream = Rp;
  function Dp() {
    throw new Error("tty.WriteStream is not implemented");
  }
  u(Dp, "e");
  Rn.WriteStream = Dp;
});
var xa = H((se, kn) => {
  d();
  m();
  g();
  var kp = wa(), Dn = qo();
  se.init = Up;
  se.log = Bp;
  se.formatArgs = $p;
  se.save = Lp;
  se.load = qp;
  se.useColors = Np;
  se.destroy = Dn.deprecate(
    () => {},
    "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
  );
  se.colors = [6, 2, 3, 4, 5, 1];
  try {
    let e = yo();
    e && (e.stderr || e).level >= 2 &&
      (se.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221,
      ]);
  } catch (e) {}
  se.inspectOpts = Object.keys(v.env).filter((e) => /^debug_/i.test(e)).reduce(
    (e, t) => {
      let r = t.substring(6).toLowerCase().replace(
          /_([a-z])/g,
          (o, i) => i.toUpperCase(),
        ),
        n = v.env[t];
      return /^(yes|on|true|enabled)$/i.test(n)
        ? n = !0
        : /^(no|off|false|disabled)$/i.test(n)
        ? n = !1
        : n === "null"
        ? n = null
        : n = Number(n),
        e[r] = n,
        e;
    },
    {},
  );
  function Np() {
    return "colors" in se.inspectOpts
      ? Boolean(se.inspectOpts.colors)
      : kp.isatty(v.stderr.fd);
  }
  u(Np, "useColors");
  function $p(e) {
    let { namespace: t, useColors: r } = this;
    if (r) {
      let n = this.color,
        o = "\x1B[3" + (n < 8 ? n : "8;5;" + n),
        i = `  ${o};1m${t} \x1B[0m`;
      e[0] = i + e[0].split(`
`).join(
        `
` + i,
      ), e.push(o + "m+" + kn.exports.humanize(this.diff) + "\x1B[0m");
    } else e[0] = jp() + t + " " + e[0];
  }
  u($p, "formatArgs");
  function jp() {
    return se.inspectOpts.hideDate ? "" : new Date().toISOString() + " ";
  }
  u(jp, "getDate");
  function Bp(...e) {
    return v.stderr.write(
      Dn.format(...e) + `
`,
    );
  }
  u(Bp, "log");
  function Lp(e) {
    e ? v.env.DEBUG = e : delete v.env.DEBUG;
  }
  u(Lp, "save");
  function qp() {
    return v.env.DEBUG;
  }
  u(qp, "load");
  function Up(e) {
    e.inspectOpts = {};
    let t = Object.keys(se.inspectOpts);
    for (let r = 0; r < t.length; r++) {
      e.inspectOpts[t[r]] = se.inspectOpts[t[r]];
    }
  }
  u(Up, "init");
  kn.exports = Uo()(se);
  var { formatters: va } = kn.exports;
  va.o = function (e) {
    return this.inspectOpts.colors = this.useColors,
      Dn.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
  };
  va.O = function (e) {
    return this.inspectOpts.colors = this.useColors,
      Dn.inspect(e, this.inspectOpts);
  };
});
var Ea = H((Gd, Vo) => {
  d();
  m();
  g();
  typeof v == "undefined" || v.type === "renderer" || v.browser === !0 ||
    v.__nwjs
    ? Vo.exports = ba()
    : Vo.exports = xa();
});
function Gp(e) {
  let t = (0, zo.default)(e),
    r = Object.assign(
      (
        ...n
      ) => (t.log = r.log,
        n.length !== 0 && Go.push([e, ...n]),
        Go.length > Vp && Go.shift(),
        t("", ...n)),
      t,
    );
  return r;
}
var zo,
  Vp,
  Go,
  zp,
  pt,
  Nn = fr(() => {
    "use strict";
    d();
    m();
    g();
    zo = Z(Ea()), Vp = 100, Go = [];
    u(Gp, "debugCall");
    zp = Object.assign(Gp, zo.default), pt = zp;
  });
var Aa = H(() => {
  d();
  m();
  g();
});
var Ma = H((Kd, Jo) => {
  "use strict";
  d();
  m();
  g();
  var Jp = Object.prototype.hasOwnProperty, ge = "~";
  function Pr() {}
  u(Pr, "_");
  Object.create &&
    (Pr.prototype = Object.create(null), new Pr().__proto__ || (ge = !1));
  function Wp(e, t, r) {
    this.fn = e, this.context = t, this.once = r || !1;
  }
  u(Wp, "g");
  function Ta(e, t, r, n, o) {
    if (typeof r != "function") {
      throw new TypeError("The listener must be a function");
    }
    var i = new Wp(r, n || e, o), s = ge ? ge + t : t;
    return e._events[s]
      ? e._events[s].fn
        ? e._events[s] = [e._events[s], i]
        : e._events[s].push(i)
      : (e._events[s] = i, e._eventsCount++),
      e;
  }
  u(Ta, "w");
  function $n(e, t) {
    --e._eventsCount === 0 ? e._events = new Pr() : delete e._events[t];
  }
  u($n, "y");
  function fe() {
    this._events = new Pr(), this._eventsCount = 0;
  }
  u(fe, "u");
  fe.prototype.eventNames = function () {
    var e = [], t, r;
    if (this._eventsCount === 0) return e;
    for (r in t = this._events) Jp.call(t, r) && e.push(ge ? r.slice(1) : r);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  fe.prototype.listeners = function (e) {
    var t = ge ? ge + e : e, r = this._events[t];
    if (!r) return [];
    if (r.fn) return [r.fn];
    for (var n = 0, o = r.length, i = new Array(o); n < o; n++) i[n] = r[n].fn;
    return i;
  };
  fe.prototype.listenerCount = function (e) {
    var t = ge ? ge + e : e, r = this._events[t];
    return r ? r.fn ? 1 : r.length : 0;
  };
  fe.prototype.emit = function (e, t, r, n, o, i) {
    var s = ge ? ge + e : e;
    if (!this._events[s]) return !1;
    var a = this._events[s], c = arguments.length, l, f;
    if (a.fn) {
      switch (a.once && this.removeListener(e, a.fn, void 0, !0), c) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, r), !0;
        case 4:
          return a.fn.call(a.context, t, r, n), !0;
        case 5:
          return a.fn.call(a.context, t, r, n, o), !0;
        case 6:
          return a.fn.call(a.context, t, r, n, o, i), !0;
      }
      for (f = 1, l = new Array(c - 1); f < c; f++) l[f - 1] = arguments[f];
      a.fn.apply(a.context, l);
    } else {
      var p = a.length, h;
      for (f = 0; f < p; f++) {
        switch (a[f].once && this.removeListener(e, a[f].fn, void 0, !0), c) {
          case 1:
            a[f].fn.call(a[f].context);
            break;
          case 2:
            a[f].fn.call(a[f].context, t);
            break;
          case 3:
            a[f].fn.call(a[f].context, t, r);
            break;
          case 4:
            a[f].fn.call(a[f].context, t, r, n);
            break;
          default:
            if (!l) {
              for (h = 1, l = new Array(c - 1); h < c; h++) {
                l[h - 1] = arguments[h];
              }
            }
            a[f].fn.apply(a[f].context, l);
        }
      }
    }
    return !0;
  };
  fe.prototype.on = function (e, t, r) {
    return Ta(this, e, t, r, !1);
  };
  fe.prototype.once = function (e, t, r) {
    return Ta(this, e, t, r, !0);
  };
  fe.prototype.removeListener = function (e, t, r, n) {
    var o = ge ? ge + e : e;
    if (!this._events[o]) return this;
    if (!t) return $n(this, o), this;
    var i = this._events[o];
    if (i.fn) {
      i.fn === t && (!n || i.once) && (!r || i.context === r) && $n(this, o);
    } else {
      for (var s = 0, a = [], c = i.length; s < c; s++) {
        (i[s].fn !== t || n && !i[s].once || r && i[s].context !== r) &&
          a.push(i[s]);
      }
      a.length ? this._events[o] = a.length === 1 ? a[0] : a : $n(this, o);
    }
    return this;
  };
  fe.prototype.removeAllListeners = function (e) {
    var t;
    return e
      ? (t = ge ? ge + e : e, this._events[t] && $n(this, t))
      : (this._events = new Pr(), this._eventsCount = 0),
      this;
  };
  fe.prototype.off = fe.prototype.removeListener;
  fe.prototype.addListener = fe.prototype.on;
  fe.prefixed = ge;
  fe.EventEmitter = fe;
  typeof Jo < "u" && (Jo.exports = fe);
});
var Pa = {};
oo(Pa, { default: () => Wo, existsSync: () => Hp });
function Hp() {
  return !1;
}
var Qp,
  Wo,
  Ho = fr(() => {
    d();
    m();
    g();
    u(Hp, "existsSync");
    Qp = {
      existsSync() {
        return !1;
      },
    }, Wo = Qp;
  });
var Qo = H((Yd, Oa) => {
  "use strict";
  d();
  m();
  g();
  function Ve(e) {
    if (typeof e != "string") {
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(e),
      );
    }
  }
  u(Ve, "c");
  function Sa(e, t) {
    for (var r = "", n = 0, o = -1, i = 0, s, a = 0; a <= e.length; ++a) {
      if (a < e.length) s = e.charCodeAt(a);
      else {
        if (s === 47) break;
        s = 47;
      }
      if (s === 47) {
        if (!(o === a - 1 || i === 1)) {
          if (o !== a - 1 && i === 2) {
            if (
              r.length < 2 || n !== 2 || r.charCodeAt(r.length - 1) !== 46 ||
              r.charCodeAt(r.length - 2) !== 46
            ) {
              if (r.length > 2) {
                var c = r.lastIndexOf("/");
                if (c !== r.length - 1) {
                  c === -1
                    ? (r = "", n = 0)
                    : (r = r.slice(0, c),
                      n = r.length - 1 - r.lastIndexOf("/")),
                    o = a,
                    i = 0;
                  continue;
                }
              } else if (r.length === 2 || r.length === 1) {
                r = "", n = 0, o = a, i = 0;
                continue;
              }
            }
            t && (r.length > 0 ? r += "/.." : r = "..", n = 2);
          } else {
            r.length > 0 ? r += "/" + e.slice(o + 1, a) : r = e.slice(o + 1, a),
              n = a - o - 1;
          }
        }
        o = a, i = 0;
      } else s === 46 && i !== -1 ? ++i : i = -1;
    }
    return r;
  }
  u(Sa, "A");
  function Kp(e, t) {
    var r = t.dir || t.root, n = t.base || (t.name || "") + (t.ext || "");
    return r ? r === t.root ? r + n : r + e + n : n;
  }
  u(Kp, "b");
  var Zt = {
    resolve: function () {
      for (
        var e = "", t = !1, r, n = arguments.length - 1;
        n >= -1 && !t;
        n--
      ) {
        var o;
        n >= 0 ? o = arguments[n] : (r === void 0 && (r = v.cwd()), o = r),
          Ve(o),
          o.length !== 0 && (e = o + "/" + e, t = o.charCodeAt(0) === 47);
      }
      return e = Sa(e, !t),
        t ? e.length > 0 ? "/" + e : "/" : e.length > 0 ? e : ".";
    },
    normalize: function (e) {
      if (Ve(e), e.length === 0) return ".";
      var t = e.charCodeAt(0) === 47, r = e.charCodeAt(e.length - 1) === 47;
      return e = Sa(e, !t),
        e.length === 0 && !t && (e = "."),
        e.length > 0 && r && (e += "/"),
        t ? "/" + e : e;
    },
    isAbsolute: function (e) {
      return Ve(e), e.length > 0 && e.charCodeAt(0) === 47;
    },
    join: function () {
      if (arguments.length === 0) return ".";
      for (var e, t = 0; t < arguments.length; ++t) {
        var r = arguments[t];
        Ve(r), r.length > 0 && (e === void 0 ? e = r : e += "/" + r);
      }
      return e === void 0 ? "." : Zt.normalize(e);
    },
    relative: function (e, t) {
      if (
        Ve(e), Ve(t), e === t || (e = Zt.resolve(e), t = Zt.resolve(t), e === t)
      ) {
        return "";
      }
      for (var r = 1; r < e.length && e.charCodeAt(r) === 47; ++r);
      for (
        var n = e.length, o = n - r, i = 1;
        i < t.length && t.charCodeAt(i) === 47;
        ++i
      );
      for (
        var s = t.length, a = s - i, c = o < a ? o : a, l = -1, f = 0;
        f <= c;
        ++f
      ) {
        if (f === c) {
          if (a > c) {
            if (t.charCodeAt(i + f) === 47) return t.slice(i + f + 1);
            if (f === 0) return t.slice(i + f);
          } else {
            o > c && (e.charCodeAt(r + f) === 47 ? l = f : f === 0 && (l = 0));
          }
          break;
        }
        var p = e.charCodeAt(r + f), h = t.charCodeAt(i + f);
        if (p !== h) break;
        p === 47 && (l = f);
      }
      var y = "";
      for (f = r + l + 1; f <= n; ++f) {
        (f === n || e.charCodeAt(f) === 47) &&
          (y.length === 0 ? y += ".." : y += "/..");
      }
      return y.length > 0
        ? y + t.slice(i + l)
        : (i += l, t.charCodeAt(i) === 47 && ++i, t.slice(i));
    },
    _makeLong: function (e) {
      return e;
    },
    dirname: function (e) {
      if (Ve(e), e.length === 0) return ".";
      for (
        var t = e.charCodeAt(0), r = t === 47, n = -1, o = !0, i = e.length - 1;
        i >= 1;
        --i
      ) {
        if (t = e.charCodeAt(i), t === 47) {
          if (!o) {
            n = i;
            break;
          }
        } else o = !1;
      }
      return n === -1 ? r ? "/" : "." : r && n === 1 ? "//" : e.slice(0, n);
    },
    basename: function (e, t) {
      if (t !== void 0 && typeof t != "string") {
        throw new TypeError(
          '"ext" argument must be a string',
        );
      }
      Ve(e);
      var r = 0, n = -1, o = !0, i;
      if (t !== void 0 && t.length > 0 && t.length <= e.length) {
        if (t.length === e.length && t === e) return "";
        var s = t.length - 1, a = -1;
        for (i = e.length - 1; i >= 0; --i) {
          var c = e.charCodeAt(i);
          if (c === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else {
            a === -1 && (o = !1, a = i + 1),
              s >= 0 &&
              (c === t.charCodeAt(s) ? --s === -1 && (n = i) : (s = -1, n = a));
          }
        }
        return r === n ? n = a : n === -1 && (n = e.length), e.slice(r, n);
      } else {
        for (
          i = e.length - 1;
          i >= 0;
          --i
        ) {
          if (e.charCodeAt(i) === 47) {
            if (!o) {
              r = i + 1;
              break;
            }
          } else n === -1 && (o = !1, n = i + 1);
        }
        return n === -1 ? "" : e.slice(r, n);
      }
    },
    extname: function (e) {
      Ve(e);
      for (
        var t = -1, r = 0, n = -1, o = !0, i = 0, s = e.length - 1;
        s >= 0;
        --s
      ) {
        var a = e.charCodeAt(s);
        if (a === 47) {
          if (!o) {
            r = s + 1;
            break;
          }
          continue;
        }
        n === -1 && (o = !1, n = s + 1),
          a === 46
            ? t === -1 ? t = s : i !== 1 && (i = 1)
            : t !== -1 && (i = -1);
      }
      return t === -1 || n === -1 || i === 0 ||
          i === 1 && t === n - 1 && t === r + 1
        ? ""
        : e.slice(t, n);
    },
    format: function (e) {
      if (e === null || typeof e != "object") {
        throw new TypeError(
          'The "pathObject" argument must be of type Object. Received type ' +
            typeof e,
        );
      }
      return Kp("/", e);
    },
    parse: function (e) {
      Ve(e);
      var t = { root: "", dir: "", base: "", ext: "", name: "" };
      if (e.length === 0) return t;
      var r = e.charCodeAt(0), n = r === 47, o;
      n ? (t.root = "/", o = 1) : o = 0;
      for (
        var i = -1, s = 0, a = -1, c = !0, l = e.length - 1, f = 0;
        l >= o;
        --l
      ) {
        if (r = e.charCodeAt(l), r === 47) {
          if (!c) {
            s = l + 1;
            break;
          }
          continue;
        }
        a === -1 && (c = !1, a = l + 1),
          r === 46
            ? i === -1 ? i = l : f !== 1 && (f = 1)
            : i !== -1 && (f = -1);
      }
      return i === -1 || a === -1 || f === 0 ||
          f === 1 && i === a - 1 && i === s + 1
        ? a !== -1 &&
          (s === 0 && n
            ? t.base = t.name = e.slice(1, a)
            : t.base = t.name = e.slice(s, a))
        : (s === 0 && n
          ? (t.name = e.slice(1, i), t.base = e.slice(1, a))
          : (t.name = e.slice(s, i), t.base = e.slice(s, a)),
          t.ext = e.slice(i, a)),
        s > 0 ? t.dir = e.slice(0, s - 1) : n && (t.dir = "/"),
        t;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null,
  };
  Zt.posix = Zt;
  Oa.exports = Zt;
});
var Ia = H((nh, _a) => {
  "use strict";
  d();
  m();
  g();
  _a.exports = ({ onlyFirst: e = !1 } = {}) => {
    let t = [
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))",
    ].join("|");
    return new RegExp(t, e ? void 0 : "g");
  };
});
var jn = H((oh, Ca) => {
  "use strict";
  d();
  m();
  g();
  var Yp = Ia();
  Ca.exports = (e) => typeof e == "string" ? e.replace(Yp(), "") : e;
});
var La = H((Fy, Ba) => {
  d();
  m();
  g();
  var Xo = Symbol("arg flag"),
    he = class extends Error {
      constructor(t, r) {
        super(t),
          this.name = "ArgError",
          this.code = r,
          Object.setPrototypeOf(this, he.prototype);
      }
    };
  u(he, "ArgError");
  function Rr(
    e,
    {
      argv: t = v.argv.slice(2),
      permissive: r = !1,
      stopAtPositional: n = !1,
    } = {},
  ) {
    if (!e) {
      throw new he(
        "argument specification object is required",
        "ARG_CONFIG_NO_SPEC",
      );
    }
    let o = { _: [] }, i = {}, s = {};
    for (let a of Object.keys(e)) {
      if (!a) {
        throw new he(
          "argument key cannot be an empty string",
          "ARG_CONFIG_EMPTY_KEY",
        );
      }
      if (a[0] !== "-") {
        throw new he(
          `argument key must start with '-' but found: '${a}'`,
          "ARG_CONFIG_NONOPT_KEY",
        );
      }
      if (a.length === 1) {
        throw new he(
          `argument key must have a name; singular '-' keys are not allowed: ${a}`,
          "ARG_CONFIG_NONAME_KEY",
        );
      }
      if (typeof e[a] == "string") {
        i[a] = e[a];
        continue;
      }
      let c = e[a], l = !1;
      if (Array.isArray(c) && c.length === 1 && typeof c[0] == "function") {
        let [f] = c;
        c = u((p, h, y = []) => (y.push(f(p, h, y[y.length - 1])), y), "type"),
          l = f === Boolean || f[Xo] === !0;
      } else if (typeof c == "function") l = c === Boolean || c[Xo] === !0;
      else {
        throw new he(
          `type missing or not a function or valid array type: ${a}`,
          "ARG_CONFIG_VAD_TYPE",
        );
      }
      if (a[1] !== "-" && a.length > 2) {
        throw new he(
          `short argument keys (with a single hyphen) must have only one character: ${a}`,
          "ARG_CONFIG_SHORTOPT_TOOLONG",
        );
      }
      s[a] = [c, l];
    }
    for (let a = 0, c = t.length; a < c; a++) {
      let l = t[a];
      if (n && o._.length > 0) {
        o._ = o._.concat(t.slice(a));
        break;
      }
      if (l === "--") {
        o._ = o._.concat(t.slice(a + 1));
        break;
      }
      if (l.length > 1 && l[0] === "-") {
        let f = l[1] === "-" || l.length === 2
          ? [l]
          : l.slice(1).split("").map((p) => `-${p}`);
        for (let p = 0; p < f.length; p++) {
          let h = f[p],
            [y, w] = h[1] === "-" ? h.split(/=(.*)/, 2) : [h, void 0],
            b = y;
          for (; b in i;) b = i[b];
          if (!(b in s)) {
            if (r) {
              o._.push(h);
              continue;
            } else {
              throw new he(
                `unknown or unexpected option: ${y}`,
                "ARG_UNKNOWN_OPTION",
              );
            }
          }
          let [A, P] = s[b];
          if (!P && p + 1 < f.length) {
            throw new he(
              `option requires argument (but was followed by another short argument): ${y}`,
              "ARG_MISSING_REQUIRED_SHORTARG",
            );
          }
          if (P) o[b] = A(!0, b, o[b]);
          else if (w === void 0) {
            if (
              t.length < a + 2 ||
              t[a + 1].length > 1 && t[a + 1][0] === "-" &&
                !(t[a + 1].match(/^-?\d*(\.(?=\d))?\d*$/) &&
                  (A === Number ||
                    typeof BigInt != "undefined" && A === BigInt))
            ) {
              let T = y === b ? "" : ` (alias for ${b})`;
              throw new he(
                `option requires argument: ${y}${T}`,
                "ARG_MISSING_REQUIRED_LONGARG",
              );
            }
            o[b] = A(t[a + 1], b, o[b]), ++a;
          } else o[b] = A(w, b, o[b]);
        }
      } else o._.push(l);
    }
    return o;
  }
  u(Rr, "arg");
  Rr.flag = (e) => (e[Xo] = !0, e);
  Rr.COUNT = Rr.flag((e, t, r) => (r || 0) + 1);
  Rr.ArgError = he;
  Ba.exports = Rr;
});
var Ua = H((Ry, qa) => {
  "use strict";
  d();
  m();
  g();
  qa.exports = (e) => {
    let t = e.match(/^[ \t]*(?=\S)/gm);
    return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
  };
});
var ei = H((Dy, Va) => {
  "use strict";
  d();
  m();
  g();
  var pm = Ua();
  Va.exports = (e) => {
    let t = pm(e);
    if (t === 0) return e;
    let r = new RegExp(`^[ \\t]{${t}}`, "gm");
    return e.replace(r, "");
  };
});
var Wa = H(() => {
  d();
  m();
  g();
});
var ii = H((Me) => {
  "use strict";
  d();
  m();
  g();
  Object.defineProperty(Me, "__esModule", { value: !0 });
  Me.sqltag =
    Me.empty =
    Me.raw =
    Me.join =
    Me.Sql =
      void 0;
  var xm = qo(),
    _e = class {
      constructor(t, r) {
        let n = r.length, o = t.length;
        if (o === 0) throw new TypeError("Expected at least 1 string");
        if (o - 1 !== n) {
          throw new TypeError(`Expected ${o} strings to have ${o - 1} values`);
        }
        for (let a of r) {
          a instanceof _e &&
            (n += a.values.length - 1, o += a.strings.length - 2);
        }
        this.values = new Array(n),
          this.strings = new Array(o),
          this.strings[0] = t[0];
        let i = 1, s = 0;
        for (; i < t.length;) {
          let a = r[i - 1], c = t[i++];
          if (a instanceof _e) {
            this.strings[s] += a.strings[0];
            let l = 0;
            for (; l < a.values.length;) {
              this.values[s++] = a.values[l++], this.strings[s] = a.strings[l];
            }
            this.strings[s] += c;
          } else this.values[s++] = a, this.strings[s] = c;
        }
      }
      get text() {
        return this.strings.reduce((t, r, n) => `${t}$${n}${r}`);
      }
      get sql() {
        return this.strings.join("?");
      }
      [xm.inspect.custom]() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
  u(_e, "Sql");
  Me.Sql = _e;
  Object.defineProperty(_e.prototype, "sql", { enumerable: !0 });
  Object.defineProperty(_e.prototype, "text", { enumerable: !0 });
  function Em(e, t = ",") {
    if (e.length === 0) {
      throw new TypeError(
        "Expected `join([])` to be called with an array of multiple elements, but got an empty array",
      );
    }
    return new _e(["", ...Array(e.length - 1).fill(t), ""], e);
  }
  u(Em, "join");
  Me.join = Em;
  function Ha(e) {
    return new _e([e], []);
  }
  u(Ha, "raw");
  Me.raw = Ha;
  Me.empty = Ha("");
  function Qa(e, ...t) {
    return new _e(e, t);
  }
  u(Qa, "sqltag");
  Me.sqltag = Qa;
  Me.default = Qa;
});
var Ka = H((si, ai) => {
  d();
  m();
  g();
  (function (e, t) {
    typeof require == "function" && typeof si == "object" &&
      typeof ai == "object"
      ? ai.exports = t()
      : e.pluralize = t();
  })(si, function () {
    var e = [], t = [], r = {}, n = {}, o = {};
    function i(y) {
      return typeof y == "string" ? new RegExp("^" + y + "$", "i") : y;
    }
    u(i, "sanitizeRule");
    function s(y, w) {
      return y === w
        ? w
        : y === y.toLowerCase()
        ? w.toLowerCase()
        : y === y.toUpperCase()
        ? w.toUpperCase()
        : y[0] === y[0].toUpperCase()
        ? w.charAt(0).toUpperCase() + w.substr(1).toLowerCase()
        : w.toLowerCase();
    }
    u(s, "restoreCase");
    function a(y, w) {
      return y.replace(/\$(\d{1,2})/g, function (b, A) {
        return w[A] || "";
      });
    }
    u(a, "interpolate");
    function c(y, w) {
      return y.replace(w[0], function (b, A) {
        var P = a(w[1], arguments);
        return s(b === "" ? y[A - 1] : b, P);
      });
    }
    u(c, "replace");
    function l(y, w, b) {
      if (!y.length || r.hasOwnProperty(y)) return w;
      for (var A = b.length; A--;) {
        var P = b[A];
        if (P[0].test(w)) return c(w, P);
      }
      return w;
    }
    u(l, "sanitizeWord");
    function f(y, w, b) {
      return function (A) {
        var P = A.toLowerCase();
        return w.hasOwnProperty(P)
          ? s(A, P)
          : y.hasOwnProperty(P)
          ? s(A, y[P])
          : l(P, A, b);
      };
    }
    u(f, "replaceWord");
    function p(y, w, b, A) {
      return function (P) {
        var T = P.toLowerCase();
        return w.hasOwnProperty(T)
          ? !0
          : y.hasOwnProperty(T)
          ? !1
          : l(T, T, b) === T;
      };
    }
    u(p, "checkWord");
    function h(y, w, b) {
      var A = w === 1 ? h.singular(y) : h.plural(y);
      return (b ? w + " " : "") + A;
    }
    return u(h, "pluralize"),
      h.plural = f(o, n, e),
      h.isPlural = p(o, n, e),
      h.singular = f(n, o, t),
      h.isSingular = p(n, o, t),
      h.addPluralRule = function (y, w) {
        e.push([i(y), w]);
      },
      h.addSingularRule = function (y, w) {
        t.push([i(y), w]);
      },
      h.addUncountableRule = function (y) {
        if (typeof y == "string") {
          r[y.toLowerCase()] = !0;
          return;
        }
        h.addPluralRule(y, "$0"), h.addSingularRule(y, "$0");
      },
      h.addIrregularRule = function (y, w) {
        w = w.toLowerCase(), y = y.toLowerCase(), o[y] = w, n[w] = y;
      },
      [
        ["I", "we"],
        ["me", "us"],
        ["he", "they"],
        ["she", "they"],
        ["them", "them"],
        ["myself", "ourselves"],
        ["yourself", "yourselves"],
        ["itself", "themselves"],
        ["herself", "themselves"],
        ["himself", "themselves"],
        ["themself", "themselves"],
        ["is", "are"],
        ["was", "were"],
        ["has", "have"],
        ["this", "these"],
        ["that", "those"],
        ["echo", "echoes"],
        ["dingo", "dingoes"],
        ["volcano", "volcanoes"],
        ["tornado", "tornadoes"],
        ["torpedo", "torpedoes"],
        ["genus", "genera"],
        ["viscus", "viscera"],
        ["stigma", "stigmata"],
        ["stoma", "stomata"],
        ["dogma", "dogmata"],
        ["lemma", "lemmata"],
        ["schema", "schemata"],
        ["anathema", "anathemata"],
        ["ox", "oxen"],
        ["axe", "axes"],
        ["die", "dice"],
        ["yes", "yeses"],
        ["foot", "feet"],
        ["eave", "eaves"],
        ["goose", "geese"],
        ["tooth", "teeth"],
        ["quiz", "quizzes"],
        ["human", "humans"],
        ["proof", "proofs"],
        ["carve", "carves"],
        ["valve", "valves"],
        ["looey", "looies"],
        ["thief", "thieves"],
        ["groove", "grooves"],
        ["pickaxe", "pickaxes"],
        ["passerby", "passersby"],
      ].forEach(function (y) {
        return h.addIrregularRule(y[0], y[1]);
      }),
      [
        [/s?$/i, "s"],
        [/[^\u0000-\u007F]$/i, "$0"],
        [/([^aeiou]ese)$/i, "$1"],
        [/(ax|test)is$/i, "$1es"],
        [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
        [/(e[mn]u)s?$/i, "$1s"],
        [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
        [
          /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1i",
        ],
        [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
        [/(seraph|cherub)(?:im)?$/i, "$1im"],
        [/(her|at|gr)o$/i, "$1oes"],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
          "$1a",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
          "$1a",
        ],
        [/sis$/i, "ses"],
        [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
        [/([^aeiouy]|qu)y$/i, "$1ies"],
        [/([^ch][ieo][ln])ey$/i, "$1ies"],
        [/(x|ch|ss|sh|zz)$/i, "$1es"],
        [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
        [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
        [/(pe)(?:rson|ople)$/i, "$1ople"],
        [/(child)(?:ren)?$/i, "$1ren"],
        [/eaux$/i, "$0"],
        [/m[ae]n$/i, "men"],
        ["thou", "you"],
      ].forEach(function (y) {
        return h.addPluralRule(y[0], y[1]);
      }),
      [
        [/s$/i, ""],
        [/(ss)$/i, "$1"],
        [
          /(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
          "$1fe",
        ],
        [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
        [/ies$/i, "y"],
        [
          /\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
          "$1ie",
        ],
        [/\b(mon|smil)ies$/i, "$1ey"],
        [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
        [/(seraph|cherub)im$/i, "$1"],
        [
          /(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
          "$1",
        ],
        [
          /(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
          "$1sis",
        ],
        [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
        [/(test)(?:is|es)$/i, "$1is"],
        [
          /(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
          "$1us",
        ],
        [
          /(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
          "$1um",
        ],
        [
          /(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
          "$1on",
        ],
        [/(alumn|alg|vertebr)ae$/i, "$1a"],
        [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
        [/(matr|append)ices$/i, "$1ix"],
        [/(pe)(rson|ople)$/i, "$1rson"],
        [/(child)ren$/i, "$1"],
        [/(eau)x?$/i, "$1"],
        [/men$/i, "man"],
      ].forEach(function (y) {
        return h.addSingularRule(y[0], y[1]);
      }),
      [
        "adulthood",
        "advice",
        "agenda",
        "aid",
        "aircraft",
        "alcohol",
        "ammo",
        "analytics",
        "anime",
        "athletics",
        "audio",
        "bison",
        "blood",
        "bream",
        "buffalo",
        "butter",
        "carp",
        "cash",
        "chassis",
        "chess",
        "clothing",
        "cod",
        "commerce",
        "cooperation",
        "corps",
        "debris",
        "diabetes",
        "digestion",
        "elk",
        "energy",
        "equipment",
        "excretion",
        "expertise",
        "firmware",
        "flounder",
        "fun",
        "gallows",
        "garbage",
        "graffiti",
        "hardware",
        "headquarters",
        "health",
        "herpes",
        "highjinks",
        "homework",
        "housework",
        "information",
        "jeans",
        "justice",
        "kudos",
        "labour",
        "literature",
        "machinery",
        "mackerel",
        "mail",
        "media",
        "mews",
        "moose",
        "music",
        "mud",
        "manga",
        "news",
        "only",
        "personnel",
        "pike",
        "plankton",
        "pliers",
        "police",
        "pollution",
        "premises",
        "rain",
        "research",
        "rice",
        "salmon",
        "scissors",
        "series",
        "sewage",
        "shambles",
        "shrimp",
        "software",
        "species",
        "staff",
        "swine",
        "tennis",
        "traffic",
        "transportation",
        "trout",
        "tuna",
        "wealth",
        "welfare",
        "whiting",
        "wildebeest",
        "wildlife",
        "you",
        /pok[eé]mon$/i,
        /[^aeiou]ese$/i,
        /deer$/i,
        /fish$/i,
        /measles$/i,
        /o[iu]s$/i,
        /pox$/i,
        /sheep$/i,
      ].forEach(h.addUncountableRule),
      h;
  });
});
var Wu = H((Gb, Ju) => {
  "use strict";
  d();
  m();
  g();
  Ju.exports = (e) => Object.prototype.toString.call(e) === "[object RegExp]";
});
var Qu = H((zb, Hu) => {
  "use strict";
  d();
  m();
  g();
  Hu.exports = (e) => {
    let t = typeof e;
    return e !== null && (t === "object" || t === "function");
  };
});
var Ku = H((xi) => {
  "use strict";
  d();
  m();
  g();
  Object.defineProperty(xi, "__esModule", { value: !0 });
  xi.default = (e) =>
    Object.getOwnPropertySymbols(e).filter((t) =>
      Object.prototype.propertyIsEnumerable.call(e, t)
    );
});
var xc = H((u2, Jg) => {
  Jg.exports = {
    name: "@prisma/client",
    version: "4.0.0",
    description:
      "Prisma Client is an auto-generated, type-safe and modern JavaScript/TypeScript ORM for Node.js that's tailored to your data. Supports MySQL, PostgreSQL, MariaDB, SQLite databases.",
    keywords: [
      "orm",
      "prisma2",
      "prisma",
      "client",
      "query",
      "database",
      "sql",
      "postgres",
      "postgresql",
      "mysql",
      "sqlite",
      "mariadb",
      "mssql",
      "typescript",
      "query-builder",
    ],
    main: "index.js",
    browser: "index-browser.js",
    types: "index.d.ts",
    license: "Apache-2.0",
    engines: { node: ">=14.17" },
    homepage: "https://www.prisma.io",
    repository: {
      type: "git",
      url: "https://github.com/prisma/prisma.git",
      directory: "packages/client",
    },
    author: "Tim Suchanek <suchanek@prisma.io>",
    maintainers: [
      "Jo\xEBl Galeran <galeran@prisma.io>",
      "Pierre-Antoine Mills <mills@prisma.io>",
      "Alexey Orlenko <orlenko@prisma.io>",
    ],
    bugs: "https://github.com/prisma/prisma/issues",
    scripts: {
      dev: "DEV=true node -r esbuild-register helpers/build.ts",
      build: "node -r esbuild-register helpers/build.ts",
      test: "jest --verbose",
      "test:functional":
        "node -r esbuild-register helpers/functional-test/run-tests.ts",
      "test:functional:code":
        "node -r esbuild-register helpers/functional-test/run-tests.ts --no-types",
      "test:functional:types":
        "node -r esbuild-register helpers/functional-test/run-tests.ts --types-only",
      "test-notypes":
        "jest --verbose --testPathIgnorePatterns src/__tests__/types/types.test.ts",
      generate: "node scripts/postinstall.js",
      postinstall: "node scripts/postinstall.js",
      prepublishOnly: "pnpm run build",
      "new-test":
        "NODE_OPTIONS='-r ts-node/register' yo ./helpers/generator-test/index.ts",
    },
    files: [
      "README.md",
      "runtime",
      "scripts",
      "generator-build",
      "edge.js",
      "edge.d.ts",
      "index.js",
      "index.d.ts",
      "index-browser.js",
    ],
    devDependencies: {
      "@faker-js/faker": "7.3.0",
      "@jest/test-sequencer": "28.1.1",
      "@microsoft/api-extractor": "7.25.2",
      "@opentelemetry/api": "1.1.0",
      "@prisma/debug": "workspace:*",
      "@prisma/engine-core": "workspace:*",
      "@prisma/engines": "3.16.0-49.da41d2bb3406da22087b849f0e911199ba4fbf11",
      "@prisma/fetch-engine":
        "3.16.0-49.da41d2bb3406da22087b849f0e911199ba4fbf11",
      "@prisma/generator-helper": "workspace:*",
      "@prisma/get-platform":
        "3.16.0-49.da41d2bb3406da22087b849f0e911199ba4fbf11",
      "@prisma/internals": "workspace:*",
      "@prisma/migrate": "workspace:*",
      "@swc/core": "1.2.204",
      "@swc/jest": "0.2.21",
      "@timsuchanek/copy": "1.4.5",
      "@types/debug": "4.1.7",
      "@types/jest": "28.1.3",
      "@types/js-levenshtein": "1.1.1",
      "@types/mssql": "8.0.2",
      "@types/node": "12.20.55",
      "@types/pg": "8.6.5",
      "@types/yeoman-generator": "^5.2.10",
      arg: "5.0.2",
      benchmark: "2.1.4",
      chalk: "4.1.2",
      "decimal.js": "10.3.1",
      esbuild: "0.14.47",
      execa: "5.1.1",
      "expect-type": "0.13.0",
      "flat-map-polyfill": "0.3.8",
      "fs-extra": "10.1.0",
      "fs-monkey": "1.0.3",
      "get-own-enumerable-property-symbols": "3.0.2",
      globby: "11.1.0",
      "indent-string": "4.0.0",
      "is-obj": "2.0.0",
      "is-regexp": "2.1.0",
      jest: "28.1.1",
      "jest-junit": "13.2.0",
      "js-levenshtein": "1.1.6",
      klona: "2.0.5",
      "lz-string": "1.4.4",
      "make-dir": "3.1.0",
      mariadb: "3.0.0",
      mssql: "8.1.2",
      pg: "8.7.3",
      "pkg-up": "3.1.0",
      pluralize: "8.0.0",
      "replace-string": "3.1.0",
      resolve: "1.22.1",
      rimraf: "3.0.2",
      "sort-keys": "4.2.0",
      "source-map-support": "0.5.21",
      "sql-template-tag": "4.0.0",
      "stacktrace-parser": "0.1.10",
      "strip-ansi": "6.0.1",
      "strip-indent": "3.0.0",
      "ts-jest": "28.0.5",
      "ts-node": "10.8.1",
      tsd: "0.21.0",
      typescript: "4.7.4",
      "yeoman-generator": "^5.6.1",
      yo: "^4.3.0",
    },
    peerDependencies: { prisma: "*" },
    peerDependenciesMeta: { prisma: { optional: !0 } },
    dependencies: {
      "@prisma/engines-version":
        "3.16.0-49.da41d2bb3406da22087b849f0e911199ba4fbf11",
    },
    sideEffects: !1,
  };
});
var id = {};
oo(id, {
  DMMF: () => Xe,
  DMMFClass: () => Ze,
  Decimal: () => De,
  Engine: () => mt,
  MetricsClient: () => Mt,
  PrismaClientInitializationError: () => ke,
  PrismaClientKnownRequestError: () => Ge,
  PrismaClientRustPanicError: () => ze,
  PrismaClientUnknownRequestError: () => Ne,
  PrismaClientValidationError: () => Ee,
  Sql: () => We.Sql,
  decompressFromBase64: () => od,
  empty: () => We.empty,
  findSync: () => void 0,
  getPrismaClient: () => Nc,
  join: () => We.join,
  makeDocument: () => to,
  objectEnumValues: () => vn,
  raw: () => We.raw,
  sqltag: () => We.sqltag,
  transformDocument: () => Ii,
  unpack: () => ro,
  warnEnvConflicts: () => void 0,
});
module.exports = Vi(id);
d();
m();
g();
var $c = Z(cs());
d();
m();
g();
var Mt = class {
  constructor(t) {
    this._engine = t;
  }
  prometheus(t) {
    return this._engine.metrics({ format: "prometheus", ...t });
  }
  json(t) {
    return this._engine.metrics({ format: "json", ...t });
  }
};
u(Mt, "MetricsClient");
d();
m();
g();
d();
m();
g();
function po(e, t) {
  var r;
  for (let n of t) {
    for (let o of Object.getOwnPropertyNames(n.prototype)) {
      Object.defineProperty(
        e.prototype,
        o,
        (r = Object.getOwnPropertyDescriptor(n.prototype, o)) != null
          ? r
          : Object.create(null),
      );
    }
  }
}
u(po, "applyMixins");
d();
m();
g();
var ct = Z(Pt());
d();
m();
g();
var qt = 9e15,
  ut = 1e9,
  Eo = "0123456789abcdef",
  mn =
    "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
  gn =
    "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
  Ao = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -qt,
    maxE: qt,
    crypto: !1,
  },
  Ls,
  Ke,
  B = !0,
  hn = "[DecimalError] ",
  at = hn + "Invalid argument: ",
  qs = hn + "Precision limit exceeded",
  Us = hn + "crypto unavailable",
  Vs = "[object Decimal]",
  ce = Math.floor,
  re = Math.pow,
  Kl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
  Yl = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
  Zl = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
  Gs = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
  Re = 1e7,
  j = 7,
  Xl = 9007199254740991,
  ef = mn.length - 1,
  To = gn.length - 1,
  I = { toStringTag: Vs };
I.absoluteValue = I.abs = function () {
  var e = new this.constructor(this);
  return e.s < 0 && (e.s = 1), N(e);
};
I.ceil = function () {
  return N(new this.constructor(this), this.e + 1, 2);
};
I.clampedTo = I.clamp = function (e, t) {
  var r, n = this, o = n.constructor;
  if (e = new o(e), t = new o(t), !e.s || !t.s) return new o(NaN);
  if (e.gt(t)) throw Error(at + t);
  return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new o(n);
};
I.comparedTo = I.cmp = function (e) {
  var t,
    r,
    n,
    o,
    i = this,
    s = i.d,
    a = (e = new i.constructor(e)).d,
    c = i.s,
    l = e.s;
  if (!s || !a) {
    return !c || !l ? NaN : c !== l ? c : s === a ? 0 : !s ^ c < 0 ? 1 : -1;
  }
  if (!s[0] || !a[0]) return s[0] ? c : a[0] ? -l : 0;
  if (c !== l) return c;
  if (i.e !== e.e) return i.e > e.e ^ c < 0 ? 1 : -1;
  for (n = s.length, o = a.length, t = 0, r = n < o ? n : o; t < r; ++t) {
    if (s[t] !== a[t]) return s[t] > a[t] ^ c < 0 ? 1 : -1;
  }
  return n === o ? 0 : n > o ^ c < 0 ? 1 : -1;
};
I.cosine = I.cos = function () {
  var e, t, r = this, n = r.constructor;
  return r.d
    ? r.d[0]
      ? (e = n.precision,
        t = n.rounding,
        n.precision = e + Math.max(r.e, r.sd()) + j,
        n.rounding = 1,
        r = tf(n, Qs(n, r)),
        n.precision = e,
        n.rounding = t,
        N(Ke == 2 || Ke == 3 ? r.neg() : r, e, t, !0))
      : new n(1)
    : new n(NaN);
};
I.cubeRoot = I.cbrt = function () {
  var e, t, r, n, o, i, s, a, c, l, f = this, p = f.constructor;
  if (!f.isFinite() || f.isZero()) return new p(f);
  for (
    B = !1,
      i = f.s * re(f.s * f, 1 / 3),
      !i || Math.abs(i) == 1 / 0
        ? (r = ie(f.d),
          e = f.e,
          (i = (e - r.length + 1) % 3) && (r += i == 1 || i == -2 ? "0" : "00"),
          i = re(r, 1 / 3),
          e = ce((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)),
          i == 1 / 0
            ? r = "5e" + e
            : (r = i.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e),
          n = new p(r),
          n.s = f.s)
        : n = new p(i.toString()),
      s = (e = p.precision) + 3;;
  ) {
    if (
      a = n,
        c = a.times(a).times(a),
        l = c.plus(f),
        n = Y(l.plus(f).times(a), l.plus(c), s + 2, 1),
        ie(a.d).slice(0, s) === (r = ie(n.d)).slice(0, s)
    ) {
      if (r = r.slice(s - 3, s + 1), r == "9999" || !o && r == "4999") {
        if (!o && (N(a, e + 1, 0), a.times(a).times(a).eq(f))) {
          n = a;
          break;
        }
        s += 4, o = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") &&
          (N(n, e + 1, 1), t = !n.times(n).times(n).eq(f));
        break;
      }
    }
  }
  return B = !0, N(n, e, p.rounding, t);
};
I.decimalPlaces = I.dp = function () {
  var e, t = this.d, r = NaN;
  if (t) {
    if (e = t.length - 1, r = (e - ce(this.e / j)) * j, e = t[e], e) {
      for (; e % 10 == 0; e /= 10) {
        r--;
      }
    }
    r < 0 && (r = 0);
  }
  return r;
};
I.dividedBy = I.div = function (e) {
  return Y(this, new this.constructor(e));
};
I.dividedToIntegerBy = I.divToInt = function (e) {
  var t = this, r = t.constructor;
  return N(Y(t, new r(e), 0, 1, 1), r.precision, r.rounding);
};
I.equals = I.eq = function (e) {
  return this.cmp(e) === 0;
};
I.floor = function () {
  return N(new this.constructor(this), this.e + 1, 3);
};
I.greaterThan = I.gt = function (e) {
  return this.cmp(e) > 0;
};
I.greaterThanOrEqualTo = I.gte = function (e) {
  var t = this.cmp(e);
  return t == 1 || t === 0;
};
I.hyperbolicCosine = I.cosh = function () {
  var e, t, r, n, o, i = this, s = i.constructor, a = new s(1);
  if (!i.isFinite()) return new s(i.s ? 1 / 0 : NaN);
  if (i.isZero()) return a;
  r = s.precision,
    n = s.rounding,
    s.precision = r + Math.max(i.e, i.sd()) + 4,
    s.rounding = 1,
    o = i.d.length,
    o < 32
      ? (e = Math.ceil(o / 3), t = (1 / bn(4, e)).toString())
      : (e = 16, t = "2.3283064365386962890625e-10"),
    i = Ut(s, 1, i.times(t), new s(1), !0);
  for (var c, l = e, f = new s(8); l--;) {
    c = i.times(i), i = a.minus(c.times(f.minus(c.times(f))));
  }
  return N(i, s.precision = r, s.rounding = n, !0);
};
I.hyperbolicSine = I.sinh = function () {
  var e, t, r, n, o = this, i = o.constructor;
  if (!o.isFinite() || o.isZero()) return new i(o);
  if (
    t = i.precision,
      r = i.rounding,
      i.precision = t + Math.max(o.e, o.sd()) + 4,
      i.rounding = 1,
      n = o.d.length,
      n < 3
  ) {
    o = Ut(i, 2, o, o, !0);
  } else {
    e = 1.4 * Math.sqrt(n),
      e = e > 16 ? 16 : e | 0,
      o = o.times(1 / bn(5, e)),
      o = Ut(i, 2, o, o, !0);
    for (var s, a = new i(5), c = new i(16), l = new i(20); e--;) {
      s = o.times(o), o = o.times(a.plus(s.times(c.times(s).plus(l))));
    }
  }
  return i.precision = t, i.rounding = r, N(o, t, r, !0);
};
I.hyperbolicTangent = I.tanh = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + 7,
        n.rounding = 1,
        Y(r.sinh(), r.cosh(), n.precision = e, n.rounding = t))
    : new n(r.s);
};
I.inverseCosine = I.acos = function () {
  var e,
    t = this,
    r = t.constructor,
    n = t.abs().cmp(1),
    o = r.precision,
    i = r.rounding;
  return n !== -1
    ? n === 0 ? t.isNeg() ? Fe(r, o, i) : new r(0) : new r(NaN)
    : t.isZero()
    ? Fe(r, o + 4, i).times(.5)
    : (r.precision = o + 6,
      r.rounding = 1,
      t = t.asin(),
      e = Fe(r, o + 4, i).times(.5),
      r.precision = o,
      r.rounding = i,
      e.minus(t));
};
I.inverseHyperbolicCosine = I.acosh = function () {
  var e, t, r = this, n = r.constructor;
  return r.lte(1)
    ? new n(r.eq(1) ? 0 : NaN)
    : r.isFinite()
    ? (e = n.precision,
      t = n.rounding,
      n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4,
      n.rounding = 1,
      B = !1,
      r = r.times(r).minus(1).sqrt().plus(r),
      B = !0,
      n.precision = e,
      n.rounding = t,
      r.ln())
    : new n(r);
};
I.inverseHyperbolicSine = I.asinh = function () {
  var e, t, r = this, n = r.constructor;
  return !r.isFinite() || r.isZero()
    ? new n(r)
    : (e = n.precision,
      t = n.rounding,
      n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6,
      n.rounding = 1,
      B = !1,
      r = r.times(r).plus(1).sqrt().plus(r),
      B = !0,
      n.precision = e,
      n.rounding = t,
      r.ln());
};
I.inverseHyperbolicTangent = I.atanh = function () {
  var e, t, r, n, o = this, i = o.constructor;
  return o.isFinite()
    ? o.e >= 0
      ? new i(o.abs().eq(1) ? o.s / 0 : o.isZero() ? o : NaN)
      : (e = i.precision,
        t = i.rounding,
        n = o.sd(),
        Math.max(n, e) < 2 * -o.e - 1
          ? N(new i(o), e, t, !0)
          : (i.precision = r = n - o.e,
            o = Y(o.plus(1), new i(1).minus(o), r + e, 1),
            i.precision = e + 4,
            i.rounding = 1,
            o = o.ln(),
            i.precision = e,
            i.rounding = t,
            o.times(.5)))
    : new i(NaN);
};
I.inverseSine = I.asin = function () {
  var e, t, r, n, o = this, i = o.constructor;
  return o.isZero()
    ? new i(o)
    : (t = o.abs().cmp(1),
      r = i.precision,
      n = i.rounding,
      t !== -1
        ? t === 0 ? (e = Fe(i, r + 4, n).times(.5), e.s = o.s, e) : new i(NaN)
        : (i.precision = r + 6,
          i.rounding = 1,
          o = o.div(new i(1).minus(o.times(o)).sqrt().plus(1)).atan(),
          i.precision = r,
          i.rounding = n,
          o.times(2)));
};
I.inverseTangent = I.atan = function () {
  var e,
    t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = this,
    f = l.constructor,
    p = f.precision,
    h = f.rounding;
  if (l.isFinite()) {
    if (l.isZero()) return new f(l);
    if (l.abs().eq(1) && p + 4 <= To) {
      return s = Fe(f, p + 4, h).times(.25), s.s = l.s, s;
    }
  } else {
    if (!l.s) return new f(NaN);
    if (p + 4 <= To) return s = Fe(f, p + 4, h).times(.5), s.s = l.s, s;
  }
  for (
    f.precision = a = p + 10,
      f.rounding = 1,
      r = Math.min(28, a / j + 2 | 0),
      e = r;
    e;
    --e
  ) {
    l = l.div(l.times(l).plus(1).sqrt().plus(1));
  }
  for (
    B = !1, t = Math.ceil(a / j), n = 1, c = l.times(l), s = new f(l), o = l;
    e !== -1;
  ) {
    if (
      o = o.times(c),
        i = s.minus(o.div(n += 2)),
        o = o.times(c),
        s = i.plus(o.div(n += 2)),
        s.d[t] !== void 0
    ) {
      for (e = t; s.d[e] === i.d[e] && e--;);
    }
  }
  return r && (s = s.times(2 << r - 1)),
    B = !0,
    N(s, f.precision = p, f.rounding = h, !0);
};
I.isFinite = function () {
  return !!this.d;
};
I.isInteger = I.isInt = function () {
  return !!this.d && ce(this.e / j) > this.d.length - 2;
};
I.isNaN = function () {
  return !this.s;
};
I.isNegative = I.isNeg = function () {
  return this.s < 0;
};
I.isPositive = I.isPos = function () {
  return this.s > 0;
};
I.isZero = function () {
  return !!this.d && this.d[0] === 0;
};
I.lessThan = I.lt = function (e) {
  return this.cmp(e) < 0;
};
I.lessThanOrEqualTo = I.lte = function (e) {
  return this.cmp(e) < 1;
};
I.logarithm = I.log = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = this,
    f = l.constructor,
    p = f.precision,
    h = f.rounding,
    y = 5;
  if (e == null) e = new f(10), t = !0;
  else {
    if (e = new f(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) {
      return new f(NaN);
    }
    t = e.eq(10);
  }
  if (r = l.d, l.s < 0 || !r || !r[0] || l.eq(1)) {
    return new f(r && !r[0] ? -1 / 0 : l.s != 1 ? NaN : r ? 0 : 1 / 0);
  }
  if (t) {
    if (r.length > 1) i = !0;
    else {
      for (o = r[0]; o % 10 === 0;) o /= 10;
      i = o !== 1;
    }
  }
  if (
    B = !1,
      a = p + y,
      s = st(l, a),
      n = t ? dn(f, a + 10) : st(e, a),
      c = Y(s, n, a, 1),
      dr(c.d, o = p, h)
  ) {
    do if (
      a += 10,
        s = st(l, a),
        n = t ? dn(f, a + 10) : st(e, a),
        c = Y(s, n, a, 1),
        !i
    ) {
      +ie(c.d).slice(o + 1, o + 15) + 1 == 1e14 && (c = N(c, p + 1, 0));
      break;
    } while (dr(c.d, o += 10, h));
  }
  return B = !0, N(c, p, h);
};
I.minus = I.sub = function (e) {
  var t, r, n, o, i, s, a, c, l, f, p, h, y = this, w = y.constructor;
  if (e = new w(e), !y.d || !e.d) {
    return !y.s || !e.s
      ? e = new w(NaN)
      : y.d
      ? e.s = -e.s
      : e = new w(e.d || y.s !== e.s ? y : NaN),
      e;
  }
  if (y.s != e.s) return e.s = -e.s, y.plus(e);
  if (l = y.d, h = e.d, a = w.precision, c = w.rounding, !l[0] || !h[0]) {
    if (h[0]) e.s = -e.s;
    else if (l[0]) e = new w(y);
    else return new w(c === 3 ? -0 : 0);
    return B ? N(e, a, c) : e;
  }
  if (r = ce(e.e / j), f = ce(y.e / j), l = l.slice(), i = f - r, i) {
    for (
      p = i < 0,
        p ? (t = l, i = -i, s = h.length) : (t = h, r = f, s = l.length),
        n = Math.max(Math.ceil(a / j), s) + 2,
        i > n && (i = n, t.length = 1),
        t.reverse(),
        n = i;
      n--;
    ) {
      t.push(0);
    }
    t.reverse();
  } else {
    for (
      n = l.length, s = h.length, p = n < s, p && (s = n), n = 0;
      n < s;
      n++
    ) {
      if (l[n] != h[n]) {
        p = l[n] < h[n];
        break;
      }
    }
    i = 0;
  }
  for (
    p && (t = l, l = h, h = t, e.s = -e.s), s = l.length, n = h.length - s;
    n > 0;
    --n
  ) {
    l[s++] = 0;
  }
  for (n = h.length; n > i;) {
    if (l[--n] < h[n]) {
      for (o = n; o && l[--o] === 0;) l[o] = Re - 1;
      --l[o], l[n] += Re;
    }
    l[n] -= h[n];
  }
  for (; l[--s] === 0;) l.pop();
  for (; l[0] === 0; l.shift()) --r;
  return l[0]
    ? (e.d = l, e.e = yn(l, r), B ? N(e, a, c) : e)
    : new w(c === 3 ? -0 : 0);
};
I.modulo = I.mod = function (e) {
  var t, r = this, n = r.constructor;
  return e = new n(e),
    !r.d || !e.s || e.d && !e.d[0]
      ? new n(NaN)
      : !e.d || r.d && !r.d[0]
      ? N(new n(r), n.precision, n.rounding)
      : (B = !1,
        n.modulo == 9
          ? (t = Y(r, e.abs(), 0, 3, 1), t.s *= e.s)
          : t = Y(r, e, 0, n.modulo, 1),
        t = t.times(e),
        B = !0,
        r.minus(t));
};
I.naturalExponential = I.exp = function () {
  return Mo(this);
};
I.naturalLogarithm = I.ln = function () {
  return st(this);
};
I.negated = I.neg = function () {
  var e = new this.constructor(this);
  return e.s = -e.s, N(e);
};
I.plus = I.add = function (e) {
  var t, r, n, o, i, s, a, c, l, f, p = this, h = p.constructor;
  if (e = new h(e), !p.d || !e.d) {
    return !p.s || !e.s
      ? e = new h(NaN)
      : p.d || (e = new h(e.d || p.s === e.s ? p : NaN)),
      e;
  }
  if (p.s != e.s) return e.s = -e.s, p.minus(e);
  if (l = p.d, f = e.d, a = h.precision, c = h.rounding, !l[0] || !f[0]) {
    return f[0] || (e = new h(p)), B ? N(e, a, c) : e;
  }
  if (i = ce(p.e / j), n = ce(e.e / j), l = l.slice(), o = i - n, o) {
    for (
      o < 0 ? (r = l, o = -o, s = f.length) : (r = f, n = i, s = l.length),
        i = Math.ceil(a / j),
        s = i > s ? i + 1 : s + 1,
        o > s && (o = s, r.length = 1),
        r.reverse();
      o--;
    ) {
      r.push(0);
    }
    r.reverse();
  }
  for (
    s = l.length,
      o = f.length,
      s - o < 0 && (o = s, r = f, f = l, l = r),
      t = 0;
    o;
  ) {
    t = (l[--o] = l[o] + f[o] + t) / Re | 0, l[o] %= Re;
  }
  for (t && (l.unshift(t), ++n), s = l.length; l[--s] == 0;) l.pop();
  return e.d = l, e.e = yn(l, n), B ? N(e, a, c) : e;
};
I.precision = I.sd = function (e) {
  var t, r = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(at + e);
  return r.d ? (t = zs(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
};
I.round = function () {
  var e = this, t = e.constructor;
  return N(new t(e), e.e + 1, t.rounding);
};
I.sine = I.sin = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + Math.max(r.e, r.sd()) + j,
        n.rounding = 1,
        r = nf(n, Qs(n, r)),
        n.precision = e,
        n.rounding = t,
        N(Ke > 2 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
I.squareRoot = I.sqrt = function () {
  var e, t, r, n, o, i, s = this, a = s.d, c = s.e, l = s.s, f = s.constructor;
  if (l !== 1 || !a || !a[0]) {
    return new f(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
  }
  for (
    B = !1,
      l = Math.sqrt(+s),
      l == 0 || l == 1 / 0
        ? (t = ie(a),
          (t.length + c) % 2 == 0 && (t += "0"),
          l = Math.sqrt(t),
          c = ce((c + 1) / 2) - (c < 0 || c % 2),
          l == 1 / 0
            ? t = "5e" + c
            : (t = l.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + c),
          n = new f(t))
        : n = new f(l.toString()),
      r = (c = f.precision) + 3;;
  ) {
    if (
      i = n,
        n = i.plus(Y(s, i, r + 2, 1)).times(.5),
        ie(i.d).slice(0, r) === (t = ie(n.d)).slice(0, r)
    ) {
      if (t = t.slice(r - 3, r + 1), t == "9999" || !o && t == "4999") {
        if (!o && (N(i, c + 1, 0), i.times(i).eq(s))) {
          n = i;
          break;
        }
        r += 4, o = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") &&
          (N(n, c + 1, 1), e = !n.times(n).eq(s));
        break;
      }
    }
  }
  return B = !0, N(n, c, f.rounding, e);
};
I.tangent = I.tan = function () {
  var e, t, r = this, n = r.constructor;
  return r.isFinite()
    ? r.isZero()
      ? new n(r)
      : (e = n.precision,
        t = n.rounding,
        n.precision = e + 10,
        n.rounding = 1,
        r = r.sin(),
        r.s = 1,
        r = Y(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0),
        n.precision = e,
        n.rounding = t,
        N(Ke == 2 || Ke == 4 ? r.neg() : r, e, t, !0))
    : new n(NaN);
};
I.times = I.mul = function (e) {
  var t,
    r,
    n,
    o,
    i,
    s,
    a,
    c,
    l,
    f = this,
    p = f.constructor,
    h = f.d,
    y = (e = new p(e)).d;
  if (e.s *= f.s, !h || !h[0] || !y || !y[0]) {
    return new p(
      !e.s || h && !h[0] && !y || y && !y[0] && !h
        ? NaN
        : !h || !y
        ? e.s / 0
        : e.s * 0,
    );
  }
  for (
    r = ce(f.e / j) + ce(e.e / j),
      c = h.length,
      l = y.length,
      c < l && (i = h, h = y, y = i, s = c, c = l, l = s),
      i = [],
      s = c + l,
      n = s;
    n--;
  ) {
    i.push(0);
  }
  for (n = l; --n >= 0;) {
    for (t = 0, o = c + n; o > n;) {
      a = i[o] + y[n] * h[o - n - 1] + t, i[o--] = a % Re | 0, t = a / Re | 0;
    }
    i[o] = (i[o] + t) % Re | 0;
  }
  for (; !i[--s];) i.pop();
  return t ? ++r : i.shift(),
    e.d = i,
    e.e = yn(i, r),
    B ? N(e, p.precision, p.rounding) : e;
};
I.toBinary = function (e, t) {
  return So(this, 2, e, t);
};
I.toDecimalPlaces = I.toDP = function (e, t) {
  var r = this, n = r.constructor;
  return r = new n(r),
    e === void 0
      ? r
      : (ve(e, 0, ut),
        t === void 0 ? t = n.rounding : ve(t, 0, 8),
        N(r, e + r.e + 1, t));
};
I.toExponential = function (e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0
    ? r = Ue(n, !0)
    : (ve(e, 0, ut),
      t === void 0 ? t = o.rounding : ve(t, 0, 8),
      n = N(new o(n), e + 1, t),
      r = Ue(n, !0, e + 1)),
    n.isNeg() && !n.isZero() ? "-" + r : r;
};
I.toFixed = function (e, t) {
  var r, n, o = this, i = o.constructor;
  return e === void 0
    ? r = Ue(o)
    : (ve(e, 0, ut),
      t === void 0 ? t = i.rounding : ve(t, 0, 8),
      n = N(new i(o), e + o.e + 1, t),
      r = Ue(n, !1, e + n.e + 1)),
    o.isNeg() && !o.isZero() ? "-" + r : r;
};
I.toFraction = function (e) {
  var t, r, n, o, i, s, a, c, l, f, p, h, y = this, w = y.d, b = y.constructor;
  if (!w) return new b(y);
  if (
    l = r = new b(1),
      n = c = new b(0),
      t = new b(n),
      i = t.e = zs(w) - y.e - 1,
      s = i % j,
      t.d[0] = re(10, s < 0 ? j + s : s),
      e == null
  ) {
    e = i > 0 ? t : l;
  } else {
    if (a = new b(e), !a.isInt() || a.lt(l)) throw Error(at + a);
    e = a.gt(t) ? i > 0 ? t : l : a;
  }
  for (
    B = !1,
      a = new b(ie(w)),
      f = b.precision,
      b.precision = i = w.length * j * 2;
    p = Y(a, t, 0, 1, 1), o = r.plus(p.times(n)), o.cmp(e) != 1;
  ) {
    r = n,
      n = o,
      o = l,
      l = c.plus(p.times(o)),
      c = o,
      o = t,
      t = a.minus(p.times(o)),
      a = o;
  }
  return o = Y(e.minus(r), n, 0, 1, 1),
    c = c.plus(o.times(l)),
    r = r.plus(o.times(n)),
    c.s = l.s = y.s,
    h = Y(l, n, i, 1).minus(y).abs().cmp(Y(c, r, i, 1).minus(y).abs()) < 1
      ? [l, n]
      : [c, r],
    b.precision = f,
    B = !0,
    h;
};
I.toHexadecimal = I.toHex = function (e, t) {
  return So(this, 16, e, t);
};
I.toNearest = function (e, t) {
  var r = this, n = r.constructor;
  if (r = new n(r), e == null) {
    if (!r.d) return r;
    e = new n(1), t = n.rounding;
  } else {
    if (e = new n(e), t === void 0 ? t = n.rounding : ve(t, 0, 8), !r.d) {
      return e.s ? r : e;
    }
    if (!e.d) return e.s && (e.s = r.s), e;
  }
  return e.d[0]
    ? (B = !1, r = Y(r, e, 0, t, 1).times(e), B = !0, N(r))
    : (e.s = r.s, r = e),
    r;
};
I.toNumber = function () {
  return +this;
};
I.toOctal = function (e, t) {
  return So(this, 8, e, t);
};
I.toPower = I.pow = function (e) {
  var t, r, n, o, i, s, a = this, c = a.constructor, l = +(e = new c(e));
  if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new c(re(+a, l));
  if (a = new c(a), a.eq(1)) return a;
  if (n = c.precision, i = c.rounding, e.eq(1)) return N(a, n, i);
  if (t = ce(e.e / j), t >= e.d.length - 1 && (r = l < 0 ? -l : l) <= Xl) {
    return o = Js(c, a, r, n), e.s < 0 ? new c(1).div(o) : N(o, n, i);
  }
  if (s = a.s, s < 0) {
    if (t < e.d.length - 1) return new c(NaN);
    if (
      (e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1
    ) {
      return a.s = s, a;
    }
  }
  return r = re(+a, l),
    t = r == 0 || !isFinite(r)
      ? ce(l * (Math.log("0." + ie(a.d)) / Math.LN10 + a.e + 1))
      : new c(r + "").e,
    t > c.maxE + 1 || t < c.minE - 1
      ? new c(t > 0 ? s / 0 : 0)
      : (B = !1,
        c.rounding = a.s = 1,
        r = Math.min(12, (t + "").length),
        o = Mo(e.times(st(a, n + r)), n),
        o.d &&
        (o = N(o, n + 5, 1),
          dr(o.d, n, i) &&
          (t = n + 10,
            o = N(Mo(e.times(st(a, t + r)), t), t + 5, 1),
            +ie(o.d).slice(n + 1, n + 15) + 1 == 1e14 && (o = N(o, n + 1, 0)))),
        o.s = s,
        B = !0,
        c.rounding = i,
        N(o, n, i));
};
I.toPrecision = function (e, t) {
  var r, n = this, o = n.constructor;
  return e === void 0
    ? r = Ue(n, n.e <= o.toExpNeg || n.e >= o.toExpPos)
    : (ve(e, 1, ut),
      t === void 0 ? t = o.rounding : ve(t, 0, 8),
      n = N(new o(n), e, t),
      r = Ue(n, e <= n.e || n.e <= o.toExpNeg, e)),
    n.isNeg() && !n.isZero() ? "-" + r : r;
};
I.toSignificantDigits = I.toSD = function (e, t) {
  var r = this, n = r.constructor;
  return e === void 0
    ? (e = n.precision, t = n.rounding)
    : (ve(e, 1, ut), t === void 0 ? t = n.rounding : ve(t, 0, 8)),
    N(new n(r), e, t);
};
I.toString = function () {
  var e = this,
    t = e.constructor,
    r = Ue(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() && !e.isZero() ? "-" + r : r;
};
I.truncated = I.trunc = function () {
  return N(new this.constructor(this), this.e + 1, 1);
};
I.valueOf = I.toJSON = function () {
  var e = this,
    t = e.constructor,
    r = Ue(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
  return e.isNeg() ? "-" + r : r;
};
function ie(e) {
  var t, r, n, o = e.length - 1, i = "", s = e[0];
  if (o > 0) {
    for (i += s, t = 1; t < o; t++) {
      n = e[t] + "", r = j - n.length, r && (i += it(r)), i += n;
    }
    s = e[t], n = s + "", r = j - n.length, r && (i += it(r));
  } else if (s === 0) return "0";
  for (; s % 10 === 0;) s /= 10;
  return i + s;
}
u(ie, "digitsToString");
function ve(e, t, r) {
  if (e !== ~~e || e < t || e > r) throw Error(at + e);
}
u(ve, "checkInt32");
function dr(e, t, r, n) {
  var o, i, s, a;
  for (i = e[0]; i >= 10; i /= 10) --t;
  return --t < 0 ? (t += j, o = 0) : (o = Math.ceil((t + 1) / j), t %= j),
    i = re(10, j - t),
    a = e[o] % i | 0,
    n == null
      ? t < 3
        ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0),
          s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0)
        : s = (r < 4 && a + 1 == i || r > 3 && a + 1 == i / 2) &&
            (e[o + 1] / i / 100 | 0) == re(10, t - 2) - 1 ||
          (a == i / 2 || a == 0) && (e[o + 1] / i / 100 | 0) == 0
      : t < 4
      ? (t == 0
        ? a = a / 1e3 | 0
        : t == 1
        ? a = a / 100 | 0
        : t == 2 && (a = a / 10 | 0),
        s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999)
      : s = ((n || r < 4) && a + 1 == i || !n && r > 3 && a + 1 == i / 2) &&
        (e[o + 1] / i / 1e3 | 0) == re(10, t - 3) - 1,
    s;
}
u(dr, "checkRoundingDigits");
function pn(e, t, r) {
  for (var n, o = [0], i, s = 0, a = e.length; s < a;) {
    for (i = o.length; i--;) o[i] *= t;
    for (o[0] += Eo.indexOf(e.charAt(s++)), n = 0; n < o.length; n++) {
      o[n] > r - 1 &&
        (o[n + 1] === void 0 && (o[n + 1] = 0),
          o[n + 1] += o[n] / r | 0,
          o[n] %= r);
    }
  }
  return o.reverse();
}
u(pn, "convertBase");
function tf(e, t) {
  var r, n, o;
  if (t.isZero()) return t;
  n = t.d.length,
    n < 32
      ? (r = Math.ceil(n / 3), o = (1 / bn(4, r)).toString())
      : (r = 16, o = "2.3283064365386962890625e-10"),
    e.precision += r,
    t = Ut(e, 1, t.times(o), new e(1));
  for (var i = r; i--;) {
    var s = t.times(t);
    t = s.times(s).minus(s).times(8).plus(1);
  }
  return e.precision -= r, t;
}
u(tf, "cosine");
var Y = function () {
  function e(n, o, i) {
    var s, a = 0, c = n.length;
    for (n = n.slice(); c--;) s = n[c] * o + a, n[c] = s % i | 0, a = s / i | 0;
    return a && n.unshift(a), n;
  }
  u(e, "multiplyInteger");
  function t(n, o, i, s) {
    var a, c;
    if (i != s) c = i > s ? 1 : -1;
    else {
      for (a = c = 0; a < i; a++) {
        if (n[a] != o[a]) {
          c = n[a] > o[a] ? 1 : -1;
          break;
        }
      }
    }
    return c;
  }
  u(t, "compare");
  function r(n, o, i, s) {
    for (var a = 0; i--;) {
      n[i] -= a, a = n[i] < o[i] ? 1 : 0, n[i] = a * s + n[i] - o[i];
    }
    for (; !n[0] && n.length > 1;) n.shift();
  }
  return u(r, "subtract"), function (n, o, i, s, a, c) {
    var l,
      f,
      p,
      h,
      y,
      w,
      b,
      A,
      P,
      T,
      S,
      M,
      _,
      R,
      F,
      $,
      J,
      X,
      U,
      Q,
      W = n.constructor,
      G = n.s == o.s ? 1 : -1,
      K = n.d,
      V = o.d;
    if (!K || !K[0] || !V || !V[0]) {
      return new W(
        !n.s || !o.s || (K ? V && K[0] == V[0] : !V)
          ? NaN
          : K && K[0] == 0 || !V
          ? G * 0
          : G / 0,
      );
    }
    for (
      c
        ? (y = 1, f = n.e - o.e)
        : (c = Re, y = j, f = ce(n.e / y) - ce(o.e / y)),
        U = V.length,
        J = K.length,
        P = new W(G),
        T = P.d = [],
        p = 0;
      V[p] == (K[p] || 0);
      p++
    );
    if (
      V[p] > (K[p] || 0) && f--,
        i == null
          ? (R = i = W.precision, s = W.rounding)
          : a
          ? R = i + (n.e - o.e) + 1
          : R = i,
        R < 0
    ) {
      T.push(1), w = !0;
    } else {
      if (R = R / y + 2 | 0, p = 0, U == 1) {
        for (h = 0, V = V[0], R++; (p < J || h) && R--; p++) {
          F = h * c + (K[p] || 0), T[p] = F / V | 0, h = F % V | 0;
        }
        w = h || p < J;
      } else {
        for (
          h = c / (V[0] + 1) | 0,
            h > 1 &&
            (V = e(V, h, c), K = e(K, h, c), U = V.length, J = K.length),
            $ = U,
            S = K.slice(0, U),
            M = S.length;
          M < U;
        ) {
          S[M++] = 0;
        }
        Q = V.slice(), Q.unshift(0), X = V[0], V[1] >= c / 2 && ++X;
        do h = 0,
          l = t(V, S, U, M),
          l < 0
            ? (_ = S[0],
              U != M && (_ = _ * c + (S[1] || 0)),
              h = _ / X | 0,
              h > 1
                ? (h >= c && (h = c - 1),
                  b = e(V, h, c),
                  A = b.length,
                  M = S.length,
                  l = t(b, S, A, M),
                  l == 1 && (h--, r(b, U < A ? Q : V, A, c)))
                : (h == 0 && (l = h = 1), b = V.slice()),
              A = b.length,
              A < M && b.unshift(0),
              r(S, b, M, c),
              l == -1 &&
              (M = S.length,
                l = t(V, S, U, M),
                l < 1 && (h++, r(S, U < M ? Q : V, M, c))),
              M = S.length)
            : l === 0 && (h++, S = [0]),
          T[p++] = h,
          l && S[0] ? S[M++] = K[$] || 0 : (S = [K[$]], M = 1); while (
          ($++ < J || S[0] !== void 0) && R--
        );
        w = S[0] !== void 0;
      }
      T[0] || T.shift();
    }
    if (y == 1) P.e = f, Ls = w;
    else {
      for (p = 1, h = T[0]; h >= 10; h /= 10) p++;
      P.e = p + f * y - 1, N(P, a ? i + P.e + 1 : i, s, w);
    }
    return P;
  };
}();
function N(e, t, r, n) {
  var o, i, s, a, c, l, f, p, h, y = e.constructor;
  e:
  if (t != null) {
    if (p = e.d, !p) return e;
    for (o = 1, a = p[0]; a >= 10; a /= 10) o++;
    if (i = t - o, i < 0) {
      i += j, s = t, f = p[h = 0], c = f / re(10, o - s - 1) % 10 | 0;
    } else if (h = Math.ceil((i + 1) / j), a = p.length, h >= a) {
      if (n) {
        for (; a++ <= h;) p.push(0);
        f = c = 0, o = 1, i %= j, s = i - j + 1;
      } else break e;
    } else {
      for (f = a = p[h], o = 1; a >= 10; a /= 10) o++;
      i %= j, s = i - j + o, c = s < 0 ? 0 : f / re(10, o - s - 1) % 10 | 0;
    }
    if (
      n = n || t < 0 || p[h + 1] !== void 0 ||
        (s < 0 ? f : f % re(10, o - s - 1)),
        l = r < 4 ? (c || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : c > 5 ||
          c == 5 &&
            (r == 4 || n ||
              r == 6 &&
                (i > 0 ? s > 0 ? f / re(10, o - s) : 0 : p[h - 1]) % 10 & 1 ||
              r == (e.s < 0 ? 8 : 7)),
        t < 1 || !p[0]
    ) {
      return p.length = 0,
        l
          ? (t -= e.e + 1, p[0] = re(10, (j - t % j) % j), e.e = -t || 0)
          : p[0] = e.e = 0,
        e;
    }
    if (
      i == 0
        ? (p.length = h, a = 1, h--)
        : (p.length = h + 1,
          a = re(10, j - i),
          p[h] = s > 0 ? (f / re(10, o - s) % re(10, s) | 0) * a : 0), l
    ) {
      for (;;) {
        if (h == 0) {
          for (i = 1, s = p[0]; s >= 10; s /= 10) i++;
          for (s = p[0] += a, a = 1; s >= 10; s /= 10) a++;
          i != a && (e.e++, p[0] == Re && (p[0] = 1));
          break;
        } else {
          if (p[h] += a, p[h] != Re) break;
          p[h--] = 0, a = 1;
        }
      }
    }
    for (i = p.length; p[--i] === 0;) p.pop();
  }
  return B &&
    (e.e > y.maxE
      ? (e.d = null, e.e = NaN)
      : e.e < y.minE && (e.e = 0, e.d = [0])),
    e;
}
u(N, "finalise");
function Ue(e, t, r) {
  if (!e.isFinite()) return Hs(e);
  var n, o = e.e, i = ie(e.d), s = i.length;
  return t
    ? (r && (n = r - s) > 0
      ? i = i.charAt(0) + "." + i.slice(1) + it(n)
      : s > 1 && (i = i.charAt(0) + "." + i.slice(1)),
      i = i + (e.e < 0 ? "e" : "e+") + e.e)
    : o < 0
    ? (i = "0." + it(-o - 1) + i, r && (n = r - s) > 0 && (i += it(n)))
    : o >= s
    ? (i += it(o + 1 - s), r && (n = r - o - 1) > 0 && (i = i + "." + it(n)))
    : ((n = o + 1) < s && (i = i.slice(0, n) + "." + i.slice(n)),
      r && (n = r - s) > 0 && (o + 1 === s && (i += "."), i += it(n))),
    i;
}
u(Ue, "finiteToString");
function yn(e, t) {
  var r = e[0];
  for (t *= j; r >= 10; r /= 10) t++;
  return t;
}
u(yn, "getBase10Exponent");
function dn(e, t, r) {
  if (t > ef) throw B = !0, r && (e.precision = r), Error(qs);
  return N(new e(mn), t, 1, !0);
}
u(dn, "getLn10");
function Fe(e, t, r) {
  if (t > To) throw Error(qs);
  return N(new e(gn), t, r, !0);
}
u(Fe, "getPi");
function zs(e) {
  var t = e.length - 1, r = t * j + 1;
  if (t = e[t], t) {
    for (; t % 10 == 0; t /= 10) r--;
    for (t = e[0]; t >= 10; t /= 10) r++;
  }
  return r;
}
u(zs, "getPrecision");
function it(e) {
  for (var t = ""; e--;) t += "0";
  return t;
}
u(it, "getZeroString");
function Js(e, t, r, n) {
  var o, i = new e(1), s = Math.ceil(n / j + 4);
  for (B = !1;;) {
    if (
      r % 2 && (i = i.times(t), js(i.d, s) && (o = !0)), r = ce(r / 2), r === 0
    ) {
      r = i.d.length - 1, o && i.d[r] === 0 && ++i.d[r];
      break;
    }
    t = t.times(t), js(t.d, s);
  }
  return B = !0, i;
}
u(Js, "intPow");
function $s(e) {
  return e.d[e.d.length - 1] & 1;
}
u($s, "isOdd");
function Ws(e, t, r) {
  for (var n, o = new e(t[0]), i = 0; ++i < t.length;) {
    if (n = new e(t[i]), n.s) o[r](n) && (o = n);
    else {
      o = n;
      break;
    }
  }
  return o;
}
u(Ws, "maxOrMin");
function Mo(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    c,
    l = 0,
    f = 0,
    p = 0,
    h = e.constructor,
    y = h.rounding,
    w = h.precision;
  if (!e.d || !e.d[0] || e.e > 17) {
    return new h(
      e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : 0 / 0,
    );
  }
  for (t == null ? (B = !1, c = w) : c = t, a = new h(.03125); e.e > -2;) {
    e = e.times(a), p += 5;
  }
  for (
    n = Math.log(re(2, p)) / Math.LN10 * 2 + 5 | 0,
      c += n,
      r = i = s = new h(1),
      h.precision = c;;
  ) {
    if (
      i = N(i.times(e), c, 1),
        r = r.times(++f),
        a = s.plus(Y(i, r, c, 1)),
        ie(a.d).slice(0, c) === ie(s.d).slice(0, c)
    ) {
      for (o = p; o--;) s = N(s.times(s), c, 1);
      if (t == null) {
        if (l < 3 && dr(s.d, c - n, y, l)) {
          h.precision = c += 10, r = i = a = new h(1), f = 0, l++;
        } else {
          return N(s, h.precision = w, y, B = !0);
        }
      } else return h.precision = w, s;
    }
    s = a;
  }
}
u(Mo, "naturalExponential");
function st(e, t) {
  var r,
    n,
    o,
    i,
    s,
    a,
    c,
    l,
    f,
    p,
    h,
    y = 1,
    w = 10,
    b = e,
    A = b.d,
    P = b.constructor,
    T = P.rounding,
    S = P.precision;
  if (b.s < 0 || !A || !A[0] || !b.e && A[0] == 1 && A.length == 1) {
    return new P(A && !A[0] ? -1 / 0 : b.s != 1 ? NaN : A ? 0 : b);
  }
  if (
    t == null ? (B = !1, f = S) : f = t,
      P.precision = f += w,
      r = ie(A),
      n = r.charAt(0),
      Math.abs(i = b.e) < 15e14
  ) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3;) {
      b = b.times(e), r = ie(b.d), n = r.charAt(0), y++;
    }
    i = b.e,
      n > 1 ? (b = new P("0." + r), i++) : b = new P(n + "." + r.slice(1));
  } else {
    return l = dn(P, f + 2, S).times(i + ""),
      b = st(new P(n + "." + r.slice(1)), f - w).plus(l),
      P.precision = S,
      t == null ? N(b, S, T, B = !0) : b;
  }
  for (
    p = b,
      c = s = b = Y(b.minus(1), b.plus(1), f, 1),
      h = N(b.times(b), f, 1),
      o = 3;;
  ) {
    if (
      s = N(s.times(h), f, 1),
        l = c.plus(Y(s, new P(o), f, 1)),
        ie(l.d).slice(0, f) === ie(c.d).slice(0, f)
    ) {
      if (
        c = c.times(2),
          i !== 0 && (c = c.plus(dn(P, f + 2, S).times(i + ""))),
          c = Y(c, new P(y), f, 1),
          t == null
      ) {
        if (dr(c.d, f - w, T, a)) {
          P.precision = f += w,
            l = s = b = Y(p.minus(1), p.plus(1), f, 1),
            h = N(b.times(b), f, 1),
            o = a = 1;
        } else return N(c, P.precision = S, T, B = !0);
      } else return P.precision = S, c;
    }
    c = l, o += 2;
  }
}
u(st, "naturalLogarithm");
function Hs(e) {
  return String(e.s * e.s / 0);
}
u(Hs, "nonFiniteToString");
function Po(e, t) {
  var r, n, o;
  for (
    (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (n = t.search(/e/i)) > 0
        ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n))
        : r < 0 && (r = t.length),
      n = 0;
    t.charCodeAt(n) === 48;
    n++
  );
  for (o = t.length; t.charCodeAt(o - 1) === 48; --o);
  if (t = t.slice(n, o), t) {
    if (
      o -= n,
        e.e = r = r - n - 1,
        e.d = [],
        n = (r + 1) % j,
        r < 0 && (n += j),
        n < o
    ) {
      for (n && e.d.push(+t.slice(0, n)), o -= j; n < o;) {
        e.d.push(+t.slice(n, n += j));
      }
      t = t.slice(n), n = j - t.length;
    } else n -= o;
    for (; n--;) t += "0";
    e.d.push(+t),
      B &&
      (e.e > e.constructor.maxE
        ? (e.d = null, e.e = NaN)
        : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
  } else e.e = 0, e.d = [0];
  return e;
}
u(Po, "parseDecimal");
function rf(e, t) {
  var r, n, o, i, s, a, c, l, f;
  if (t.indexOf("_") > -1) {
    if (t = t.replace(/(\d)_(?=\d)/g, "$1"), Gs.test(t)) return Po(e, t);
  } else if (t === "Infinity" || t === "NaN") {
    return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
  }
  if (Yl.test(t)) r = 16, t = t.toLowerCase();
  else if (Kl.test(t)) r = 2;
  else if (Zl.test(t)) r = 8;
  else throw Error(at + t);
  for (
    i = t.search(/p/i),
      i > 0 ? (c = +t.slice(i + 1), t = t.substring(2, i)) : t = t.slice(2),
      i = t.indexOf("."),
      s = i >= 0,
      n = e.constructor,
      s &&
      (t = t.replace(".", ""),
        a = t.length,
        i = a - i,
        o = Js(n, new n(r), i, i * 2)),
      l = pn(t, r, Re),
      f = l.length - 1,
      i = f;
    l[i] === 0;
    --i
  ) {
    l.pop();
  }
  return i < 0
    ? new n(e.s * 0)
    : (e.e = yn(l, f),
      e.d = l,
      B = !1,
      s && (e = Y(e, o, a * 4)),
      c && (e = e.times(Math.abs(c) < 54 ? re(2, c) : Ye.pow(2, c))),
      B = !0,
      e);
}
u(rf, "parseOther");
function nf(e, t) {
  var r, n = t.d.length;
  if (n < 3) return t.isZero() ? t : Ut(e, 2, t, t);
  r = 1.4 * Math.sqrt(n),
    r = r > 16 ? 16 : r | 0,
    t = t.times(1 / bn(5, r)),
    t = Ut(e, 2, t, t);
  for (var o, i = new e(5), s = new e(16), a = new e(20); r--;) {
    o = t.times(t), t = t.times(i.plus(o.times(s.times(o).minus(a))));
  }
  return t;
}
u(nf, "sine");
function Ut(e, t, r, n, o) {
  var i, s, a, c, l = 1, f = e.precision, p = Math.ceil(f / j);
  for (B = !1, c = r.times(r), a = new e(n);;) {
    if (
      s = Y(a.times(c), new e(t++ * t++), f, 1),
        a = o ? n.plus(s) : n.minus(s),
        n = Y(s.times(c), new e(t++ * t++), f, 1),
        s = a.plus(n),
        s.d[p] !== void 0
    ) {
      for (i = p; s.d[i] === a.d[i] && i--;);
      if (i == -1) break;
    }
    i = a, a = n, n = s, s = i, l++;
  }
  return B = !0, s.d.length = p + 1, s;
}
u(Ut, "taylorSeries");
function bn(e, t) {
  for (var r = e; --t;) r *= e;
  return r;
}
u(bn, "tinyPow");
function Qs(e, t) {
  var r, n = t.s < 0, o = Fe(e, e.precision, 1), i = o.times(.5);
  if (t = t.abs(), t.lte(i)) return Ke = n ? 4 : 1, t;
  if (r = t.divToInt(o), r.isZero()) Ke = n ? 3 : 2;
  else {
    if (t = t.minus(r.times(o)), t.lte(i)) {
      return Ke = $s(r) ? n ? 2 : 3 : n ? 4 : 1, t;
    }
    Ke = $s(r) ? n ? 1 : 4 : n ? 3 : 2;
  }
  return t.minus(o).abs();
}
u(Qs, "toLessThanHalfPi");
function So(e, t, r, n) {
  var o, i, s, a, c, l, f, p, h, y = e.constructor, w = r !== void 0;
  if (
    w
      ? (ve(r, 1, ut), n === void 0 ? n = y.rounding : ve(n, 0, 8))
      : (r = y.precision, n = y.rounding), !e.isFinite()
  ) {
    f = Hs(e);
  } else {
    for (
      f = Ue(e),
        s = f.indexOf("."),
        w
          ? (o = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2))
          : o = t,
        s >= 0 &&
        (f = f.replace(".", ""),
          h = new y(1),
          h.e = f.length - s,
          h.d = pn(Ue(h), 10, o),
          h.e = h.d.length),
        p = pn(f, 10, o),
        i = c = p.length;
      p[--c] == 0;
    ) {
      p.pop();
    }
    if (!p[0]) f = w ? "0p+0" : "0";
    else {
      if (
        s < 0
          ? i--
          : (e = new y(e),
            e.d = p,
            e.e = i,
            e = Y(e, h, r, n, 0, o),
            p = e.d,
            i = e.e,
            l = Ls),
          s = p[r],
          a = o / 2,
          l = l || p[r + 1] !== void 0,
          l = n < 4
            ? (s !== void 0 || l) && (n === 0 || n === (e.s < 0 ? 3 : 2))
            : s > a ||
              s === a &&
                (n === 4 || l || n === 6 && p[r - 1] & 1 ||
                  n === (e.s < 0 ? 8 : 7)),
          p.length = r,
          l
      ) {
        for (; ++p[--r] > o - 1;) p[r] = 0, r || (++i, p.unshift(1));
      }
      for (c = p.length; !p[c - 1]; --c);
      for (s = 0, f = ""; s < c; s++) f += Eo.charAt(p[s]);
      if (w) {
        if (c > 1) {
          if (t == 16 || t == 8) {
            for (s = t == 16 ? 4 : 3, --c; c % s; c++) f += "0";
            for (p = pn(f, o, t), c = p.length; !p[c - 1]; --c);
            for (s = 1, f = "1."; s < c; s++) f += Eo.charAt(p[s]);
          } else f = f.charAt(0) + "." + f.slice(1);
        }
        f = f + (i < 0 ? "p" : "p+") + i;
      } else if (i < 0) {
        for (; ++i;) f = "0" + f;
        f = "0." + f;
      } else if (++i > c) for (i -= c; i--;) f += "0";
      else i < c && (f = f.slice(0, i) + "." + f.slice(i));
    }
    f = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + f;
  }
  return e.s < 0 ? "-" + f : f;
}
u(So, "toStringBinary");
function js(e, t) {
  if (e.length > t) return e.length = t, !0;
}
u(js, "truncate");
function of(e) {
  return new this(e).abs();
}
u(of, "abs");
function sf(e) {
  return new this(e).acos();
}
u(sf, "acos");
function af(e) {
  return new this(e).acosh();
}
u(af, "acosh");
function uf(e, t) {
  return new this(e).plus(t);
}
u(uf, "add");
function cf(e) {
  return new this(e).asin();
}
u(cf, "asin");
function lf(e) {
  return new this(e).asinh();
}
u(lf, "asinh");
function ff(e) {
  return new this(e).atan();
}
u(ff, "atan");
function pf(e) {
  return new this(e).atanh();
}
u(pf, "atanh");
function mf(e, t) {
  e = new this(e), t = new this(t);
  var r, n = this.precision, o = this.rounding, i = n + 4;
  return !e.s || !t.s
    ? r = new this(NaN)
    : !e.d && !t.d
    ? (r = Fe(this, i, 1).times(t.s > 0 ? .25 : .75), r.s = e.s)
    : !t.d || e.isZero()
    ? (r = t.s < 0 ? Fe(this, n, o) : new this(0), r.s = e.s)
    : !e.d || t.isZero()
    ? (r = Fe(this, i, 1).times(.5), r.s = e.s)
    : t.s < 0
    ? (this.precision = i,
      this.rounding = 1,
      r = this.atan(Y(e, t, i, 1)),
      t = Fe(this, i, 1),
      this.precision = n,
      this.rounding = o,
      r = e.s < 0 ? r.minus(t) : r.plus(t))
    : r = this.atan(Y(e, t, i, 1)),
    r;
}
u(mf, "atan2");
function gf(e) {
  return new this(e).cbrt();
}
u(gf, "cbrt");
function df(e) {
  return N(e = new this(e), e.e + 1, 2);
}
u(df, "ceil");
function hf(e, t, r) {
  return new this(e).clamp(t, r);
}
u(hf, "clamp");
function yf(e) {
  if (!e || typeof e != "object") throw Error(hn + "Object expected");
  var t,
    r,
    n,
    o = e.defaults === !0,
    i = [
      "precision",
      1,
      ut,
      "rounding",
      0,
      8,
      "toExpNeg",
      -qt,
      0,
      "toExpPos",
      0,
      qt,
      "maxE",
      0,
      qt,
      "minE",
      -qt,
      0,
      "modulo",
      0,
      9,
    ];
  for (t = 0; t < i.length; t += 3) {
    if (r = i[t], o && (this[r] = Ao[r]), (n = e[r]) !== void 0) {
      if (ce(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(at + r + ": " + n);
    }
  }
  if (r = "crypto", o && (this[r] = Ao[r]), (n = e[r]) !== void 0) {
    if (n === !0 || n === !1 || n === 0 || n === 1) {
      if (n) {
        if (
          typeof crypto != "undefined" && crypto &&
          (crypto.getRandomValues || crypto.randomBytes)
        ) {
          this[r] = !0;
        } else throw Error(Us);
      } else this[r] = !1;
    } else throw Error(at + r + ": " + n);
  }
  return this;
}
u(yf, "config");
function bf(e) {
  return new this(e).cos();
}
u(bf, "cos");
function wf(e) {
  return new this(e).cosh();
}
u(wf, "cosh");
function Ks(e) {
  var t, r, n;
  function o(i) {
    var s, a, c, l = this;
    if (!(l instanceof o)) return new o(i);
    if (l.constructor = o, Bs(i)) {
      l.s = i.s,
        B
          ? !i.d || i.e > o.maxE
            ? (l.e = NaN, l.d = null)
            : i.e < o.minE
            ? (l.e = 0, l.d = [0])
            : (l.e = i.e, l.d = i.d.slice())
          : (l.e = i.e, l.d = i.d ? i.d.slice() : i.d);
      return;
    }
    if (c = typeof i, c === "number") {
      if (i === 0) {
        l.s = 1 / i < 0 ? -1 : 1, l.e = 0, l.d = [0];
        return;
      }
      if (i < 0 ? (i = -i, l.s = -1) : l.s = 1, i === ~~i && i < 1e7) {
        for (s = 0, a = i; a >= 10; a /= 10) s++;
        B
          ? s > o.maxE
            ? (l.e = NaN, l.d = null)
            : s < o.minE
            ? (l.e = 0, l.d = [0])
            : (l.e = s, l.d = [i])
          : (l.e = s, l.d = [i]);
        return;
      } else if (i * 0 !== 0) {
        i || (l.s = NaN), l.e = NaN, l.d = null;
        return;
      }
      return Po(l, i.toString());
    } else if (c !== "string") throw Error(at + i);
    return (a = i.charCodeAt(0)) === 45
      ? (i = i.slice(1), l.s = -1)
      : (a === 43 && (i = i.slice(1)), l.s = 1),
      Gs.test(i) ? Po(l, i) : rf(l, i);
  }
  if (
    u(o, "Decimal"),
      o.prototype = I,
      o.ROUND_UP = 0,
      o.ROUND_DOWN = 1,
      o.ROUND_CEIL = 2,
      o.ROUND_FLOOR = 3,
      o.ROUND_HALF_UP = 4,
      o.ROUND_HALF_DOWN = 5,
      o.ROUND_HALF_EVEN = 6,
      o.ROUND_HALF_CEIL = 7,
      o.ROUND_HALF_FLOOR = 8,
      o.EUCLID = 9,
      o.config = o.set = yf,
      o.clone = Ks,
      o.isDecimal = Bs,
      o.abs = of,
      o.acos = sf,
      o.acosh = af,
      o.add = uf,
      o.asin = cf,
      o.asinh = lf,
      o.atan = ff,
      o.atanh = pf,
      o.atan2 = mf,
      o.cbrt = gf,
      o.ceil = df,
      o.clamp = hf,
      o.cos = bf,
      o.cosh = wf,
      o.div = vf,
      o.exp = xf,
      o.floor = Ef,
      o.hypot = Af,
      o.ln = Tf,
      o.log = Mf,
      o.log10 = Sf,
      o.log2 = Pf,
      o.max = Of,
      o.min = _f,
      o.mod = If,
      o.mul = Cf,
      o.pow = Ff,
      o.random = Rf,
      o.round = Df,
      o.sign = kf,
      o.sin = Nf,
      o.sinh = $f,
      o.sqrt = jf,
      o.sub = Bf,
      o.sum = Lf,
      o.tan = qf,
      o.tanh = Uf,
      o.trunc = Vf,
      e === void 0 && (e = {}),
      e && e.defaults !== !0
  ) {
    for (
      n = [
        "precision",
        "rounding",
        "toExpNeg",
        "toExpPos",
        "maxE",
        "minE",
        "modulo",
        "crypto",
      ], t = 0;
      t < n.length;
    ) {
      e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
    }
  }
  return o.config(e), o;
}
u(Ks, "clone");
function vf(e, t) {
  return new this(e).div(t);
}
u(vf, "div");
function xf(e) {
  return new this(e).exp();
}
u(xf, "exp");
function Ef(e) {
  return N(e = new this(e), e.e + 1, 3);
}
u(Ef, "floor");
function Af() {
  var e, t, r = new this(0);
  for (B = !1, e = 0; e < arguments.length;) {
    if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
    else {
      if (t.s) return B = !0, new this(1 / 0);
      r = t;
    }
  }
  return B = !0, r.sqrt();
}
u(Af, "hypot");
function Bs(e) {
  return e instanceof Ye || e && e.toStringTag === Vs || !1;
}
u(Bs, "isDecimalInstance");
function Tf(e) {
  return new this(e).ln();
}
u(Tf, "ln");
function Mf(e, t) {
  return new this(e).log(t);
}
u(Mf, "log");
function Pf(e) {
  return new this(e).log(2);
}
u(Pf, "log2");
function Sf(e) {
  return new this(e).log(10);
}
u(Sf, "log10");
function Of() {
  return Ws(this, arguments, "lt");
}
u(Of, "max");
function _f() {
  return Ws(this, arguments, "gt");
}
u(_f, "min");
function If(e, t) {
  return new this(e).mod(t);
}
u(If, "mod");
function Cf(e, t) {
  return new this(e).mul(t);
}
u(Cf, "mul");
function Ff(e, t) {
  return new this(e).pow(t);
}
u(Ff, "pow");
function Rf(e) {
  var t, r, n, o, i = 0, s = new this(1), a = [];
  if (
    e === void 0 ? e = this.precision : ve(e, 1, ut),
      n = Math.ceil(e / j),
      this.crypto
  ) {
    if (crypto.getRandomValues) {
      for (t = crypto.getRandomValues(new Uint32Array(n)); i < n;) {
        o = t[i],
          o >= 429e7
            ? t[i] = crypto.getRandomValues(new Uint32Array(1))[0]
            : a[i++] = o % 1e7;
      }
    } else if (crypto.randomBytes) {
      for (t = crypto.randomBytes(n *= 4); i < n;) {
        o = t[i] + (t[i + 1] << 8) + (t[i + 2] << 16) +
          ((t[i + 3] & 127) << 24),
          o >= 214e7
            ? crypto.randomBytes(4).copy(t, i)
            : (a.push(o % 1e7), i += 4);
      }
      i = n / 4;
    } else throw Error(Us);
  } else for (; i < n;) a[i++] = Math.random() * 1e7 | 0;
  for (
    n = a[--i], e %= j, n && e && (o = re(10, j - e), a[i] = (n / o | 0) * o);
    a[i] === 0;
    i--
  ) {
    a.pop();
  }
  if (i < 0) r = 0, a = [0];
  else {
    for (r = -1; a[0] === 0; r -= j) a.shift();
    for (n = 1, o = a[0]; o >= 10; o /= 10) n++;
    n < j && (r -= j - n);
  }
  return s.e = r, s.d = a, s;
}
u(Rf, "random");
function Df(e) {
  return N(e = new this(e), e.e + 1, this.rounding);
}
u(Df, "round");
function kf(e) {
  return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
}
u(kf, "sign");
function Nf(e) {
  return new this(e).sin();
}
u(Nf, "sin");
function $f(e) {
  return new this(e).sinh();
}
u($f, "sinh");
function jf(e) {
  return new this(e).sqrt();
}
u(jf, "sqrt");
function Bf(e, t) {
  return new this(e).sub(t);
}
u(Bf, "sub");
function Lf() {
  var e = 0, t = arguments, r = new this(t[e]);
  for (B = !1; r.s && ++e < t.length;) r = r.plus(t[e]);
  return B = !0, N(r, this.precision, this.rounding);
}
u(Lf, "sum");
function qf(e) {
  return new this(e).tan();
}
u(qf, "tan");
function Uf(e) {
  return new this(e).tanh();
}
u(Uf, "tanh");
function Vf(e) {
  return N(e = new this(e), e.e + 1, 1);
}
u(Vf, "trunc");
I[Symbol.for("nodejs.util.inspect.custom")] = I.toString;
I[Symbol.toStringTag] = "Decimal";
var Ye = I.constructor = Ks(Ao);
mn = new Ye(mn);
gn = new Ye(gn);
var De = Ye;
var Co = Z(Oo()), ta = Z(_o());
d();
m();
g();
var Xs = [
    "JsonNullValueInput",
    "NullableJsonNullValueInput",
    "JsonNullValueFilter",
  ],
  wn = Symbol(),
  Io = new WeakMap(),
  Ae = class {
    constructor(t) {
      t === wn ? Io.set(this, `Prisma.${this._getName()}`) : Io.set(
        this,
        `new Prisma.${this._getNamespace()}.${this._getName()}()`,
      );
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return Io.get(this);
    }
  };
u(Ae, "ObjectEnumValue");
var Vt = class extends Ae {
  _getNamespace() {
    return "NullTypes";
  }
};
u(Vt, "NullTypesEnumValue");
var hr = class extends Vt {};
u(hr, "DbNull");
var yr = class extends Vt {};
u(yr, "JsonNull");
var br = class extends Vt {};
u(br, "AnyNull");
var vn = {
  classes: { DbNull: hr, JsonNull: yr, AnyNull: br },
  instances: { DbNull: new hr(wn), JsonNull: new yr(wn), AnyNull: new br(wn) },
};
d();
m();
g();
function xn(e) {
  return Ye.isDecimal(e)
    ? !0
    : e !== null && typeof e == "object" && typeof e.s == "number" &&
      typeof e.e == "number" && Array.isArray(e.d);
}
u(xn, "isDecimalJsLike");
function ea(e) {
  if (Ye.isDecimal(e)) return String(e);
  let t = new Ye(0);
  return t.d = e.d, t.e = e.e, t.s = e.s, String(t);
}
u(ea, "stringifyDecimalJsLike");
var le = u((e, t) => {
    let r = {};
    for (let n of e) {
      let o = n[t];
      r[o] = n;
    }
    return r;
  }, "keyBy"),
  Gt = {
    String: !0,
    Int: !0,
    Float: !0,
    Boolean: !0,
    Long: !0,
    DateTime: !0,
    ID: !0,
    UUID: !0,
    Json: !0,
    Bytes: !0,
    Decimal: !0,
    BigInt: !0,
  };
var Gf = {
  string: "String",
  boolean: "Boolean",
  object: "Json",
  symbol: "Symbol",
};
function zt(e) {
  return typeof e == "string" ? e : e.name;
}
u(zt, "stringifyGraphQLType");
function vr(e, t) {
  return t ? `List<${e}>` : e;
}
u(vr, "wrapWithList");
var zf =
    /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/,
  Jf =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function Jt(e, t) {
  let r = t == null ? void 0 : t.type;
  if (e === null) return "null";
  if (Object.prototype.toString.call(e) === "[object BigInt]") return "BigInt";
  if (De.isDecimal(e) || r === "Decimal" && xn(e)) return "Decimal";
  if (x.Buffer.isBuffer(e)) return "Bytes";
  if (Wf(e, t)) return r.name;
  if (e instanceof Ae) return e._getName();
  if (Array.isArray(e)) {
    let o = e.reduce((i, s) => {
      let a = Jt(s, t);
      return i.includes(a) || i.push(a), i;
    }, []);
    return o.includes("Float") && o.includes("Int") && (o = ["Float"]),
      `List<${o.join(" | ")}>`;
  }
  let n = typeof e;
  if (n === "number") return Math.trunc(e) === e ? "Int" : "Float";
  if (Object.prototype.toString.call(e) === "[object Date]") return "DateTime";
  if (n === "string") {
    if (Jf.test(e)) return "UUID";
    if (new Date(e).toString() === "Invalid Date") return "String";
    if (zf.test(e)) return "DateTime";
  }
  return Gf[n];
}
u(Jt, "getGraphQLType");
function Wf(e, t) {
  let r = t == null ? void 0 : t.type;
  if (!Qf(r)) return !1;
  if ((t == null ? void 0 : t.namespace) === "prisma" && Xs.includes(r.name)) {
    let n = e == null ? void 0 : e.constructor.name;
    return typeof n == "string" && vn.instances[n] === e &&
      r.values.includes(n);
  }
  return typeof e == "string" && r.values.includes(e);
}
u(Wf, "isValidEnumValue");
function En(e, t) {
  return t.reduce((n, o) => {
    let i = (0, ta.default)(e, o);
    return i < n.distance ? { distance: i, str: o } : n;
  }, {
    distance: Math.min(
      Math.floor(e.length) * 1.1,
      ...t.map((n) => n.length * 3),
    ),
    str: null,
  }).str;
}
u(En, "getSuggestion");
function Wt(e, t = !1) {
  if (typeof e == "string") return e;
  if (e.values) {
    return `enum ${e.name} {
${(0, Co.default)(e.values.join(", "), 2)}
}`;
  }
  {
    let r = (0, Co.default)(
      e.fields.map((n) => {
        let o = `${n.name}`,
          i = `${t ? ct.default.green(o) : o}${n.isRequired ? "" : "?"}: ${
            ct.default.white(
              n.inputTypes.map((s) =>
                vr(Hf(s.type) ? s.type.name : zt(s.type), s.isList)
              ).join(" | "),
            )
          }`;
        return n.isRequired ? i : ct.default.dim(i);
      }).join(`
`),
      2,
    );
    return `${ct.default.dim("type")} ${ct.default.bold.dim(e.name)} ${
      ct.default.dim("{")
    }
${r}
${ct.default.dim("}")}`;
  }
}
u(Wt, "stringifyInputType");
function Hf(e) {
  return typeof e != "string";
}
u(Hf, "argIsInputType");
function wr(e) {
  return typeof e == "string" ? e === "Null" ? "null" : e : e.name;
}
u(wr, "getInputTypeName");
function St(e) {
  return typeof e == "string" ? e : e.name;
}
u(St, "getOutputTypeName");
function Fo(e, t, r = !1) {
  if (typeof e == "string") return e === "Null" ? "null" : e;
  if (e.values) return e.values.join(" | ");
  let n = e,
    o = t && n.fields.every((i) => {
      var s;
      return i.inputTypes[0].location === "inputObjectTypes" ||
        ((s = i.inputTypes[1]) == null ? void 0 : s.location) ===
          "inputObjectTypes";
    });
  return r ? wr(e) : n.fields.reduce((i, s) => {
    let a = "";
    return !o && !s.isRequired
      ? a = s.inputTypes.map((c) => wr(c.type)).join(" | ")
      : a = s.inputTypes.map((c) => Fo(c.type, s.isRequired, !0)).join(" | "),
      i[s.name + (s.isRequired ? "" : "?")] = a,
      i;
  }, {});
}
u(Fo, "inputTypeToJson");
function ra(e, t, r) {
  let n = {};
  for (let o of e) n[r(o)] = o;
  for (let o of t) {
    let i = r(o);
    n[i] || (n[i] = o);
  }
  return Object.values(n);
}
u(ra, "unionBy");
function na(e) {
  return e.substring(0, 1).toLowerCase() + e.substring(1);
}
u(na, "lowerCase");
function oa(e) {
  return e.endsWith("GroupByOutputType");
}
u(oa, "isGroupByOutputName");
function Qf(e) {
  return typeof e == "object" && e !== null && typeof e.name == "string" &&
    Array.isArray(e.values);
}
u(Qf, "isSchemaEnum");
var xr = class {
  constructor({ datamodel: t }) {
    this.datamodel = t,
      this.datamodelEnumMap = this.getDatamodelEnumMap(),
      this.modelMap = this.getModelMap(),
      this.typeMap = this.getTypeMap(),
      this.typeAndModelMap = this.getTypeModelMap();
  }
  getDatamodelEnumMap() {
    return le(this.datamodel.enums, "name");
  }
  getModelMap() {
    return { ...le(this.datamodel.models, "name") };
  }
  getTypeMap() {
    return { ...le(this.datamodel.types, "name") };
  }
  getTypeModelMap() {
    return { ...this.getTypeMap(), ...this.getModelMap() };
  }
};
u(xr, "DMMFDatamodelHelper");
var Er = class {
  constructor({ mappings: t }) {
    this.mappings = t, this.mappingsMap = this.getMappingsMap();
  }
  getMappingsMap() {
    return le(this.mappings.modelOperations, "model");
  }
};
u(Er, "DMMFMappingsHelper");
var Ar = class {
  constructor({ schema: t }) {
    this.outputTypeToMergedOutputType = u(
      (t) => ({ ...t, fields: t.fields }),
      "outputTypeToMergedOutputType",
    );
    this.schema = t,
      this.enumMap = this.getEnumMap(),
      this.queryType = this.getQueryType(),
      this.mutationType = this.getMutationType(),
      this.outputTypes = this.getOutputTypes(),
      this.outputTypeMap = this.getMergedOutputTypeMap(),
      this.resolveOutputTypes(),
      this.inputObjectTypes = this.schema.inputObjectTypes,
      this.inputTypeMap = this.getInputTypeMap(),
      this.resolveInputTypes(),
      this.resolveFieldArgumentTypes(),
      this.queryType = this.outputTypeMap.Query,
      this.mutationType = this.outputTypeMap.Mutation,
      this.rootFieldMap = this.getRootFieldMap();
  }
  get [Symbol.toStringTag]() {
    return "DMMFClass";
  }
  resolveOutputTypes() {
    for (let t of this.outputTypes.model) {
      for (let r of t.fields) {
        typeof r.outputType.type == "string" && !Gt[r.outputType.type] &&
          (r.outputType.type = this.outputTypeMap[r.outputType.type] ||
            this.outputTypeMap[r.outputType.type] ||
            this.enumMap[r.outputType.type] || r.outputType.type);
      }
      t.fieldMap = le(t.fields, "name");
    }
    for (let t of this.outputTypes.prisma) {
      for (let r of t.fields) {
        typeof r.outputType.type == "string" && !Gt[r.outputType.type] &&
          (r.outputType.type = this.outputTypeMap[r.outputType.type] ||
            this.outputTypeMap[r.outputType.type] ||
            this.enumMap[r.outputType.type] || r.outputType.type);
      }
      t.fieldMap = le(t.fields, "name");
    }
  }
  resolveInputTypes() {
    let t = this.inputObjectTypes.prisma;
    this.inputObjectTypes.model && t.push(...this.inputObjectTypes.model);
    for (let r of t) {
      for (let n of r.fields) {
        for (let o of n.inputTypes) {
          let i = o.type;
          typeof i == "string" && !Gt[i] &&
            (this.inputTypeMap[i] || this.enumMap[i]) &&
            (o.type = this.inputTypeMap[i] || this.enumMap[i] || i);
        }
      }
      r.fieldMap = le(r.fields, "name");
    }
  }
  resolveFieldArgumentTypes() {
    for (let t of this.outputTypes.prisma) {
      for (let r of t.fields) {
        for (let n of r.args) {
          for (let o of n.inputTypes) {
            let i = o.type;
            typeof i == "string" && !Gt[i] &&
              (o.type = this.inputTypeMap[i] || this.enumMap[i] || i);
          }
        }
      }
    }
    for (let t of this.outputTypes.model) {
      for (let r of t.fields) {
        for (let n of r.args) {
          for (let o of n.inputTypes) {
            let i = o.type;
            typeof i == "string" && !Gt[i] &&
              (o.type = this.inputTypeMap[i] || this.enumMap[i] || o.type);
          }
        }
      }
    }
  }
  getQueryType() {
    return this.schema.outputObjectTypes.prisma.find((t) => t.name === "Query");
  }
  getMutationType() {
    return this.schema.outputObjectTypes.prisma.find((t) =>
      t.name === "Mutation"
    );
  }
  getOutputTypes() {
    return {
      model: this.schema.outputObjectTypes.model.map(
        this.outputTypeToMergedOutputType,
      ),
      prisma: this.schema.outputObjectTypes.prisma.map(
        this.outputTypeToMergedOutputType,
      ),
    };
  }
  getEnumMap() {
    return {
      ...le(this.schema.enumTypes.prisma, "name"),
      ...this.schema.enumTypes.model
        ? le(this.schema.enumTypes.model, "name")
        : void 0,
    };
  }
  getMergedOutputTypeMap() {
    return {
      ...le(this.outputTypes.model, "name"),
      ...le(this.outputTypes.prisma, "name"),
    };
  }
  getInputTypeMap() {
    return {
      ...this.schema.inputObjectTypes.model
        ? le(this.schema.inputObjectTypes.model, "name")
        : void 0,
      ...le(this.schema.inputObjectTypes.prisma, "name"),
    };
  }
  getRootFieldMap() {
    return {
      ...le(this.queryType.fields, "name"),
      ...le(this.mutationType.fields, "name"),
    };
  }
};
u(Ar, "DMMFSchemaHelper");
var lt = class {
  constructor(t) {
    return Object.assign(this, new xr(t), new Er(t));
  }
};
u(lt, "BaseDMMFHelper");
po(lt, [xr, Er]);
var Ze = class {
  constructor(t) {
    return Object.assign(this, new lt(t), new Ar(t));
  }
};
u(Ze, "DMMFHelper");
po(Ze, [lt, Ar]);
d();
m();
g();
d();
m();
g();
var Xe;
((t) => {
  let e;
  ((
    P,
  ) => (P.findUnique = "findUnique",
    P.findFirst = "findFirst",
    P.findMany = "findMany",
    P.create = "create",
    P.createMany = "createMany",
    P.update = "update",
    P.updateMany = "updateMany",
    P.upsert = "upsert",
    P.delete = "delete",
    P.deleteMany = "deleteMany",
    P.groupBy = "groupBy",
    P.count = "count",
    P.aggregate = "aggregate",
    P.findRaw = "findRaw",
    P.aggregateRaw = "aggregateRaw"))(
      e = t.ModelAction || (t.ModelAction = {}),
    );
})(Xe || (Xe = {}));
d();
m();
g();
Nn();
d();
m();
g();
d();
m();
g();
var mt = class {};
u(mt, "Engine");
d();
m();
g();
var ke = class extends Error {
  constructor(r, n, o) {
    super(r);
    this.clientVersion = n, this.errorCode = o, Error.captureStackTrace(ke);
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientInitializationError";
  }
};
u(ke, "PrismaClientInitializationError");
d();
m();
g();
var Ge = class extends Error {
  constructor(r, n, o, i) {
    super(r);
    this.code = n, this.clientVersion = o, this.meta = i;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientKnownRequestError";
  }
};
u(Ge, "PrismaClientKnownRequestError");
d();
m();
g();
var ze = class extends Error {
  constructor(r, n) {
    super(r);
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientRustPanicError";
  }
};
u(ze, "PrismaClientRustPanicError");
d();
m();
g();
var Ne = class extends Error {
  constructor(r, n) {
    super(r);
    this.clientVersion = n;
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientUnknownRequestError";
  }
};
u(Ne, "PrismaClientUnknownRequestError");
d();
m();
g();
function Fa(e, t) {
  return e.user_facing_error.error_code
    ? new Ge(
      e.user_facing_error.message,
      e.user_facing_error.error_code,
      t,
      e.user_facing_error.meta,
    )
    : new Ne(e.error, t);
}
u(Fa, "prismaGraphQLToJSError");
d();
m();
g();
var $a = Z(Ma());
d();
m();
g();
d();
m();
g();
var Sr = class extends Error {
  constructor(r, n) {
    super(r);
    this.clientVersion = n.clientVersion, this.cause = n.cause;
  }
  get [Symbol.toStringTag]() {
    return this.name;
  }
};
u(Sr, "PrismaClientError");
var de = class extends Sr {
  constructor(r, n) {
    var o;
    super(r, n);
    this.isRetryable = (o = n.isRetryable) != null ? o : !0;
  }
};
u(de, "DataProxyError");
d();
m();
g();
d();
m();
g();
function ee(e, t) {
  return { ...e, isRetryable: t };
}
u(ee, "setRetryable");
var Xt = class extends de {
  constructor(r) {
    super("This request must be retried", ee(r, !0));
    this.name = "ForcedRetryError";
    this.code = "P5001";
  }
};
u(Xt, "ForcedRetryError");
d();
m();
g();
var Ct = class extends de {
  constructor(r, n) {
    super(r, ee(n, !1));
    this.name = "InvalidDatasourceError";
    this.code = "P5002";
  }
};
u(Ct, "InvalidDatasourceError");
d();
m();
g();
var Je = class extends de {
  constructor(r, n) {
    super(r, ee(n, !1));
    this.name = "NotImplementedYetError";
    this.code = "P5004";
  }
};
u(Je, "NotImplementedYetError");
d();
m();
g();
d();
m();
g();
var ae = class extends de {
  constructor(r, n) {
    super(r, n);
    this.response = n.response;
  }
};
u(ae, "DataProxyAPIError");
var Ft = class extends ae {
  constructor(r) {
    super("Schema needs to be uploaded", ee(r, !0));
    this.name = "SchemaMissingError";
    this.code = "P5005";
  }
};
u(Ft, "SchemaMissingError");
d();
m();
g();
d();
m();
g();
var Zp = "This request could not be understood by the server",
  er = class extends ae {
    constructor(r, n, o) {
      super(n || Zp, ee(r, !1));
      this.name = "BadRequestError";
      this.code = "P5000";
      o && (this.code = o);
    }
  };
u(er, "BadRequestError");
d();
m();
g();
var Or = class extends ae {
  constructor(r) {
    super("Request timed out", ee(r, !1));
    this.name = "GatewayTimeoutError";
    this.code = "P5009";
  }
};
u(Or, "GatewayTimeoutError");
d();
m();
g();
var tr = class extends ae {
  constructor(r) {
    super("Requested resource does not exist", ee(r, !1));
    this.name = "NotFoundError";
    this.code = "P5003";
  }
};
u(tr, "NotFoundError");
d();
m();
g();
var Xp = "Unknown server error",
  gt = class extends ae {
    constructor(r, n, o) {
      super(n || Xp, ee(r, !0));
      this.name = "ServerError";
      this.code = "P5006";
      this.logs = o;
    }
  };
u(gt, "ServerError");
d();
m();
g();
var _r = class extends ae {
  constructor(r) {
    super("Unauthorized, check your connection string", ee(r, !1));
    this.name = "UnauthorizedError";
    this.code = "P5007";
  }
};
u(_r, "UnauthorizedError");
d();
m();
g();
var Ir = class extends ae {
  constructor(r) {
    super("Usage exceeded, retry again later", ee(r, !0));
    this.name = "UsageExceededError";
    this.code = "P5008";
  }
};
u(Ir, "UsageExceededError");
async function Ko(e, t) {
  var n, o, i, s, a;
  if (e.ok) return;
  let r = { clientVersion: t, response: e };
  if (e.status === 400) {
    let c;
    try {
      let l = await e.json();
      c = (o = (n = l == null ? void 0 : l.EngineNotStarted) == null
          ? void 0
          : n.reason) == null
        ? void 0
        : o.KnownEngineStartupError;
    } catch (l) {}
    if (c) throw new er(r, c.msg, c.error_code);
  }
  if (e.status === 401) throw new _r(r);
  if (e.status === 404) {
    try {
      let c = await e.json();
      return ((i = c == null ? void 0 : c.EngineNotStarted) == null
          ? void 0
          : i.reason) === "SchemaMissing"
        ? new Ft(r)
        : new tr(r);
    } catch (c) {
      return new tr(r);
    }
  }
  if (e.status === 429) throw new Ir(r);
  if (e.status === 504) throw new Or(r);
  if (e.status >= 500) {
    let c;
    try {
      c = await e.json();
    } catch (l) {
      throw new gt(r);
    }
    if (
      typeof ((s = c == null ? void 0 : c.EngineNotStarted) == null
        ? void 0
        : s.reason) == "string"
    ) {
      throw new gt(r, c.EngineNotStarted.reason);
    }
    if (
      typeof ((a = c == null ? void 0 : c.EngineNotStarted) == null
        ? void 0
        : a.reason) == "object"
    ) {
      let l = Object.keys(c.EngineNotStarted.reason);
      if (l.length > 0) {
        let p = c.EngineNotStarted.reason[l[0]];
        throw new gt(r, l[0], p.logs);
      }
    }
    throw new gt(r);
  }
  if (e.status >= 400) throw new er(r);
}
u(Ko, "responseToError");
d();
m();
g();
function Ra(e) {
  let t = Math.pow(2, e) * 50,
    r = Math.ceil(Math.random() * t) - Math.ceil(t / 2),
    n = t + r;
  return new Promise((o) => setTimeout(() => o(n), n));
}
u(Ra, "backOff");
d();
m();
g();
Nn();
var Da = "3.16.0-49.da41d2bb3406da22087b849f0e911199ba4fbf11";
d();
m();
g();
d();
m();
g();
var Cr = class extends de {
  constructor(r, n) {
    super(
      `Cannot fetch data from service:
${r}`,
      ee(n, !0),
    );
    this.name = "RequestError";
    this.code = "P5010";
  }
};
u(Cr, "RequestError");
d();
m();
g();
function ka() {
  return typeof self == "undefined" ? "node" : "browser";
}
u(ka, "getJSRuntimeName");
async function Fr(e, t) {
  var o;
  let r = t.clientVersion, n = ka();
  try {
    return n === "browser" ? await fetch(e, t) : await Yo(e, t);
  } catch (i) {
    let s = (o = i.message) != null ? o : "Unknown error";
    throw new Cr(s, { clientVersion: r });
  }
}
u(Fr, "request");
function tm(e) {
  return { ...e.headers, "Content-Type": "application/json" };
}
u(tm, "buildHeaders");
function rm(e) {
  return { method: e.method, headers: tm(e) };
}
u(rm, "buildOptions");
function nm(e, t) {
  return {
    json: () => JSON.parse(x.Buffer.concat(e).toString()),
    ok: t.statusCode >= 200 && t.statusCode <= 299,
    status: t.statusCode,
    url: t.url,
  };
}
u(nm, "buildResponse");
async function Yo(e, t = {}) {
  let r = om("https"), n = rm(t), o = [], { origin: i } = new URL(e);
  return new Promise((s, a) => {
    var l;
    let c = r.request(e, n, (f) => {
      let { statusCode: p, headers: { location: h } } = f;
      p >= 301 && p <= 399 && h &&
      (h.startsWith("http") === !1 ? s(Yo(`${i}${h}`, t)) : s(Yo(h, t))),
        f.on("data", (y) => o.push(y)),
        f.on("end", () => s(nm(o, f))),
        f.on("error", a);
    });
    c.on("error", a), c.end((l = t.body) != null ? l : "");
  });
}
u(Yo, "nodeFetch");
var om = typeof require != "undefined" ? require : () => {};
var im = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/,
  sm = pt("prisma:client:dataproxyEngine");
async function am(e) {
  var o, i, s;
  let t = (o = e.clientVersion) != null ? o : "unknown";
  if (v.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) {
    return v.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
  }
  let [r, n] = (i = t == null ? void 0 : t.split("-")) != null ? i : [];
  if (n === void 0 && im.test(r)) return r;
  if (n !== void 0 || t === "0.0.0") {
    let [a] = (s = Da.split("-")) != null ? s : [],
      [c, l, f] = a.split("."),
      p = um(`<=${c}.${l}.${f}`);
    return (await (await Fr(p, { clientVersion: t })).json()).version;
  }
  throw new Je(
    "Only `major.minor.patch` versions are supported by Prisma Data Proxy.",
    { clientVersion: t },
  );
}
u(am, "_getClientVersion");
async function Na(e) {
  let t = await am(e);
  return sm("version", t), t;
}
u(Na, "getClientVersion");
function um(e) {
  return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
}
u(um, "prismaPkgURL");
var cm = 10,
  lm = Promise.resolve(),
  rr = class extends mt {
    constructor(r) {
      var i, s, a, c;
      super();
      this.config = r,
        this.env = { ...this.config.env, ...v.env },
        this.inlineSchema = (i = r.inlineSchema) != null ? i : "",
        this.inlineDatasources = (s = r.inlineDatasources) != null ? s : {},
        this.inlineSchemaHash = (a = r.inlineSchemaHash) != null ? a : "",
        this.clientVersion = (c = r.clientVersion) != null ? c : "unknown",
        this.logEmitter = new $a.default(),
        this.logEmitter.on("error", () => {});
      let [n, o] = this.extractHostAndApiKey();
      this.remoteClientVersion = lm.then(() => Na(this.config)),
        this.headers = { Authorization: `Bearer ${o}` },
        this.host = n;
    }
    version() {
      return "unknown";
    }
    async start() {}
    async stop() {}
    on(r, n) {
      if (r === "beforeExit") {
        throw new Je("beforeExit event is not yet supported", {
          clientVersion: this.clientVersion,
        });
      }
      this.logEmitter.on(r, n);
    }
    async url(r) {
      return `https://${this.host}/${await this
        .remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
    }
    async getConfig() {
      return Promise.resolve({
        datasources: [{ activeProvider: this.config.activeProvider }],
      });
    }
    getDmmf() {
      throw new Je("getDmmf is not yet supported", {
        clientVersion: this.clientVersion,
      });
    }
    async uploadSchema() {
      let r = await Fr(await this.url("schema"), {
          method: "PUT",
          headers: this.headers,
          body: this.inlineSchema,
          clientVersion: this.clientVersion,
        }),
        n = await Ko(r, this.clientVersion);
      if (n) {
        throw this.logEmitter.emit("warn", {
          message: `Error while uploading schema: ${n.message}`,
        }),
          n;
      }
      this.logEmitter.emit("info", {
        message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`,
      });
    }
    request(r, n, o = 0) {
      return this.logEmitter.emit("query", { query: r }),
        this.requestInternal({ query: r, variables: {} }, n, o);
    }
    async requestBatch(r, n, o = !1, i = 0) {
      this.logEmitter.emit("query", {
        query: `Batch${o ? " in transaction" : ""} (${r.length}):
${
          r.join(`
`)
        }`,
      });
      let s = {
          batch: r.map((c) => ({ query: c, variables: {} })),
          transaction: o,
        },
        { batchResult: a } = await this.requestInternal(s, n, i);
      return a;
    }
    async requestInternal(r, n, o) {
      var i;
      try {
        this.logEmitter.emit("info", {
          message: `Calling ${await this.url("graphql")} (n=${o})`,
        });
        let s = await Fr(await this.url("graphql"), {
            method: "POST",
            headers: { ...n, ...this.headers },
            body: JSON.stringify(r),
            clientVersion: this.clientVersion,
          }),
          a = await Ko(s, this.clientVersion);
        if (a instanceof Ft) {
          throw await this.uploadSchema(),
            new Xt({ clientVersion: this.clientVersion, cause: a });
        }
        if (a) throw a;
        let c = await s.json();
        if (c.errors && c.errors.length === 1) {
          throw Fa(c.errors[0], this.config.clientVersion);
        }
        return c;
      } catch (s) {
        if (
          this.logEmitter.emit("error", {
            message: `Error while querying: ${
              (i = s.message) != null ? i : "(unknown)"
            }`,
          }), !(s instanceof de) || !s.isRetryable
        ) {
          throw s;
        }
        if (o >= cm) throw s instanceof Xt ? s.cause : s;
        this.logEmitter.emit("warn", {
          message: "This request can be retried",
        });
        let a = await Ra(o);
        return this.logEmitter.emit("warn", {
          message: `Retrying after ${a}ms`,
        }),
          this.requestInternal(r, n, o + 1);
      }
    }
    transaction() {
      throw new Je("Interactive transactions are not yet supported", {
        clientVersion: this.clientVersion,
      });
    }
    extractHostAndApiKey() {
      let r = Object.keys(this.inlineDatasources)[0],
        n = this.inlineDatasources[r],
        o = n == null ? void 0 : n.url.value,
        i = n == null ? void 0 : n.url.fromEnvVar,
        s = this.env[i],
        a = o != null ? o : s,
        c;
      try {
        c = new URL(a != null ? a : "");
      } catch (y) {
        throw new Ct("Could not parse URL of the datasource", {
          clientVersion: this.clientVersion,
        });
      }
      let { protocol: l, host: f, searchParams: p } = c;
      if (l !== "prisma:") {
        throw new Ct(
          "Datasource URL must use prisma:// protocol when --data-proxy is used",
          { clientVersion: this.clientVersion },
        );
      }
      let h = p.get("api_key");
      if (h === null || h.length < 1) {
        throw new Ct("No valid API key found in the datasource URL", {
          clientVersion: this.clientVersion,
        });
      }
      return [f, h];
    }
    metrics(r) {
      throw new Je("Metric are not yet supported for Data Proxy", {
        clientVersion: this.clientVersion,
      });
    }
  };
u(rr, "DataProxyEngine");
d();
m();
g();
d();
m();
g();
var ja = "library";
function Zo(e) {
  let t = fm();
  return t ||
    ((e == null ? void 0 : e.config.engineType) === "library"
      ? "library"
      : (e == null ? void 0 : e.config.engineType) === "binary"
      ? "binary"
      : ja);
}
u(Zo, "getClientEngineType");
function fm() {
  let e = v.env.PRISMA_CLIENT_ENGINE_TYPE;
  return e === "library" ? "library" : e === "binary" ? "binary" : void 0;
}
u(fm, "getEngineTypeFromEnvVar");
d();
m();
g();
var mm = Z(La()), gm = Z(ei());
function Dr(e) {
  return e instanceof Error;
}
u(Dr, "isError");
d();
m();
g();
var dm = { transactionApi: "transaction", aggregateApi: "aggregations" };
function ti(e) {
  return Array.isArray(e) && e.length > 0
    ? e.map((t) => {
      var r;
      return (r = dm[t]) != null ? r : t;
    })
    : [];
}
u(ti, "mapPreviewFeatures");
var nr = {};
oo(nr, {
  error: () => bm,
  info: () => ym,
  log: () => hm,
  query: () => wm,
  should: () => Ga,
  tags: () => Nr,
  warn: () => ri,
});
d();
m();
g();
var kr = Z(Pt()),
  Nr = {
    error: kr.default.red("prisma:error"),
    warn: kr.default.yellow("prisma:warn"),
    info: kr.default.cyan("prisma:info"),
    query: kr.default.blue("prisma:query"),
  },
  Ga = { warn: !v.env.PRISMA_DISABLE_WARNINGS };
function hm(...e) {
  console.log(...e);
}
u(hm, "log");
function ri(e, ...t) {
  Ga.warn && console.warn(`${Nr.warn} ${e}`, ...t);
}
u(ri, "warn");
function ym(e, ...t) {
  console.info(`${Nr.info} ${e}`, ...t);
}
u(ym, "info");
function bm(e, ...t) {
  console.error(`${Nr.error} ${e}`, ...t);
}
u(bm, "error");
function wm(e, ...t) {
  console.log(`${Nr.query} ${e}`, ...t);
}
u(wm, "query");
d();
m();
g();
function ni(e, t) {
  throw new Error(t);
}
u(ni, "assertNever");
d();
m();
g();
var za = new Set(),
  oi = u((e, t, ...r) => {
    za.has(e) || (za.add(e), ri(t, ...r));
  }, "warnOnce");
var Ja = Z(Aa());
var O2 = Z(Wa());
Ho();
var en = Z(Qo()), ur = Z(ii());
d();
m();
g();
d();
m();
g();
var Ya = Z(Ka());
function Za(e) {
  return { ...e, mappings: Am(e.mappings, e.datamodel) };
}
u(Za, "externalToInternalDmmf");
function Am(e, t) {
  return {
    modelOperations: e.modelOperations.filter((n) => {
      let o = t.models.find((i) => i.name === n.model);
      if (!o) throw new Error(`Mapping without model ${n.model}`);
      return o.fields.some((i) => i.kind !== "object");
    }).map((n) => ({
      model: n.model,
      plural: (0, Ya.default)(na(n.model)),
      findUnique: n.findUnique || n.findSingle,
      findFirst: n.findFirst,
      findMany: n.findMany,
      create: n.createOne || n.createSingle || n.create,
      createMany: n.createMany,
      delete: n.deleteOne || n.deleteSingle || n.delete,
      update: n.updateOne || n.updateSingle || n.update,
      deleteMany: n.deleteMany,
      updateMany: n.updateMany,
      upsert: n.upsertOne || n.upsertSingle || n.upsert,
      aggregate: n.aggregate,
      groupBy: n.groupBy,
      findRaw: n.findRaw,
      aggregateRaw: n.aggregateRaw,
    })),
    otherOperations: e.otherOperations,
  };
}
u(Am, "getMappings");
function Xa(e) {
  return Za(e);
}
u(Xa, "getPrismaClientDMMF");
d();
m();
g();
d();
m();
g();
d();
m();
g();
var $r = {
  findUniqueOrThrow: { wrappedAction: Xe.ModelAction.findUnique },
  findFirstOrThrow: { wrappedAction: Xe.ModelAction.findFirst },
};
function eu(e) {
  return Bn(e) ? $r[e].wrappedAction : e;
}
u(eu, "getDmmfActionName");
function Bn(e) {
  return Object.prototype.hasOwnProperty.call($r, e);
}
u(Bn, "isClientOnlyAction");
var o0 = Object.keys(Xe.ModelAction).concat(Object.keys($r));
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
var tu = typeof globalThis == "object" ? globalThis : global;
d();
m();
g();
var dt = "1.1.0";
d();
m();
g();
var ru = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Tm(e) {
  var t = new Set([e]), r = new Set(), n = e.match(ru);
  if (!n) {
    return function () {
      return !1;
    };
  }
  var o = { major: +n[1], minor: +n[2], patch: +n[3], prerelease: n[4] };
  if (o.prerelease != null) {
    return u(function (c) {
      return c === e;
    }, "isExactmatch");
  }
  function i(a) {
    return r.add(a), !1;
  }
  u(i, "_reject");
  function s(a) {
    return t.add(a), !0;
  }
  return u(s, "_accept"),
    u(function (c) {
      if (t.has(c)) return !0;
      if (r.has(c)) return !1;
      var l = c.match(ru);
      if (!l) return i(c);
      var f = { major: +l[1], minor: +l[2], patch: +l[3], prerelease: l[4] };
      return f.prerelease != null || o.major !== f.major
        ? i(c)
        : o.major === 0
        ? o.minor === f.minor && o.patch <= f.patch ? s(c) : i(c)
        : o.minor <= f.minor
        ? s(c)
        : i(c);
    }, "isCompatible");
}
u(Tm, "_makeCompatibilityCheck");
var nu = Tm(dt);
var Mm = dt.split(".")[0],
  jr = Symbol.for("opentelemetry.js.api." + Mm),
  Br = tu;
function ht(e, t, r, n) {
  var o;
  n === void 0 && (n = !1);
  var i = Br[jr] = (o = Br[jr]) !== null && o !== void 0 ? o : { version: dt };
  if (!n && i[e]) {
    var s = new Error(
      "@opentelemetry/api: Attempted duplicate registration of API: " + e,
    );
    return r.error(s.stack || s.message), !1;
  }
  if (i.version !== dt) {
    var s = new Error(
      "@opentelemetry/api: All API registration versions must match",
    );
    return r.error(s.stack || s.message), !1;
  }
  return i[e] = t,
    r.debug(
      "@opentelemetry/api: Registered a global for " + e + " v" + dt + ".",
    ),
    !0;
}
u(ht, "registerGlobal");
function $e(e) {
  var t, r, n = (t = Br[jr]) === null || t === void 0 ? void 0 : t.version;
  if (!(!n || !nu(n))) {
    return (r = Br[jr]) === null || r === void 0 ? void 0 : r[e];
  }
}
u($e, "getGlobal");
function yt(e, t) {
  t.debug(
    "@opentelemetry/api: Unregistering a global for " + e + " v" + dt + ".",
  );
  var r = Br[jr];
  r && delete r[e];
}
u(yt, "unregisterGlobal");
var ou = function () {
  function e(t) {
    this._namespace = t.namespace || "DiagComponentLogger";
  }
  return u(e, "DiagComponentLogger"),
    e.prototype.debug = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Lr("debug", this._namespace, t);
    },
    e.prototype.error = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Lr("error", this._namespace, t);
    },
    e.prototype.info = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Lr("info", this._namespace, t);
    },
    e.prototype.warn = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Lr("warn", this._namespace, t);
    },
    e.prototype.verbose = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      return Lr("verbose", this._namespace, t);
    },
    e;
}();
function Lr(e, t, r) {
  var n = $e("diag");
  if (!!n) return r.unshift(t), n[e].apply(n, r);
}
u(Lr, "logProxy");
d();
m();
g();
d();
m();
g();
var xe;
(function (e) {
  e[e.NONE = 0] = "NONE",
    e[e.ERROR = 30] = "ERROR",
    e[e.WARN = 50] = "WARN",
    e[e.INFO = 60] = "INFO",
    e[e.DEBUG = 70] = "DEBUG",
    e[e.VERBOSE = 80] = "VERBOSE",
    e[e.ALL = 9999] = "ALL";
})(xe || (xe = {}));
function iu(e, t) {
  e < xe.NONE ? e = xe.NONE : e > xe.ALL && (e = xe.ALL), t = t || {};
  function r(n, o) {
    var i = t[n];
    return typeof i == "function" && e >= o ? i.bind(t) : function () {};
  }
  return u(r, "_filterFunc"), {
    error: r("error", xe.ERROR),
    warn: r("warn", xe.WARN),
    info: r("info", xe.INFO),
    debug: r("debug", xe.DEBUG),
    verbose: r("verbose", xe.VERBOSE),
  };
}
u(iu, "createLogLevelDiagLogger");
var Pm = "diag",
  Pe = function () {
    function e() {
      function t(n) {
        return function () {
          for (var o = [], i = 0; i < arguments.length; i++) {
            o[i] = arguments[i];
          }
          var s = $e("diag");
          if (!!s) return s[n].apply(s, o);
        };
      }
      u(t, "_logProxy");
      var r = this;
      r.setLogger = function (n, o) {
        var i, s;
        if (o === void 0 && (o = xe.INFO), n === r) {
          var a = new Error(
            "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation",
          );
          return r.error(
            (i = a.stack) !== null && i !== void 0 ? i : a.message,
          ),
            !1;
        }
        var c = $e("diag"), l = iu(o, n);
        if (c) {
          var f = (s = new Error().stack) !== null && s !== void 0
            ? s
            : "<failed to generate stacktrace>";
          c.warn("Current logger will be overwritten from " + f),
            l.warn(
              "Current logger will overwrite one already registered from " + f,
            );
        }
        return ht("diag", l, r, !0);
      },
        r.disable = function () {
          yt(Pm, r);
        },
        r.createComponentLogger = function (n) {
          return new ou(n);
        },
        r.verbose = t("verbose"),
        r.debug = t("debug"),
        r.info = t("info"),
        r.warn = t("warn"),
        r.error = t("error");
    }
    return u(e, "DiagAPI"),
      e.instance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e;
  }();
d();
m();
g();
var su = function () {
  function e(t) {
    this._entries = t ? new Map(t) : new Map();
  }
  return u(e, "BaggageImpl"),
    e.prototype.getEntry = function (t) {
      var r = this._entries.get(t);
      if (!!r) return Object.assign({}, r);
    },
    e.prototype.getAllEntries = function () {
      return Array.from(this._entries.entries()).map(function (t) {
        var r = t[0], n = t[1];
        return [r, n];
      });
    },
    e.prototype.setEntry = function (t, r) {
      var n = new e(this._entries);
      return n._entries.set(t, r), n;
    },
    e.prototype.removeEntry = function (t) {
      var r = new e(this._entries);
      return r._entries.delete(t), r;
    },
    e.prototype.removeEntries = function () {
      for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
      for (var n = new e(this._entries), o = 0, i = t; o < i.length; o++) {
        var s = i[o];
        n._entries.delete(s);
      }
      return n;
    },
    e.prototype.clear = function () {
      return new e();
    },
    e;
}();
d();
m();
g();
var Sm = Symbol("BaggageEntryMetadata");
var R0 = Pe.instance();
function au(e) {
  return e === void 0 && (e = {}), new su(new Map(Object.entries(e)));
}
u(au, "createBaggage");
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
var ui = [
    { n: "error", c: "error" },
    { n: "warn", c: "warn" },
    { n: "info", c: "info" },
    { n: "debug", c: "debug" },
    { n: "verbose", c: "trace" },
  ],
  k0 = function () {
    function e() {
      function t(n) {
        return function () {
          for (var o = [], i = 0; i < arguments.length; i++) {
            o[i] = arguments[i];
          }
          if (console) {
            var s = console[n];
            if (
              typeof s != "function" && (s = console.log),
                typeof s == "function"
            ) {
              return s.apply(console, o);
            }
          }
        };
      }
      u(t, "_consoleFunc");
      for (var r = 0; r < ui.length; r++) this[ui[r].n] = t(ui[r].c);
    }
    return u(e, "DiagConsoleLogger"), e;
  }();
d();
m();
g();
var uu = {
    get: function (e, t) {
      if (e != null) return e[t];
    },
    keys: function (e) {
      return e == null ? [] : Object.keys(e);
    },
  },
  cu = {
    set: function (e, t, r) {
      e != null && (e[t] = r);
    },
  };
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
function Ln(e) {
  return Symbol.for(e);
}
u(Ln, "createContextKey");
var Om = function () {
    function e(t) {
      var r = this;
      r._currentContext = t ? new Map(t) : new Map(),
        r.getValue = function (n) {
          return r._currentContext.get(n);
        },
        r.setValue = function (n, o) {
          var i = new e(r._currentContext);
          return i._currentContext.set(n, o), i;
        },
        r.deleteValue = function (n) {
          var o = new e(r._currentContext);
          return o._currentContext.delete(n), o;
        };
    }
    return u(e, "BaseContext"), e;
  }(),
  lu = new Om();
var _m = function (e, t) {
    for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
    return e;
  },
  fu = function () {
    function e() {}
    return u(e, "NoopContextManager"),
      e.prototype.active = function () {
        return lu;
      },
      e.prototype.with = function (t, r, n) {
        for (var o = [], i = 3; i < arguments.length; i++) {o[i - 3] =
            arguments[i];}
        return r.call.apply(r, _m([n], o));
      },
      e.prototype.bind = function (t, r) {
        return r;
      },
      e.prototype.enable = function () {
        return this;
      },
      e.prototype.disable = function () {
        return this;
      },
      e;
  }();
var Im = function (e, t) {
    for (var r = 0, n = t.length, o = e.length; r < n; r++, o++) e[o] = t[r];
    return e;
  },
  ci = "context",
  Cm = new fu(),
  qn = function () {
    function e() {}
    return u(e, "ContextAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalContextManager = function (t) {
        return ht(ci, t, Pe.instance());
      },
      e.prototype.active = function () {
        return this._getContextManager().active();
      },
      e.prototype.with = function (t, r, n) {
        for (var o, i = [], s = 3; s < arguments.length; s++) {i[s - 3] =
            arguments[s];}
        return (o = this._getContextManager()).with.apply(o, Im([t, r, n], i));
      },
      e.prototype.bind = function (t, r) {
        return this._getContextManager().bind(t, r);
      },
      e.prototype._getContextManager = function () {
        return $e(ci) || Cm;
      },
      e.prototype.disable = function () {
        this._getContextManager().disable(), yt(ci, Pe.instance());
      },
      e;
  }();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
var Un;
(function (e) {
  e[e.NONE = 0] = "NONE", e[e.SAMPLED = 1] = "SAMPLED";
})(Un || (Un = {}));
var Vn = "0000000000000000",
  Gn = "00000000000000000000000000000000",
  li = { traceId: Gn, spanId: Vn, traceFlags: Un.NONE };
var bt = function () {
  function e(t) {
    t === void 0 && (t = li), this._spanContext = t;
  }
  return u(e, "NonRecordingSpan"),
    e.prototype.spanContext = function () {
      return this._spanContext;
    },
    e.prototype.setAttribute = function (t, r) {
      return this;
    },
    e.prototype.setAttributes = function (t) {
      return this;
    },
    e.prototype.addEvent = function (t, r) {
      return this;
    },
    e.prototype.setStatus = function (t) {
      return this;
    },
    e.prototype.updateName = function (t) {
      return this;
    },
    e.prototype.end = function (t) {},
    e.prototype.isRecording = function () {
      return !1;
    },
    e.prototype.recordException = function (t, r) {},
    e;
}();
var fi = Ln("OpenTelemetry Context Key SPAN");
function pi(e) {
  return e.getValue(fi) || void 0;
}
u(pi, "getSpan");
function qr(e, t) {
  return e.setValue(fi, t);
}
u(qr, "setSpan");
function pu(e) {
  return e.deleteValue(fi);
}
u(pu, "deleteSpan");
function mu(e, t) {
  return qr(e, new bt(t));
}
u(mu, "setSpanContext");
function zn(e) {
  var t;
  return (t = pi(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
u(zn, "getSpanContext");
d();
m();
g();
var Fm = /^([0-9a-f]{32})$/i, Rm = /^[0-9a-f]{16}$/i;
function gu(e) {
  return Fm.test(e) && e !== Gn;
}
u(gu, "isValidTraceId");
function du(e) {
  return Rm.test(e) && e !== Vn;
}
u(du, "isValidSpanId");
function Ur(e) {
  return gu(e.traceId) && du(e.spanId);
}
u(Ur, "isSpanContextValid");
function hu(e) {
  return new bt(e);
}
u(hu, "wrapSpanContext");
var yu = qn.getInstance(),
  Jn = function () {
    function e() {}
    return u(e, "NoopTracer"),
      e.prototype.startSpan = function (t, r, n) {
        var o = Boolean(r == null ? void 0 : r.root);
        if (o) return new bt();
        var i = n && zn(n);
        return Dm(i) && Ur(i) ? new bt(i) : new bt();
      },
      e.prototype.startActiveSpan = function (t, r, n, o) {
        var i, s, a;
        if (!(arguments.length < 2)) {
          arguments.length === 2
            ? a = r
            : arguments.length === 3
            ? (i = r, a = n)
            : (i = r, s = n, a = o);
          var c = s != null ? s : yu.active(),
            l = this.startSpan(t, i, c),
            f = qr(c, l);
          return yu.with(f, a, void 0, l);
        }
      },
      e;
  }();
function Dm(e) {
  return typeof e == "object" && typeof e.spanId == "string" &&
    typeof e.traceId == "string" && typeof e.traceFlags == "number";
}
u(Dm, "isSpanContext");
var km = new Jn(),
  bu = function () {
    function e(t, r, n, o) {
      this._provider = t, this.name = r, this.version = n, this.options = o;
    }
    return u(e, "ProxyTracer"),
      e.prototype.startSpan = function (t, r, n) {
        return this._getTracer().startSpan(t, r, n);
      },
      e.prototype.startActiveSpan = function (t, r, n, o) {
        var i = this._getTracer();
        return Reflect.apply(i.startActiveSpan, i, arguments);
      },
      e.prototype._getTracer = function () {
        if (this._delegate) return this._delegate;
        var t = this._provider.getDelegateTracer(
          this.name,
          this.version,
          this.options,
        );
        return t ? (this._delegate = t, this._delegate) : km;
      },
      e;
  }();
d();
m();
g();
d();
m();
g();
var wu = function () {
  function e() {}
  return u(e, "NoopTracerProvider"),
    e.prototype.getTracer = function (t, r, n) {
      return new Jn();
    },
    e;
}();
var Nm = new wu(),
  mi = function () {
    function e() {}
    return u(e, "ProxyTracerProvider"),
      e.prototype.getTracer = function (t, r, n) {
        var o;
        return (o = this.getDelegateTracer(t, r, n)) !== null && o !== void 0
          ? o
          : new bu(this, t, r, n);
      },
      e.prototype.getDelegate = function () {
        var t;
        return (t = this._delegate) !== null && t !== void 0 ? t : Nm;
      },
      e.prototype.setDelegate = function (t) {
        this._delegate = t;
      },
      e.prototype.getDelegateTracer = function (t, r, n) {
        var o;
        return (o = this._delegate) === null || o === void 0
          ? void 0
          : o.getTracer(t, r, n);
      },
      e;
  }();
d();
m();
g();
d();
m();
g();
var vu;
(function (e) {
  e[e.NOT_RECORD = 0] = "NOT_RECORD",
    e[e.RECORD = 1] = "RECORD",
    e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
})(vu || (vu = {}));
d();
m();
g();
d();
m();
g();
var xu;
(function (e) {
  e[e.INTERNAL = 0] = "INTERNAL",
    e[e.SERVER = 1] = "SERVER",
    e[e.CLIENT = 2] = "CLIENT",
    e[e.PRODUCER = 3] = "PRODUCER",
    e[e.CONSUMER = 4] = "CONSUMER";
})(xu || (xu = {}));
d();
m();
g();
d();
m();
g();
d();
m();
g();
var Eu;
(function (e) {
  e[e.UNSET = 0] = "UNSET", e[e.OK = 1] = "OK", e[e.ERROR = 2] = "ERROR";
})(Eu || (Eu = {}));
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
var gi = "[_0-9a-z-*/]",
  $m = "[a-z]" + gi + "{0,255}",
  jm = "[a-z0-9]" + gi + "{0,240}@[a-z]" + gi + "{0,13}",
  Bm = new RegExp("^(?:" + $m + "|" + jm + ")$"),
  Lm = /^[ -~]{0,255}[!-~]$/,
  qm = /,|=/;
function Au(e) {
  return Bm.test(e);
}
u(Au, "validateKey");
function Tu(e) {
  return Lm.test(e) && !qm.test(e);
}
u(Tu, "validateValue");
var Mu = 32,
  Um = 512,
  Pu = ",",
  Su = "=",
  Vm = function () {
    function e(t) {
      this._internalState = new Map(), t && this._parse(t);
    }
    return u(e, "TraceStateImpl"),
      e.prototype.set = function (t, r) {
        var n = this._clone();
        return n._internalState.has(t) && n._internalState.delete(t),
          n._internalState.set(t, r),
          n;
      },
      e.prototype.unset = function (t) {
        var r = this._clone();
        return r._internalState.delete(t), r;
      },
      e.prototype.get = function (t) {
        return this._internalState.get(t);
      },
      e.prototype.serialize = function () {
        var t = this;
        return this._keys().reduce(function (r, n) {
          return r.push(n + Su + t.get(n)), r;
        }, []).join(Pu);
      },
      e.prototype._parse = function (t) {
        t.length > Um ||
          (this._internalState = t.split(Pu).reverse().reduce(function (r, n) {
            var o = n.trim(), i = o.indexOf(Su);
            if (i !== -1) {
              var s = o.slice(0, i), a = o.slice(i + 1, n.length);
              Au(s) && Tu(a) && r.set(s, a);
            }
            return r;
          }, new Map()),
            this._internalState.size > Mu &&
            (this._internalState = new Map(
              Array.from(this._internalState.entries()).reverse().slice(0, Mu),
            )));
      },
      e.prototype._keys = function () {
        return Array.from(this._internalState.keys()).reverse();
      },
      e.prototype._clone = function () {
        var t = new e();
        return t._internalState = new Map(this._internalState), t;
      },
      e;
  }();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
d();
m();
g();
var di = "trace",
  Ou = function () {
    function e() {
      this._proxyTracerProvider = new mi(),
        this.wrapSpanContext = hu,
        this.isSpanContextValid = Ur,
        this.deleteSpan = pu,
        this.getSpan = pi,
        this.getSpanContext = zn,
        this.setSpan = qr,
        this.setSpanContext = mu;
    }
    return u(e, "TraceAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalTracerProvider = function (t) {
        var r = ht(di, this._proxyTracerProvider, Pe.instance());
        return r && this._proxyTracerProvider.setDelegate(t), r;
      },
      e.prototype.getTracerProvider = function () {
        return $e(di) || this._proxyTracerProvider;
      },
      e.prototype.getTracer = function (t, r) {
        return this.getTracerProvider().getTracer(t, r);
      },
      e.prototype.disable = function () {
        yt(di, Pe.instance()), this._proxyTracerProvider = new mi();
      },
      e;
  }();
d();
m();
g();
d();
m();
g();
var _u = function () {
  function e() {}
  return u(e, "NoopTextMapPropagator"),
    e.prototype.inject = function (t, r) {},
    e.prototype.extract = function (t, r) {
      return t;
    },
    e.prototype.fields = function () {
      return [];
    },
    e;
}();
d();
m();
g();
var hi = Ln("OpenTelemetry Baggage Key");
function Iu(e) {
  return e.getValue(hi) || void 0;
}
u(Iu, "getBaggage");
function Cu(e, t) {
  return e.setValue(hi, t);
}
u(Cu, "setBaggage");
function Fu(e) {
  return e.deleteValue(hi);
}
u(Fu, "deleteBaggage");
var yi = "propagation",
  Gm = new _u(),
  Ru = function () {
    function e() {
      this.createBaggage = au,
        this.getBaggage = Iu,
        this.setBaggage = Cu,
        this.deleteBaggage = Fu;
    }
    return u(e, "PropagationAPI"),
      e.getInstance = function () {
        return this._instance || (this._instance = new e()), this._instance;
      },
      e.prototype.setGlobalPropagator = function (t) {
        return ht(yi, t, Pe.instance());
      },
      e.prototype.inject = function (t, r, n) {
        return n === void 0 && (n = cu),
          this._getGlobalPropagator().inject(t, r, n);
      },
      e.prototype.extract = function (t, r, n) {
        return n === void 0 && (n = uu),
          this._getGlobalPropagator().extract(t, r, n);
      },
      e.prototype.fields = function () {
        return this._getGlobalPropagator().fields();
      },
      e.prototype.disable = function () {
        yt(yi, Pe.instance());
      },
      e.prototype._getGlobalPropagator = function () {
        return $e(yi) || Gm;
      },
      e;
  }();
var Wn = qn.getInstance(),
  Vr = Ou.getInstance(),
  J1 = Ru.getInstance(),
  H1 = Pe.instance();
function wt(e) {
  let t = Wn.active(),
    r,
    n = u((o, i) => {
      try {
        return r != null ? r : r = e(o, i, t);
      } catch (s) {
        return Promise.reject(s);
      }
    }, "_callback");
  return {
    then(o, i, s) {
      return n(s).then(o, i, s);
    },
    catch(o, i) {
      return n(i).catch(o, i);
    },
    finally(o, i) {
      return n(i).finally(o, i);
    },
    requestTransaction(o, i) {
      let s = n(o, i);
      return s.requestTransaction ? s.requestTransaction(o, i) : s;
    },
    [Symbol.toStringTag]: "PrismaPromise",
  };
}
u(wt, "createPrismaPromise");
d();
m();
g();
function et(e) {
  if (e !== "minimal") return new Error().stack;
}
u(et, "getCallSite");
d();
m();
g();
d();
m();
g();
d();
m();
g();
var Du = { _avg: !0, _count: !0, _sum: !0, _min: !0, _max: !0 };
function bi(e) {
  let t = zm(e);
  return Object.entries(t).reduce(
    (
      n,
      [o, i],
    ) => (Du[o] !== void 0 ? n.select[o] = { select: i } : n[o] = i, n),
    { select: {} },
  );
}
u(bi, "desugarUserArgs");
function zm(e) {
  return typeof e._count == "boolean"
    ? { ...e, _count: { _all: e._count } }
    : e;
}
u(zm, "desugarCountInUserArgs");
function Jm(e) {
  return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
}
u(Jm, "createUnpacker");
function Gr(e, t, r) {
  let n = bi(t != null ? t : {}), o = Jm(t != null ? t : {});
  return r({ action: "aggregate", unpacker: o })(n);
}
u(Gr, "aggregate");
d();
m();
g();
function ku(e, t, r) {
  let { select: n, ...o } = t != null ? t : {};
  return typeof n == "object"
    ? Gr(
      e,
      { ...o, _count: n },
      (i) =>
        r({
          ...i,
          action: "count",
          unpacker: (s) => {
            var a;
            return (a = i.unpacker) == null ? void 0 : a.call(i, s)._count;
          },
        }),
    )
    : Gr(
      e,
      { ...o, _count: { _all: !0 } },
      (i) =>
        r({
          ...i,
          action: "count",
          unpacker: (s) => {
            var a;
            return (a = i.unpacker) == null ? void 0 : a.call(i, s)._count._all;
          },
        }),
    );
}
u(ku, "count");
d();
m();
g();
function Wm(e) {
  let t = bi(e);
  if (Array.isArray(e.by)) {
    for (let r of e.by) typeof r == "string" && (t.select[r] = !0);
  }
  return t;
}
u(Wm, "desugarUserArgs");
function Hm(e) {
  return (t) => (typeof e._count == "boolean" && t.forEach((r) => {
    r._count = r._count._all;
  }),
    t);
}
u(Hm, "createUnpacker");
function Nu(e, t, r) {
  let n = Wm(t != null ? t : {}), o = Hm(t != null ? t : {});
  return r({ action: "groupBy", unpacker: o })(n);
}
u(Nu, "groupBy");
function $u(e, t, r) {
  if (t === "aggregate") return (n) => Gr(e, n, r);
  if (t === "count") return (n) => ku(e, n, r);
  if (t === "groupBy") return (n) => Nu(e, n, r);
}
u($u, "applyAggregates");
d();
m();
g();
d();
m();
g();
var D = Z(Pt());
var xt = Z(Oo()), Pi = Z(jn());
d();
m();
g();
function Bu(e) {
  return e instanceof x.Buffer || e instanceof Date || e instanceof RegExp;
}
u(Bu, "isSpecificValue");
function Lu(e) {
  if (e instanceof x.Buffer) {
    let t = x.Buffer.alloc ? x.Buffer.alloc(e.length) : new x.Buffer(e.length);
    return e.copy(t), t;
  } else {
    if (e instanceof Date) return new Date(e.getTime());
    if (e instanceof RegExp) return new RegExp(e);
    throw new Error("Unexpected situation");
  }
}
u(Lu, "cloneSpecificValue");
function qu(e) {
  let t = [];
  return e.forEach(function (r, n) {
    typeof r == "object" && r !== null
      ? Array.isArray(r)
        ? t[n] = qu(r)
        : Bu(r)
        ? t[n] = Lu(r)
        : t[n] = zr({}, r)
      : t[n] = r;
  }),
    t;
}
u(qu, "deepCloneArray");
function ju(e, t) {
  return t === "__proto__" ? void 0 : e[t];
}
u(ju, "safeGetProperty");
var zr = u(function (e, ...t) {
  if (!e || typeof e != "object") return !1;
  if (t.length === 0) return e;
  let r, n;
  for (let o of t) {
    if (!(typeof o != "object" || o === null || Array.isArray(o))) {
      for (let i of Object.keys(o)) {
        if (n = ju(e, i), r = ju(o, i), r !== e) {
          if (typeof r != "object" || r === null) {
            e[i] = r;
            continue;
          } else if (Array.isArray(r)) {
            e[i] = qu(r);
            continue;
          } else if (Bu(r)) {
            e[i] = Lu(r);
            continue;
          } else if (typeof n != "object" || n === null || Array.isArray(n)) {
            e[i] = zr({}, r);
            continue;
          } else {
            e[i] = zr(n, r);
            continue;
          }
        }
      }
    }
  }
  return e;
}, "deepExtend");
d();
m();
g();
var Uu = u((e) => Array.isArray(e) ? e : e.split("."), "keys"),
  wi = u((e, t) => Uu(t).reduce((r, n) => r && r[n], e), "deepGet"),
  Hn = u(
    (e, t, r) =>
      Uu(t).reduceRight(
        (n, o, i, s) => Object.assign({}, wi(e, s.slice(0, i)), { [o]: n }),
        r,
      ),
    "deepSet",
  );
d();
m();
g();
function Vu(e, t) {
  if (!e || typeof e != "object" || typeof e.hasOwnProperty != "function") {
    return e;
  }
  let r = {};
  for (let n in e) {
    let o = e[n];
    Object.hasOwnProperty.call(e, n) && t(n, o) && (r[n] = o);
  }
  return r;
}
u(Vu, "filterObject");
d();
m();
g();
function Qm(e) {
  return Array.prototype.concat.apply([], e);
}
u(Qm, "flatten");
function vi(e, t, r) {
  return Qm(e.map(t, r));
}
u(vi, "flatMap");
d();
m();
g();
var Km = {
  "[object Date]": !0,
  "[object Uint8Array]": !0,
  "[object Decimal]": !0,
};
function Gu(e) {
  return e
    ? typeof e == "object" && !Km[Object.prototype.toString.call(e)]
    : !1;
}
u(Gu, "isObject");
d();
m();
g();
function zu(e, t) {
  let r = {}, n = Array.isArray(t) ? t : [t];
  for (let o in e) {
    Object.hasOwnProperty.call(e, o) && !n.includes(o) && (r[o] = e[o]);
  }
  return r;
}
u(zu, "omit");
d();
m();
g();
var Se = Z(Pt()), Ai = Z(jn());
d();
m();
g();
var Ym = Wu(),
  Zm = Qu(),
  Xm = Ku().default,
  eg = u((e, t, r) => {
    let n = [];
    return u(function o(i, s = {}, a = "", c = []) {
      s.indent = s.indent || "	";
      let l;
      s.inlineCharacterLimit === void 0
        ? l = {
          newLine: `
`,
          newLineOrSpace: `
`,
          pad: a,
          indent: a + s.indent,
        }
        : l = {
          newLine: "@@__STRINGIFY_OBJECT_NEW_LINE__@@",
          newLineOrSpace: "@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",
          pad: "@@__STRINGIFY_OBJECT_PAD__@@",
          indent: "@@__STRINGIFY_OBJECT_INDENT__@@",
        };
      let f = u((p) => {
        if (s.inlineCharacterLimit === void 0) return p;
        let h = p.replace(new RegExp(l.newLine, "g"), "").replace(
          new RegExp(l.newLineOrSpace, "g"),
          " ",
        ).replace(new RegExp(l.pad + "|" + l.indent, "g"), "");
        return h.length <= s.inlineCharacterLimit ? h : p.replace(
          new RegExp(l.newLine + "|" + l.newLineOrSpace, "g"),
          `
`,
        ).replace(new RegExp(l.pad, "g"), a).replace(
          new RegExp(l.indent, "g"),
          a + s.indent,
        );
      }, "expandWhiteSpace");
      if (n.indexOf(i) !== -1) return '"[Circular]"';
      if (x.Buffer.isBuffer(i)) return `Buffer(${x.Buffer.length})`;
      if (
        i == null || typeof i == "number" || typeof i == "boolean" ||
        typeof i == "function" || typeof i == "symbol" || i instanceof Ae ||
        Ym(i)
      ) {
        return String(i);
      }
      if (i instanceof Date) return `new Date('${i.toISOString()}')`;
      if (Array.isArray(i)) {
        if (i.length === 0) return "[]";
        n.push(i);
        let p = "[" + l.newLine + i.map((h, y) => {
          let w = i.length - 1 === y ? l.newLine : "," + l.newLineOrSpace,
            b = o(h, s, a + s.indent, [...c, y]);
          return s.transformValue && (b = s.transformValue(i, y, b)),
            l.indent + b + w;
        }).join("") + l.pad + "]";
        return n.pop(), f(p);
      }
      if (Zm(i)) {
        let p = Object.keys(i).concat(Xm(i));
        if (
          s.filter && (p = p.filter((y) => s.filter(i, y))), p.length === 0
        ) {
          return "{}";
        }
        n.push(i);
        let h = "{" + l.newLine + p.map((y, w) => {
          let b = p.length - 1 === w ? l.newLine : "," + l.newLineOrSpace,
            A = typeof y == "symbol",
            P = !A && /^[a-z$_][a-z$_0-9]*$/i.test(y),
            T = A || P ? y : o(y, s, void 0, [...c, y]),
            S = o(i[y], s, a + s.indent, [...c, y]);
          s.transformValue && (S = s.transformValue(i, y, S));
          let M = l.indent + String(T) + ": " + S + b;
          return s.transformLine &&
            (M = s.transformLine({
              obj: i,
              indent: l.indent,
              key: T,
              stringifiedValue: S,
              value: i[y],
              eol: b,
              originalLine: M,
              path: c.concat(T),
            })),
            M;
        }).join("") + l.pad + "}";
        return n.pop(), f(h);
      }
      return i = String(i).replace(/[\r\n]/g, (p) =>
        p === `
`
          ? "\\n"
          : "\\r"),
        s.singleQuotes === !1
          ? (i = i.replace(/"/g, '\\"'), `"${i}"`)
          : (i = i.replace(/\\?'/g, "\\'"), `'${i}'`);
    }, "stringifyObject")(e, t, r);
  }, "stringifyObject"),
  Jr = eg;
var Ei = "@@__DIM_POINTER__@@";
function Qn({ ast: e, keyPaths: t, valuePaths: r, missingItems: n }) {
  let o = e;
  for (let { path: i, type: s } of n) o = Hn(o, i, s);
  return Jr(o, {
    indent: "  ",
    transformLine: (
      { indent: i, key: s, value: a, stringifiedValue: c, eol: l, path: f },
    ) => {
      let p = f.join("."),
        h = t.includes(p),
        y = r.includes(p),
        w = n.find((A) => A.path === p),
        b = c;
      if (w) {
        typeof a == "string" && (b = b.slice(1, b.length - 1));
        let A = w.isRequired ? "" : "?",
          P = w.isRequired ? "+" : "?",
          S = (w.isRequired ? Se.default.greenBright : Se.default.green)(
            ng(s + A + ": " + b + l, i, P),
          );
        return w.isRequired || (S = Se.default.dim(S)), S;
      } else {
        let A = n.some((M) => p.startsWith(M.path)),
          P = s[s.length - 2] === "?";
        P && (s = s.slice(1, s.length - 1)),
          P && typeof a == "object" && a !== null && (b = b.split(`
`).map((M, _, R) => _ === R.length - 1 ? M + Ei : M).join(`
`)),
          A && typeof a == "string" &&
          (b = b.slice(1, b.length - 1), P || (b = Se.default.bold(b))),
          (typeof a != "object" || a === null) && !y && !A &&
          (b = Se.default.dim(b));
        let T = h ? Se.default.redBright(s) : s;
        b = y ? Se.default.redBright(b) : b;
        let S = i + T + ": " + b + (A ? l : Se.default.dim(l));
        if (h || y) {
          let M = S.split(`
`),
            _ = String(s).length,
            R = h ? Se.default.redBright("~".repeat(_)) : " ".repeat(_),
            F = y ? tg(i, s, a, c) : 0,
            $ = y && Yu(a),
            J = y ? "  " + Se.default.redBright("~".repeat(F)) : "";
          R && R.length > 0 && !$ && M.splice(1, 0, i + R + J),
            R && R.length > 0 && $ &&
            M.splice(M.length - 1, 0, i.slice(0, i.length - 2) + J),
            S = M.join(`
`);
        }
        return S;
      }
    },
  });
}
u(Qn, "printJsonWithErrors");
function tg(e, t, r, n) {
  return r === null
    ? 4
    : typeof r == "string"
    ? r.length + 2
    : Yu(r)
    ? Math.abs(rg(`${t}: ${(0, Ai.default)(n)}`) - e.length)
    : String(r).length;
}
u(tg, "getValueLength");
function Yu(e) {
  return typeof e == "object" && e !== null && !(e instanceof Ae);
}
u(Yu, "isRenderedAsObject");
function rg(e) {
  return e.split(`
`).reduce((t, r) => r.length > t ? r.length : t, 0);
}
u(rg, "getLongestLine");
function ng(e, t, r) {
  return e.split(`
`).map((n, o, i) =>
      o === 0 ? r + t.slice(1) + n : o < i.length - 1 ? r + n.slice(1) : n
    ).map((n) =>
      (0, Ai.default)(n).includes(Ei)
        ? Se.default.dim(n.replace(Ei, ""))
        : n.includes("?")
        ? Se.default.dim(n)
        : n
    ).join(`
`);
}
u(ng, "prefixLines");
d();
m();
g();
var Oe = Z(Pt());
d();
m();
g();
var Wr = "<unknown>";
function Zu(e) {
  var t = e.split(`
`);
  return t.reduce(function (r, n) {
    var o = sg(n) || ug(n) || fg(n) || dg(n) || mg(n);
    return o && r.push(o), r;
  }, []);
}
u(Zu, "parse");
var og =
    /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
  ig = /\((\S*)(?::(\d+))(?::(\d+))\)/;
function sg(e) {
  var t = og.exec(e);
  if (!t) return null;
  var r = t[2] && t[2].indexOf("native") === 0,
    n = t[2] && t[2].indexOf("eval") === 0,
    o = ig.exec(t[2]);
  return n && o != null && (t[2] = o[1], t[3] = o[2], t[4] = o[3]), {
    file: r ? null : t[2],
    methodName: t[1] || Wr,
    arguments: r ? [t[2]] : [],
    lineNumber: t[3] ? +t[3] : null,
    column: t[4] ? +t[4] : null,
  };
}
u(sg, "parseChrome");
var ag =
  /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function ug(e) {
  var t = ag.exec(e);
  return t
    ? {
      file: t[2],
      methodName: t[1] || Wr,
      arguments: [],
      lineNumber: +t[3],
      column: t[4] ? +t[4] : null,
    }
    : null;
}
u(ug, "parseWinjs");
var cg =
    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
  lg = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
function fg(e) {
  var t = cg.exec(e);
  if (!t) return null;
  var r = t[3] && t[3].indexOf(" > eval") > -1, n = lg.exec(t[3]);
  return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), {
    file: t[3],
    methodName: t[1] || Wr,
    arguments: t[2] ? t[2].split(",") : [],
    lineNumber: t[4] ? +t[4] : null,
    column: t[5] ? +t[5] : null,
  };
}
u(fg, "parseGecko");
var pg = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
function mg(e) {
  var t = pg.exec(e);
  return t
    ? {
      file: t[3],
      methodName: t[1] || Wr,
      arguments: [],
      lineNumber: +t[4],
      column: t[5] ? +t[5] : null,
    }
    : null;
}
u(mg, "parseJSC");
var gg =
  /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
function dg(e) {
  var t = gg.exec(e);
  return t
    ? {
      file: t[2],
      methodName: t[1] || Wr,
      arguments: [],
      lineNumber: +t[3],
      column: t[4] ? +t[4] : null,
    }
    : null;
}
u(dg, "parseNode");
d();
m();
g();
d();
m();
g();
d();
m();
g();
var vt = Z(Pt()),
  yg = vt.default.rgb(246, 145, 95),
  bg = vt.default.rgb(107, 139, 140),
  Kn = vt.default.cyan,
  Xu = vt.default.rgb(127, 155, 155),
  ec = u((e) => e, "identity"),
  tc = {
    keyword: Kn,
    entity: Kn,
    value: Xu,
    punctuation: bg,
    directive: Kn,
    function: Kn,
    variable: Xu,
    string: vt.default.greenBright,
    boolean: yg,
    number: vt.default.cyan,
    comment: vt.default.grey,
  };
var Yn = {},
  wg = 0,
  q = {
    manual: Yn.Prism && Yn.Prism.manual,
    disableWorkerMessageHandler: Yn.Prism &&
      Yn.Prism.disableWorkerMessageHandler,
    util: {
      encode: function (e) {
        if (e instanceof je) {
          let t = e;
          return new je(t.type, q.util.encode(t.content), t.alias);
        } else {
          return Array.isArray(e)
            ? e.map(q.util.encode)
            : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
              /\u00a0/g,
              " ",
            );
        }
      },
      type: function (e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function (e) {
        return e.__id || Object.defineProperty(e, "__id", { value: ++wg }),
          e.__id;
      },
      clone: u(function e(t, r) {
        let n, o, i = q.util.type(t);
        switch (r = r || {}, i) {
          case "Object":
            if (o = q.util.objId(t), r[o]) return r[o];
            n = {}, r[o] = n;
            for (let s in t) t.hasOwnProperty(s) && (n[s] = e(t[s], r));
            return n;
          case "Array":
            return o = q.util.objId(t),
              r[o] ? r[o] : (n = [],
                r[o] = n,
                t.forEach(function (s, a) {
                  n[a] = e(s, r);
                }),
                n);
          default:
            return t;
        }
      }, "deepClone"),
    },
    languages: {
      extend: function (e, t) {
        let r = q.util.clone(q.languages[e]);
        for (let n in t) r[n] = t[n];
        return r;
      },
      insertBefore: function (e, t, r, n) {
        n = n || q.languages;
        let o = n[e], i = {};
        for (let a in o) {
          if (o.hasOwnProperty(a)) {
            if (a == t) for (let c in r) r.hasOwnProperty(c) && (i[c] = r[c]);
            r.hasOwnProperty(a) || (i[a] = o[a]);
          }
        }
        let s = n[e];
        return n[e] = i,
          q.languages.DFS(q.languages, function (a, c) {
            c === s && a != e && (this[a] = i);
          }),
          i;
      },
      DFS: u(function e(t, r, n, o) {
        o = o || {};
        let i = q.util.objId;
        for (let s in t) {
          if (t.hasOwnProperty(s)) {
            r.call(t, s, t[s], n || s);
            let a = t[s], c = q.util.type(a);
            c === "Object" && !o[i(a)]
              ? (o[i(a)] = !0, e(a, r, null, o))
              : c === "Array" && !o[i(a)] && (o[i(a)] = !0, e(a, r, s, o));
          }
        }
      }, "DFS"),
    },
    plugins: {},
    highlight: function (e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return q.hooks.run("before-tokenize", n),
        n.tokens = q.tokenize(n.code, n.grammar),
        q.hooks.run("after-tokenize", n),
        je.stringify(q.util.encode(n.tokens), n.language);
    },
    matchGrammar: function (e, t, r, n, o, i, s) {
      for (let b in r) {
        if (!r.hasOwnProperty(b) || !r[b]) continue;
        if (b == s) return;
        let A = r[b];
        A = q.util.type(A) === "Array" ? A : [A];
        for (let P = 0; P < A.length; ++P) {
          let T = A[P],
            S = T.inside,
            M = !!T.lookbehind,
            _ = !!T.greedy,
            R = 0,
            F = T.alias;
          if (_ && !T.pattern.global) {
            let $ = T.pattern.toString().match(/[imuy]*$/)[0];
            T.pattern = RegExp(T.pattern.source, $ + "g");
          }
          T = T.pattern || T;
          for (let $ = n, J = o; $ < t.length; J += t[$].length, ++$) {
            let X = t[$];
            if (t.length > e.length) return;
            if (X instanceof je) continue;
            if (_ && $ != t.length - 1) {
              T.lastIndex = J;
              var p = T.exec(e);
              if (!p) break;
              var f = p.index + (M ? p[1].length : 0),
                h = p.index + p[0].length,
                a = $,
                c = J;
              for (
                let V = t.length;
                a < V && (c < h || !t[a].type && !t[a - 1].greedy);
                ++a
              ) {
                c += t[a].length, f >= c && (++$, J = c);
              }
              if (t[$] instanceof je) continue;
              l = a - $, X = e.slice(J, c), p.index -= J;
            } else {
              T.lastIndex = 0;
              var p = T.exec(X), l = 1;
            }
            if (!p) {
              if (i) break;
              continue;
            }
            M && (R = p[1] ? p[1].length : 0);
            var f = p.index + R,
              p = p[0].slice(R),
              h = f + p.length,
              y = X.slice(0, f),
              w = X.slice(h);
            let U = [$, l];
            y && (++$, J += y.length, U.push(y));
            let Q = new je(b, S ? q.tokenize(p, S) : p, F, p, _);
            if (
              U.push(Q),
                w && U.push(w),
                Array.prototype.splice.apply(t, U),
                l != 1 && q.matchGrammar(e, t, r, $, J, !0, b),
                i
            ) {
              break;
            }
          }
        }
      }
    },
    tokenize: function (e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let o in n) t[o] = n[o];
        delete t.rest;
      }
      return q.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {},
      add: function (e, t) {
        let r = q.hooks.all;
        r[e] = r[e] || [], r[e].push(t);
      },
      run: function (e, t) {
        let r = q.hooks.all[e];
        if (!(!r || !r.length)) for (var n = 0, o; o = r[n++];) o(t);
      },
    },
    Token: je,
  };
q.languages.clike = {
  comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0,
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0,
  },
  "class-name": {
    pattern:
      /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ },
  },
  keyword:
    /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/,
};
q.languages.javascript = q.languages.extend("clike", {
  "class-name": [q.languages.clike["class-name"], {
    pattern:
      /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0,
  }],
  keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, {
    pattern:
      /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0,
  }],
  number:
    /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  function:
    /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator:
    /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
});
q.languages.javascript["class-name"][0].pattern =
  /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
q.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern:
      /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0,
  },
  "function-variable": {
    pattern:
      /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function",
  },
  parameter: [{
    pattern:
      /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: q.languages.javascript,
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: q.languages.javascript,
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: q.languages.javascript,
  }, {
    pattern:
      /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: q.languages.javascript,
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
});
q.languages.markup && q.languages.markup.tag.addInlined("script", "javascript");
q.languages.js = q.languages.javascript;
q.languages.typescript = q.languages.extend("javascript", {
  keyword:
    /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  builtin:
    /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
q.languages.ts = q.languages.typescript;
function je(e, t, r, n, o) {
  this.type = e,
    this.content = t,
    this.alias = r,
    this.length = (n || "").length | 0,
    this.greedy = !!o;
}
u(je, "Token");
je.stringify = function (e, t) {
  return typeof e == "string" ? e : Array.isArray(e)
    ? e.map(function (r) {
      return je.stringify(r, t);
    }).join("")
    : vg(e.type)(e.content);
};
function vg(e) {
  return tc[e] || ec;
}
u(vg, "getColorForSyntaxKind");
function rc(e) {
  return xg(e, q.languages.javascript);
}
u(rc, "highlightTS");
function xg(e, t) {
  return q.tokenize(e, t).map((n) => je.stringify(n)).join("");
}
u(xg, "highlight");
d();
m();
g();
var nc = Z(ei());
function oc(e) {
  return (0, nc.default)(e);
}
u(oc, "dedent");
function Eg(e, t) {
  let r = String(t).length, n = String(e).length;
  return n >= r ? String(e) : " ".repeat(r - n) + e;
}
u(Eg, "renderN");
function Ag(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e.charAt(r) !== " ") return t;
    t++;
  }
  return t;
}
u(Ag, "getIndent");
function Tg(
  {
    callsite: e,
    renderPathRelative: t,
    originalMethod: r,
    onUs: n,
    showColors: o,
    isValidationError: i,
  },
) {
  let s = {
    callsiteStr: ":",
    prevLines: `
`,
    functionName: `prisma.${r}()`,
    afterLines: "",
    indentValue: 0,
    lastErrorHeight: 20,
  };
  if (!e || typeof window != "undefined") return s;
  let c = Zu(e).find((l) =>
    l.file && l.file !== "<anonymous>" && !l.file.includes("@prisma") &&
    !l.file.includes("getPrismaClient") && !l.file.startsWith("internal/") &&
    !l.methodName.includes("new ") && !l.methodName.includes("getCallSite") &&
    !l.methodName.includes("Proxy.") && l.methodName.split(".").length < 4
  );
  if (
    v.env.NODE_ENV !== "production" && c && c.file && c.lineNumber && c.column
  ) {
    let l = c.lineNumber,
      f = t ? Qo().relative(v.cwd(), c.file) : c.file,
      p = Math.max(0, l - 4),
      h = (Ho(), Vi(Pa));
    if (h.existsSync(c.file)) {
      let b = h.readFileSync(c.file, "utf-8").split(`
`).slice(p, l).map((T) => T.endsWith("\r") ? T.slice(0, -1) : T).join(`
`),
        A = oc(b).split(`
`),
        P = A[A.length - 1];
      if (!P || P.trim() === "") s.callsiteStr = ":";
      else {
        let S =
          /(\S+(create|createMany|updateMany|deleteMany|update|delete|findMany|findUnique|findFirst|findUniqueOrThrow|findFirstOrThrow)\()/
            .exec(P);
        if (!S) return s;
        s.functionName = `${S[1]})`,
          s.callsiteStr = ` in
${Oe.default.underline(`${f}:${c.lineNumber}:${c.column}`)}`;
        let M = P.indexOf("{"),
          _ = A.map((F, $, J) =>
            !n && $ === J.length - 1 ? F.slice(0, M > -1 ? M : F.length - 1) : F
          ).join(`
`),
          R = o
            ? rc(_).split(`
`)
            : _.split(`
`);
        s.prevLines = `
` + R.map((F, $) =>
          Oe.default.grey(Eg($ + p + 1, l + p + 1) + " ") + Oe.default.reset() +
          F
        ).map((F, $, J) =>
          $ === J.length - 1
            ? `${Oe.default.red.bold("\u2192")} ${Oe.default.dim(F)}`
            : Oe.default.dim("  " + F)
        ).join(`
`),
          !S && !i && (s.prevLines += `

`),
          s.afterLines = ")",
          s.indentValue = String(l + p + 1).length + Ag(P) + 1 + (S ? 2 : 0);
      }
    }
  }
  return s;
}
u(Tg, "parseStack");
var or = u((e) => {
  let {
      callsiteStr: t,
      prevLines: r,
      functionName: n,
      afterLines: o,
      indentValue: i,
      lastErrorHeight: s,
    } = Tg(e),
    c = `
${
      e.onUs
        ? Oe.default.red(
          `Oops, an unknown error occured! This is ${
            Oe.default.bold("on us")
          }, you did nothing wrong.
It occured in the ${Oe.default.bold(`\`${n}\``)} invocation${t}`,
        )
        : Oe.default.red(
          `Invalid ${Oe.default.bold(`\`${n}\``)} invocation${t}`,
        )
    }
${r}${Oe.default.reset()}`;
  return { indent: i, stack: c, afterLines: o, lastErrorHeight: s };
}, "printStack");
var Hr = 2,
  Zn = class {
    constructor(t, r) {
      this.type = t;
      this.children = r;
      this.printFieldError = u(({ error: t }, r, n) => {
        if (t.type === "emptySelect") {
          let o = n
            ? ""
            : ` Available options are listed in ${
              D.default.greenBright.dim("green")
            }.`;
          return `The ${D.default.redBright("`select`")} statement for type ${
            D.default.bold(St(t.field.outputType.type))
          } must not be empty.${o}`;
        }
        if (t.type === "emptyInclude") {
          if (r.length === 0) {
            return `${
              D.default.bold(St(t.field.outputType.type))
            } does not have any relation and therefore can't have an ${
              D.default.redBright("`include`")
            } statement.`;
          }
          let o = n
            ? ""
            : ` Available options are listed in ${
              D.default.greenBright.dim("green")
            }.`;
          return `The ${D.default.redBright("`include`")} statement for type ${
            D.default.bold(St(t.field.outputType.type))
          } must not be empty.${o}`;
        }
        if (t.type === "noTrueSelect") {
          return `The ${D.default.redBright("`select`")} statement for type ${
            D.default.bold(St(t.field.outputType.type))
          } needs ${D.default.bold("at least one truthy value")}.`;
        }
        if (t.type === "includeAndSelect") {
          return `Please ${D.default.bold("either")} use ${
            D.default.greenBright("`include`")
          } or ${D.default.greenBright("`select`")}, but ${
            D.default.redBright("not both")
          } at the same time.`;
        }
        if (t.type === "invalidFieldName") {
          let o = t.isInclude ? "include" : "select",
            i = t.isIncludeScalar ? "Invalid scalar" : "Unknown",
            s = n ? "" : t.isInclude && r.length === 0
              ? `
This model has no relations, so you can't use ${
                D.default.redBright("include")
              } with it.`
              : ` Available options are listed in ${
                D.default.greenBright.dim("green")
              }.`,
            a = `${i} field ${
              D.default.redBright(`\`${t.providedName}\``)
            } for ${D.default.bold(o)} statement on model ${
              D.default.bold.white(t.modelName)
            }.${s}`;
          return t.didYouMean &&
            (a += ` Did you mean ${
              D.default.greenBright(`\`${t.didYouMean}\``)
            }?`),
            t.isIncludeScalar && (a += `
Note, that ${
              D.default.bold("include")
            } statements only accept relation fields.`),
            a;
        }
        if (t.type === "invalidFieldType") {
          return `Invalid value ${
            D.default.redBright(`${Jr(t.providedValue)}`)
          } of type ${
            D.default.redBright(Jt(t.providedValue, void 0))
          } for field ${D.default.bold(`${t.fieldName}`)} on model ${
            D.default.bold.white(t.modelName)
          }. Expected either ${D.default.greenBright("true")} or ${
            D.default.greenBright("false")
          }.`;
        }
      }, "printFieldError");
      this.printArgError = u(({ error: t, path: r, id: n }, o, i) => {
        if (t.type === "invalidName") {
          let s = `Unknown arg ${
            D.default.redBright(`\`${t.providedName}\``)
          } in ${D.default.bold(r.join("."))} for type ${
            D.default.bold(
              t.outputType ? t.outputType.name : wr(t.originalType),
            )
          }.`;
          return t.didYouMeanField
            ? s += `
\u2192 Did you forget to wrap it with \`${D.default.greenBright("select")}\`? ${
              D.default.dim(
                "e.g. " +
                  D.default.greenBright(
                    `{ select: { ${t.providedName}: ${t.providedValue} } }`,
                  ),
              )
            }`
            : t.didYouMeanArg
            ? (s += ` Did you mean \`${
              D.default.greenBright(t.didYouMeanArg)
            }\`?`,
              !o && !i && (s += ` ${D.default.dim("Available args:")}
` + Wt(t.originalType, !0)))
            : t.originalType.fields.length === 0
            ? s += ` The field ${
              D.default.bold(t.originalType.name)
            } has no arguments.`
            : !o && !i && (s += ` Available args:

` + Wt(t.originalType, !0)),
            s;
        }
        if (t.type === "invalidType") {
          let s = Jr(t.providedValue, { indent: "  " }),
            a = s.split(`
`).length > 1;
          if (
            a && (s = `
${s}
`), t.requiredType.bestFittingType.location === "enumTypes"
          ) {
            return `Argument ${D.default.bold(t.argName)}: Provided value ${
              D.default.redBright(s)
            }${a ? "" : " "}of type ${
              D.default.redBright(Jt(t.providedValue))
            } on ${
              D.default.bold(`prisma.${this.children[0].name}`)
            } is not a ${
              D.default.greenBright(
                vr(
                  zt(t.requiredType.bestFittingType.type),
                  t.requiredType.bestFittingType.isList,
                ),
              )
            }.
\u2192 Possible values: ${
              t.requiredType.bestFittingType.type.values.map((p) =>
                D.default.greenBright(
                  `${zt(t.requiredType.bestFittingType.type)}.${p}`,
                )
              ).join(", ")
            }`;
          }
          let c = ".";
          ir(t.requiredType.bestFittingType.type) && (c = `:
` + Wt(t.requiredType.bestFittingType.type));
          let l = `${
              t.requiredType.inputType.map((p) =>
                D.default.greenBright(
                  vr(zt(p.type), t.requiredType.bestFittingType.isList),
                )
              ).join(" or ")
            }${c}`,
            f = t.requiredType.inputType.length === 2 &&
                t.requiredType.inputType.find((p) => ir(p.type)) || null;
          return f && (l += `
` + Wt(f.type, !0)),
            `Argument ${D.default.bold(t.argName)}: Got invalid value ${
              D.default.redBright(s)
            }${a ? "" : " "}on ${
              D.default.bold(`prisma.${this.children[0].name}`)
            }. Provided ${
              D.default.redBright(Jt(t.providedValue))
            }, expected ${l}`;
        }
        if (t.type === "invalidNullArg") {
          let s = r.length === 1 && r[0] === t.name
              ? ""
              : ` for ${D.default.bold(`${r.join(".")}`)}`,
            a = ` Please use ${
              D.default.bold.greenBright("undefined")
            } instead.`;
          return `Argument ${D.default.greenBright(t.name)}${s} must not be ${
            D.default.bold("null")
          }.${a}`;
        }
        if (t.type === "missingArg") {
          let s = r.length === 1 && r[0] === t.missingName
            ? ""
            : ` for ${D.default.bold(`${r.join(".")}`)}`;
          return `Argument ${
            D.default.greenBright(t.missingName)
          }${s} is missing.`;
        }
        if (t.type === "atLeastOne") {
          let s = i
            ? ""
            : ` Available args are listed in ${D.default.dim.green("green")}.`;
          return `Argument ${D.default.bold(r.join("."))} of type ${
            D.default.bold(t.inputType.name)
          } needs ${D.default.greenBright("at least one")} argument.${s}`;
        }
        if (t.type === "atMostOne") {
          let s = i
            ? ""
            : ` Please choose one. ${D.default.dim("Available args:")} 
${Wt(t.inputType, !0)}`;
          return `Argument ${D.default.bold(r.join("."))} of type ${
            D.default.bold(t.inputType.name)
          } needs ${
            D.default.greenBright("exactly one")
          } argument, but you provided ${
            t.providedKeys.map((a) => D.default.redBright(a)).join(" and ")
          }.${s}`;
        }
      }, "printArgError");
      this.type = t, this.children = r;
    }
    get [Symbol.toStringTag]() {
      return "Document";
    }
    toString() {
      return `${this.type} {
${
        (0, xt.default)(
          this.children.map(String).join(`
`),
          Hr,
        )
      }
}`;
    }
    validate(t, r = !1, n, o, i) {
      var P;
      t || (t = {});
      let s = this.children.filter((T) => T.hasInvalidChild || T.hasInvalidArg);
      if (s.length === 0) return;
      let a = [],
        c = [],
        l = t && t.select ? "select" : t.include ? "include" : void 0;
      for (let T of s) {
        let S = T.collectErrors(l);
        a.push(
          ...S.fieldErrors.map((M) => ({
            ...M,
            path: r ? M.path : M.path.slice(1),
          })),
        ),
          c.push(
            ...S.argErrors.map((M) => ({
              ...M,
              path: r ? M.path : M.path.slice(1),
            })),
          );
      }
      let f = this.children[0].name,
        p = r ? this.type : f,
        h = [],
        y = [],
        w = [];
      for (let T of a) {
        let S = this.normalizePath(T.path, t).join(".");
        if (T.error.type === "invalidFieldName") {
          h.push(S);
          let M = T.error.outputType, { isInclude: _ } = T.error;
          M.fields.filter((R) =>
            _ ? R.outputType.location === "outputObjectTypes" : !0
          ).forEach((R) => {
            let F = S.split(".");
            w.push({
              path: `${F.slice(0, F.length - 1).join(".")}.${R.name}`,
              type: "true",
              isRequired: !1,
            });
          });
        } else {
          T.error.type === "includeAndSelect"
            ? (h.push("select"), h.push("include"))
            : y.push(S);
        }
        if (
          T.error.type === "emptySelect" || T.error.type === "noTrueSelect" ||
          T.error.type === "emptyInclude"
        ) {
          let M = this.normalizePath(T.path, t),
            _ = M.slice(0, M.length - 1).join(".");
          (P = T.error.field.outputType.type.fields) == null ||
            P.filter((F) =>
              T.error.type === "emptyInclude"
                ? F.outputType.location === "outputObjectTypes"
                : !0
            ).forEach((F) => {
              w.push({ path: `${_}.${F.name}`, type: "true", isRequired: !1 });
            });
        }
      }
      for (let T of c) {
        let S = this.normalizePath(T.path, t).join(".");
        if (T.error.type === "invalidName") h.push(S);
        else if (
          T.error.type !== "missingArg" && T.error.type !== "atLeastOne"
        ) {
          y.push(S);
        } else if (T.error.type === "missingArg") {
          let M = T.error.missingArg.inputTypes.length === 1
            ? T.error.missingArg.inputTypes[0].type
            : T.error.missingArg.inputTypes.map((_) => {
              let R = wr(_.type);
              return R === "Null" ? "null" : _.isList ? R + "[]" : R;
            }).join(" | ");
          w.push({
            path: S,
            type: Fo(M, !0, S.split("where.").length === 2),
            isRequired: T.error.missingArg.isRequired,
          });
        }
      }
      let b = u((T) => {
          let S = c.some((G) =>
              G.error.type === "missingArg" && G.error.missingArg.isRequired
            ),
            M = Boolean(
              c.find((G) =>
                G.error.type === "missingArg" && !G.error.missingArg.isRequired
              ),
            ),
            _ = M || S,
            R = "";
          S && (R += `
${D.default.dim("Note: Lines with ")}${D.default.reset.greenBright("+")} ${
            D.default.dim("are required")
          }`),
            M && (R.length === 0 && (R = `
`),
              S
                ? R += D.default.dim(
                  `, lines with ${D.default.green("?")} are optional`,
                )
                : R += D.default.dim(
                  `Note: Lines with ${D.default.green("?")} are optional`,
                ),
              R += D.default.dim("."));
          let $ = c.filter((G) =>
            G.error.type !== "missingArg" || G.error.missingArg.isRequired
          ).map((G) => this.printArgError(G, _, o === "minimal")).join(`
`);
          if (
            $ += `
${
              a.map((G) => this.printFieldError(G, w, o === "minimal")).join(`
`)
            }`, o === "minimal"
          ) {
            return (0, Pi.default)($);
          }
          let { stack: J, indent: X, afterLines: U } = or({
              callsite: T,
              originalMethod: n || p,
              showColors: o && o === "pretty",
              isValidationError: !0,
            }),
            Q = {
              ast: r ? { [f]: t } : t,
              keyPaths: h,
              valuePaths: y,
              missingItems: w,
            };
          n != null && n.endsWith("aggregate") && (Q = Rg(Q));
          let W = `${J}${(0, xt.default)(Qn(Q), X).slice(X)}${D.default.dim(U)}

${$}${R}
`;
          return v.env.NO_COLOR || o === "colorless" ? (0, Pi.default)(W) : W;
        }, "renderErrorStr"),
        A = new Ee(b(i));
      throw v.env.NODE_ENV !== "production" &&
        Object.defineProperty(A, "render", { get: () => b, enumerable: !1 }),
        A;
    }
    normalizePath(t, r) {
      let n = t.slice(), o = [], i, s = r;
      for (; (i = n.shift()) !== void 0;) {
        !Array.isArray(s) && i === 0 ||
          (i === "select"
            ? s[i] ? s = s[i] : s = s.include
            : s && s[i] && (s = s[i]),
            o.push(i));
      }
      return o;
    }
  };
u(Zn, "Document");
var Ee = class extends Error {
  get [Symbol.toStringTag]() {
    return "PrismaClientValidationError";
  }
};
u(Ee, "PrismaClientValidationError");
var ne = class extends Error {
  constructor(t) {
    super(
      t + `
Read more at https://pris.ly/d/client-constructor`,
    );
  }
  get [Symbol.toStringTag]() {
    return "PrismaClientConstructorValidationError";
  }
};
u(ne, "PrismaClientConstructorValidationError");
var pe = class {
  constructor({ name: t, args: r, children: n, error: o, schemaField: i }) {
    this.name = t,
      this.args = r,
      this.children = n,
      this.error = o,
      this.schemaField = i,
      this.hasInvalidChild = n
        ? n.some((s) =>
          Boolean(s.error || s.hasInvalidArg || s.hasInvalidChild)
        )
        : !1,
      this.hasInvalidArg = r ? r.hasInvalidArg : !1;
  }
  get [Symbol.toStringTag]() {
    return "Field";
  }
  toString() {
    let t = this.name;
    return this.error
      ? t + " # INVALID_FIELD"
      : (this.args && this.args.args && this.args.args.length > 0 &&
        (this.args.args.length === 1
          ? t += `(${this.args.toString()})`
          : t += `(
${
            (0, xt.default)(this.args.toString(), Hr)
          }
)`),
        this.children && (t += ` {
${
          (0, xt.default)(
            this.children.map(String).join(`
`),
            Hr,
          )
        }
}`),
        t);
  }
  collectErrors(t = "select") {
    let r = [], n = [];
    if (
      this.error && r.push({ path: [this.name], error: this.error }),
        this.children
    ) {
      for (let o of this.children) {
        let i = o.collectErrors(t);
        r.push(
          ...i.fieldErrors.map((s) => ({
            ...s,
            path: [this.name, t, ...s.path],
          })),
        ),
          n.push(
            ...i.argErrors.map((s) => ({
              ...s,
              path: [this.name, t, ...s.path],
            })),
          );
      }
    }
    return this.args &&
      n.push(
        ...this.args.collectErrors().map((o) => ({
          ...o,
          path: [this.name, ...o.path],
        })),
      ),
      { fieldErrors: r, argErrors: n };
  }
};
u(pe, "Field");
var me = class {
  constructor(t = []) {
    this.args = t,
      this.hasInvalidArg = t ? t.some((r) => Boolean(r.hasError)) : !1;
  }
  get [Symbol.toStringTag]() {
    return "Args";
  }
  toString() {
    return this.args.length === 0
      ? ""
      : `${
        this.args.map((t) => t.toString()).filter((t) => t).join(`
`)
      }`;
  }
  collectErrors() {
    return this.hasInvalidArg ? vi(this.args, (t) => t.collectErrors()) : [];
  }
};
u(me, "Args");
function Ti(e, t) {
  return x.Buffer.isBuffer(e)
    ? JSON.stringify(e.toString("base64"))
    : Object.prototype.toString.call(e) === "[object BigInt]"
    ? e.toString()
    : typeof (t == null ? void 0 : t.type) == "string" && t.type === "Json"
    ? e === null
      ? "null"
      : e && e.values && e.__prismaRawParamaters__
      ? JSON.stringify(e.values)
      : (t == null ? void 0 : t.isList) && Array.isArray(e)
      ? JSON.stringify(e.map((r) => JSON.stringify(r)))
      : JSON.stringify(JSON.stringify(e))
    : e === void 0
    ? null
    : e === null
    ? "null"
    : De.isDecimal(e) || (t == null ? void 0 : t.type) === "Decimal" && xn(e)
    ? ea(e)
    : (t == null ? void 0 : t.location) === "enumTypes" && typeof e == "string"
    ? Array.isArray(e) ? `[${e.join(", ")}]` : e
    : JSON.stringify(e, null, 2);
}
u(Ti, "stringify");
var Ie = class {
  constructor(
    { key: t, value: r, isEnum: n = !1, error: o, schemaArg: i, inputType: s },
  ) {
    this.inputType = s,
      this.key = t,
      this.value = r instanceof Ae ? r._getName() : r,
      this.isEnum = n,
      this.error = o,
      this.schemaArg = i,
      this.isNullable = (i == null
        ? void 0
        : i.inputTypes.reduce((a) => a && i.isNullable, !0)) || !1,
      this.hasError = Boolean(o) || (r instanceof me ? r.hasInvalidArg : !1) ||
        Array.isArray(r) &&
          r.some((a) => a instanceof me ? a.hasInvalidArg : !1);
  }
  get [Symbol.toStringTag]() {
    return "Arg";
  }
  _toString(t, r) {
    var n;
    if (typeof t != "undefined") {
      if (t instanceof me) {
        return `${r}: {
${(0, xt.default)(t.toString(), 2)}
}`;
      }
      if (Array.isArray(t)) {
        if (((n = this.inputType) == null ? void 0 : n.type) === "Json") {
          return `${r}: ${Ti(t, this.inputType)}`;
        }
        let o = !t.some((i) => typeof i == "object");
        return `${r}: [${
          o ? "" : `
`
        }${
          (0, xt.default)(
            t.map((i) =>
              i instanceof me
                ? `{
${(0, xt.default)(i.toString(), Hr)}
}`
                : Ti(i, this.inputType)
            ).join(`,${
              o ? " " : `
`
            }`),
            o ? 0 : Hr,
          )
        }${
          o ? "" : `
`
        }]`;
      }
      return `${r}: ${Ti(t, this.inputType)}`;
    }
  }
  toString() {
    return this._toString(this.value, this.key);
  }
  collectErrors() {
    var r;
    if (!this.hasError) return [];
    let t = [];
    if (this.error) {
      let n =
        typeof ((r = this.inputType) == null ? void 0 : r.type) == "object"
          ? `${this.inputType.type.name}${this.inputType.isList ? "[]" : ""}`
          : void 0;
      t.push({ error: this.error, path: [this.key], id: n });
    }
    return Array.isArray(this.value) &&
      t.push(
        ...vi(
          this.value,
          (n, o) =>
            n != null && n.collectErrors
              ? n.collectErrors().map((i) => ({
                ...i,
                path: [this.key, o, ...i.path],
              }))
              : [],
        ),
      ),
      this.value instanceof me &&
      t.push(
        ...this.value.collectErrors().map((n) => ({
          ...n,
          path: [this.key, ...n.path],
        })),
      ),
      t;
  }
};
u(Ie, "Arg");
function to({ dmmf: e, rootTypeName: t, rootField: r, select: n }) {
  n || (n = {});
  let o = t === "query" ? e.queryType : e.mutationType,
    i = {
      args: [],
      outputType: { isList: !1, type: o, location: "outputObjectTypes" },
      name: t,
    },
    s = sc(e, { [r]: n }, i, [t]);
  return new Zn(t, s);
}
u(to, "makeDocument");
function Ii(e) {
  return e;
}
u(Ii, "transformDocument");
function sc(e, t, r, n) {
  let o = r.outputType.type;
  return Object.entries(t).reduce((i, [s, a]) => {
    let c = o.fieldMap ? o.fieldMap[s] : o.fields.find((A) => A.name === s);
    if (!c) {
      return i.push(
        new pe({
          name: s,
          children: [],
          error: {
            type: "invalidFieldName",
            modelName: o.name,
            providedName: s,
            didYouMean: En(s, o.fields.map((A) => A.name)),
            outputType: o,
          },
        }),
      ),
        i;
    }
    if (
      typeof a != "boolean" && c.outputType.location === "scalar" &&
      c.name !== "executeRaw" && c.name !== "queryRaw" &&
      c.name !== "runCommandRaw" && o.name !== "Query" &&
      !s.startsWith("aggregate") && c.name !== "count"
    ) {
      return i.push(
        new pe({
          name: s,
          children: [],
          error: {
            type: "invalidFieldType",
            modelName: o.name,
            fieldName: s,
            providedValue: a,
          },
        }),
      ),
        i;
    }
    if (a === !1) return i;
    let l = {
        name: c.name,
        fields: c.args,
        constraints: { minNumFields: null, maxNumFields: null },
      },
      f = typeof a == "object" ? zu(a, ["include", "select"]) : void 0,
      p = f
        ? eo(f, l, [], typeof c == "string" ? void 0 : c.outputType.type)
        : void 0,
      h = c.outputType.location === "outputObjectTypes";
    if (a) {
      if (a.select && a.include) {
        i.push(
          new pe({
            name: s,
            children: [
              new pe({
                name: "include",
                args: new me(),
                error: { type: "includeAndSelect", field: c },
              }),
            ],
          }),
        );
      } else if (a.include) {
        let A = Object.keys(a.include);
        if (A.length === 0) {
          return i.push(
            new pe({
              name: s,
              children: [
                new pe({
                  name: "include",
                  args: new me(),
                  error: { type: "emptyInclude", field: c },
                }),
              ],
            }),
          ),
            i;
        }
        if (c.outputType.location === "outputObjectTypes") {
          let P = c.outputType.type,
            T = P.fields.filter((M) =>
              M.outputType.location === "outputObjectTypes"
            ).map((M) => M.name),
            S = A.filter((M) => !T.includes(M));
          if (S.length > 0) {
            return i.push(...S.map((M) =>
              new pe({
                name: M,
                children: [
                  new pe({
                    name: M,
                    args: new me(),
                    error: {
                      type: "invalidFieldName",
                      modelName: P.name,
                      outputType: P,
                      providedName: M,
                      didYouMean: En(M, T) || void 0,
                      isInclude: !0,
                      isIncludeScalar: P.fields.some((_) => _.name === M),
                    },
                  }),
                ],
              })
            )),
              i;
          }
        }
      } else if (a.select) {
        let A = Object.values(a.select);
        if (A.length === 0) {
          return i.push(
            new pe({
              name: s,
              children: [
                new pe({
                  name: "select",
                  args: new me(),
                  error: { type: "emptySelect", field: c },
                }),
              ],
            }),
          ),
            i;
        }
        if (
          A.filter((T) => T).length === 0
        ) {
          return i.push(
            new pe({
              name: s,
              children: [
                new pe({
                  name: "select",
                  args: new me(),
                  error: { type: "noTrueSelect", field: c },
                }),
              ],
            }),
          ),
            i;
        }
      }
    }
    let y = h ? Pg(e, c.outputType.type) : null, w = y;
    a &&
      (a.select
        ? w = a.select
        : a.include
        ? w = zr(y, a.include)
        : a.by && Array.isArray(a.by) && c.outputType.namespace === "prisma" &&
          c.outputType.location === "outputObjectTypes" &&
          oa(c.outputType.type.name) && (w = Mg(a.by)));
    let b = w !== !1 && h ? sc(e, w, c, [...n, s]) : void 0;
    return i.push(new pe({ name: s, args: p, children: b, schemaField: c })), i;
  }, []);
}
u(sc, "selectionToFields");
function Mg(e) {
  let t = Object.create(null);
  for (let r of e) t[r] = !0;
  return t;
}
u(Mg, "byToSelect");
function Pg(e, t) {
  let r = Object.create(null);
  for (let n of t.fields) {
    e.typeMap[n.outputType.type.name] !== void 0 && (r[n.name] = !0),
      (n.outputType.location === "scalar" ||
        n.outputType.location === "enumTypes") && (r[n.name] = !0);
  }
  return r;
}
u(Pg, "getDefaultSelection");
function Si(e, t, r, n) {
  return new Ie({
    key: e,
    value: t,
    isEnum: n.location === "enumTypes",
    inputType: n,
    error: {
      type: "invalidType",
      providedValue: t,
      argName: e,
      requiredType: { inputType: r.inputTypes, bestFittingType: n },
    },
  });
}
u(Si, "getInvalidTypeArg");
function Sg(e, t, r) {
  let { type: n, isList: o } = r, i = vr(zt(n), o), s = Jt(e, r);
  return !!(s === i || o && s === "List<>" ||
    i === "Json" && s !== "Symbol" && !(e instanceof Ae) ||
    s === "Int" && i === "BigInt" ||
    s === "List<Int>" && i === "List<BigInt>" ||
    s === "List<BigInt | Int>" && i === "List<BigInt>" ||
    s === "List<Int | BigInt>" && i === "List<BigInt>" ||
    (s === "Int" || s === "Float") && i === "Decimal" ||
    Og(s, e) && i === "List<Decimal>" || s === "DateTime" && i === "String" ||
    s === "List<DateTime>" && i === "List<String>" ||
    s === "UUID" && i === "String" ||
    s === "List<UUID>" && i === "List<String>" ||
    s === "String" && i === "ID" || s === "List<String>" && i === "List<ID>" ||
    s === "List<String>" && i === "List<Json>" ||
    i === "List<String>" &&
      (s === "List<String | UUID>" || s === "List<UUID | String>") ||
    s === "Int" && i === "Float" || s === "List<Int>" && i === "List<Float>" ||
    s === "Int" && i === "Long" || s === "List<Int>" && i === "List<Long>" ||
    s === "String" && i === "Decimal" && ac(e) || e === null);
}
u(Sg, "hasCorrectScalarType");
var Xn = u((e) => Vu(e, (t, r) => r !== void 0), "cleanObject");
function Og(e, t) {
  return e === "List<Int>" || e === "List<Float>" ||
    e === "List<String>" && t.every(ac);
}
u(Og, "isValidDecimalListInput");
function ac(e) {
  return /^\-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i.test(e);
}
u(ac, "isDecimalString");
function _g(e, t, r) {
  let n = null, o = [];
  for (let i of r.inputTypes) {
    if (
      n = Cg(e, t, r, i), (n == null ? void 0 : n.collectErrors().length) === 0
    ) {
      return n;
    }
    if (n && (n == null ? void 0 : n.collectErrors())) {
      let s = n == null ? void 0 : n.collectErrors();
      s && s.length > 0 && o.push({ arg: n, errors: s });
    }
  }
  if ((n == null ? void 0 : n.hasError) && o.length > 0) {
    let i = o.map(({ arg: s, errors: a }) => {
      let c = a.map((l) => {
        let f = 1;
        return l.error.type === "invalidType" &&
          (f = 2 * Math.exp(uc(l.error.providedValue)) + 1),
          f += Math.log(l.path.length),
          l.error.type === "missingArg" && s.inputType &&
          ir(s.inputType.type) && s.inputType.type.name.includes("Unchecked") &&
          (f *= 2),
          l.error.type === "invalidName" && ir(l.error.originalType) &&
          l.error.originalType.name.includes("Unchecked") && (f *= 2),
          f;
      });
      return { score: a.length + Ig(c), arg: s, errors: a };
    });
    return i.sort((s, a) => s.score < a.score ? -1 : 1), i[0].arg;
  }
  return n;
}
u(_g, "valueToArg");
function uc(e) {
  let t = 1;
  if (!e || typeof e != "object") return t;
  for (let r in e) {
    if (
      !!Object.prototype.hasOwnProperty.call(e, r) && typeof e[r] == "object"
    ) {
      let n = uc(e[r]) + 1;
      t = Math.max(n, t);
    }
  }
  return t;
}
u(uc, "getDepth");
function Ig(e) {
  return e.reduce((t, r) => t + r, 0);
}
u(Ig, "sum");
function Cg(e, t, r, n) {
  var l, f, p, h;
  if (typeof t == "undefined") {
    return r.isRequired
      ? new Ie({
        key: e,
        value: t,
        isEnum: n.location === "enumTypes",
        inputType: n,
        error: {
          type: "missingArg",
          missingName: e,
          missingArg: r,
          atLeastOne: !1,
          atMostOne: !1,
        },
      })
      : null;
  }
  let { isNullable: o, isRequired: i } = r;
  if (
    t === null && !o && !i &&
    !(ir(n.type)
      ? n.type.constraints.minNumFields !== null &&
        n.type.constraints.minNumFields > 0
      : !1)
  ) {
    return new Ie({
      key: e,
      value: t,
      isEnum: n.location === "enumTypes",
      inputType: n,
      error: {
        type: "invalidNullArg",
        name: e,
        invalidType: r.inputTypes,
        atLeastOne: !1,
        atMostOne: !1,
      },
    });
  }
  if (!n.isList) {
    if (ir(n.type)) {
      if (
        typeof t != "object" || Array.isArray(t) ||
        n.location === "inputObjectTypes" && !Gu(t)
      ) {
        return Si(e, t, r, n);
      }
      {
        let y = Xn(t), w, b = Object.keys(y || {}), A = b.length;
        return A === 0 && typeof n.type.constraints.minNumFields == "number" &&
            n.type.constraints.minNumFields > 0
          ? w = { type: "atLeastOne", key: e, inputType: n.type }
          : A > 1 && typeof n.type.constraints.maxNumFields == "number" &&
            n.type.constraints.maxNumFields < 2 &&
            (w = {
              type: "atMostOne",
              key: e,
              inputType: n.type,
              providedKeys: b,
            }),
          new Ie({
            key: e,
            value: y === null ? null : eo(y, n.type, r.inputTypes),
            isEnum: n.location === "enumTypes",
            error: w,
            inputType: n,
            schemaArg: r,
          });
      }
    } else return ic(e, t, r, n);
  }
  if (
    !Array.isArray(t) && n.isList && e !== "updateMany" && (t = [t]),
      n.location === "enumTypes" || n.location === "scalar"
  ) {
    return ic(e, t, r, n);
  }
  let s = n.type,
    c = (typeof ((l = s.constraints) == null ? void 0 : l.minNumFields) ==
            "number" &&
          ((f = s.constraints) == null ? void 0 : f.minNumFields) > 0
        ? Array.isArray(t) &&
          t.some((y) => !y || Object.keys(Xn(y)).length === 0)
        : !1)
      ? { inputType: s, key: e, type: "atLeastOne" }
      : void 0;
  if (!c) {
    let y = typeof ((p = s.constraints) == null ? void 0 : p.maxNumFields) ==
          "number" &&
        ((h = s.constraints) == null ? void 0 : h.maxNumFields) < 2
      ? Array.isArray(t) &&
        t.find((w) => !w || Object.keys(Xn(w)).length !== 1)
      : !1;
    y &&
      (c = {
        inputType: s,
        key: e,
        type: "atMostOne",
        providedKeys: Object.keys(y),
      });
  }
  if (!Array.isArray(t)) {
    for (let y of r.inputTypes) {
      let w = eo(t, y.type);
      if (w.collectErrors().length === 0) {
        return new Ie({
          key: e,
          value: w,
          isEnum: !1,
          schemaArg: r,
          inputType: y,
        });
      }
    }
  }
  return new Ie({
    key: e,
    value: t.map((y) =>
      n.isList && typeof y != "object"
        ? y
        : typeof y != "object" || !t
        ? Si(e, y, r, n)
        : eo(y, s)
    ),
    isEnum: !1,
    inputType: n,
    schemaArg: r,
    error: c,
  });
}
u(Cg, "tryInferArgs");
function ir(e) {
  return !(typeof e == "string" || Object.hasOwnProperty.call(e, "values"));
}
u(ir, "isInputArgType");
function ic(e, t, r, n) {
  return Sg(t, r, n)
    ? new Ie({
      key: e,
      value: t,
      isEnum: n.location === "enumTypes",
      schemaArg: r,
      inputType: n,
    })
    : Si(e, t, r, n);
}
u(ic, "scalarToArg");
function eo(e, t, r, n) {
  let o = Xn(e),
    { fields: i, fieldMap: s } = t,
    a = i.map((p) => [p.name, void 0]),
    c = Object.entries(o || {}),
    f = ra(c, a, (p) => p[0]).reduce((p, [h, y]) => {
      let w = s ? s[h] : i.find((A) => A.name === h);
      if (!w) {
        let A = typeof y == "boolean" && n && n.fields.some((P) => P.name === h)
          ? h
          : null;
        return p.push(
          new Ie({
            key: h,
            value: y,
            error: {
              type: "invalidName",
              providedName: h,
              providedValue: y,
              didYouMeanField: A,
              didYouMeanArg: !A && En(h, [...i.map((P) => P.name), "select"]) ||
                void 0,
              originalType: t,
              possibilities: r,
              outputType: n,
            },
          }),
        ),
          p;
      }
      let b = _g(h, y, w);
      return b && p.push(b), p;
    }, []);
  if (
    typeof t.constraints.minNumFields == "number" &&
      c.length < t.constraints.minNumFields || f.find((p) => {
        var h, y;
        return ((h = p.error) == null ? void 0 : h.type) === "missingArg" ||
          ((y = p.error) == null ? void 0 : y.type) === "atLeastOne";
      })
  ) {
    let p = t.fields.filter((h) =>
      !h.isRequired && o &&
      (typeof o[h.name] == "undefined" || o[h.name] === null)
    );
    f.push(...p.map((h) => {
      let y = h.inputTypes[0];
      return new Ie({
        key: h.name,
        value: void 0,
        isEnum: y.location === "enumTypes",
        error: {
          type: "missingArg",
          missingName: h.name,
          missingArg: h,
          atLeastOne: Boolean(t.constraints.minNumFields) || !1,
          atMostOne: t.constraints.maxNumFields === 1 || !1,
        },
        inputType: y,
      });
    }));
  }
  return new me(f);
}
u(eo, "objectToArgs");
function ro({ document: e, path: t, data: r }) {
  let n = wi(r, t);
  if (n === "undefined") return null;
  if (typeof n != "object") return n;
  let o = Fg(e, t);
  return Oi({ field: o, data: n });
}
u(ro, "unpack");
function Oi({ field: e, data: t }) {
  var n;
  if (!t || typeof t != "object" || !e.children || !e.schemaField) return t;
  let r = {
    DateTime: (o) => new Date(o),
    Json: (o) => JSON.parse(o),
    Bytes: (o) => x.Buffer.from(o, "base64"),
    Decimal: (o) => new De(o),
    BigInt: (o) => BigInt(o),
  };
  for (let o of e.children) {
    let i = (n = o.schemaField) == null ? void 0 : n.outputType.type;
    if (i && typeof i == "string") {
      let s = r[i];
      if (s) {
        if (Array.isArray(t)) {
          for (let a of t) {
            typeof a[o.name] != "undefined" && a[o.name] !== null &&
              (Array.isArray(a[o.name])
                ? a[o.name] = a[o.name].map(s)
                : a[o.name] = s(a[o.name]));
          }
        } else {
          typeof t[o.name] != "undefined" && t[o.name] !== null &&
            (Array.isArray(t[o.name])
              ? t[o.name] = t[o.name].map(s)
              : t[o.name] = s(t[o.name]));
        }
      }
    }
    if (
      o.schemaField && o.schemaField.outputType.location === "outputObjectTypes"
    ) {
      if (Array.isArray(t)) for (let s of t) Oi({ field: o, data: s[o.name] });
      else Oi({ field: o, data: t[o.name] });
    }
  }
  return t;
}
u(Oi, "mapScalars");
function Fg(e, t) {
  let r = t.slice(), n = r.shift(), o = e.children.find((i) => i.name === n);
  if (!o) throw new Error(`Could not find field ${n} in document ${e}`);
  for (; r.length > 0;) {
    let i = r.shift();
    if (!o.children) {
      throw new Error(`Can't get children for field ${o} with child ${i}`);
    }
    let s = o.children.find((a) => a.name === i);
    if (!s) throw new Error(`Can't find child ${i} of field ${o}`);
    o = s;
  }
  return o;
}
u(Fg, "getField");
function Mi(e) {
  return e.split(".").filter((t) => t !== "select").join(".");
}
u(Mi, "removeSelectFromPath");
function _i(e) {
  if (Object.prototype.toString.call(e) === "[object Object]") {
    let r = {};
    for (let n in e) {
      if (n === "select") for (let o in e.select) r[o] = _i(e.select[o]);
      else r[n] = _i(e[n]);
    }
    return r;
  }
  return e;
}
u(_i, "removeSelectFromObject");
function Rg({ ast: e, keyPaths: t, missingItems: r, valuePaths: n }) {
  let o = t.map(Mi),
    i = n.map(Mi),
    s = r.map((c) => ({
      path: Mi(c.path),
      isRequired: c.isRequired,
      type: c.type,
    }));
  return { ast: _i(e), keyPaths: o, missingItems: s, valuePaths: i };
}
u(Rg, "transformAggregatePrintJsonArgs");
d();
m();
g();
var Et = class extends Error {
  constructor(t) {
    super(t), this.name = "NotFoundError";
  }
};
u(Et, "NotFoundError");
function Ci(e, t, r, n) {
  let o;
  if (
    r && typeof r == "object" && "rejectOnNotFound" in r &&
    r.rejectOnNotFound !== void 0
  ) {
    o = r.rejectOnNotFound, delete r.rejectOnNotFound;
  } else if (typeof n == "boolean") o = n;
  else if (n && typeof n == "object" && e in n) {
    let i = n[e];
    if (i && typeof i == "object") return t in i ? i[t] : void 0;
    o = Ci(e, t, r, i);
  } else typeof n == "function" ? o = n : o = !1;
  return o;
}
u(Ci, "getRejectOnNotFound");
var Dg = /(findUnique|findFirst)/;
function cc(e, t, r, n) {
  if (n && !e && Dg.exec(t)) {
    throw typeof n == "boolean" && n
      ? new Et(`No ${r} found`)
      : typeof n == "function"
      ? n(new Et(`No ${r} found`))
      : Dr(n)
      ? n
      : new Et(`No ${r} found`);
  }
}
u(cc, "throwIfNotFound");
function lc(e, t, r) {
  if (e === "findFirstOrThrow" || e === "findUniqueOrThrow") return kg(t, r);
  ni(e, "Unknown wrapper name");
}
u(lc, "wrapRequest");
function kg(e, t) {
  return async (r) => {
    if ("rejectOnNotFound" in r.args) {
      let { stack: o } = or({
        originalMethod: r.clientMethod,
        callsite: r.callsite,
      });
      throw new Ee(`${o}
'rejectOnNotFound' option is not supported`);
    }
    let n = await t(r);
    if (n == null) throw new Et(`No ${e} found`);
    return n;
  };
}
u(kg, "applyOrThrowWrapper");
d();
m();
g();
d();
m();
g();
var Ng = { enumerable: !0, configurable: !0, writable: !0 };
function sr(e) {
  let t = new Set(e);
  return {
    getOwnPropertyDescriptor: () => Ng,
    has: (r, n) => t.has(n),
    set: (r, n, o) => t.add(n) && Reflect.set(r, n, o),
    ownKeys: () => [...t],
  };
}
u(sr, "defaultProxyHandlers");
function $g(e, t) {
  return e === void 0 || t === void 0 ? [] : [...t, "select", e];
}
u($g, "getNextDataPath");
function jg(e, t, r) {
  return t === void 0 ? e != null ? e : {} : Hn(t, r, e || !0);
}
u(jg, "getNextUserArgs");
function Fi(e, t, r, n, o, i) {
  let a = e._baseDmmf.modelMap[t].fields.reduce(
    (c, l) => ({ ...c, [l.name]: l }),
    {},
  );
  return (c) => {
    let l = et(e._errorFormat),
      f = $g(n, o),
      p = jg(c, i, f),
      h = r({ dataPath: f, callsite: l })(p),
      y = Bg(e, t);
    return new Proxy(h, {
      get(w, b) {
        if (!y.includes(b)) return w[b];
        let P = [a[b].type, r, b], T = [f, p];
        return Fi(e, ...P, ...T);
      },
      ...sr([...y, ...Object.getOwnPropertyNames(h)]),
    });
  };
}
u(Fi, "applyFluent");
function Bg(e, t) {
  return e._baseDmmf.modelMap[t].fields.filter((r) => r.kind === "object").map(
    (r) => r.name,
  );
}
u(Bg, "getOwnKeys");
d();
m();
g();
function no(e) {
  return e.replace(/^./, (t) => t.toLowerCase());
}
u(no, "dmmfToJSModelName");
var Lg = ["findUnique", "findFirst", "create", "update", "upsert", "delete"],
  qg = ["aggregate", "count", "groupBy"];
function Ri(e, t) {
  let r = no(t), n = fc(e, t), o = {};
  return new Proxy(o, {
    get(i, s) {
      if (s in i || typeof s == "symbol") return i[s];
      if (!pc(e, t, s)) return;
      let a = eu(s), c = u((f) => e._request(f), "requestFn");
      Bn(s) && (c = lc(s, t, c));
      let l = u((f) =>
        (p) => {
          let h = et(e._errorFormat);
          return wt((y, w, b) => {
            let A = { args: p, dataPath: [] },
              P = { action: a, model: t },
              T = { clientMethod: `${r}.${s}`, jsModelName: r },
              _ = {
                ...A,
                ...P,
                ...T,
                ...{ runInTransaction: !!y, transactionId: y, lock: w },
                ...{ callsite: h, otelCtx: b },
              };
            return c({ ..._, ...f });
          });
        }, "action");
      return Lg.includes(a) ? Fi(e, t, l) : Ug(s) ? $u(e, s, l) : l({});
    },
    ...sr(n),
  });
}
u(Ri, "applyModel");
function fc(e, t) {
  return [...Object.keys(e._baseDmmf.mappingsMap[t]), "count"].filter((r) =>
    !["model", "plural"].includes(r)
  );
}
u(fc, "getOwnKeys");
function pc(e, t, r) {
  return Bn(r) ? pc(e, t, $r[r].wrappedAction) : fc(e, t).includes(r);
}
u(pc, "isValidActionName");
function Ug(e) {
  return qg.includes(e);
}
u(Ug, "isValidAggregateName");
d();
m();
g();
function mc(e) {
  return e.replace(/^./, (t) => t.toUpperCase());
}
u(mc, "jsToDMMFModelName");
function gc(e) {
  let t = {}, r = Vg(e);
  return new Proxy(e, {
    get(n, o) {
      if (o in n || typeof o == "symbol") return n[o];
      let i = mc(o);
      if (t[i] !== void 0) return t[i];
      if (e._baseDmmf.modelMap[i] !== void 0) return t[i] = Ri(e, i);
      if (e._baseDmmf.modelMap[o] !== void 0) return t[i] = Ri(e, o);
    },
    ...sr(r),
  });
}
u(gc, "applyModels");
function Vg(e) {
  return [...Object.keys(e._baseDmmf.modelMap).map(no), ...Object.keys(e)];
}
u(Vg, "getOwnKeys");
d();
m();
g();
function dc(e, t = () => {}) {
  let r, n = new Promise((o) => r = o);
  return {
    then(o) {
      return --e === 0 && r(t()), o == null ? void 0 : o(n);
    },
  };
}
u(dc, "getLockCountPromise");
d();
m();
g();
function hc(e) {
  return typeof e == "string" ? e : e.reduce((t, r) => {
    let n = typeof r == "string" ? r : r.level;
    return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
  }, void 0);
}
u(hc, "getLogLevel");
d();
m();
g();
function bc(e, t, r) {
  let n = yc(e, r),
    o = yc(t, r),
    i = Object.values(o).map((a) => a[a.length - 1]),
    s = Object.keys(o);
  return Object.entries(n).forEach(([a, c]) => {
    s.includes(a) || i.push(c[c.length - 1]);
  }),
    i;
}
u(bc, "mergeBy");
var yc = u((e, t) =>
  e.reduce((r, n) => {
    let o = t(n);
    return r[o] || (r[o] = []), r[o].push(n), r;
  }, {}), "groupBy");
d();
m();
g();
var Qr = class {
  constructor() {
    this._middlewares = [];
  }
  use(t) {
    this._middlewares.push(t);
  }
  get(t) {
    return this._middlewares[t];
  }
  has(t) {
    return !!this._middlewares[t];
  }
  length() {
    return this._middlewares.length;
  }
};
u(Qr, "MiddlewareHandler");
var Kr = class {
  constructor() {
    this.query = new Qr();
    this.engine = new Qr();
  }
};
u(Kr, "Middlewares");
d();
m();
g();
Nn();
var vc = Z(jn());
d();
m();
g();
var Yr = class {
  constructor(t) {
    this.options = t;
    this.tickActive = !1;
    this.batches = {};
  }
  request(t) {
    let r = this.options.batchBy(t);
    return r
      ? (this.batches[r] ||
        (this.batches[r] = [],
          this.tickActive || (this.tickActive = !0,
            v.nextTick(() => {
              this.dispatchBatches(), this.tickActive = !1;
            }))),
        new Promise((n, o) => {
          this.batches[r].push({ request: t, resolve: n, reject: o });
        }))
      : this.options.singleLoader(t);
  }
  dispatchBatches() {
    for (let t in this.batches) {
      let r = this.batches[t];
      delete this.batches[t],
        r.length === 1
          ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          })
          : this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) {
              for (let o = 0; o < r.length; o++) r[o].reject(n);
            } else {
              for (let o = 0; o < r.length; o++) {
                let i = n[o];
                i instanceof Error ? r[o].reject(i) : r[o].resolve(i);
              }
            }
          }).catch((n) => {
            for (let o = 0; o < r.length; o++) r[o].reject(n);
          });
    }
  }
  get [Symbol.toStringTag]() {
    return "DataLoader";
  }
};
u(Yr, "DataLoader");
var Gg = pt("prisma:client:request_handler");
function wc(e) {
  var s;
  let t = e[0].transactionId,
    r = e[0].runInTransaction,
    n = (s = e[0].headers) != null ? s : {},
    o = typeof t == "number" && r ? !0 : void 0,
    i = typeof t == "string" && r ? t : void 0;
  return i !== void 0 && (n.transactionId = i), { inTx: o, headers: n };
}
u(wc, "getRequestInfo");
var Zr = class {
  constructor(t, r) {
    this.client = t,
      this.hooks = r,
      this.dataloader = new Yr({
        batchLoader: (n) => {
          let o = wc(n), i = n.map((s) => String(s.document));
          return this.client._engine.requestBatch(i, o.headers, o.inTx);
        },
        singleLoader: (n) => {
          let o = wc([n]), i = String(n.document);
          return this.client._engine.request(i, o.headers);
        },
        batchBy: (n) =>
          n.transactionId ? `transaction-${n.transactionId}` : zg(n),
      });
  }
  async request(
    {
      document: t,
      dataPath: r = [],
      rootField: n,
      typeName: o,
      isList: i,
      callsite: s,
      rejectOnNotFound: a,
      clientMethod: c,
      runInTransaction: l,
      engineHook: f,
      args: p,
      headers: h,
      transactionId: y,
      unpacker: w,
    },
  ) {
    if (this.hooks && this.hooks.beforeRequest) {
      let b = String(t);
      this.hooks.beforeRequest({
        query: b,
        path: r,
        rootField: n,
        typeName: o,
        document: t,
        isList: i,
        clientMethod: c,
        args: p,
      });
    }
    try {
      let b, A;
      if (f) {
        let T = await f(
          { document: t, runInTransaction: l },
          (S) => this.dataloader.request(S),
        );
        b = T.data, A = T.elapsed;
      } else {
        let T = await this.dataloader.request({
          document: t,
          runInTransaction: l,
          headers: h,
          transactionId: y,
        });
        b = T == null ? void 0 : T.data, A = T == null ? void 0 : T.elapsed;
      }
      let P = this.unpack(t, b, r, n, w);
      return cc(P, c, o, a),
        v.env.PRISMA_CLIENT_GET_TIME ? { data: P, elapsed: A } : P;
    } catch (b) {
      this.handleRequestError({ error: b, clientMethod: c, callsite: s });
    }
  }
  handleRequestError({ error: t, clientMethod: r, callsite: n }) {
    Gg(t);
    let o = t.message;
    if (n) {
      let { stack: i } = or({
        callsite: n,
        originalMethod: r,
        onUs: t.isPanic,
        showColors: this.client._errorFormat === "pretty",
      });
      o = `${i}
  ${t.message}`;
    }
    throw o = this.sanitizeMessage(o),
      t.code
        ? new Ge(o, t.code, this.client._clientVersion, t.meta)
        : t.isPanic
        ? new ze(o, this.client._clientVersion)
        : t instanceof Ne
        ? new Ne(o, this.client._clientVersion)
        : t instanceof ke
        ? new ke(o, this.client._clientVersion)
        : t instanceof ze
        ? new ze(o, this.client._clientVersion)
        : (t.clientVersion = this.client._clientVersion, t);
  }
  sanitizeMessage(t) {
    return this.client._errorFormat && this.client._errorFormat !== "pretty"
      ? (0, vc.default)(t)
      : t;
  }
  unpack(t, r, n, o, i) {
    r != null && r.data && (r = r.data), i && (r[o] = i(r[o]));
    let s = [];
    return o && s.push(o),
      s.push(...n.filter((a) => a !== "select" && a !== "include")),
      ro({ document: t, data: r, path: s });
  }
  get [Symbol.toStringTag]() {
    return "RequestHandler";
  }
};
u(Zr, "RequestHandler");
function zg(e) {
  var n;
  if (!e.document.children[0].name.startsWith("findUnique")) return;
  let t = (n = e.document.children[0].args) == null
      ? void 0
      : n.args.map((o) =>
        o.value instanceof me
          ? `${o.key}-${o.value.args.map((i) => i.key).join(",")}`
          : o.key
      ).join(","),
    r = e.document.children[0].children.join(",");
  return `${e.document.children[0].name}|${t}|${r}`;
}
u(zg, "batchFindUniqueBy");
d();
m();
g();
var Ec = xc().version;
d();
m();
g();
function Ac(e) {
  return e.map((t) => {
    let r = {};
    for (let n of Object.keys(t)) r[n] = Tc(t[n]);
    return r;
  });
}
u(Ac, "deserializeRawResults");
function Tc({ prisma__type: e, prisma__value: t }) {
  switch (e) {
    case "bigint":
      return BigInt(t);
    case "bytes":
      return x.Buffer.from(t, "base64");
    case "decimal":
      return new De(t);
    case "datetime":
    case "date":
      return new Date(t);
    case "time":
      return new Date(`1970-01-01T${t}Z`);
    case "array":
      return t.map(Tc);
    default:
      return t;
  }
}
u(Tc, "deserializeValue");
d();
m();
g();
var Xr = u(
  (e) => e.reduce((t, r, n) => `${t}@P${n}${r}`),
  "mssqlPreparedStatement",
);
d();
m();
g();
function Mc(e, t) {
  let r = t && Vr.getSpanContext(t);
  return (r == null ? void 0 : r.traceFlags) === 1
    ? { traceparent: `00-${r.traceId}-${r.spanId}-01`, ...e }
    : e != null
    ? e
    : {};
}
u(Mc, "applyTracingHeaders");
d();
m();
g();
async function Pc(e, t, r) {
  if (t === void 0) return r(void 0);
  let o = Vr.getTracer("prisma").startSpan(e, void 0, t),
    i = Vr.setSpan(t, o),
    s = await Wn.with(i, () => r(o));
  return o == null || o.end(), s;
}
u(Pc, "runInChildSpan");
d();
m();
g();
function Be(e) {
  try {
    return Sc(e, "fast");
  } catch (t) {
    return Sc(e, "slow");
  }
}
u(Be, "serializeRawParameters");
function Sc(e, t) {
  return JSON.stringify(e.map((r) => Wg(r, t)));
}
u(Sc, "serializeRawParametersInternal");
function Wg(e, t) {
  return typeof e == "bigint"
    ? { prisma__type: "bigint", prisma__value: e.toString() }
    : Hg(e)
    ? { prisma__type: "date", prisma__value: e.toJSON() }
    : De.isDecimal(e)
    ? { prisma__type: "decimal", prisma__value: e.toJSON() }
    : x.Buffer.isBuffer(e)
    ? { prisma__type: "bytes", prisma__value: e.toString("base64") }
    : Qg(e) || ArrayBuffer.isView(e)
    ? {
      prisma__type: "bytes",
      prisma__value: x.Buffer.from(e).toString("base64"),
    }
    : typeof e == "object" && t === "slow"
    ? _c(e)
    : e;
}
u(Wg, "encodeParameter");
function Hg(e) {
  return e instanceof Date
    ? !0
    : Object.prototype.toString.call(e) === "[object Date]" &&
      typeof e.toJSON == "function";
}
u(Hg, "isDate");
function Qg(e) {
  return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer
    ? !0
    : typeof e == "object" && e !== null
    ? e[Symbol.toStringTag] === "ArrayBuffer" ||
      e[Symbol.toStringTag] === "SharedArrayBuffer"
    : !1;
}
u(Qg, "isArrayBufferLike");
function _c(e) {
  if (typeof e != "object" || e === null) return e;
  if (typeof e.toJSON == "function") return e.toJSON();
  if (Array.isArray(e)) return e.map(Oc);
  let t = {};
  for (let r of Object.keys(e)) t[r] = Oc(e[r]);
  return t;
}
u(_c, "preprocessObject");
function Oc(e) {
  return typeof e == "bigint" ? e.toString() : _c(e);
}
u(Oc, "preprocessValueInObject");
d();
m();
g();
var Rc = Z(_o());
var Ic = [
    "datasources",
    "errorFormat",
    "log",
    "__internal",
    "rejectOnNotFound",
  ],
  Cc = ["pretty", "colorless", "minimal"],
  Fc = ["info", "query", "warn", "error"],
  Kg = {
    datasources: (e, t) => {
      if (!!e) {
        if (typeof e != "object" || Array.isArray(e)) {
          throw new ne(
            `Invalid value ${
              JSON.stringify(e)
            } for "datasources" provided to PrismaClient constructor`,
          );
        }
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let o = ar(r, t) || `Available datasources: ${t.join(", ")}`;
            throw new ne(
              `Unknown datasource ${r} provided to PrismaClient constructor.${o}`,
            );
          }
          if (typeof n != "object" || Array.isArray(n)) {
            throw new ne(
              `Invalid value ${
                JSON.stringify(e)
              } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
            );
          }
          if (n && typeof n == "object") {
            for (let [o, i] of Object.entries(n)) {
              if (o !== "url") {
                throw new ne(
                  `Invalid value ${
                    JSON.stringify(e)
                  } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
                );
              }
              if (typeof i != "string") {
                throw new ne(
                  `Invalid value ${
                    JSON.stringify(i)
                  } for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`,
                );
              }
            }
          }
        }
      }
    },
    errorFormat: (e) => {
      if (!!e) {
        if (typeof e != "string") {
          throw new ne(
            `Invalid value ${
              JSON.stringify(e)
            } for "errorFormat" provided to PrismaClient constructor.`,
          );
        }
        if (!Cc.includes(e)) {
          let t = ar(e, Cc);
          throw new ne(
            `Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`,
          );
        }
      }
    },
    log: (e) => {
      if (!e) return;
      if (!Array.isArray(e)) {
        throw new ne(
          `Invalid value ${
            JSON.stringify(e)
          } for "log" provided to PrismaClient constructor.`,
        );
      }
      function t(r) {
        if (typeof r == "string" && !Fc.includes(r)) {
          let n = ar(r, Fc);
          throw new ne(
            `Invalid log level "${r}" provided to PrismaClient constructor.${n}`,
          );
        }
      }
      u(t, "validateLogLevel");
      for (let r of e) {
        t(r);
        let n = {
          level: t,
          emit: (o) => {
            let i = ["stdout", "event"];
            if (!i.includes(o)) {
              let s = ar(o, i);
              throw new ne(
                `Invalid value ${
                  JSON.stringify(o)
                } for "emit" in logLevel provided to PrismaClient constructor.${s}`,
              );
            }
          },
        };
        if (r && typeof r == "object") {
          for (let [o, i] of Object.entries(r)) {
            if (n[o]) n[o](i);
            else {
              throw new ne(
                `Invalid property ${o} for "log" provided to PrismaClient constructor`,
              );
            }
          }
        }
      }
    },
    __internal: (e) => {
      if (!e) return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object") {
        throw new ne(
          `Invalid value ${
            JSON.stringify(e)
          } for "__internal" to PrismaClient constructor`,
        );
      }
      for (let [r] of Object.entries(e)) {
        if (!t.includes(r)) {
          let n = ar(r, t);
          throw new ne(
            `Invalid property ${
              JSON.stringify(r)
            } for "__internal" provided to PrismaClient constructor.${n}`,
          );
        }
      }
    },
    rejectOnNotFound: (e) => {
      if (!!e) {
        if (
          Dr(e) || typeof e == "boolean" || typeof e == "object" ||
          typeof e == "function"
        ) {
          return e;
        }
        throw new ne(
          `Invalid rejectOnNotFound expected a boolean/Error/{[modelName: Error | boolean]} but received ${
            JSON.stringify(e)
          }`,
        );
      }
    },
  };
function Dc(e, t) {
  for (let [r, n] of Object.entries(e)) {
    if (!Ic.includes(r)) {
      let o = ar(r, Ic);
      throw new ne(
        `Unknown property ${r} provided to PrismaClient constructor.${o}`,
      );
    }
    Kg[r](n, t);
  }
}
u(Dc, "validatePrismaClientOptions");
function ar(e, t) {
  if (t.length === 0 || typeof e != "string") return "";
  let r = Yg(e, t);
  return r ? ` Did you mean "${r}"?` : "";
}
u(ar, "getDidYouMean");
function Yg(e, t) {
  if (t.length === 0) return null;
  let r = t.map((o) => ({ value: o, distance: (0, Rc.default)(e, o) }));
  r.sort((o, i) => o.distance < i.distance ? -1 : 1);
  let n = r[0];
  return n.distance < 3 ? n.value : null;
}
u(Yg, "getAlternative");
var ye = pt("prisma:client"), Zg = /^(\s*alter\s)/i;
typeof globalThis == "object" && (globalThis.NODE_CLIENT = !0);
function kc(e) {
  return Array.isArray(e);
}
u(kc, "isReadonlyArray");
function Di(e, t, r) {
  if (t.length > 0 && Zg.exec(e)) {
    throw new Error(`Running ALTER using ${r} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
  }
}
u(Di, "checkAlter");
var Xg = {
    findUnique: "query",
    findFirst: "query",
    findMany: "query",
    count: "query",
    create: "mutation",
    createMany: "mutation",
    update: "mutation",
    updateMany: "mutation",
    upsert: "mutation",
    delete: "mutation",
    deleteMany: "mutation",
    executeRaw: "mutation",
    queryRaw: "mutation",
    aggregate: "query",
    groupBy: "query",
    runCommandRaw: "mutation",
    findRaw: "query",
    aggregateRaw: "query",
  },
  ed = Symbol.for("prisma.client.transaction.id");
function Nc(e) {
  class t {
    constructor(n) {
      this._middlewares = new Kr();
      this._transactionId = 1;
      var s, a, c, l, f, p, h, y, w;
      n && Dc(n, e.datasourceNames),
        this._rejectOnNotFound = n == null ? void 0 : n.rejectOnNotFound,
        this._clientVersion = (s = e.clientVersion) != null ? s : Ec,
        this._activeProvider = e.activeProvider,
        this._dataProxy = e.dataProxy,
        this._clientEngineType = Zo(e.generator);
      let o = {
          rootEnvPath: e.relativeEnvPaths.rootEnvPath &&
            en.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath),
          schemaEnvPath: e.relativeEnvPaths.schemaEnvPath &&
            en.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath),
        },
        i = !1;
      try {
        let b = n != null ? n : {},
          A = (a = b.__internal) != null ? a : {},
          P = A.debug === !0;
        P && pt.enable("prisma:client"), A.hooks && (this._hooks = A.hooks);
        let T = en.default.resolve(e.dirname, e.relativePath);
        Wo.existsSync(T) || (T = e.dirname),
          ye("dirname", e.dirname),
          ye("relativePath", e.relativePath),
          ye("cwd", T);
        let S = b.datasources || {},
          M = Object.entries(S).filter(([F, $]) => $ && $.url).map((
            [F, { url: $ }],
          ) => ({ name: F, url: $ })),
          _ = bc([], M, (F) => F.name),
          R = A.engine || {};
        if (
          b.errorFormat
            ? this._errorFormat = b.errorFormat
            : v.env.NODE_ENV === "production"
            ? this._errorFormat = "minimal"
            : v.env.NO_COLOR
            ? this._errorFormat = "colorless"
            : this._errorFormat = "colorless",
            this._baseDmmf = new lt(e.document),
            this._dataProxy
        ) {
          let F = e.document;
          this._dmmf = new Ze(F);
        }
        if (
          this._previewFeatures =
            (l = (c = e.generator) == null ? void 0 : c.previewFeatures) != null
              ? l
              : [],
            this._engineConfig = {
              cwd: T,
              dirname: e.dirname,
              enableDebugLogs: P,
              allowTriggerPanic: R.allowTriggerPanic,
              datamodelPath: en.default.join(
                e.dirname,
                (f = e.filename) != null ? f : "schema.prisma",
              ),
              prismaPath: (p = R.binaryPath) != null ? p : void 0,
              engineEndpoint: R.endpoint,
              datasources: _,
              generator: e.generator,
              showColors: this._errorFormat === "pretty",
              logLevel: b.log && hc(b.log),
              logQueries: b.log && Boolean(
                typeof b.log == "string"
                  ? b.log === "query"
                  : b.log.find((F) =>
                    typeof F == "string" ? F === "query" : F.level === "query"
                  ),
              ),
              env: (w = (y = i == null ? void 0 : i.parsed) != null
                  ? y
                  : (h = e.injectableEdgeEnv) == null
                  ? void 0
                  : h.parsed) != null
                ? w
                : {},
              flags: [],
              clientVersion: e.clientVersion,
              previewFeatures: ti(this._previewFeatures),
              activeProvider: e.activeProvider,
              inlineSchema: e.inlineSchema,
              inlineDatasources: e.inlineDatasources,
              inlineSchemaHash: e.inlineSchemaHash,
            },
            ye(`clientVersion: ${e.clientVersion}`),
            ye(`clientEngineType: ${this._clientEngineType}`),
            this._engine = this.getEngine(),
            this._getActiveProvider(),
            this._fetcher = new Zr(this, this._hooks),
            b.log
        ) {
          for (let F of b.log) {
            let $ = typeof F == "string"
              ? F
              : F.emit === "stdout"
              ? F.level
              : null;
            $ && this.$on($, (J) => {
              var X;
              nr.log(
                `${(X = nr.tags[$]) != null ? X : ""}`,
                J.message || J.query,
              );
            });
          }
        }
        this._metrics = new Mt(this._engine);
      } catch (b) {
        throw b.clientVersion = this._clientVersion, b;
      }
      return gc(this);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClient";
    }
    getEngine() {
      if (this._dataProxy === !0) return new rr(this._engineConfig);
      if (this._clientEngineType === "library") return !1;
      if (this._clientEngineType === "binary") return !1;
      throw new Ee(
        "Invalid client engine type, please use `library` or `binary`",
      );
    }
    $use(n, o) {
      if (typeof n == "function") this._middlewares.query.use(n);
      else if (n === "all") this._middlewares.query.use(o);
      else if (n === "engine") this._middlewares.engine.use(o);
      else throw new Error(`Invalid middleware ${n}`);
    }
    $on(n, o) {
      n === "beforeExit"
        ? this._engine.on("beforeExit", o)
        : this._engine.on(n, (i) => {
          var a, c, l, f;
          let s = i.fields;
          return o(
            n === "query"
              ? {
                timestamp: i.timestamp,
                query: (a = s == null ? void 0 : s.query) != null ? a : i.query,
                params: (c = s == null ? void 0 : s.params) != null
                  ? c
                  : i.params,
                duration: (l = s == null ? void 0 : s.duration_ms) != null
                  ? l
                  : i.duration,
                target: i.target,
              }
              : {
                timestamp: i.timestamp,
                message: (f = s == null ? void 0 : s.message) != null
                  ? f
                  : i.message,
                target: i.target,
              },
          );
        });
    }
    $connect() {
      try {
        return this._engine.start();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      }
    }
    async _runDisconnect() {
      await this._engine.stop(),
        delete this._connectionPromise,
        this._engine = this.getEngine(),
        delete this._disconnectionPromise,
        delete this._getConfigPromise;
    }
    async $disconnect() {
      try {
        await this._engine.stop();
      } catch (n) {
        throw n.clientVersion = this._clientVersion, n;
      } finally {
        this._dmmf = void 0;
      }
    }
    async _getActiveProvider() {
      try {
        let n = await this._engine.getConfig();
        this._activeProvider = n.datasources[0].activeProvider;
      } catch (n) {}
    }
    $executeRawInternal(n, o, i, s, ...a) {
      let c = "", l;
      if (typeof s == "string") {
        c = s,
          l = { values: Be(a || []), __prismaRawParamaters__: !0 },
          Di(c, a, "prisma.$executeRawUnsafe(<SQL>, [...values])");
      } else if (kc(s)) {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql": {
            let p = ur.sqltag(s, ...a);
            c = p.sql,
              l = { values: Be(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            let p = ur.sqltag(s, ...a);
            c = p.text,
              Di(c, p.values, "prisma.$executeRaw`<SQL>`"),
              l = { values: Be(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          case "sqlserver": {
            c = Xr(s), l = { values: Be(a), __prismaRawParamaters__: !0 };
            break;
          }
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $executeRaw`,
            );
        }
      } else {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql":
            c = s.sql;
            break;
          case "cockroachdb":
          case "postgresql":
            c = s.text, Di(c, s.values, "prisma.$executeRaw(sql`<SQL>`)");
            break;
          case "sqlserver":
            c = Xr(s.strings);
            break;
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $executeRaw`,
            );
        }
        l = { values: Be(s.values), __prismaRawParamaters__: !0 };
      }
      l != null && l.values
        ? ye(`prisma.$executeRaw(${c}, ${l.values})`)
        : ye(`prisma.$executeRaw(${c})`);
      let f = { query: c, parameters: l };
      return ye("Prisma Client call:"),
        this._request({
          args: f,
          clientMethod: "$executeRaw",
          dataPath: [],
          action: "executeRaw",
          callsite: et(this._errorFormat),
          runInTransaction: !!n,
          transactionId: n,
          otelCtx: i,
          lock: o,
        });
    }
    $executeRaw(n, ...o) {
      return wt((i, s, a) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          return this.$executeRawInternal(i, s, a, n, ...o);
        }
        throw new Ee(
          "`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n",
        );
      });
    }
    $executeRawUnsafe(n, ...o) {
      return wt((i, s, a) => this.$executeRawInternal(i, s, a, n, ...o));
    }
    $runCommandRaw(n) {
      if (e.activeProvider !== "mongodb") {
        throw new Ee(
          `The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`,
        );
      }
      return wt((o, i, s) =>
        this._request({
          args: { command: n },
          clientMethod: "$runCommandRaw",
          dataPath: [],
          action: "runCommandRaw",
          callsite: et(this._errorFormat),
          runInTransaction: !!o,
          transactionId: o,
          otelCtx: s,
          lock: i,
        })
      );
    }
    $queryRawInternal(n, o, i, s, ...a) {
      let c = "", l;
      if (typeof s == "string") {
        c = s, l = { values: Be(a || []), __prismaRawParamaters__: !0 };
      } else if (kc(s)) {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql": {
            let p = ur.sqltag(s, ...a);
            c = p.sql,
              l = { values: Be(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          case "cockroachdb":
          case "postgresql": {
            let p = ur.sqltag(s, ...a);
            c = p.text,
              l = { values: Be(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          case "sqlserver": {
            let p = ur.sqltag(s, ...a);
            c = Xr(p.strings),
              l = { values: Be(p.values), __prismaRawParamaters__: !0 };
            break;
          }
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $queryRaw`,
            );
        }
      } else {
        switch (this._activeProvider) {
          case "sqlite":
          case "mysql":
            c = s.sql;
            break;
          case "cockroachdb":
          case "postgresql":
            c = s.text;
            break;
          case "sqlserver":
            c = Xr(s.strings);
            break;
          default:
            throw new Error(
              `The ${this._activeProvider} provider does not support $queryRaw`,
            );
        }
        l = { values: Be(s.values), __prismaRawParamaters__: !0 };
      }
      l != null && l.values
        ? ye(`prisma.queryRaw(${c}, ${l.values})`)
        : ye(`prisma.queryRaw(${c})`);
      let f = { query: c, parameters: l };
      return ye("Prisma Client call:"),
        this._request({
          args: f,
          clientMethod: "$queryRaw",
          dataPath: [],
          action: "queryRaw",
          callsite: et(this._errorFormat),
          runInTransaction: !!n,
          transactionId: n,
          otelCtx: i,
          lock: o,
        }).then(Ac);
    }
    $queryRaw(n, ...o) {
      return wt((i, s, a) => {
        if (n.raw !== void 0 || n.sql !== void 0) {
          return this.$queryRawInternal(i, s, a, n, ...o);
        }
        throw new Ee(
          "`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n",
        );
      });
    }
    $queryRawUnsafe(n, ...o) {
      return wt((i, s, a) => this.$queryRawInternal(i, s, a, n, ...o));
    }
    __internal_triggerPanic(n) {
      if (!this._engineConfig.allowTriggerPanic) {
        throw new Error(
          `In order to use .__internal_triggerPanic(), please enable it like so:
new PrismaClient({
  __internal: {
    engine: {
      allowTriggerPanic: true
    }
  }
})`,
        );
      }
      let o = n ? { "X-DEBUG-FATAL": "1" } : { "X-DEBUG-NON-FATAL": "1" };
      return this._request({
        action: "queryRaw",
        args: { query: "SELECT 1", parameters: void 0 },
        clientMethod: "queryRaw",
        dataPath: [],
        runInTransaction: !1,
        headers: o,
        callsite: et(this._errorFormat),
      });
    }
    _transactionWithArray(n) {
      let o = this._transactionId++,
        i = dc(n.length),
        s = n.map((a) => {
          var c;
          if (
            (a == null ? void 0 : a[Symbol.toStringTag]) !== "PrismaPromise"
          ) {
            throw new Error(
              "All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.",
            );
          }
          return (c = a.requestTransaction) == null ? void 0 : c.call(a, o, i);
        });
      return Promise.all(s);
    }
    async _transactionWithCallback(n, o) {
      let i = await this._engine.transaction("start", o), s;
      try {
        s = await n(ki(this, i.id)),
          await this._engine.transaction("commit", i);
      } catch (a) {
        throw await this._engine.transaction("rollback", i).catch(() => {}),
          a.clientVersion = this._clientVersion,
          a;
      }
      return s;
    }
    async $transaction(n, o) {
      return this._hasPreviewFlag("interactiveTransactions")
        ? typeof n == "function"
          ? this._transactionWithCallback(n, o)
          : this._transactionWithArray(n)
        : this._transactionWithArray(n);
    }
    async _request(n) {
      this._hasPreviewFlag("tracing") || delete n.otelCtx;
      try {
        let o = {
            args: n.args,
            dataPath: n.dataPath,
            runInTransaction: n.runInTransaction,
            action: n.action,
            model: n.model,
          },
          i = -1,
          s = u((a) => {
            let c = this._middlewares.query.get(++i);
            if (c) return c(a, s);
            let l = { ...n, ...a };
            return this._executeRequest(l);
          }, "consumer");
        return await Pc("request", n.otelCtx, () => s(o));
      } catch (o) {
        throw o.clientVersion = this._clientVersion, o;
      }
    }
    async _executeRequest(
      {
        args: n,
        clientMethod: o,
        jsModelName: i,
        dataPath: s,
        callsite: a,
        runInTransaction: c,
        action: l,
        model: f,
        headers: p,
        transactionId: h,
        otelCtx: y,
        lock: w,
        unpacker: b,
      },
    ) {
      var $, J;
      if (this._dmmf === void 0) {
        let X = await this._getDmmf({ clientMethod: o, callsite: a });
        this._dmmf = new Ze(Xa(X));
      }
      let A, P = Xg[l];
      (l === "executeRaw" || l === "queryRaw" || l === "runCommandRaw") &&
        (A = l);
      let T;
      if (f !== void 0) {
        if (
          T = ($ = this._dmmf) == null ? void 0 : $.mappingsMap[f], T === void 0
        ) {
          throw new Error(`Could not find mapping for model ${f}`);
        }
        A = T[l === "count" ? "aggregate" : l];
      }
      if (P !== "query" && P !== "mutation") {
        throw new Error(`Invalid operation ${P} for action ${l}`);
      }
      let S = (J = this._dmmf) == null ? void 0 : J.rootFieldMap[A];
      if (S === void 0) {
        throw new Error(
          `Could not find rootField ${A} for action ${l} for model ${f} on rootType ${P}`,
        );
      }
      let { isList: M } = S.outputType,
        _ = St(S.outputType.type),
        R = Ci(l, _, n, this._rejectOnNotFound);
      nd(R, i, l);
      let F = to({
        dmmf: this._dmmf,
        rootField: A,
        rootTypeName: P,
        select: n,
      });
      if (
        F.validate(n, !1, o, this._errorFormat, a),
          F = F,
          pt.enabled("prisma:client")
      ) {
        let X = String(F);
        ye("Prisma Client call:"),
          ye(
            `prisma.${o}(${
              Qn({ ast: n, keyPaths: [], valuePaths: [], missingItems: [] })
            })`,
          ),
          ye("Generated request:"),
          ye(
            X + `
`,
          );
      }
      return p = Mc(p, y),
        await w,
        this._fetcher.request({
          document: F,
          clientMethod: o,
          typeName: _,
          dataPath: s,
          rejectOnNotFound: R,
          isList: M,
          rootField: A,
          callsite: a,
          args: n,
          engineHook: this._middlewares.engine.get(0),
          runInTransaction: c,
          headers: p,
          transactionId: h,
          unpacker: b,
        });
    }
    async _getDmmf(n) {
      try {
        return await this._engine.getDmmf();
      } catch (o) {
        this._fetcher.handleRequestError({ ...n, error: o });
      }
    }
    get $metrics() {
      if (!this._hasPreviewFlag("metrics")) {
        throw new Ee(
          "`metrics` preview feature must be enabled in order to access metrics API",
        );
      }
      return this._metrics;
    }
    _hasPreviewFlag(n) {
      var o;
      return !!((o = this._engineConfig.previewFeatures) != null &&
        o.includes(n));
    }
  }
  return u(t, "PrismaClient"), t;
}
u(Nc, "getPrismaClient");
var td = ["$connect", "$disconnect", "$on", "$transaction", "$use"];
function ki(e, t) {
  return typeof e != "object" ? e : new Proxy(e, {
    get: (r, n) => {
      if (!td.includes(n)) {
        return n === ed
          ? t
          : typeof r[n] == "function"
          ? (...o) =>
            n === "then"
              ? r[n](o[0], o[1], t)
              : n === "catch" || n === "finally"
              ? r[n](o[0], t)
              : ki(r[n](...o), t)
          : ki(r[n], t);
      }
    },
  });
}
u(ki, "transactionProxy");
var rd = { findUnique: "findUniqueOrThrow", findFirst: "findFirstOrThrow" };
function nd(e, t, r) {
  if (e) {
    let n = rd[r],
      o = t ? `prisma.${t}.${n}` : `prisma.${n}`,
      i = `rejectOnNotFound.${t != null ? t : ""}.${r}`;
    oi(
      i,
      `\`rejectOnNotFound\` option is deprecated and will be removed in Prisma 5. Please use \`${o}\` method instead`,
    );
  }
}
u(nd, "warnAboutRejectOnNotFound");
d();
m();
g();
d();
m();
g();
var We = Z(ii()), od = $c.decompressFromBase64;
0 &&
  (module.exports = {
    DMMF,
    DMMFClass,
    Decimal,
    Engine,
    MetricsClient,
    PrismaClientInitializationError,
    PrismaClientKnownRequestError,
    PrismaClientRustPanicError,
    PrismaClientUnknownRequestError,
    PrismaClientValidationError,
    Sql,
    decompressFromBase64,
    empty,
    findSync,
    getPrismaClient,
    join,
    makeDocument,
    objectEnumValues,
    raw,
    sqltag,
    transformDocument,
    unpack,
    warnEnvConflicts,
  });
