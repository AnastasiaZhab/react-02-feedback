import s from './FeedbackOption.module.css';

const FeedbackOption = ({options}) => {
    return (
        <div>
            <h2>Feedback options</h2>

            {options.map(option => {
                return (
                    <button type="button" key={option}>{option}</button>
                )
            })}
        </div>
    )
};

export default FeedbackOption;