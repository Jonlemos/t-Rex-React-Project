import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SpriteMApper src="/images/t-rex-sprite.png"
        cuts={[{x,y, widht, height}]}
        sequences={{
          flyingEnemy:[3,4]
        }}
        fps={30}
       >
         <Sprite 
          play = {true}
          sequences = 'flyingEnemy'
          y = {1}
          x = {2}
          onHit = {() => console.log('MURREW')}
         ></Sprite>
       </SpriteMApper>
    </div>
  );
}

export default App;
