import Option from "./Option"

const Select = ({ handleChange, value, options }) => {
  return (
    <select onChange={handleChange} value={value}>
      <Option key={0} value="" content="All" />
      {options.map((option) => (
        <Option key={option.id} value={option.id} content={option.name} />
      ))}
    </select>
  )
}

export default Select