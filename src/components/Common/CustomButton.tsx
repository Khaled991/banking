import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import Loader from './Loader';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  loading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, rest.disabled && styles.disabled]}
      disabled={loading}
      {...rest}>
      {loading ? (
        <Loader size={'small'} color="white" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: 100,
    height: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CustomButton;
