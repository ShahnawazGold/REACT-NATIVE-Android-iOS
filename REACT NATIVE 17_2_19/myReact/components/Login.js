import React, { Component } from 'react'
import MyForm from './form'

import { 
    Text,
     View ,
     Image,
    StyleSheet,
    } from 'react-native'


export default class Login extends Component {
  render() {
    return (
 <View style={styles.container}>
      <View  style={styles.logincontainer}>
    
        <Image
        style ={styles.logo}
         source={require('./images/logo.jpg')}
        />
        <Text style={styles.title}>Simple login</Text>
      </View>
      <View style = {styles.myfrom}>   
          <MyForm/>
      </View>

 </View>

    )
  }
}

const styles = StyleSheet.create({
     container :{
     flex :1,
     backgroundColor:'skyblue'

    },
    logincontainer:{

      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    text :{
        backgroundColor:  'blue'
    },
    logo :{
        width: 100,
        height: 100

    },
    title:{
     color: '#fff'
    },
    myfrom:{
      flex :2

    }

})