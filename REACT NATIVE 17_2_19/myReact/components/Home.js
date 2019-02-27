/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.inner}>I'm the MyComponent component</Text>
        <Text style={styles.inner}>I'm the MyComponent component</Text>

     
      <View style={styles.con2}> 
         <Text style={styles.con2Text}>I'm the MyComponent component</Text> 
       </View>
       <View style={styles.con3}> 
         <Text style={styles.con2Text}>I'm the MyComponent component</Text> 
       </View>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  hor :{
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height:Dimensions.get('window').height
    },
    welcome:{
    backgroundColor:'#ff3d00'
    },
    home :{
    backgroundColor: '#283593'
    },
    about:{
        backgroundColor:'#558b2f'
    },
    
    
    font:{
        fontSize:25,
        fontWeight:'bold',
    color:'#fff'
    }
   
});
