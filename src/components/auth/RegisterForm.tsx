import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-root-toast';
import { formStyles } from '../../styles';
import { registerApi } from '../../api/user';

interface RegisterFormProps {
  toggleForm: () => void;
}

interface RegisterFormData {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  username: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')]),
});

const RegisterForm: React.FC<RegisterFormProps> = ({ toggleForm }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formik = useFormik<RegisterFormData>({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (formData: RegisterFormData) => {
      setIsLoading(true);
      try {
        await registerApi(formData);
        setIsLoading(false);
        toggleForm();
      } catch (error) {
        console.log(error);
        Toast.show('Error on register', { position: Toast.positions.CENTER });
        setIsLoading(false);
      }
    },
  });

  return (
    <View>
      <TextInput
        label='Email'
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue('email', text)}
        value={formik.values.email}
        error={!!formik.errors.email}
      />
      <TextInput
        label='Username'
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue('username', text)}
        value={formik.values.username}
        error={!!formik.errors.username}
      />
      <TextInput
        label='Password'
        style={formStyles.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue('password', text)}
        value={formik.values.password}
        error={!!formik.errors.password}
      />
      <TextInput
        label='Confirm Password'
        style={formStyles.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue('confirmPassword', text)}
        value={formik.values.confirmPassword}
        error={!!formik.errors.confirmPassword}
      />
      <Button
        mode='contained'
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
        loading={isLoading}
      >
        Sign Up
      </Button>
      <Button
        mode='text'
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={toggleForm}
      >
        Go to Login
      </Button>
    </View>
  );
};

export default RegisterForm;
