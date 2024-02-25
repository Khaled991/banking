import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../../../components/Common/CustomTextInput';
import CustomButton from '../../../components/Common/CustomButton';
import useSignUp from '../../../hooks/useSignUp';

const SignUpScreen: React.FC = () => {
  const {
    email,
    password,
    confirmPassword,
    loading,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    onSignUp,
  } = useSignUp();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <CustomTextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        secureTextEntry
      />
      <CustomButton title="Sign Up" loading={loading} onPress={onSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SignUpScreen;
