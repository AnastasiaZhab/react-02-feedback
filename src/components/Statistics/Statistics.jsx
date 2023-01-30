const Statistics = ({options}) => {
    return (
        <div>
            <h2>Statistics</h2>
    
            {options.map(option => {
                return (
                    <p key={option}>{option}: {option.value} </p>
                )
            })}

        </div>    
    )
};

export default Statistics;