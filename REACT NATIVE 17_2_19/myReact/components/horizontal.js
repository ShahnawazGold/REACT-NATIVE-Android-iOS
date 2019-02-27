import React, { Component } from 'react'
import {
   Text, 
   View,
   ScrollView,
   StyleSheet ,
   Dimensions
  } from 'react-native'

export default class Scrollview extends Component {
  render() {
    return (
<ScrollView 
    horizontal={true} 
    pagingEnabled={true}>
        <View style={[styles.hor,styles.welcome]}>
        <Text style={styles.font}>Welcome</Text>
        </View>
                <View style={[styles.hor,styles.home]}>
            <Text style={styles.font}>HOME</Text>
            </View>
                        <View style={[styles.hor,styles.about]}>
                        <Text style={styles.font}>ABOUT</Text>
                        </View>
</ScrollView>
)
  }
}
const styles=StyleSheet.create({
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

})