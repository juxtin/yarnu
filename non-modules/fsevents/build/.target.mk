# This file is generated by gyp; do not edit.

TOOLSET := target
TARGET := 
### Rules for final target.
LDFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.10 \
	-arch x86_64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Debug := \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first

LDFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first \
	-mmacosx-version-min=10.10 \
	-arch x86_64 \
	-L$(builddir) \
	-stdlib=libc++

LIBTOOLFLAGS_Release := \
	-undefined dynamic_lookup \
	-Wl,-no_pie \
	-Wl,-search_paths_first

LIBS :=

$(builddir)/.node: GYP_LDFLAGS := $(LDFLAGS_$(BUILDTYPE))
$(builddir)/.node: LIBS := $(LIBS)
$(builddir)/.node: GYP_LIBTOOLFLAGS := $(LIBTOOLFLAGS_$(BUILDTYPE))
$(builddir)/.node: TOOLSET := $(TOOLSET)
$(builddir)/.node:  FORCE_DO_CMD
	$(call do_cmd,solink_module)

all_deps += $(builddir)/.node
# Add target alias
.PHONY: 
: $(builddir)/.node

# Short alias for building this executable.
.PHONY: .node
.node: $(builddir)/.node

# Add executable to "all" target.
.PHONY: all
all: $(builddir)/.node

