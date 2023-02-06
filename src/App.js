import "./App.css";
import { Component } from "react";
import FeedbackOption from "./components/FeedbackOption";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import Section from "./components/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const name = event.currentTarget.innerText;
    return this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  };

  positivePercentage = () => {
    return (100 / this.countTotalFeedback()) * this.state.good;
  };

  render() {
    const options = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <div className="App">
        <Section title="Please leave your feedback">
          <FeedbackOption
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positiveFeedback={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
