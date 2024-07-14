import React, { FC } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { PostImage } from '../../types'
import PostImagecom from '../PostImage/PostImagecom'

//TYPAMOS QUE TENGA UN ARREGLO DE OBJECTOS DE POSTIMAGE
const LastFiveDaysImages: FC<{postImages?: PostImage[]}> = ({postImages}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Last 5 Days</Text>
    <ScrollView style={styles.content}>
        {postImages?.map((postImage, index) => (
            <PostImagecom key={`post-image-${postImage.title}`} {...postImage} />
        ))}
       
    </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
    //aqui se puede poner estilos para el componente
    container: {
        flex: 1,
        marginVertical:  8
    },
    title:{
        color: "white",
        fontSize: 15,
        fontWeight: "semibold",
        marginBottom: 18
        
    },
    content:{
        paddingHorizontal: 16
    }
})

export default LastFiveDaysImages