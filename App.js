import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Formik, useFormikContext, useField } from 'formik';
import * as Yup from 'yup';

const MyInput = ({ fieldName, ...props }) => {
  const [field, meta] = useField(fieldName);
  return (
    <>
      <TextInput 
        style={styles.input}
        onChangeText={field.onChange(fieldName)}
        onBlur={field.onBlur(fieldName)}
        value={field.values}
        {...props}
      />
      {meta.error && meta.touched && (
        <Text style={{ color: 'red' }}>{meta.error}</Text>
      )}
    </>
  )
}
const EmailForm = () => {
  const { submitForm } = useFormikContext();
  return (
    <>
      <Text>Correo Electronico</Text>
      <MyInput
        fieldName="email" 
      />
      <Text>Nombre</Text>
      <MyInput
        fieldName="name" 
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
        onSubmit={x => console.log(x)}
        validationSchema={Yup.object({
          email: Yup.string()
          .email('Correo invalido')
          .required('Correo Requerido'),
          name: Yup.string()
          .min(5)
          .required('Nombre Requerido')
        })}
        initialValues={{email: '',name: ''}}
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
