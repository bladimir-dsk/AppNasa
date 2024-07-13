import React, { FC } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import { PostImage } from '../../types'


//el FC ES funcional components seguido por el tipo
const TodaysImage: FC<PostImage> = ({ date, title, url }) => {
    return (
        <View style={styles.container}>

            <Image source={{ uri: url }} style={styles.image}></Image>

            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>

            <View style={styles.buttonContainer}>
                <Button title="view"></Button>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c449d",
        borderRadius: 30,
        padding: 15,
        margin: 15,
        borderColor: "white",
    },
    image: {
        borderRadius: 15,
        width: "100%",
        height: 180,
        borderWidth: 2,
        borderColor: "white",
    },

    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10

    },
    date: {
        color: "white",
        fontSize: 16,

    },
    buttonContainer: {
        alignItems: 'flex-end', 
        color: "white",
    }
})

export default TodaysImage