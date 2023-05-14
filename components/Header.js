import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';


export default function Header() {
  // const [count, setItemCount] = useState(0);

  // function incremetCount() {
  //   setItemCount(prevCount => prevCount + 1);
  // };
  
  // function decrementCount() {
  //   setItemCount(prevCount => prevCount -1);
  // };


  return (
    <View style={styles.container}>
      <View style={styles.Header1}>
      <Text style={styles.CName}>Wings Cafe</Text>
      <View style={styles.InsideH}>
      <MaterialCommunityIcons name="cart-variant" size={24} color="black" />
      <SimpleLineIcons name="location-pin" size={24} color="black" />
      <MaterialCommunityIcons name="contacts-outline" size={24} color="black" />
      </View>
      
      </View>
      
    {/* <Text>{count}</Text> */}
    

    
    
    </View>
  );
}

const styles = StyleSheet.create({
    container:{


    },

    CName:{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft:10,
       
    },
    Header1:{

      borderBottomWidth:2,
      borderLeftWidth:2,
      borderRightWidth:2,
      borderTopWidth:2,
      marginBottom:10,
      flexDirection: 'row',
      padding:10,
  



    },
    InsideH:{
      flexDirection:'row',
      marginLeft: 40,

    },




});