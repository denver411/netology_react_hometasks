const { Select } = window['antd'];

const Option = Select.Option;

const Autocomplete = () => {
  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  const handleBlur = () => {
    console.log('blur');
  };
  const handleFocus = () => {
    console.log('focus');
  };
  const handleFilter = (input, option) => {
    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  };

  return (
    <div>
      Тип квартиры:
      <br />
      <Select
        showSearch
        style={{ width: '240px' }}
        defaultValue="on-build-apartment"
        placeholder="Выберите тип квартиры"
        optionFilterProp="children"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        filterOption={handleFilter}>
        <Option value="on-build-apartment">Квартира в новостройке</Option>
        <Option value="ready-apartment">Готовая квартира</Option>
        <Option value="country-house">Загородный дом</Option>
      </Select>
    </div>
  );
};
