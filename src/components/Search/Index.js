import { View, Text,FlatList,StyleSheet,TextInput,Dimensions  } from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Index = (Props) => {
  return (
    <View>
      <View style={styles.headercontener}>
        <View style ={styles.textinputcontener}>
        <TextInput 
        placeholder='Search'
        style ={styles.textinput}
        onChangeText={(text) =>Props.setsearchText(text)}
        value={Props.searchText}
        onSubmitEditing={Props.onSubmit}
        />
        <Icon name="search" size={25} color="#251749" style={styles.searchicon} />
        </View>
        <MaterialCommunityIcons name="filter-menu" size={30} color="#251749" style={styles.filtermenu} />
        </View>
    </View>
  )
}

const styles =StyleSheet.create({
  contener:{
      backgroundColor:'white',
      flex:1
  },
  headercontener:{
      flexDirection:'row',
      margin:10
  },
  textinput:{
      width:Dimensions.get('window').width/1.2,
      height:50,
      borderRadius:25,
      borderWidth:0.5,
      padding:5,
      paddingLeft:20,
      borderColor:'#251749'

  },
  textinputcontener:{
    flexDirection:"row"
  },
  searchicon:{
    position:'absolute',
    right:15,
    bottom:15
  },
  filtermenu:{
      margin:10
  },
})

export default Index