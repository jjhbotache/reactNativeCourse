import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function App() {
  const [user,setUser] = useState("Juanitojose")
  const pressHandler = ()=>{
    setUser("Juan")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.myStyle}>{user} esta aprendiendo</Text>
      <Text>de a pocos :D</Text>

      <View style={styles.myButton}>
        <Button title='hola'
        onPress={pressHandler}
        />
      </View>

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
  myStyle:{
    color:"grey",
    fontWeight:'bold',
    fontSize:50,
    textAlign:'center'
    
  },
  myButton:{
    color:"black",
    textAlign:'right',
    marginTop:50
  }

});
