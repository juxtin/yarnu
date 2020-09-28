/* This file was generated by upbc (the upb compiler) from the input
 * file:
 *
 *     envoy/api/v2/eds.proto
 *
 * Do not edit -- your changes will be discarded when the file is
 * regenerated. */

#ifndef ENVOY_API_V2_EDS_PROTO_UPB_H_
#define ENVOY_API_V2_EDS_PROTO_UPB_H_

#if COCOAPODS==1
  #include  "third_party/upb/upb/generated_util.h"
#else
  #include  "upb/generated_util.h"
#endif
#if COCOAPODS==1
  #include  "third_party/upb/upb/msg.h"
#else
  #include  "upb/msg.h"
#endif
#if COCOAPODS==1
  #include  "third_party/upb/upb/decode.h"
#else
  #include  "upb/decode.h"
#endif
#if COCOAPODS==1
  #include  "third_party/upb/upb/encode.h"
#else
  #include  "upb/encode.h"
#endif

/* Public Imports. */
#if COCOAPODS==1
  #include  "src/core/ext/upb-generated/envoy/api/v2/endpoint.upb.h"
#else
  #include  "envoy/api/v2/endpoint.upb.h"
#endif

#if COCOAPODS==1
  #include  "third_party/upb/upb/port_def.inc"
#else
  #include  "upb/port_def.inc"
#endif

#ifdef __cplusplus
extern "C" {
#endif

struct envoy_api_v2_EdsDummy;
typedef struct envoy_api_v2_EdsDummy envoy_api_v2_EdsDummy;
extern const upb_msglayout envoy_api_v2_EdsDummy_msginit;


/* envoy.api.v2.EdsDummy */

UPB_INLINE envoy_api_v2_EdsDummy *envoy_api_v2_EdsDummy_new(upb_arena *arena) {
  return (envoy_api_v2_EdsDummy *)upb_msg_new(&envoy_api_v2_EdsDummy_msginit, arena);
}
UPB_INLINE envoy_api_v2_EdsDummy *envoy_api_v2_EdsDummy_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_api_v2_EdsDummy *ret = envoy_api_v2_EdsDummy_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_api_v2_EdsDummy_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_api_v2_EdsDummy_serialize(const envoy_api_v2_EdsDummy *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_api_v2_EdsDummy_msginit, arena, len);
}



#ifdef __cplusplus
}  /* extern "C" */
#endif

#if COCOAPODS==1
  #include  "third_party/upb/upb/port_undef.inc"
#else
  #include  "upb/port_undef.inc"
#endif

#endif  /* ENVOY_API_V2_EDS_PROTO_UPB_H_ */
