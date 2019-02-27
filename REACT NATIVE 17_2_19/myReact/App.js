import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Login from  './components/Login';

export default class App extends React.Component {

  state ={
    name :'shha'
     
  }
   render() {
      return (  
        <Login/>  
      );
   }
}
const styles = StyleSheet.create({
  container: {
     flexDirection: 'column',
     backgroundColor: 'black',
     justifyContent: 'center',
     alignItems: 'center',
     height: 600
  }
});

