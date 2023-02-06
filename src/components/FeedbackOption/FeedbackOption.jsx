import s from './FeedbackOption.module.css';

const FeedbackOption = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {/* <h2>Feedback options</h2> */}

            {options.map(option => {
                return (
                    <button type="button" key={option} onClick={onLeaveFeedback}>{option}</button>
                )
            })}
        </div>
    )
};

export default FeedbackOption;