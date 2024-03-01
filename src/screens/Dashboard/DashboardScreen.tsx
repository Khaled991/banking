import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CustomButton from '../../components/Common/CustomButton';
import useDashboard from '../../hooks/useDashboard';

const DashboardScreen: React.FC = () => {
  const {onLogout} = useDashboard();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard Screen</Text>
      <CustomButton title="Logout" onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DashboardScreen;
