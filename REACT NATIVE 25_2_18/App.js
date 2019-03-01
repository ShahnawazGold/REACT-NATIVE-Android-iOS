import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import Login from  './components/Login';
import Child from './child'

const data ={
name:'hammad',
age:'20',
education:'cs',


}

export default class App extends React.Component {
    constructor(props){
      super(props);

      this.state={
        state_data:data
      }
    }
 




   render() {
      return (  
    <View style={styles.container}>
<Child data={this.state.state_data}/>

    </View>
      );
   };
  }  
//FUNCTIONAL COMPONENTS



//   const Purefunction = function (props){
// return(
//   <View style={styles.container}>
//       <Text>parents component</Text>
      
//       <ArrowFunction text ={'hello'}/>
      
//       </View>
// );

// }

// const ArrowFunction = (props)=>{

// return(
// <Text>{props.text}</Text>

// );

// }


const styles = StyleSheet.create({

  container: {
     flexDirection: 'column',
     backgroundColor: 'white',
     justifyContent: 'center',
     alignItems: 'center',
     height: 600
  }
});



