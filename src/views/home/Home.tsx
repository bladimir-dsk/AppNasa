import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import fetch from '../../utils/fetch'
import TodaysImage from '../../components/TodaysImage'
import { PostImage } from '../../types'
import { format, subDays, } from 'date-fns'
import LastFiveDaysImages from '../../components/lastFiveDaysImages/lastFiveDaysImages';

function Home() {

    //creamos un manejador de estados
    const [todaysImage, setTodaysImage] = useState<PostImage>({})//tipamos los datos con el tipo de postimage
    //creamos un manejador de estados para el filtro de fechas 
    const [ lastFiveDaysImage, setLastFiveDaysImage] = useState<PostImage[]>([])//lo tipamos con postimage pero como arreglo ya nos devuelve un json de arreglo
    //en un useeffect llamamos a la API DE LA NASA 
    useEffect(() => {
        //constante de estado local
        const loadTodaysImage = async () => { 
            try{
                const todaysImageResponse = await fetch() //llamado a ala api
                setTodaysImage(todaysImageResponse)
            }
            catch(error){
                setTodaysImage({}) //cuando no aiga informacion podremos setear undefined
        } }
        //funcion que nos trae la imagen de 5 dias
        const loadLast5DaysImage = async () => {
            //aqui se podria hacer la llamada a la API para traer las 5 imagenes mas recientes
            try{
                ///instanciamos un objecto de fetch 
                const date = new Date()
                const todaysDate = format(date, 'yyyy-MM-dd')
                //sub nos sirve para susbstraer quitar dias, en este caso 5 dias atras
                const fiveDaysAgoDate = format(subDays(date, 5), 'yyyy-MM-dd');//yyyy-MM-dd es el formato de fecha que se requiere
            
                //fechas del presente a 5 dias antes
                console.log(fiveDaysAgoDate, todaysDate)
                //llamamos a la API con las fechas, le hacemos una concatenacion
                const lastFiveDaySImagesResponse = await fetch(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)
                setLastFiveDaysImage(lastFiveDaySImagesResponse)
            }catch(error){
                //si hay un error seteamos la imagen a vacia
                console.log(error)
            }
        }
        console.log(lastFiveDaysImage)

        loadTodaysImage().catch(null)
        loadLast5DaysImage().catch(null) //si hay un error se ignora el error y sigue cargando la imagen del dia de hoy
    }, [] )
    return (

        <View style={styles.container}>
            <Header></Header>
            <TodaysImage {...todaysImage}></TodaysImage>
            <LastFiveDaysImages postImages={lastFiveDaysImage}></LastFiveDaysImages>

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