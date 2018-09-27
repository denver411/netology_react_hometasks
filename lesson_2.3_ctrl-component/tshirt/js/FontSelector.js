const FontSelector = props => {
  const handleChange = event => {
    const selectedFont = props.fonts.filter(
      item => item.name === event.currentTarget.value
    )[0];
    props.onSelect(selectedFont);
  };

  return (
    <div className="font-picker">
      {props.fonts.map(item => {
        return (
          <div key={item.name} className="grid center font-item">
            <input
              onChange={handleChange}
              type="radio"
              selected={item}
              value={item.name}
              name="font"
              id={item.name}
              defaultChecked={
                props.selected && props.selected.name === item.name
              }
            />
            <label htmlFor={item.name} class="grid-1">
              <PictureFont text="abc" path={item.path} />
            </label>
          </div>
        );
      })}
    </div>
  );
};
