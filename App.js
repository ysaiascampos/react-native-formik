import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Correo invalido';
  }
  return errors
}
export default function App() {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate,
    onSubmit: x => console.warn(x)
  })
  return (
    <View style={styles.container}>
      <Text>Correo Electronico</Text>
      <TextInput 
        onBlur={formik.handleBlur('email')}
        style={styles.input}
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email ? <Text>{formik.errors.email}</Text>:null}
      <Button 
        title='Enviar'
        onPress={formik.handleSubmit}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    width: 150,
    fontSize: 15,
    backgroundColor: '#eee',

  }
});
