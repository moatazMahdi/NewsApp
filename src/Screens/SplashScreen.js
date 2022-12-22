import react,{useEffect,useState} from "react";
import { View, Text,StatusBar,Image,StyleSheet,Dimensions } from "react-native";

const SplashScreen = props  => {
    const [authLoaded,setAuthLoaded] =useState(false);

    useEffect(() => {
        setTimeout(() => {
          setAuthLoaded(true);
        }, 3000);
      }, []);

      useEffect(() => {
        if (authLoaded) {
          props.navigation.replace('Tabs');
        }
      }, [authLoaded, props.navigation]);

    return (
        <View style = {{flex:1,backgroundColor:'#251749',alignItems:'center',justifyContent:'center'}}>
          <StatusBar backgroundColor={'#251749'}/>
          <View style = {styles.logocontener}>
            <View style = {styles.nlogo}>
              <Text style = {styles.ntext}>N</Text>
            </View>
            <Text style={styles.ewstext}>ews</Text>
          </View>
          <View style = {styles.createcontener}>
            <Text style = {{color:'white'}}>CreateBy:</Text>
            <Text style = {{color:'white'}}>Moataz Mahdi</Text>
          </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
  image:{
    width:130,
    height:50
  },
  nlogo:{
    width:60,
    height:60,
    backgroundColor:'white',
    borderRadius:30,
    alignItems:'center',
    justifyContent:'center',

  },
  ntext:{
    fontSize:50,
    position:'absolute',
    bottom:0,
    color:'#251749'
  },
  logocontener:{
    flexDirection:'row',
    alignItems:'center'
  },
  ewstext:{
    color:'white',
    fontSize:50,
    marginLeft:-4
  },
  createcontener:{
    flexDirection:'row',
    position:'absolute',
    bottom:20
  },
})

export default SplashScreen;