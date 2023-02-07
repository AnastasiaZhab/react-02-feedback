import s from './FeedbackOption.module.css';

const FeedbackOption = ({options, onLeaveFeedback}) => {
    return (
        <div className={s.div}>
            {/* <h2>Feedback options</h2> */}

            {options.map(option => {
                return (
                    <button type="button" className={s.button} key={option} onClick={onLeaveFeedback}>{option}</button>
                )
            })}
        </div>
    )
};

export default FeedbackOption;