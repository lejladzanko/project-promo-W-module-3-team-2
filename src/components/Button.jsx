import PropTypes from "prop-types";
import "../scss/components/Button.scss";

function Button(props) {
  return (
    <>
      <label htmlFor="image" className="button">
        {props.text}
      </label>
      <input className="addForm__hidden" type="file" name="image" id="image" />
    </>
  );
}


Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
