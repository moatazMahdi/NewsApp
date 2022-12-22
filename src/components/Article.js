import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import moment from "moment";
import Icon from "react-native-vector-icons/FontAwesome";
import IonIcon from "react-native-vector-icons/Ionicons";



const Article = (props) => {
    
    return (
        <View style={styles.container}>
            {/* image */}
            <Image source={{
                uri: props.urlToImage
            }}
                style={styles.image}
            />

            <View style={{ padding: 20 }}>


                {/*    title */}
                <Text style={styles.title}>{props.title}</Text>

                {/*    description */}
                <Text style={styles.description} numberOfLines={3}>
                    {props.description}
                </Text>

                <View style={styles.data}>
                    <View style={{ flexDirection: "row", justifyContent: 'space-between', margin: 5 }}>
                        <Icon name="calendar" size={18} color="#251749" />
                        <Text style={styles.publishedAt}>{moment(props.publishedAt).format("D MMM YYYY")}</Text>
                    </View>
                    <View style={{ flexDirection: "row", margin: 5 }}>
                        <IonIcon name="person" size={18} color="#251749" />
                        <Text style={styles.author}>{props.author}NotFound</Text>
                    </View>
                </View>

                {/*     source */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#e0d8f3",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#e0d8f3",
        marginTop: 10,
        borderWidth: 0.7,
        borderColor: '#251749',
        marginBottom:10
    },
    image: {
        height: 200,
        width: "100%",
        borderTopLeftRadius: 41,
        borderTopRightRadius: 41,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10,
        color:'black'
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading: {

    },
    author: {
        fontWeight: "bold",
        fontSize: 15
    },
    date: {
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
    source: {
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 18
    },
    publishedAt: {
        color: "black",
        marginLeft: 5,
        opacity:0.8
      },
      author: {
        color: "black",
        width: 80,
        height: 18,
        marginLeft: 5,
        opacity:0.8
      },
})

export default Article;