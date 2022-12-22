import react from "react";
import { View, Text, StyleSheet, Image, Platform, Dimensions, StatusBar,TouchableOpacity, Linking } from "react-native";
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcons from "react-native-vector-icons/Entypo";
import IonIcon from "react-native-vector-icons/Ionicons";
import moment from "moment";
import TopHeadeLine from "./topheadeline/Index";
import { useNavigation } from '@react-navigation/native';



const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 50;
const MAX_HEIGHT = 480;
const DetailScreen = ({ route }) => {
  const item = route.params.item;
  const navigation = useNavigation();


  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='dark-content' />
      <ImageHeaderScrollView
        maxHeight={MAX_HEIGHT}
        minHeight={MIN_HEIGHT}
        maxOverlayOpacity={0.6}
        minOverlayOpacity={0.3}
        renderHeader={() => (
          <Image source={{ uri: item.urlToImage }} style={styles.image} />
        )}
      >
        <TriggeringView>
          <View style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20,flex:1,justifyContent:'center',alignItems:'center' }}>
          <View style = {{width:80,height:75,backgroundColor:'white',borderRadius:40,alignItems:'center',justifyContent:'space-between',padding:20,position:'absolute',right:5,top:0}}>
              <TouchableOpacity onPress={() =>
              Linking.openURL(item.url) 
              }>
                <IonIcons name="browser" size={25} color="#FF3A44" />
              </TouchableOpacity>
               
            </View>
            <View style ={{width: Dimensions.get('window').width,marginTop:5}}>
            <Text style={{ color: '#000000', fontSize: 25, margin: 10,marginTop:0,width:'86%' }}>{item.title}</Text>
            <Text style={{ color: '#000000', fontSize: 18, margin: 10, opacity: 0.7 }}>{item.description}</Text>
            <Text style={{ color: '#000000', fontSize: 22, margin: 10,marginBottom:0 }}>Content:</Text>
            <Text style={{ color: '#000000', fontSize: 18, margin: 10, opacity: 0.7,marginTop:5 }}>{item.content}</Text>
            <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 15, }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="calendar" size={18} color="#FF3A44" />
                <Text style={{ color: "black", marginLeft: 5 }}>{moment(item.publishedAt).format("D MMM YYYY")}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <IonIcon name="person" size={18} color="#FF3A44" />
                <Text style={{ color: "black", width: 100, height: 18, marginLeft: 5 }}>{item.author}NotFound</Text>
              </View>
            </View>
            </View>            
          </View>
          <View style = {{margin:15,marginTop:0}}>
            <Text style = {{color: '#000000', fontSize: 22,}}>Top headlines</Text>
            <TopHeadeLine/>
          </View>
          
        </TriggeringView>
        
      </ImageHeaderScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: MAX_HEIGHT,
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
    resizeMode: 'cover',
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

export default DetailScreen;