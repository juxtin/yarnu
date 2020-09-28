/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import Pressability from '../../Pressability/Pressability.js';
import {PressabilityDebugView} from '../../Pressability/PressabilityDebug.js';
import type {ViewStyleProp} from '../../StyleSheet/StyleSheet.js';
import TVTouchable from './TVTouchable.js';
import typeof TouchableWithoutFeedback from './TouchableWithoutFeedback.js';
import {Animated, Platform} from 'react-native';
import * as React from 'react';

type Props = $ReadOnly<{|
  ...React.ElementConfig<TouchableWithoutFeedback>,

  onPressAnimationComplete?: ?() => void,
  onPressWithCompletion?: ?(callback: () => void) => void,
  releaseBounciness?: ?number,
  releaseVelocity?: ?number,
  style?: ?ViewStyleProp,

  hostRef: React.Ref<typeof Animated.View>,
|}>;

type State = $ReadOnly<{|
  pressability: Pressability,
  scale: Animated.Value,
|}>;

class TouchableBounce extends React.Component<Props, State> {
  _tvTouchable: ?TVTouchable;

  state: State = {
    pressability: new Pressability({
      getHitSlop: () => this.props.hitSlop,
      getLongPressDelayMS: () => {
        if (this.props.delayLongPress != null) {
          const maybeNumber = this.props.delayLongPress;
          if (typeof maybeNumber === 'number') {
            return maybeNumber;
          }
        }
        return 500;
      },
      getPressDelayMS: () => this.props.delayPressIn,
      getPressOutDelayMS: () => this.props.delayPressOut,
      getPressRectOffset: () => this.props.pressRetentionOffset,
      getTouchSoundDisabled: () => this.props.touchSoundDisabled,
      onBlur: event => {
        if (Platform.isTV) {
          this._bounceTo(1, 0.4, 0);
        }
        if (this.props.onBlur != null) {
          this.props.onBlur(event);
        }
      },
      onFocus: event => {
        if (Platform.isTV) {
          this._bounceTo(0.93, 0.1, 0);
        }
        if (this.props.onFocus != null) {
          this.props.onFocus(event);
        }
      },
      onLongPress: event => {
        if (this.props.onLongPress != null) {
          this.props.onLongPress(event);
        }
      },
      onPress: event => {
        const {onPressAnimationComplete, onPressWithCompletion} = this.props;
        const releaseBounciness = this.props.releaseBounciness ?? 10;
        const releaseVelocity = this.props.releaseVelocity ?? 10;

        if (onPressWithCompletion != null) {
          onPressWithCompletion(() => {
            this.state.scale.setValue(0.93);
            this._bounceTo(
              1,
              releaseVelocity,
              releaseBounciness,
              onPressAnimationComplete,
            );
          });
          return;
        }

        this._bounceTo(
          1,
          releaseVelocity,
          releaseBounciness,
          onPressAnimationComplete,
        );
        if (this.props.onPress != null) {
          this.props.onPress(event);
        }
      },
      onPressIn: event => {
        this._bounceTo(0.93, 0.1, 0);
        if (this.props.onPressIn != null) {
          this.props.onPressIn(event);
        }
      },
      onPressOut: event => {
        this._bounceTo(1, 0.4, 0);
        if (this.props.onPressOut != null) {
          this.props.onPressOut(event);
        }
      },
      onResponderTerminationRequest: () =>
        !this.props.rejectResponderTermination,
      onStartShouldSetResponder: () => !this.props.disabled,
    }),
    scale: new Animated.Value(1),
  };

  _bounceTo(
    toValue: number,
    velocity: number,
    bounciness: number,
    callback?: ?() => void,
  ) {
    Animated.spring(this.state.scale, {
      toValue,
      velocity,
      bounciness,
      useNativeDriver: true,
    }).start(callback);
  }

  render(): React.Node {
    // BACKWARD-COMPATIBILITY: Focus and blur events were never supported before
    // adopting `Pressability`, so preserve that behavior.
    const {
      onBlur,
      onFocus,
      ...eventHandlersWithoutBlurAndFocus
    } = this.state.pressability.getEventHandlers();

    return (
      <Animated.View
        style={[{transform: [{scale: this.state.scale}]}, this.props.style]}
        accessible={this.props.accessible !== false}
        accessibilityLabel={this.props.accessibilityLabel}
        accessibilityHint={this.props.accessibilityHint}
        accessibilityRole={this.props.accessibilityRole}
        accessibilityState={this.props.accessibilityState}
        accessibilityActions={this.props.accessibilityActions}
        onAccessibilityAction={this.props.onAccessibilityAction}
        accessibilityValue={this.props.accessibilityValue}
        importantForAccessibility={this.props.importantForAccessibility}
        accessibilityLiveRegion={this.props.accessibilityLiveRegion}
        accessibilityViewIsModal={this.props.accessibilityViewIsModal}
        accessibilityElementsHidden={this.props.accessibilityElementsHidden}
        nativeID={this.props.nativeID}
        testID={this.props.testID}
        hitSlop={this.props.hitSlop}
        focusable={
          this.props.focusable !== false &&
          this.props.onPress !== undefined &&
          !this.props.disabled
        }
        ref={this.props.hostRef}
        {...eventHandlersWithoutBlurAndFocus}>
        {this.props.children}
        {__DEV__ ? (
          <PressabilityDebugView color="orange" hitSlop={this.props.hitSlop} />
        ) : null}
      </Animated.View>
    );
  }

  componentDidMount(): void {
    if (Platform.isTV) {
      this._tvTouchable = new TVTouchable(this, {
        getDisabled: () => this.props.disabled === true,
        onBlur: event => {
          if (this.props.onBlur != null) {
            this.props.onBlur(event);
          }
        },
        onFocus: event => {
          if (this.props.onFocus != null) {
            this.props.onFocus(event);
          }
        },
        onPress: event => {
          if (this.props.onPress != null) {
            this.props.onPress(event);
          }
        },
      });
    }
  }

  componentWillUnmount(): void {
    if (Platform.isTV) {
      if (this._tvTouchable != null) {
        this._tvTouchable.destroy();
      }
    }
    this.state.pressability.reset();
  }
}

module.exports = (React.forwardRef((props, hostRef) => (
  <TouchableBounce {...props} hostRef={hostRef} />
)): React.ComponentType<$ReadOnly<$Diff<Props, {|hostRef: mixed|}>>>);
