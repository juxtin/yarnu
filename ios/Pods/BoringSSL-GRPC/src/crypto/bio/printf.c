/* Copyright (C) 1995-1998 Eric Young (eay@cryptsoft.com)
 * All rights reserved.
 *
 * This package is an SSL implementation written
 * by Eric Young (eay@cryptsoft.com).
 * The implementation was written so as to conform with Netscapes SSL.
 *
 * This library is free for commercial and non-commercial use as long as
 * the following conditions are aheared to.  The following conditions
 * apply to all code found in this distribution, be it the RC4, RSA,
 * lhash, DES, etc., code; not just the SSL code.  The SSL documentation
 * included with this distribution is covered by the same copyright terms
 * except that the holder is Tim Hudson (tjh@cryptsoft.com).
 *
 * Copyright remains Eric Young's, and as such any Copyright notices in
 * the code are not to be removed.
 * If this package is used in a product, Eric Young should be given attribution
 * as the author of the parts of the library used.
 * This can be in the form of a textual message at program startup or
 * in documentation (online or textual) provided with the package.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. All advertising materials mentioning features or use of this software
 *    must display the following acknowledgement:
 *    "This product includes cryptographic software written by
 *     Eric Young (eay@cryptsoft.com)"
 *    The word 'cryptographic' can be left out if the rouines from the library
 *    being used are not cryptographic related :-).
 * 4. If you include any Windows specific code (or a derivative thereof) from
 *    the apps directory (application code) you must include an acknowledgement:
 *    "This product includes software written by Tim Hudson (tjh@cryptsoft.com)"
 *
 * THIS SOFTWARE IS PROVIDED BY ERIC YOUNG ``AS IS'' AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED.  IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
 * OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
 * LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
 * OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 *
 * The licence and distribution terms for any publically available version or
 * derivative of this code cannot be changed.  i.e. this code cannot simply be
 * copied and put under another distribution licence
 * [including the GNU Public Licence.] */

#include <openssl_grpc/bio.h>

#include <assert.h>
#include <stdarg.h>
#include <stdio.h>

#include <openssl_grpc/err.h>
#include <openssl_grpc/mem.h>

int BIO_printf(BIO *bio, const char *format, ...) {
  va_list args;
  char buf[256], *out, out_malloced = 0;
  int out_len, ret;

  va_start(args, format);
  out_len = vsnprintf(buf, sizeof(buf), format, args);
  va_end(args);

#if defined(OPENSSL_WINDOWS)
  // On Windows, vsnprintf returns -1 rather than the requested length on
  // truncation
  if (out_len < 0) {
    va_start(args, format);
    out_len = _vscprintf(format, args);
    va_end(args);
    assert(out_len >= (int)sizeof(buf));
  }
#endif

  if (out_len < 0) {
    return -1;
  }

  if ((size_t) out_len >= sizeof(buf)) {
    const int requested_len = out_len;
    // The output was truncated. Note that vsnprintf's return value
    // does not include a trailing NUL, but the buffer must be sized
    // for it.
    out = OPENSSL_malloc(requested_len + 1);
    out_malloced = 1;
    if (out == NULL) {
      OPENSSL_PUT_ERROR(BIO, ERR_R_MALLOC_FAILURE);
      return -1;
    }
    va_start(args, format);
    out_len = vsnprintf(out, requested_len + 1, format, args);
    va_end(args);
    assert(out_len == requested_len);
  } else {
    out = buf;
  }

  ret = BIO_write(bio, out, out_len);
  if (out_malloced) {
    OPENSSL_free(out);
  }

  return ret;
}
