import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik, useFormikContext } from 'formik';
import * as Yup from 'yup';

const EmailForm = () => {
  const { handleChange, submitForm, values } = useFormikContext();
  return (
    <>
      <Text>Correo Electronico</Text>
      <TextInput 
        style={styles.input}
        onChangeText={handleChange('email')}
        value={values.email}
      />
      <Button
        title="Enviar"
        onPress={submitForm}
      />
    </>
  )
}
export default function App() {
  
  return (
    <View style={styles.container}
    >
      <Formik 
        validationSchema={Yup.object({
          email: Yup.string()
          .email('Correo invalido')
          .required('Correo Requerido')
        })}
        initialValues={{email: ''}}
      >
        <EmailForm />
      </Formik>
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
