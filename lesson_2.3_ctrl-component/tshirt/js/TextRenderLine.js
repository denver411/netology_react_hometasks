const TextRenderLine = ({ value, onChange }) => {
  const handleChange = event => {
    onChange(event.currentTarget.value);
  };
  return (
    <div className="type-text">
      <textaЕфыrea
        value={value}
        onChange={handleChange}
        name="text"
        id="font-text"
        cols="30"
        rows="2"
        placeholder="Введите текст для футболкиЕфы"
      />
    </div>
  );
};
