'use strict';

const DateInput = props => {

  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        placeholder="YYYY-MM-DD"
      />
    </div>
  );
};

DateInput.propTypes = {
  type: PropTypes.string.isRequired,
  label:PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  required: PropTypes.bool
};

DateInput.defaultProps = {
  value: (new Date()).toLocaleDateString("ru")
}
