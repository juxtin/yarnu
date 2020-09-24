/* This file was generated by upbc (the upb compiler) from the input
 * file:
 *
 *     google/protobuf/timestamp.proto
 *
 * Do not edit -- your changes will be discarded when the file is
 * regenerated. */

#ifndef GOOGLE_PROTOBUF_TIMESTAMP_PROTO_UPB_H_
#define GOOGLE_PROTOBUF_TIMESTAMP_PROTO_UPB_H_

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

#if COCOAPODS==1
  #include  "third_party/upb/upb/port_def.inc"
#else
  #include  "upb/port_def.inc"
#endif

#ifdef __cplusplus
extern "C" {
#endif

struct google_protobuf_Timestamp;
typedef struct google_protobuf_Timestamp google_protobuf_Timestamp;
extern const upb_msglayout google_protobuf_Timestamp_msginit;


/* google.protobuf.Timestamp */

UPB_INLINE google_protobuf_Timestamp *google_protobuf_Timestamp_new(upb_arena *arena) {
  return (google_protobuf_Timestamp *)upb_msg_new(&google_protobuf_Timestamp_msginit, arena);
}
UPB_INLINE google_protobuf_Timestamp *google_protobuf_Timestamp_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  google_protobuf_Timestamp *ret = google_protobuf_Timestamp_new(arena);
  return (ret && upb_decode(buf, size, ret, &google_protobuf_Timestamp_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *google_protobuf_Timestamp_serialize(const google_protobuf_Timestamp *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &google_protobuf_Timestamp_msginit, arena, len);
}

UPB_INLINE int64_t google_protobuf_Timestamp_seconds(const google_protobuf_Timestamp *msg) { return UPB_FIELD_AT(msg, int64_t, UPB_SIZE(0, 0)); }
UPB_INLINE int32_t google_protobuf_Timestamp_nanos(const google_protobuf_Timestamp *msg) { return UPB_FIELD_AT(msg, int32_t, UPB_SIZE(8, 8)); }

UPB_INLINE void google_protobuf_Timestamp_set_seconds(google_protobuf_Timestamp *msg, int64_t value) {
  UPB_FIELD_AT(msg, int64_t, UPB_SIZE(0, 0)) = value;
}
UPB_INLINE void google_protobuf_Timestamp_set_nanos(google_protobuf_Timestamp *msg, int32_t value) {
  UPB_FIELD_AT(msg, int32_t, UPB_SIZE(8, 8)) = value;
}

#ifdef __cplusplus
}  /* extern "C" */
#endif

#if COCOAPODS==1
  #include  "third_party/upb/upb/port_undef.inc"
#else
  #include  "upb/port_undef.inc"
#endif

#endif  /* GOOGLE_PROTOBUF_TIMESTAMP_PROTO_UPB_H_ */
