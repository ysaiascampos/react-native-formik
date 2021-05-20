import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';

export default function App() {
  const formik = useFormik({
    initialValues: {
      email: 'lala@lala.com'
    },
    onSubmit: x => console.warn(x)
  })
  return (
    <View style={styles.container}>
      <Text>Correo Electronico</Text>
      <TextInput 
        onChangeText={formik.handleChange('email')}
        value={formik.values.email}
      />
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
});
