import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React  from 'react';
import { useState, useEffect } from 'react';

export default function MyProduct1() {
 const[count, setCount]= useState(0)
 const[totalAmout, calAmout ]= useState(0);

  return (
    <View style={styles.MyContainer}>
    
      <View style={styles.Items}>
        <Text style={styles.Items1}>Items</Text>
        <Text style={styles.Count1}>{count}</Text>
        </View>
        <View style={styles.Items}>
          
        <Text style={styles.Items1}>Amount</Text>
        <View style={styles.Money}>
          <Text style={styles.Currency}>M</Text>
        <Text style={styles.Count2}>{totalAmout}</Text>
        </View>
       


        </View>
      
      <TouchableOpacity onPress={()=>{
        //  if(count >= 0)
        //  {
        setCount(count+1);
        calAmout(totalAmout+15)
        //  }      
      }}>
        <View style={styles.ButtonContainer}>
          <Text style={styles.ButtonText}>
            Add To Cart
          </Text>

        </View>

      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        if(count >= 1)
        {
        setCount(count-1);
        calAmout(totalAmout-15)
        } 
      }}>
        <View style={styles.ButtonContainer}>
          <Text style={styles.ButtonText}>
            Remove from cart
          </Text>

        </View>

      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
MyContainer:{
  padding:10
    

},
Items:{
flexDirection:'row',


},
Count1:{
  marginLeft:200,
  fontWeight:'bold'
},
Count2:{
  fontWeight:'bold',
 

},
Items1:{
fontSize:15,
fontWeight:'bold',
},
button: {
  backgroundColor: 'blue',
  padding: 10,
  borderRadius: 5,
},
text: {
  color: 'white',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 'bold',
},
ButtonContainer:{
  height:30,
  marginHorizontal:70,
  backgroundColor:'#5d57ff',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop:20,
  borderRadius:15,

},
ButtonText:{
  textTransform:'uppercase',
  color:'#fff',
  fontWeight: 'bold',

},
Money:{
flexDirection:'row',
marginLeft: 180,

},
Currency:{
  fontWeight:'bold'
}

});