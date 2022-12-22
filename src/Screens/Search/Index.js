import { View, Text,StatusBar,FlatList,StyleSheet,TextInput,Dimensions,TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import Index from '../../components/Search/Index'
import axios from "axios";
import Article from '../../components/Article';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
    const [searchText,setsearchText] = useState("")
    const [articles,setArticles] = useState([]);
    const navigation = useNavigation();

    const searchArticles = () =>{
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9',{
            params:{
                category: "technology",
                q: searchText
            }
        })
            .then( (response) =>{
                // handle success
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    if (!articles) {
        return (
            <View>
                <Text>No Data Here</Text>
            </View>
        );
      }

  return (
    <View style={styles.contener}>
        <StatusBar backgroundColor={'white'}  barStyle='dark-content'/>
        <Index searchText={searchText} setsearchText={setsearchText} onSubmit={searchArticles} />
        <Text style ={styles.textsearch}>{searchText}</Text>
        <FlatList
                data={articles}
                renderItem = {({item}) => {
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen',{item})}>
                        <Article
                        urlToImage = {item.urlToImage}
                        title = {item.title}
                        description = {item.description}
                        author = {item.author}
                        publishedAt = {item.publishedAt}
                        sourceName = {item.source.name}
                    />
                    </TouchableOpacity>
                    )
                }}
                keyExtractor={(item) => item.title}
            />
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
    textsearch:{
        margin:10,
        marginTop:-3,
        marginLeft:30,
        fontSize:15,
        color:'black'
    },
})
export default Search