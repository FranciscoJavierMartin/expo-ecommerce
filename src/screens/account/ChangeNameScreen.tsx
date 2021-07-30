import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { formStyles } from '../../styles';

interface ChangeNameFormData {
  firstName: string;
  lastName: string;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
});

const ChangeNameScreen: React.FC = () => {
  const formik = useFormik<ChangeNameFormData>({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validationSchema,
    onSubmit: (formValue) => {},
  });
  return (
    <View style={styles.container}>
      <TextInput
        label='First name'
        style={formStyles.input}
        onChangeText={(text: string) => formik.setFieldValue('firstName', text)}
        value={formik.values.firstName}
        error={!!formik.errors.firstName}
      />
      <TextInput
        label='Last name'
        style={formStyles.input}
        onChangeText={(text: string) => formik.setFieldValue('lastName', text)}
        value={formik.values.lastName}
        error={!!formik.errors.firstName}
      />
      <Button
        mode='contained'
        style={formStyles.btnSucces}
        onPress={formik.handleSubmit}
      >
        Save Changes
      </Button>
    </View>
  );
};

export default ChangeNameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
