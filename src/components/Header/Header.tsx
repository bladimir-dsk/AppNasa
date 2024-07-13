import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text style={styles.title}>Explore</Text>
        </View>
        <View style={styles.rightContainer}>
            <Image source={require('../../../assets/nasa.png')} style={styles.image} />
        </View>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 17
       
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    title: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end'

    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    }
})
export default Header