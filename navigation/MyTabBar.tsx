import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { defineAnimation } from 'react-native-reanimated';
import Spinner from './Spinner';

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ 
        flexDirection: 'row',
        backgroundColor: "white",
        paddingTop: 10
        }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const tabBarIcon =
          options.tabBarIcon !== undefined
            ? options.tabBarIcon
            : options.title !== undefined
            ? options.title
            : route.name;
        const isFocused = state.index === index;
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onLongPress={onLongPress}
            style={{ 
                flex: 1, 
                justifyContent: 'space-around', 
                marginLeft: 50, 
                width: "100%",
                backgroundColor:"none"
            }}
          >
            <Spinner style={{ color: isFocused ? '#673ab7' : '#222' }} navigation={navigation} tabBarIcon={tabBarIcon} route={route} isFocused={isFocused}>
            </Spinner>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default MyTabBar