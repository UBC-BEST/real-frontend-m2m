/*
  Main portion of app 
  idk what else to write here
*/

import { 
  Dimensions,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image, 
  Button, 
  SafeAreaView
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'blue',
        width: '100%', 
        height: '30%'
      }}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
