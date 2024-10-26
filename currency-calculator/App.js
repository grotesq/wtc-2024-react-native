import { Text, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [thb, setThb] = useState('0');
  const [krw, setKrw] = useState('0');
  useEffect(()=>{
    const parsed = parseInt( thb, 10 );
    const result = !Number.isNaN(parsed) ? parsed * 41 : 0;
    const formatted = result.toLocaleString();
    setKrw( formatted );
  }, [thb]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>바트</Text>
      <TextInput placeholder={''}
        style={styles.text}
        keyboardType={'tel'}
        value={ thb }
        onChangeText={ value => setThb( value ) }
      />
      <Text style={styles.text}>원</Text>
      <Text style={ [ styles.text, { fontWeight: 'bold' } ] }>{ krw }</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8, // dp (뷰포트 기준의 px)
    gap: 12,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});
