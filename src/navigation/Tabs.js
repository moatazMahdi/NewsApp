import React from "react";
import { StyleSheet,Text,View,Image,TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "../Screens/Home/Index";
import CategoryList from "../Screens/Categorylist/Index"

const Tab = createBottomTabNavigator();
const Tabs =()=>{
    return(
        <Tab.Navigator screenOptions={{ 
            headerShown: false,
            tabBarShowLabel:false,
            tabBarStyle:{
                position:'absolute',
                bottom:20,
                left:20,
                right:20,
                elevation:0,
                backgroundColor:'#ffffff',
                borderRadius:40,
                height:70,
                ...styles.shadow
            }
         }}
         
        >
            <Tab.Screen name="Home" component={HomeScreen}
             options={{
                tabBarIcon:({focused})=>(
                    <View style = {{alignItems:'center',justifyContent:'center',top:5}}>
                        <Image source={require('../assets/icons/home.png')} 
                                resizeMode = "contain"
                                style = {{
                                    width:25,
                                    height:25,
                                    tintColor:focused? '#FF3A44' : '#A6A6A6', 
                                }}
                        />
                        <Text style = {{color:focused? '#FF3A44' : '#A6A6A6', fontSize:12}}>Home</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Category" component={CategoryList}
             options={{
                tabBarIcon:({focused})=>(
                    <View style = {{alignItems:'center',justifyContent:'center',top:5}}>
                        
                        <Image source={require('../assets/icons/categories.png')} 
                                resizeMode = "contain"
                                style = {{
                                    width:25,
                                    height:25,
                                    tintColor:focused? '#FF3A44' : '#A6A6A6', 
                                }}
                        />
                        <Text style = {{color:focused? '#FF3A44' : '#A6A6A6', fontSize:12}}>Category</Text>
                    </View>
                )
            }}
             />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:0,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    },
});
export default Tabs;