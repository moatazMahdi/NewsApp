import React, { useEffect, useState } from "react";
import { View,StyleSheet, TouchableOpacity, FlatList, StatusBar,ActivityIndicator } from "react-native";
import Card from "../../components/Home/Index";
import News from "../../api/News"

const HomeScreen = ({ navigation }) => {
 // const scrollAnimateion = React.useRef(new Animated.Value(0)).current;
  const [isLoading, setLoading] = useState(false);
  const [news, setNews] = useState([])
  useEffect(() => {
    // newsResponse
    getNewsFromApi()
  }, [])
  /* const newsResponse = async () => {
     const response = await News.get('top-headlines?country=us&category=business&apiKey=96fb1c0a4f894c418b2c151ff96bb11f')
     console.log(response.data)
   }*/
  function getNewsFromApi() {
    News.get('top-headlines?sources=bbc-news&apiKey=96fb1c0a4f894c418b2c151ff96bb11f')
      .then(function (response) {
        setNews(response.data)
        // console.log(news)
      }).catch(function (error) {
        console.log(error)
      })
  }

  if (!news) {
    return null
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} backgroundColor='black'/>
      {isLoading ? <ActivityIndicator style ={{marginTop:60}}/> : (
        <FlatList
          data={news.articles}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          pagingEnabled
  //        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollAnimateion}}}],{useNativeDriver:true})}
          initialNumToRender={4}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({ item,index }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('DetailScreen',{item})}>
                <Card item={item} />
              </TouchableOpacity>
            );

          }}
        />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default HomeScreen;