 import React, { useRef } from 'react';
 import { GameEngine} from 'react-native-game-engine';
 import Constants from './Constants';

 import HitCircle from './Components/GameObjects/HitCircle';
 
 export default function App() {
  //constants
  const BoardSize = Constants.MAX_HEIGHT * Constants.MAX_WIDTH;
  const engine = useRef(null); 

  //random positions function
  const randomPositions = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
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

        entities={{
          //styling for hit circle
          HitCircle: {
            position: [
              randomPositions(0, Constants.MAX_HEIGHT - 1),
              randomPositions(0, Constants.MAX_WIDTH - 1),
            ],
            size: 10,
            renderer: <Food />,
          },
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