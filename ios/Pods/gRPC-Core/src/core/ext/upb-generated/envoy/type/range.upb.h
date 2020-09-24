/* This file was generated by upbc (the upb compiler) from the input
 * file:
 *
 *     envoy/type/range.proto
 *
 * Do not edit -- your changes will be discarded when the file is
 * regenerated. */

#ifndef ENVOY_TYPE_RANGE_PROTO_UPB_H_
#define ENVOY_TYPE_RANGE_PROTO_UPB_H_

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

struct envoy_type_Int64Range;
struct envoy_type_Int32Range;
struct envoy_type_DoubleRange;
typedef struct envoy_type_Int64Range envoy_type_Int64Range;
typedef struct envoy_type_Int32Range envoy_type_Int32Range;
typedef struct envoy_type_DoubleRange envoy_type_DoubleRange;
extern const upb_msglayout envoy_type_Int64Range_msginit;
extern const upb_msglayout envoy_type_Int32Range_msginit;
extern const upb_msglayout envoy_type_DoubleRange_msginit;


/* envoy.type.Int64Range */

UPB_INLINE envoy_type_Int64Range *envoy_type_Int64Range_new(upb_arena *arena) {
  return (envoy_type_Int64Range *)upb_msg_new(&envoy_type_Int64Range_msginit, arena);
}
UPB_INLINE envoy_type_Int64Range *envoy_type_Int64Range_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_type_Int64Range *ret = envoy_type_Int64Range_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_type_Int64Range_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_type_Int64Range_serialize(const envoy_type_Int64Range *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_type_Int64Range_msginit, arena, len);
}

UPB_INLINE int64_t envoy_type_Int64Range_start(const envoy_type_Int64Range *msg) { return UPB_FIELD_AT(msg, int64_t, UPB_SIZE(0, 0)); }
UPB_INLINE int64_t envoy_type_Int64Range_end(const envoy_type_Int64Range *msg) { return UPB_FIELD_AT(msg, int64_t, UPB_SIZE(8, 8)); }

UPB_INLINE void envoy_type_Int64Range_set_start(envoy_type_Int64Range *msg, int64_t value) {
  UPB_FIELD_AT(msg, int64_t, UPB_SIZE(0, 0)) = value;
}
UPB_INLINE void envoy_type_Int64Range_set_end(envoy_type_Int64Range *msg, int64_t value) {
  UPB_FIELD_AT(msg, int64_t, UPB_SIZE(8, 8)) = value;
}

/* envoy.type.Int32Range */

UPB_INLINE envoy_type_Int32Range *envoy_type_Int32Range_new(upb_arena *arena) {
  return (envoy_type_Int32Range *)upb_msg_new(&envoy_type_Int32Range_msginit, arena);
}
UPB_INLINE envoy_type_Int32Range *envoy_type_Int32Range_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_type_Int32Range *ret = envoy_type_Int32Range_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_type_Int32Range_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_type_Int32Range_serialize(const envoy_type_Int32Range *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_type_Int32Range_msginit, arena, len);
}

UPB_INLINE int32_t envoy_type_Int32Range_start(const envoy_type_Int32Range *msg) { return UPB_FIELD_AT(msg, int32_t, UPB_SIZE(0, 0)); }
UPB_INLINE int32_t envoy_type_Int32Range_end(const envoy_type_Int32Range *msg) { return UPB_FIELD_AT(msg, int32_t, UPB_SIZE(4, 4)); }

UPB_INLINE void envoy_type_Int32Range_set_start(envoy_type_Int32Range *msg, int32_t value) {
  UPB_FIELD_AT(msg, int32_t, UPB_SIZE(0, 0)) = value;
}
UPB_INLINE void envoy_type_Int32Range_set_end(envoy_type_Int32Range *msg, int32_t value) {
  UPB_FIELD_AT(msg, int32_t, UPB_SIZE(4, 4)) = value;
}

/* envoy.type.DoubleRange */

UPB_INLINE envoy_type_DoubleRange *envoy_type_DoubleRange_new(upb_arena *arena) {
  return (envoy_type_DoubleRange *)upb_msg_new(&envoy_type_DoubleRange_msginit, arena);
}
UPB_INLINE envoy_type_DoubleRange *envoy_type_DoubleRange_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_type_DoubleRange *ret = envoy_type_DoubleRange_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_type_DoubleRange_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_type_DoubleRange_serialize(const envoy_type_DoubleRange *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_type_DoubleRange_msginit, arena, len);
}

UPB_INLINE double envoy_type_DoubleRange_start(const envoy_type_DoubleRange *msg) { return UPB_FIELD_AT(msg, double, UPB_SIZE(0, 0)); }
UPB_INLINE double envoy_type_DoubleRange_end(const envoy_type_DoubleRange *msg) { return UPB_FIELD_AT(msg, double, UPB_SIZE(8, 8)); }

UPB_INLINE void envoy_type_DoubleRange_set_start(envoy_type_DoubleRange *msg, double value) {
  UPB_FIELD_AT(msg, double, UPB_SIZE(0, 0)) = value;
}
UPB_INLINE void envoy_type_DoubleRange_set_end(envoy_type_DoubleRange *msg, double value) {
  UPB_FIELD_AT(msg, double, UPB_SIZE(8, 8)) = value;
}

#ifdef __cplusplus
}  /* extern "C" */
#endif

#if COCOAPODS==1
  #include  "third_party/upb/upb/port_undef.inc"
#else
  #include  "upb/port_undef.inc"
#endif

#endif  /* ENVOY_TYPE_RANGE_PROTO_UPB_H_ */
