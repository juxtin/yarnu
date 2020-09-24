/* This file was generated by upbc (the upb compiler) from the input
 * file:
 *
 *     envoy/api/v2/core/config_source.proto
 *
 * Do not edit -- your changes will be discarded when the file is
 * regenerated. */

#include <stddef.h>
#if COCOAPODS==1
  #include  "third_party/upb/upb/msg.h"
#else
  #include  "upb/msg.h"
#endif
#if COCOAPODS==1
  #include  "src/core/ext/upb-generated/envoy/api/v2/core/config_source.upb.h"
#else
  #include  "envoy/api/v2/core/config_source.upb.h"
#endif
#if COCOAPODS==1
  #include  "src/core/ext/upb-generated/envoy/api/v2/core/grpc_service.upb.h"
#else
  #include  "envoy/api/v2/core/grpc_service.upb.h"
#endif
#if COCOAPODS==1
  #include  "src/core/ext/upb-generated/google/protobuf/duration.upb.h"
#else
  #include  "google/protobuf/duration.upb.h"
#endif
#if COCOAPODS==1
  #include  "src/core/ext/upb-generated/google/protobuf/wrappers.upb.h"
#else
  #include  "google/protobuf/wrappers.upb.h"
#endif
#if COCOAPODS==1
  #include  "src/core/ext/upb-generated/envoy/annotations/deprecation.upb.h"
#else
  #include  "envoy/annotations/deprecation.upb.h"
#endif
#if COCOAPODS==1
  #include  "src/core/ext/upb-generated/udpa/annotations/migrate.upb.h"
#else
  #include  "udpa/annotations/migrate.upb.h"
#endif
#if COCOAPODS==1
  #include  "src/core/ext/upb-generated/validate/validate.upb.h"
#else
  #include  "validate/validate.upb.h"
#endif

#if COCOAPODS==1
  #include  "third_party/upb/upb/port_def.inc"
#else
  #include  "upb/port_def.inc"
#endif

static const upb_msglayout *const envoy_api_v2_core_ApiConfigSource_submsgs[4] = {
  &envoy_api_v2_core_GrpcService_msginit,
  &envoy_api_v2_core_RateLimitSettings_msginit,
  &google_protobuf_Duration_msginit,
};

static const upb_msglayout_field envoy_api_v2_core_ApiConfigSource__fields[8] = {
  {1, UPB_SIZE(0, 0), 0, 0, 14, 1},
  {2, UPB_SIZE(32, 48), 0, 0, 9, 3},
  {3, UPB_SIZE(20, 24), 0, 2, 11, 1},
  {4, UPB_SIZE(36, 56), 0, 0, 11, 3},
  {5, UPB_SIZE(24, 32), 0, 2, 11, 1},
  {6, UPB_SIZE(28, 40), 0, 1, 11, 1},
  {7, UPB_SIZE(16, 16), 0, 0, 8, 1},
  {8, UPB_SIZE(8, 8), 0, 0, 14, 1},
};

const upb_msglayout envoy_api_v2_core_ApiConfigSource_msginit = {
  &envoy_api_v2_core_ApiConfigSource_submsgs[0],
  &envoy_api_v2_core_ApiConfigSource__fields[0],
  UPB_SIZE(40, 64), 8, false,
};

const upb_msglayout envoy_api_v2_core_AggregatedConfigSource_msginit = {
  NULL,
  NULL,
  UPB_SIZE(0, 0), 0, false,
};

const upb_msglayout envoy_api_v2_core_SelfConfigSource_msginit = {
  NULL,
  NULL,
  UPB_SIZE(0, 0), 0, false,
};

static const upb_msglayout *const envoy_api_v2_core_RateLimitSettings_submsgs[2] = {
  &google_protobuf_DoubleValue_msginit,
  &google_protobuf_UInt32Value_msginit,
};

static const upb_msglayout_field envoy_api_v2_core_RateLimitSettings__fields[2] = {
  {1, UPB_SIZE(0, 0), 0, 1, 11, 1},
  {2, UPB_SIZE(4, 8), 0, 0, 11, 1},
};

const upb_msglayout envoy_api_v2_core_RateLimitSettings_msginit = {
  &envoy_api_v2_core_RateLimitSettings_submsgs[0],
  &envoy_api_v2_core_RateLimitSettings__fields[0],
  UPB_SIZE(8, 16), 2, false,
};

static const upb_msglayout *const envoy_api_v2_core_ConfigSource_submsgs[4] = {
  &envoy_api_v2_core_AggregatedConfigSource_msginit,
  &envoy_api_v2_core_ApiConfigSource_msginit,
  &envoy_api_v2_core_SelfConfigSource_msginit,
  &google_protobuf_Duration_msginit,
};

static const upb_msglayout_field envoy_api_v2_core_ConfigSource__fields[6] = {
  {1, UPB_SIZE(12, 16), UPB_SIZE(-21, -33), 0, 9, 1},
  {2, UPB_SIZE(12, 16), UPB_SIZE(-21, -33), 1, 11, 1},
  {3, UPB_SIZE(12, 16), UPB_SIZE(-21, -33), 0, 11, 1},
  {4, UPB_SIZE(8, 8), 0, 3, 11, 1},
  {5, UPB_SIZE(12, 16), UPB_SIZE(-21, -33), 2, 11, 1},
  {6, UPB_SIZE(0, 0), 0, 0, 14, 1},
};

const upb_msglayout envoy_api_v2_core_ConfigSource_msginit = {
  &envoy_api_v2_core_ConfigSource_submsgs[0],
  &envoy_api_v2_core_ConfigSource__fields[0],
  UPB_SIZE(24, 48), 6, false,
};

#if COCOAPODS==1
  #include  "third_party/upb/upb/port_undef.inc"
#else
  #include  "upb/port_undef.inc"
#endif

