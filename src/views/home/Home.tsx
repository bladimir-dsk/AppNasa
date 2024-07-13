import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import fetch from '../../utils/fetch'
import TodaysImage from '../../components/TodaysImage'
import { PostImage } from '../../types'

function Home() {

    //creamos un manejador de estados
    const [todaysImage, setTodaysImage] = useState<PostImage>({})//tipamos los datos con el tipo de postimage
    //en un useeffect llamamos a la API DE LA NASA 
    useEffect(() => {
        //constante de estado local
        const loadTodaysImage = async () => { 
            try{
                const todaysImageResponse = await fetch()
                setTodaysImage(todaysImageResponse)
            }
            catch(error){
                setTodaysImage({}) //cuando no aiga informacion podremos setear undefined
        } }
        loadTodaysImage().catch(null)
    }, [] )
    return (

        <View style={styles.container}>
            <Header></Header>
            <TodaysImage {...todaysImage}></TodaysImage>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 16
    }
})

export default Home