import './App.css';
import { Component } from 'react';
import FeedbackOption from './components/FeedbackOption';
import Statistics from './components/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    const name = event.currentTarget.innerText;
    return this.setState({ [name]: this.state[name] + 1})
  }


  render () {
    const options = Object.keys(this.state);
    return (
      <div className="App">
        <FeedbackOption options={options}
        onLeaveFeedback={this.onLeaveFeedback}/>
        <Statistics options={options}
        // good={this.state.good}
        // neutral={this.state.neutral}
        // bad={this.state.bad}
        />
      </div>
    );
  }
}

export default App;
