 import React, { useRef } from 'react';
 import { GameEngine} from 'react-native-game-engine';
 import Constants from './Constants';
 
 export default function App() {
     const engine = useRef(null); 
 
     return (
         <View style={styles.canvas}>
             <GameEngine
                 ref = {engine}
                 
                 style={{
                     width: Constants.MAX_WIDTH,
                     height: Constants.MAX_HEIGHT,
                     flex: null,
                     backgroundColor: "white",
                 }}
             />
         </View>
     );
 }
 
 const styles = StyleSheet.create({
     canvas: {
         flex: 1,
         backgroundColor: "#000000",
         alignItems: "center",
         justifyContent: "center",
     }
 });