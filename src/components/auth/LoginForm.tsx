import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-root-toast';
import { loginApi } from '../../api/user';
import useAuth from '../../hooks/useAuth';
import { formStyles } from '../../styles';

interface LoginFormProps {
  toggleForm: () => void;
}

interface LoginFormData {
  identifier: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  identifier: Yup.string().required(),
  password: Yup.string().required(),
});

const LoginForm: React.FC<LoginFormProps> = ({ toggleForm }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();

  const formik = useFormik<LoginFormData>({
    initialValues: {
      identifier: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (formData: LoginFormData) => {
      setIsLoading(true);
      try {
        const response = await loginApi(formData);
        if (response.statusCode) {
          throw 'Error on user or password';
        }
        setIsLoading(false);
        login(response);
      } catch (error) {
        Toast.show('Error on login', {
          position: Toast.positions.CENTER,
        });
        setIsLoading(false);
      }
    },
  });
  return (
    <View>
      <TextInput
        label='Email or Username'
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue('identifier', text)}
        error={!!formik.errors.identifier}
      />
      <TextInput
        label='Password'
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        error={!!formik.errors.password}
        secureTextEntry
      />
      <Button
        mode='contained'
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
        loading={isLoading}
      >
        Login
      </Button>
      <Button
        mode='text'
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={toggleForm}
      >
        Go to Sign Up
      </Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
