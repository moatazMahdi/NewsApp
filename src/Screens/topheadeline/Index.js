import React,{useEffect,useState} from "react";
import { View,FlatList,TouchableOpacity } from "react-native";
import News from "../../api/News";
import Card from "../../components/Topheadeline/Index";
import { useNavigation } from '@react-navigation/native';

const TopHeadeLine =()=>{
  const navigation = useNavigation();
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
      News.get('top-headlines?country=us&category=business&apiKey=96fb1c0a4f894c418b2c151ff96bb11f')
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
    return(
        <View>
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
              <TouchableOpacity 
              onPress={() => navigation.navigate('DetailScreen',{item})}
              >
                <Card item={item} />
              </TouchableOpacity>
            );

          }}
        />
        </View>
    );
}
export default TopHeadeLine;