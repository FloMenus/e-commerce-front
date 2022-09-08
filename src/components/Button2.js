const Button = ({ name, type, handleClick, text }) => {
  return (
    <button
      onClick={handleClick}
      name={name}
      type={type}
      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-orange-500 rounded-sm"
    >
      <span className="text-sm font-medium">{text}</span>
    </button>
  )
}

export default Button
