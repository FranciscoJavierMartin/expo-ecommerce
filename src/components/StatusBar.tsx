import React from 'react';
import {
  StyleSheet,
  StatusBar as NativeStatusBar,
  StatusBarProps,
  SafeAreaView,
  ColorValue,
} from 'react-native';

const StatusBar: React.FC<StatusBarProps> = ({ backgroundColor, ...rest }) => {
  return (
    <>
      <NativeStatusBar backgroundColor={backgroundColor} {...rest} />
      <SafeAreaView style={styles(backgroundColor).container} />
    </>
  );
};

export default StatusBar;

const styles = (backgroundColor: ColorValue | undefined) =>
  StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor,
    },
  });
