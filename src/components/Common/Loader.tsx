import React from 'react';
import {View, ActivityIndicator, StyleSheet, ColorValue} from 'react-native';

interface LoaderProps {
  size: number | 'large' | 'small' | undefined;
  color?: ColorValue | undefined;
}

const Loader: React.FC<LoaderProps> = ({size, color}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loader;
