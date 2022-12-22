import { View, Text,StyleSheet,TouchableOpacity, FlatList,ActivityIndicator } from 'react-native'
import React,{ useEffect, useState } from 'react'
import Card from '../../components/Category/Card';

const Entertainment = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getNews = async () => {
    try {
     const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=96fb1c0a4f894c418b2c151ff96bb11f');
     const json = await response.json();
     setData(json.articles);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
 useEffect(() => {
  getNews();
}, []);
  return (
    <View style ={styles.contener}>
    {isLoading ? <ActivityIndicator style ={{marginTop:60}}/> : (
       <FlatList
         data={data}
         keyExtractor={({ item }, index) =>'key' + index}
         renderItem={({ item }) => (
           <TouchableOpacity onPress={() => navigation.navigate('DetailScreen',{item})}>
             <Card item={item}/>
           </TouchableOpacity>
           
         )}
       />
     )}
   </View>
  )
}

const styles = StyleSheet.create({
  contener:{
    flex:1,
    backgroundColor:'white'
  },
  card:{
    backgroundColor:'#000000'
  },
})
export default Entertainment