
import { StyleSheet, Text, View, StatusBar, Image, ScrollView  } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import MyProduct from './components/MyProduct';
import MyProduct1 from './components/MyProduct1';
import MyProduct2 from './components/MyProduct2';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function App() {
 const Products ={

  MyImage: require('./assets/Bread.jpg'),
  MyImage2: require('./assets/Apples.jpg'),
  MyImage3: require('./assets/Reboost.jpg')


 };

  return (
    <View style={styles.container}>
    <ScrollView>
      <StatusBar/>
      
      <Header/>
      <View style={styles.AllDetails}>
      <Image style={styles.MyImage} source={Products.MyImage} />
      <View style={styles.CNames}>
        <Text style={styles.Name}>Bread</Text>
        <Text style={styles.Price}> M20/item</Text>
      </View>
      <View style={styles.InBuying}>
        <MyProduct/>
      </View>
      </View>

       <View style={styles.AllDetails1}>
      <Image style={styles.MyImage} source={Products.MyImage2} />
      <View style={styles.CNames}>
        <Text style={styles.Name}> Apples</Text>
        <Text style={styles.Price}> M5/item</Text>
      </View>
      <View style={styles.InBuying}>
        <MyProduct1/>
      </View>
      </View>

      <View style={styles.AllDetails2}>
      <Image style={styles.MyImage} source={Products.MyImage3} />
      <View style={styles.CNames}>
        <Text style={styles.Name}> Reboost Drink</Text>
        <Text style={styles.Price}> M15/item</Text>
      </View>
      <View style={styles.InBuying}>
        <MyProduct2/>
      </View>
      </View>


      <View style={styles.MyIcons}>
      <Entypo name="home" size={24} color="black" />
      <FontAwesome name="search" size={24} color="black" />
      <FontAwesome5 name="heart" size={24} color="black" />
      <Octicons name="person" size={24} color="black" />

      </View>
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
   
  },
  
  MyImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20
    
  },
  MyImage2: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20
    
  },
  MyImage3: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20
    
  },
  CNames:{
  marginLeft:50,

  },
  Name:{
    fontSize:25,
    fontWeight:'bold',
    marginLeft: 40

    

  },
  InBuying:{
    marginTop:10,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,

  },
  Price:{
    marginLeft: 80,
  },
  MyIcons:{
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-between',
  },
  AllDetails:{
    flex: 1,
    borderTopWidth: 1,
  }
,
AllDetails1:{
  marginTop:10,
  flex: 1,
  borderTopWidth: 1,
},
AllDetails2:{
  marginTop:10,
  flex: 1,
  borderTopWidth: 1,
}
  
});