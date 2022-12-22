import { StyleSheet,Dimensions } from 'react-native'
import React from 'react'

const Styles =StyleSheet.create({
    contener:{
        flex:1,
        backgroundColor:"white"
    },
    viewcontener:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
        
    },
    card:{
        backgroundColor:'#251749',
        borderRadius:20,
        width: Dimensions.get('window').width/2.5,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:0.5,
        borderColor:'#251749',
        borderRightWidth:1,
        marginHorizontal:12
       
    },
    image:{
        width:'100%',
        height:220,
        borderTopRightRadius:20,
        borderTopLeftRadius:20
    },
    text:{
        color:'white',
        margin:15,
        fontSize:20
    }
})

export default Styles