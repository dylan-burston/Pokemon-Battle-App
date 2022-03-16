import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon/Pokemon'
import React from 'react';

class App extends React.Component {

  state = {
    hp1: 150,
    hp2: 100,
    message: 'fighters are ready',
  }


pokemon_1_attacks = () => {
  this.setState({
    hp2: this.state.hp2 - 10,
    message: 'Charizard is attacking Pikachu'
})
}

pokemon_2_attacks = () => {
  this.setState({
    hp1: this.state.hp1 - 10,
    message: 'Pikachu is attacking Charizard'
  })
}

  render(){
    return (
    <div className="App">
      <Pokemon name={"Charizard"} hp={this.state.hp1} img={"https://pokestop.io/img/pokemon/charizard-256x256.png"} handleAttack={this.pokemon_1_attacks}/>
      <Pokemon name={"Pikachu"} hp={this.state.hp2} img={"https://pokestop.io/img/pokemon/pikachu-256x256.png"} handleAttack={this.pokemon_2_attacks}/>   
      <h2>Status: {this.state.message}</h2>
          
    </div>
  );
}
}

export default App;
