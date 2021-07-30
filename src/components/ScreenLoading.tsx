import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  ColorValue,
} from 'react-native';

interface ScreenLoadingProps {
  text?: string;
  color?: ColorValue;
  size: number | 'small' | 'large';
}

const ScreenLoading: React.FC<ScreenLoadingProps> = ({
  size,
  text = 'Loading...',
  color = '#000',
}) => {
  return (
    <SafeAreaView>
      <ActivityIndicator size={size} color={color} style={styles.loading} />
      <Text>{text}</Text>
    </SafeAreaView>
  );
};

export default ScreenLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
  },
});
