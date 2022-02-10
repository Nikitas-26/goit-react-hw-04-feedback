import propTypes from "prop-types";

const Feedback = ({ countFeedback, options }) => {
  return (
    <>
      {options.map((option) => (
        <button onClick={countFeedback} type="button" id={option} key={option}>
          {option}
        </button>
      ))}
    </>
  );
};
Feedback.propTypes = {
  countFeedback: propTypes.func.isRequired,
  options: propTypes.arrayOf(propTypes.string).isRequired,
};
export default Feedback;
