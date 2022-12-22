import React from "react";
import { View,Text,ScrollView,SafeAreaView,Image,StatusBar,TouchableOpacity,Dimensions } from "react-native";
import Styles from "./Styles";

const CategoryList =({ navigation })=>{
    return(
        <SafeAreaView style = {Styles.contener}>
            <StatusBar backgroundColor={'white'} barStyle="dark-content" />
            <ScrollView>
                <View style = {Styles.viewcontener}>
                    <TouchableOpacity style ={Styles.card} onPress={() => navigation.navigate('Business')}>
                        <Image source={require('../../assets/image/business.png')} style={Styles.image} />
                        <Text style={Styles.text}>Business</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={Styles.card} onPress={() => navigation.navigate('General')}>
                        <Image source={require('../../assets/image/general.png')} style={Styles.image} />
                        <Text style={Styles.text}>General</Text>
                    </TouchableOpacity>
                </View>
                <View style = {Styles.viewcontener}>
                    <TouchableOpacity style ={Styles.card} onPress={() => navigation.navigate('Health')}>
                        <Image source={require('../../assets/image/health.png')} style={Styles.image} />
                        <Text style={Styles.text}>Health</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={Styles.card} onPress={() => navigation.navigate('Entertainment')}>
                        <Image source={require('../../assets/image/entertainment.png')} style={Styles.image} />
                        <Text style={Styles.text}>Entertainment</Text>
                    </TouchableOpacity>
                </View>
                <View style = {Styles.viewcontener}>
                    <TouchableOpacity style ={Styles.card} onPress={() => navigation.navigate('Science')}>
                        <Image source={require('../../assets/image/science.png')} style={Styles.image} />
                        <Text style={Styles.text}>Science</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={Styles.card} onPress={() => navigation.navigate('Sports')}>
                        <Image source={require('../../assets/image/sports.png')} style={Styles.image} />
                        <Text style={Styles.text}>Sports</Text>
                    </TouchableOpacity>
                </View>
                <View style = {Styles.viewcontener}>
                    <TouchableOpacity style ={Styles.card} onPress={() => navigation.navigate('Technology')}>
                        <Image source={require('../../assets/image/technology.png')} style={Styles.image} />
                        <Text style={Styles.text}>Technology</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{width: Dimensions.get('window').width,height:80}}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default CategoryList;