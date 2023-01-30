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

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  }

  positivePercentage = () => {
    return ((100/this.countTotalFeedback())*this.state.good)
  }


  render () {
    const options = Object.keys(this.state);
    return (
      <div className="App">
        <FeedbackOption options={options}
        onLeaveFeedback={this.onLeaveFeedback}/>
        <Statistics
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        total={this.countTotalFeedback()}
        positiveFeedback={this.positivePercentage()}
        />
      </div>
    );
  }
}

export default App;
