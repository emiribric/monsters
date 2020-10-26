import React, { Component } from 'react';
//import logo from './logo.svg';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };

    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    //.then(response => console.log(response))
    .then(response => response.json())
    //.then(users => console.log(users))
    .then(users => this.setState({ monsters : users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  };

  render() {
    const { monsters, searchField } = this.state;
    //const monsters = this.state.monsters;
    //const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return(
      <div className="App">
        {/* <input 
          type='search' 
          placeholder='search monsters' 
          onChange={e => this.setState({ searchField: e.target.value })} 
        /> */}
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={ this.handleChange } 
        />
        <CardList monsters={ filteredMonsters }>
        {/* <CardList monsters={ this.state.monsters }> */}
          {/* {
            this.state.monsters.map(monster => 
              <h1 key={monster.id}>{ monster.name }</h1>
            )
          } */}
        </CardList>
    </div>
    );
  }
}

export default App;
