import React, { Component } from 'react'
import {
     Text,
      View,
      StyleSheet,
      TextInput,
      TouchableOpacity
      
      
     } from 'react-native'



export default class MyForm extends Component {
  render() {
    return (
        <View style={styles.container}>
     
            <TextInput
            placeholder="Username"
            style={styles.input
            
            } /> 
            <TextInput
            placeholder="Password"
            style={styles.input
            
            } /> 

            <TouchableOpacity style={styles.buttonbg}>

                 <Text style ={styles.buttontext}>LOGIN</Text>
            </TouchableOpacity>
             
        </View>
     
    )
  }
}
const styles = StyleSheet.create({
      container :{
          flex:1,
          color: 'green',
          padding: 20
      },
      input:{
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.8)',
        paddingLeft:  10 ,
        marginBottom: 15 
      },
      buttonbg:{
      backgroundColor :'blue',
      paddingVertical: 15

      }
      ,
      buttontext:{
       textAlign:  'center',
       fontWeight: 'bold',
       color:'#fff'
      }
})