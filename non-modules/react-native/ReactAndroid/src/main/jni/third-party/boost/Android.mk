LOCAL_PATH:= $(call my-dir)
include $(CLEAR_VARS)

LOCAL_C_INCLUDES := $(LOCAL_PATH)/boost_1_63_0
LOCAL_EXPORT_C_INCLUDES := $(LOCAL_PATH)/boost_1_63_0

LOCAL_MODULE    := boost

include $(BUILD_STATIC_LIBRARY)
