/* This file was generated by upbc (the upb compiler) from the input
 * file:
 *
 *     envoy/api/v2/core/address.proto
 *
 * Do not edit -- your changes will be discarded when the file is
 * regenerated. */

#ifndef ENVOY_API_V2_CORE_ADDRESS_PROTO_UPB_H_
#define ENVOY_API_V2_CORE_ADDRESS_PROTO_UPB_H_

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

struct envoy_api_v2_core_Pipe;
struct envoy_api_v2_core_SocketAddress;
struct envoy_api_v2_core_TcpKeepalive;
struct envoy_api_v2_core_BindConfig;
struct envoy_api_v2_core_Address;
struct envoy_api_v2_core_CidrRange;
typedef struct envoy_api_v2_core_Pipe envoy_api_v2_core_Pipe;
typedef struct envoy_api_v2_core_SocketAddress envoy_api_v2_core_SocketAddress;
typedef struct envoy_api_v2_core_TcpKeepalive envoy_api_v2_core_TcpKeepalive;
typedef struct envoy_api_v2_core_BindConfig envoy_api_v2_core_BindConfig;
typedef struct envoy_api_v2_core_Address envoy_api_v2_core_Address;
typedef struct envoy_api_v2_core_CidrRange envoy_api_v2_core_CidrRange;
extern const upb_msglayout envoy_api_v2_core_Pipe_msginit;
extern const upb_msglayout envoy_api_v2_core_SocketAddress_msginit;
extern const upb_msglayout envoy_api_v2_core_TcpKeepalive_msginit;
extern const upb_msglayout envoy_api_v2_core_BindConfig_msginit;
extern const upb_msglayout envoy_api_v2_core_Address_msginit;
extern const upb_msglayout envoy_api_v2_core_CidrRange_msginit;
struct envoy_api_v2_core_SocketOption;
struct google_protobuf_BoolValue;
struct google_protobuf_UInt32Value;
extern const upb_msglayout envoy_api_v2_core_SocketOption_msginit;
extern const upb_msglayout google_protobuf_BoolValue_msginit;
extern const upb_msglayout google_protobuf_UInt32Value_msginit;

typedef enum {
  envoy_api_v2_core_SocketAddress_TCP = 0,
  envoy_api_v2_core_SocketAddress_UDP = 1
} envoy_api_v2_core_SocketAddress_Protocol;


/* envoy.api.v2.core.Pipe */

UPB_INLINE envoy_api_v2_core_Pipe *envoy_api_v2_core_Pipe_new(upb_arena *arena) {
  return (envoy_api_v2_core_Pipe *)upb_msg_new(&envoy_api_v2_core_Pipe_msginit, arena);
}
UPB_INLINE envoy_api_v2_core_Pipe *envoy_api_v2_core_Pipe_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_api_v2_core_Pipe *ret = envoy_api_v2_core_Pipe_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_api_v2_core_Pipe_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_api_v2_core_Pipe_serialize(const envoy_api_v2_core_Pipe *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_api_v2_core_Pipe_msginit, arena, len);
}

UPB_INLINE upb_strview envoy_api_v2_core_Pipe_path(const envoy_api_v2_core_Pipe *msg) { return UPB_FIELD_AT(msg, upb_strview, UPB_SIZE(4, 8)); }
UPB_INLINE uint32_t envoy_api_v2_core_Pipe_mode(const envoy_api_v2_core_Pipe *msg) { return UPB_FIELD_AT(msg, uint32_t, UPB_SIZE(0, 0)); }

UPB_INLINE void envoy_api_v2_core_Pipe_set_path(envoy_api_v2_core_Pipe *msg, upb_strview value) {
  UPB_FIELD_AT(msg, upb_strview, UPB_SIZE(4, 8)) = value;
}
UPB_INLINE void envoy_api_v2_core_Pipe_set_mode(envoy_api_v2_core_Pipe *msg, uint32_t value) {
  UPB_FIELD_AT(msg, uint32_t, UPB_SIZE(0, 0)) = value;
}

/* envoy.api.v2.core.SocketAddress */

UPB_INLINE envoy_api_v2_core_SocketAddress *envoy_api_v2_core_SocketAddress_new(upb_arena *arena) {
  return (envoy_api_v2_core_SocketAddress *)upb_msg_new(&envoy_api_v2_core_SocketAddress_msginit, arena);
}
UPB_INLINE envoy_api_v2_core_SocketAddress *envoy_api_v2_core_SocketAddress_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_api_v2_core_SocketAddress *ret = envoy_api_v2_core_SocketAddress_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_api_v2_core_SocketAddress_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_api_v2_core_SocketAddress_serialize(const envoy_api_v2_core_SocketAddress *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_api_v2_core_SocketAddress_msginit, arena, len);
}

typedef enum {
  envoy_api_v2_core_SocketAddress_port_specifier_port_value = 3,
  envoy_api_v2_core_SocketAddress_port_specifier_named_port = 4,
  envoy_api_v2_core_SocketAddress_port_specifier_NOT_SET = 0
} envoy_api_v2_core_SocketAddress_port_specifier_oneofcases;
UPB_INLINE envoy_api_v2_core_SocketAddress_port_specifier_oneofcases envoy_api_v2_core_SocketAddress_port_specifier_case(const envoy_api_v2_core_SocketAddress* msg) { return (envoy_api_v2_core_SocketAddress_port_specifier_oneofcases)UPB_FIELD_AT(msg, int32_t, UPB_SIZE(36, 64)); }

UPB_INLINE int32_t envoy_api_v2_core_SocketAddress_protocol(const envoy_api_v2_core_SocketAddress *msg) { return UPB_FIELD_AT(msg, int32_t, UPB_SIZE(0, 0)); }
UPB_INLINE upb_strview envoy_api_v2_core_SocketAddress_address(const envoy_api_v2_core_SocketAddress *msg) { return UPB_FIELD_AT(msg, upb_strview, UPB_SIZE(12, 16)); }
UPB_INLINE bool envoy_api_v2_core_SocketAddress_has_port_value(const envoy_api_v2_core_SocketAddress *msg) { return _upb_has_oneof_field(msg, UPB_SIZE(36, 64), 3); }
UPB_INLINE uint32_t envoy_api_v2_core_SocketAddress_port_value(const envoy_api_v2_core_SocketAddress *msg) { return UPB_READ_ONEOF(msg, uint32_t, UPB_SIZE(28, 48), UPB_SIZE(36, 64), 3, 0); }
UPB_INLINE bool envoy_api_v2_core_SocketAddress_has_named_port(const envoy_api_v2_core_SocketAddress *msg) { return _upb_has_oneof_field(msg, UPB_SIZE(36, 64), 4); }
UPB_INLINE upb_strview envoy_api_v2_core_SocketAddress_named_port(const envoy_api_v2_core_SocketAddress *msg) { return UPB_READ_ONEOF(msg, upb_strview, UPB_SIZE(28, 48), UPB_SIZE(36, 64), 4, upb_strview_make("", strlen(""))); }
UPB_INLINE upb_strview envoy_api_v2_core_SocketAddress_resolver_name(const envoy_api_v2_core_SocketAddress *msg) { return UPB_FIELD_AT(msg, upb_strview, UPB_SIZE(20, 32)); }
UPB_INLINE bool envoy_api_v2_core_SocketAddress_ipv4_compat(const envoy_api_v2_core_SocketAddress *msg) { return UPB_FIELD_AT(msg, bool, UPB_SIZE(8, 8)); }

UPB_INLINE void envoy_api_v2_core_SocketAddress_set_protocol(envoy_api_v2_core_SocketAddress *msg, int32_t value) {
  UPB_FIELD_AT(msg, int32_t, UPB_SIZE(0, 0)) = value;
}
UPB_INLINE void envoy_api_v2_core_SocketAddress_set_address(envoy_api_v2_core_SocketAddress *msg, upb_strview value) {
  UPB_FIELD_AT(msg, upb_strview, UPB_SIZE(12, 16)) = value;
}
UPB_INLINE void envoy_api_v2_core_SocketAddress_set_port_value(envoy_api_v2_core_SocketAddress *msg, uint32_t value) {
  UPB_WRITE_ONEOF(msg, uint32_t, UPB_SIZE(28, 48), value, UPB_SIZE(36, 64), 3);
}
UPB_INLINE void envoy_api_v2_core_SocketAddress_set_named_port(envoy_api_v2_core_SocketAddress *msg, upb_strview value) {
  UPB_WRITE_ONEOF(msg, upb_strview, UPB_SIZE(28, 48), value, UPB_SIZE(36, 64), 4);
}
UPB_INLINE void envoy_api_v2_core_SocketAddress_set_resolver_name(envoy_api_v2_core_SocketAddress *msg, upb_strview value) {
  UPB_FIELD_AT(msg, upb_strview, UPB_SIZE(20, 32)) = value;
}
UPB_INLINE void envoy_api_v2_core_SocketAddress_set_ipv4_compat(envoy_api_v2_core_SocketAddress *msg, bool value) {
  UPB_FIELD_AT(msg, bool, UPB_SIZE(8, 8)) = value;
}

/* envoy.api.v2.core.TcpKeepalive */

UPB_INLINE envoy_api_v2_core_TcpKeepalive *envoy_api_v2_core_TcpKeepalive_new(upb_arena *arena) {
  return (envoy_api_v2_core_TcpKeepalive *)upb_msg_new(&envoy_api_v2_core_TcpKeepalive_msginit, arena);
}
UPB_INLINE envoy_api_v2_core_TcpKeepalive *envoy_api_v2_core_TcpKeepalive_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_api_v2_core_TcpKeepalive *ret = envoy_api_v2_core_TcpKeepalive_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_api_v2_core_TcpKeepalive_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_api_v2_core_TcpKeepalive_serialize(const envoy_api_v2_core_TcpKeepalive *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_api_v2_core_TcpKeepalive_msginit, arena, len);
}

UPB_INLINE const struct google_protobuf_UInt32Value* envoy_api_v2_core_TcpKeepalive_keepalive_probes(const envoy_api_v2_core_TcpKeepalive *msg) { return UPB_FIELD_AT(msg, const struct google_protobuf_UInt32Value*, UPB_SIZE(0, 0)); }
UPB_INLINE const struct google_protobuf_UInt32Value* envoy_api_v2_core_TcpKeepalive_keepalive_time(const envoy_api_v2_core_TcpKeepalive *msg) { return UPB_FIELD_AT(msg, const struct google_protobuf_UInt32Value*, UPB_SIZE(4, 8)); }
UPB_INLINE const struct google_protobuf_UInt32Value* envoy_api_v2_core_TcpKeepalive_keepalive_interval(const envoy_api_v2_core_TcpKeepalive *msg) { return UPB_FIELD_AT(msg, const struct google_protobuf_UInt32Value*, UPB_SIZE(8, 16)); }

UPB_INLINE void envoy_api_v2_core_TcpKeepalive_set_keepalive_probes(envoy_api_v2_core_TcpKeepalive *msg, struct google_protobuf_UInt32Value* value) {
  UPB_FIELD_AT(msg, struct google_protobuf_UInt32Value*, UPB_SIZE(0, 0)) = value;
}
UPB_INLINE struct google_protobuf_UInt32Value* envoy_api_v2_core_TcpKeepalive_mutable_keepalive_probes(envoy_api_v2_core_TcpKeepalive *msg, upb_arena *arena) {
  struct google_protobuf_UInt32Value* sub = (struct google_protobuf_UInt32Value*)envoy_api_v2_core_TcpKeepalive_keepalive_probes(msg);
  if (sub == NULL) {
    sub = (struct google_protobuf_UInt32Value*)upb_msg_new(&google_protobuf_UInt32Value_msginit, arena);
    if (!sub) return NULL;
    envoy_api_v2_core_TcpKeepalive_set_keepalive_probes(msg, sub);
  }
  return sub;
}
UPB_INLINE void envoy_api_v2_core_TcpKeepalive_set_keepalive_time(envoy_api_v2_core_TcpKeepalive *msg, struct google_protobuf_UInt32Value* value) {
  UPB_FIELD_AT(msg, struct google_protobuf_UInt32Value*, UPB_SIZE(4, 8)) = value;
}
UPB_INLINE struct google_protobuf_UInt32Value* envoy_api_v2_core_TcpKeepalive_mutable_keepalive_time(envoy_api_v2_core_TcpKeepalive *msg, upb_arena *arena) {
  struct google_protobuf_UInt32Value* sub = (struct google_protobuf_UInt32Value*)envoy_api_v2_core_TcpKeepalive_keepalive_time(msg);
  if (sub == NULL) {
    sub = (struct google_protobuf_UInt32Value*)upb_msg_new(&google_protobuf_UInt32Value_msginit, arena);
    if (!sub) return NULL;
    envoy_api_v2_core_TcpKeepalive_set_keepalive_time(msg, sub);
  }
  return sub;
}
UPB_INLINE void envoy_api_v2_core_TcpKeepalive_set_keepalive_interval(envoy_api_v2_core_TcpKeepalive *msg, struct google_protobuf_UInt32Value* value) {
  UPB_FIELD_AT(msg, struct google_protobuf_UInt32Value*, UPB_SIZE(8, 16)) = value;
}
UPB_INLINE struct google_protobuf_UInt32Value* envoy_api_v2_core_TcpKeepalive_mutable_keepalive_interval(envoy_api_v2_core_TcpKeepalive *msg, upb_arena *arena) {
  struct google_protobuf_UInt32Value* sub = (struct google_protobuf_UInt32Value*)envoy_api_v2_core_TcpKeepalive_keepalive_interval(msg);
  if (sub == NULL) {
    sub = (struct google_protobuf_UInt32Value*)upb_msg_new(&google_protobuf_UInt32Value_msginit, arena);
    if (!sub) return NULL;
    envoy_api_v2_core_TcpKeepalive_set_keepalive_interval(msg, sub);
  }
  return sub;
}

/* envoy.api.v2.core.BindConfig */

UPB_INLINE envoy_api_v2_core_BindConfig *envoy_api_v2_core_BindConfig_new(upb_arena *arena) {
  return (envoy_api_v2_core_BindConfig *)upb_msg_new(&envoy_api_v2_core_BindConfig_msginit, arena);
}
UPB_INLINE envoy_api_v2_core_BindConfig *envoy_api_v2_core_BindConfig_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_api_v2_core_BindConfig *ret = envoy_api_v2_core_BindConfig_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_api_v2_core_BindConfig_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_api_v2_core_BindConfig_serialize(const envoy_api_v2_core_BindConfig *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_api_v2_core_BindConfig_msginit, arena, len);
}

UPB_INLINE const envoy_api_v2_core_SocketAddress* envoy_api_v2_core_BindConfig_source_address(const envoy_api_v2_core_BindConfig *msg) { return UPB_FIELD_AT(msg, const envoy_api_v2_core_SocketAddress*, UPB_SIZE(0, 0)); }
UPB_INLINE const struct google_protobuf_BoolValue* envoy_api_v2_core_BindConfig_freebind(const envoy_api_v2_core_BindConfig *msg) { return UPB_FIELD_AT(msg, const struct google_protobuf_BoolValue*, UPB_SIZE(4, 8)); }
UPB_INLINE const struct envoy_api_v2_core_SocketOption* const* envoy_api_v2_core_BindConfig_socket_options(const envoy_api_v2_core_BindConfig *msg, size_t *len) { return (const struct envoy_api_v2_core_SocketOption* const*)_upb_array_accessor(msg, UPB_SIZE(8, 16), len); }

UPB_INLINE void envoy_api_v2_core_BindConfig_set_source_address(envoy_api_v2_core_BindConfig *msg, envoy_api_v2_core_SocketAddress* value) {
  UPB_FIELD_AT(msg, envoy_api_v2_core_SocketAddress*, UPB_SIZE(0, 0)) = value;
}
UPB_INLINE struct envoy_api_v2_core_SocketAddress* envoy_api_v2_core_BindConfig_mutable_source_address(envoy_api_v2_core_BindConfig *msg, upb_arena *arena) {
  struct envoy_api_v2_core_SocketAddress* sub = (struct envoy_api_v2_core_SocketAddress*)envoy_api_v2_core_BindConfig_source_address(msg);
  if (sub == NULL) {
    sub = (struct envoy_api_v2_core_SocketAddress*)upb_msg_new(&envoy_api_v2_core_SocketAddress_msginit, arena);
    if (!sub) return NULL;
    envoy_api_v2_core_BindConfig_set_source_address(msg, sub);
  }
  return sub;
}
UPB_INLINE void envoy_api_v2_core_BindConfig_set_freebind(envoy_api_v2_core_BindConfig *msg, struct google_protobuf_BoolValue* value) {
  UPB_FIELD_AT(msg, struct google_protobuf_BoolValue*, UPB_SIZE(4, 8)) = value;
}
UPB_INLINE struct google_protobuf_BoolValue* envoy_api_v2_core_BindConfig_mutable_freebind(envoy_api_v2_core_BindConfig *msg, upb_arena *arena) {
  struct google_protobuf_BoolValue* sub = (struct google_protobuf_BoolValue*)envoy_api_v2_core_BindConfig_freebind(msg);
  if (sub == NULL) {
    sub = (struct google_protobuf_BoolValue*)upb_msg_new(&google_protobuf_BoolValue_msginit, arena);
    if (!sub) return NULL;
    envoy_api_v2_core_BindConfig_set_freebind(msg, sub);
  }
  return sub;
}
UPB_INLINE struct envoy_api_v2_core_SocketOption** envoy_api_v2_core_BindConfig_mutable_socket_options(envoy_api_v2_core_BindConfig *msg, size_t *len) {
  return (struct envoy_api_v2_core_SocketOption**)_upb_array_mutable_accessor(msg, UPB_SIZE(8, 16), len);
}
UPB_INLINE struct envoy_api_v2_core_SocketOption** envoy_api_v2_core_BindConfig_resize_socket_options(envoy_api_v2_core_BindConfig *msg, size_t len, upb_arena *arena) {
  return (struct envoy_api_v2_core_SocketOption**)_upb_array_resize_accessor(msg, UPB_SIZE(8, 16), len, UPB_SIZE(4, 8), UPB_TYPE_MESSAGE, arena);
}
UPB_INLINE struct envoy_api_v2_core_SocketOption* envoy_api_v2_core_BindConfig_add_socket_options(envoy_api_v2_core_BindConfig *msg, upb_arena *arena) {
  struct envoy_api_v2_core_SocketOption* sub = (struct envoy_api_v2_core_SocketOption*)upb_msg_new(&envoy_api_v2_core_SocketOption_msginit, arena);
  bool ok = _upb_array_append_accessor(
      msg, UPB_SIZE(8, 16), UPB_SIZE(4, 8), UPB_TYPE_MESSAGE, &sub, arena);
  if (!ok) return NULL;
  return sub;
}

/* envoy.api.v2.core.Address */

UPB_INLINE envoy_api_v2_core_Address *envoy_api_v2_core_Address_new(upb_arena *arena) {
  return (envoy_api_v2_core_Address *)upb_msg_new(&envoy_api_v2_core_Address_msginit, arena);
}
UPB_INLINE envoy_api_v2_core_Address *envoy_api_v2_core_Address_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_api_v2_core_Address *ret = envoy_api_v2_core_Address_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_api_v2_core_Address_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_api_v2_core_Address_serialize(const envoy_api_v2_core_Address *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_api_v2_core_Address_msginit, arena, len);
}

typedef enum {
  envoy_api_v2_core_Address_address_socket_address = 1,
  envoy_api_v2_core_Address_address_pipe = 2,
  envoy_api_v2_core_Address_address_NOT_SET = 0
} envoy_api_v2_core_Address_address_oneofcases;
UPB_INLINE envoy_api_v2_core_Address_address_oneofcases envoy_api_v2_core_Address_address_case(const envoy_api_v2_core_Address* msg) { return (envoy_api_v2_core_Address_address_oneofcases)UPB_FIELD_AT(msg, int32_t, UPB_SIZE(4, 8)); }

UPB_INLINE bool envoy_api_v2_core_Address_has_socket_address(const envoy_api_v2_core_Address *msg) { return _upb_has_oneof_field(msg, UPB_SIZE(4, 8), 1); }
UPB_INLINE const envoy_api_v2_core_SocketAddress* envoy_api_v2_core_Address_socket_address(const envoy_api_v2_core_Address *msg) { return UPB_READ_ONEOF(msg, const envoy_api_v2_core_SocketAddress*, UPB_SIZE(0, 0), UPB_SIZE(4, 8), 1, NULL); }
UPB_INLINE bool envoy_api_v2_core_Address_has_pipe(const envoy_api_v2_core_Address *msg) { return _upb_has_oneof_field(msg, UPB_SIZE(4, 8), 2); }
UPB_INLINE const envoy_api_v2_core_Pipe* envoy_api_v2_core_Address_pipe(const envoy_api_v2_core_Address *msg) { return UPB_READ_ONEOF(msg, const envoy_api_v2_core_Pipe*, UPB_SIZE(0, 0), UPB_SIZE(4, 8), 2, NULL); }

UPB_INLINE void envoy_api_v2_core_Address_set_socket_address(envoy_api_v2_core_Address *msg, envoy_api_v2_core_SocketAddress* value) {
  UPB_WRITE_ONEOF(msg, envoy_api_v2_core_SocketAddress*, UPB_SIZE(0, 0), value, UPB_SIZE(4, 8), 1);
}
UPB_INLINE struct envoy_api_v2_core_SocketAddress* envoy_api_v2_core_Address_mutable_socket_address(envoy_api_v2_core_Address *msg, upb_arena *arena) {
  struct envoy_api_v2_core_SocketAddress* sub = (struct envoy_api_v2_core_SocketAddress*)envoy_api_v2_core_Address_socket_address(msg);
  if (sub == NULL) {
    sub = (struct envoy_api_v2_core_SocketAddress*)upb_msg_new(&envoy_api_v2_core_SocketAddress_msginit, arena);
    if (!sub) return NULL;
    envoy_api_v2_core_Address_set_socket_address(msg, sub);
  }
  return sub;
}
UPB_INLINE void envoy_api_v2_core_Address_set_pipe(envoy_api_v2_core_Address *msg, envoy_api_v2_core_Pipe* value) {
  UPB_WRITE_ONEOF(msg, envoy_api_v2_core_Pipe*, UPB_SIZE(0, 0), value, UPB_SIZE(4, 8), 2);
}
UPB_INLINE struct envoy_api_v2_core_Pipe* envoy_api_v2_core_Address_mutable_pipe(envoy_api_v2_core_Address *msg, upb_arena *arena) {
  struct envoy_api_v2_core_Pipe* sub = (struct envoy_api_v2_core_Pipe*)envoy_api_v2_core_Address_pipe(msg);
  if (sub == NULL) {
    sub = (struct envoy_api_v2_core_Pipe*)upb_msg_new(&envoy_api_v2_core_Pipe_msginit, arena);
    if (!sub) return NULL;
    envoy_api_v2_core_Address_set_pipe(msg, sub);
  }
  return sub;
}

/* envoy.api.v2.core.CidrRange */

UPB_INLINE envoy_api_v2_core_CidrRange *envoy_api_v2_core_CidrRange_new(upb_arena *arena) {
  return (envoy_api_v2_core_CidrRange *)upb_msg_new(&envoy_api_v2_core_CidrRange_msginit, arena);
}
UPB_INLINE envoy_api_v2_core_CidrRange *envoy_api_v2_core_CidrRange_parse(const char *buf, size_t size,
                        upb_arena *arena) {
  envoy_api_v2_core_CidrRange *ret = envoy_api_v2_core_CidrRange_new(arena);
  return (ret && upb_decode(buf, size, ret, &envoy_api_v2_core_CidrRange_msginit, arena)) ? ret : NULL;
}
UPB_INLINE char *envoy_api_v2_core_CidrRange_serialize(const envoy_api_v2_core_CidrRange *msg, upb_arena *arena, size_t *len) {
  return upb_encode(msg, &envoy_api_v2_core_CidrRange_msginit, arena, len);
}

UPB_INLINE upb_strview envoy_api_v2_core_CidrRange_address_prefix(const envoy_api_v2_core_CidrRange *msg) { return UPB_FIELD_AT(msg, upb_strview, UPB_SIZE(0, 0)); }
UPB_INLINE const struct google_protobuf_UInt32Value* envoy_api_v2_core_CidrRange_prefix_len(const envoy_api_v2_core_CidrRange *msg) { return UPB_FIELD_AT(msg, const struct google_protobuf_UInt32Value*, UPB_SIZE(8, 16)); }

UPB_INLINE void envoy_api_v2_core_CidrRange_set_address_prefix(envoy_api_v2_core_CidrRange *msg, upb_strview value) {
  UPB_FIELD_AT(msg, upb_strview, UPB_SIZE(0, 0)) = value;
}
UPB_INLINE void envoy_api_v2_core_CidrRange_set_prefix_len(envoy_api_v2_core_CidrRange *msg, struct google_protobuf_UInt32Value* value) {
  UPB_FIELD_AT(msg, struct google_protobuf_UInt32Value*, UPB_SIZE(8, 16)) = value;
}
UPB_INLINE struct google_protobuf_UInt32Value* envoy_api_v2_core_CidrRange_mutable_prefix_len(envoy_api_v2_core_CidrRange *msg, upb_arena *arena) {
  struct google_protobuf_UInt32Value* sub = (struct google_protobuf_UInt32Value*)envoy_api_v2_core_CidrRange_prefix_len(msg);
  if (sub == NULL) {
    sub = (struct google_protobuf_UInt32Value*)upb_msg_new(&google_protobuf_UInt32Value_msginit, arena);
    if (!sub) return NULL;
    envoy_api_v2_core_CidrRange_set_prefix_len(msg, sub);
  }
  return sub;
}

#ifdef __cplusplus
}  /* extern "C" */
#endif

#if COCOAPODS==1
  #include  "third_party/upb/upb/port_undef.inc"
#else
  #include  "upb/port_undef.inc"
#endif

#endif  /* ENVOY_API_V2_CORE_ADDRESS_PROTO_UPB_H_ */
