import React, { useState } from 'react';
import { TouchableOpacity, Animated } from 'react-native';

const Spinner = ({tabBarIcon, navigation, route, isFocused}) => {
  const [rotateAnimation, setRotateAnimation] = useState(new Animated.Value(0));

  const onPress = () => {
    Animated.timing(rotateAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateAnimation.setValue(0);
    });
    const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: route.name, merge: true });
      }
  };

  const interpolateRotating = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '720deg'],
  });
  const interpolateSize = rotateAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.4],
  });

  const animatedStyle = {
    transform: [
      {
        rotate: interpolateRotating,
      },
      {
        scale: interpolateSize
      }
    ],
  };

  return (
    <TouchableOpacity
      onPress={async () => onPress()}
      style={{ width: 60 }}
    >
      <Animated.Text style={animatedStyle}>
          {tabBarIcon}
      </Animated.Text>
    </TouchableOpacity>
  );
};

export default Spinner;