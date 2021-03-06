import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
  }

  componentDidMount() {
    this.getData();
  }
  
  getData = () => {
    fetch('http://localhost:8000/hello_world/')
    .then(response => response.text())
    .then((data) => this.setState({ text: data }))
    .catch(error => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;