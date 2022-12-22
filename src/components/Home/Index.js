import react from "react";
import { View, Text, StyleSheet, ImageBackground, Dimensions, Animated,TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get('window')
const Card = ({ item, index}) => {
  const navigation = useNavigation();
  return (
    <View style={{ width, height, backgroundColor: '#000000' }}>
      <ImageBackground source={{ uri: item.urlToImage }} style={{ width, height, justifyContent: 'flex-end', resizeMode: 'cover' }} resizeMode='cover'>
        <LinearGradient
          colors={[
            'rgba(98,98,98,0.1)',
            'rgba(50,50,50,0.75)',
            'rgba(0,0,0,0.98)',
          ]}
          style={{ flex: 1, borderRadius: 8, shadowOpacity: 0.5 }}
        >
            <TouchableOpacity style ={{position:'absolute',right:0}} onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={25} color="white" style={{margin: 15 }} />
            </TouchableOpacity>

          <Text numberOfLines={3} style={{ color: '#FFFFFF', fontSize: 22, position:'absolute',bottom:240,margin:10 }}>{item.title}</Text>
          <Text numberOfLines={4} style={{ color: '#FFFFFF', fontSize: 15, marginLeft: 15, marginRight: 15,position:'absolute',bottom:160 }}>{item.description}</Text>

          <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 15,position:'absolute',bottom:100 }}>
          <Icon name="calendar" size={18} color="#FF3A44" />
            <Text style={{ color: "white", marginLeft: 5 }}>{moment(item.publishedAt).format("D MMM YYYY")}</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 15,position:'absolute',bottom:100,right:0 }}>
          <IonIcon name="person" size={18} color="#FF3A44" />
            <Text style={{ color: "white",width:120,height:18,marginLeft:5 }}>{item.author}NotFound</Text>
          </View>
        </LinearGradient>
      </ImageBackground>

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