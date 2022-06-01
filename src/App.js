import { Component } from 'react';
import { SearchBox } from './components/searchbox/searchbox.component';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import './components/card-list/card-list.style.css';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => {
        this.setState({ monsters });
        this.setState({ filteredMonsters: monsters });
      });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className='App'>
        <h1 className='header'>Monster Rolodex</h1>
        <SearchBox placeholder='Search for Monsters' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
