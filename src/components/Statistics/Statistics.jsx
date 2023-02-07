import s from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
        <div className={s.div}>
            <span>good: {good}</span>
            <span>neutral: {neutral}</span>
            <span>bad: {bad}</span>
            <span className={s.total}>Total: {total}</span>
            <span className={s.feedback}>Positive feedback: {Math.round(positiveFeedback)} %</span>
    
            {/* {options.map(option => {
                return (
                    <p key={option}>{option}: {option.value} </p>
                )
            })} */}

        </div>    
    )
};

export default Statistics;