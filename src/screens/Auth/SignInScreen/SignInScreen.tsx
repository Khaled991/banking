import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../../../components/Common/CustomTextInput';
import CustomButton from '../../../components/Common/CustomButton';
import useSignIn from '../../../hooks/useSignIn';

const SignInScreen: React.FC = () => {
  const {
    email,
    password,
    loading,
    handleEmailChange,
    handlePasswordChange,
    onSignIn,
  } = useSignIn();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
      <CustomButton title="Sign In" loading={loading} onPress={onSignIn} />
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
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
});

export default SignInScreen;
