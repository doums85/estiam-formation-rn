import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export default function PrimaryButton({
  children,
  onPress,
}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: '#c6C6C6' }}
        onPress={onPress}>
        <View>
          <Text style={styles.buttonText}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 4,
    margin: 4,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#C6C6C6',
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  buttonInnerContainer: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 16,
    //boxShadow: '1px 1px 2px rgba(0, 0, 0,0.7)'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
