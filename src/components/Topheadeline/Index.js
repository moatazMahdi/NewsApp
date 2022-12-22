import react from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, Animated,TouchableOpacity,Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";


const { width, height } = Dimensions.get('window')
const Card = ({ item, index }) => {
  return (
    <View style={{ width:300, height:360, backgroundColor: '#DEDEDE',margin:10,borderRadius:20 }}>
         <Image source={{ uri: item.urlToImage }} style = {{flex:1, borderRadius:20,}}/>
         <View style = {{position:'absolute',bottom:0,height:360,width:300,}}>
        <LinearGradient
          colors={[
            'rgba(98,98,98,0.1)',
            'rgba(50,50,50,0.75)',
            'rgba(0,0,0,0.98)',
          ]}
          style={{ flex: 1, borderRadius: 20, shadowOpacity: 0.5,}}
        >
            
            <Text numberOfLines={2} style = {{margin:10,fontSize:18,color:'white'}}>{item.title}</Text>
            <Text numberOfLines={4} style = {{margin:10,fontSize:13,color:'white',position:'absolute',bottom:60}}>{item.description}</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 15,position:'absolute',bottom:0 }}>
          <Icon name="calendar" size={18} color="#FF3A44" />
            <Text style={{ color: "white", marginLeft: 5 }}>{moment(item.publishedAt).format("D MMM YYYY")}</Text>
          </View>
       </LinearGradient>
       </View>
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

export default Card;