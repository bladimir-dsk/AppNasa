import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/views/home/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home></Home>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)',
  
  },
});
