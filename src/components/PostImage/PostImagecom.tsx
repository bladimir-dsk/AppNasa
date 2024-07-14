import React, { FC } from 'react'
import { Button, Text, View, StyleSheet } from 'react-native';
import { PostImage } from '../../types'

const PostImagecom: FC <PostImage> = ({title, date}) => {
  return (
    <View style={style.container}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.date}>{date}</Text>
        <View style={style.buttonContainer}>
          <Button title="view" ></Button>
        </View>

    </View>
)
}
const style = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    padding: 15,
    marginBottom: 12,
    borderRadius: 20,
    
  },
  title:{
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
    color: "white"
  }, 
  date:{
    fontSize: 16,
    color: '#888'
  },
  buttonContainer:{
    width: '100%',
    alignItems: 'flex-end',
    
    
  }
})

export default PostImagecom