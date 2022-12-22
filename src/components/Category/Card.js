import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import React,{useState} from 'react'
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import moment from "moment";


const Card = ({ item }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <View style={styles.contener}>
      <Image source={{ uri: item.urlToImage }} style={styles.image} />
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
      {isLoading ?<Text numberOfLines={3} style={styles.description}>{item.description} </Text> : (
      <Text style={styles.description}>NotFound </Text>
      )}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 5 }}>
          <Icon name="calendar" size={18} color="#251749" />
          <Text style={styles.publishedAt}>{moment(item.publishedAt).format("D MMM YYYY")}</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 5 }}>
          <IonIcon name="person" size={18} color="#251749" />
          <Text style={styles.author}>{item.author}NotFound</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contener: {
    backgroundColor: '#e0d8f3',
    width:400,
    height: 590,
    margin:10,
    borderRadius:20,
    borderWidth:1,
    borderColor:'#251749'

  },
  image: {
    width: 398,
    height: 400,
    borderRadius:18,
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0
  },
  title: {
    color: 'black',
    fontSize: 20,
    margin: 5
  },
  description: {
    color: 'black',
    fontSize: 18,
    margin: 5,
    opacity:0.6
  },
  publishedAt: {
    color: "black",
    marginLeft: 5,
    opacity:0.8
  },
  author: {
    color: "black",
    width: 80,
    height: 18,
    marginLeft: 5,
    opacity:0.8
  },
})
export default Card;