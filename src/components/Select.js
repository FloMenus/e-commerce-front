import Option from "./Option";

const Select = ({ handleChange, value, options }) => {
  return (
    <select onChange={handleChange} value={value}>
      <Option key={0} value="" content="All" />
      {options.map((option) => (
        <Option
          key={option.value}
          value={option.value}
          content={option.content}
        />
      ))}
    </select>
  );
};

export default Select;
