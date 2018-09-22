'use strict';

const HexInput = props => {
  function onChange(event) {
    if (props.onChange && typeof(props.onChange) === 'function'){
      props.onChange(event.currentTarget.value);
    }
  }

  return (
    <input
      value={props.value}
      onChange={onChange}
      type="text"
      className="hex-field js-hex-field"
      placeholder="#000000" />
  );
};
