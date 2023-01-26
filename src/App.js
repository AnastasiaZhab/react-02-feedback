import './App.css';
import { Component } from 'react';
import FeedbackOption from './components/FeedbackOption';

class App extends Component {
  state = {
    good: '',
    neutral: '',
    bad: ''
  }


  render () {
    const options = Object.keys(this.state);
    return (
      <div className="App">
        <FeedbackOption options={options}/>
      </div>
    );
  }
}

export default App;
