const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
    return (
        <div>
            <h2>Statistics</h2>

            <p>good: {good}</p>
            <p>neutral: {neutral}</p>
            <p>bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {Math.round(positiveFeedback)} %</p>
    
            {/* {options.map(option => {
                return (
                    <p key={option}>{option}: {option.value} </p>
                )
            })} */}

        </div>    
    )
};

export default Statistics;