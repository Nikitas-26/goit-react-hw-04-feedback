import PropTypes from 'prop-types';
const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
    return ( <>
    <h2>Statistics</h2>
    <p>good: {good}</p>
    <p>neutral:{neutral}</p>
    <p>bad:{bad}</p>
    <p>total:{total}</p>
    <p>positivePercentage:{Math.floor(positivePercentage)}%</p>
    </> );
}
Statistics.propTypes = { 
    good: PropTypes.number.isRequired ,
    neutral: PropTypes.number.isRequired ,
    bad: PropTypes.number.isRequired ,
    total: PropTypes.number.isRequired ,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;