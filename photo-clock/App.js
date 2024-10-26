import { Text, SafeAreaView, StyleSheet, Image, ImageBackground, Dimensions
 } from 'react-native';
import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const IMAGE_SET = [
  'https://picsum.photos/1000',
  'https://picsum.photos/1001',
  'https://picsum.photos/1002',
];

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const [date,setDate] = useState();
  const [index,setIndex] = useState(0);
  useEffect(()=>{
    setInterval( () => {
      setDate(dayjs().format('MM월 DD일\nHH:mm:ss'))
    }, 1000 );
  },[]);
  useEffect(()=>{
    setInterval( () => setIndex( (index + 1) % IMAGE_SET.length ), 5000 );
  },[]);
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
  source={{ uri: IMAGE_SET[ index ] }}
        style={{
          width: screenWidth, height: screenHeight,
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
        }}
      >
        <Text style={[styles.paragraph, { color: 'white' }]}>
          { date }
        </Text>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
