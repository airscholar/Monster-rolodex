import { Component } from 'react';
// import { SearchBox } from './components/searchbox/searchbox.component';
import { CardList } from './components/card-list/card-list.component';
import './components/card-list/card-list.style.css';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(monsters => {
        this.setState({ monsters });
      });
  }

  render() {
    return (
      <div className='App'>
        {/* <SearchBox></SearchBox> */}
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
