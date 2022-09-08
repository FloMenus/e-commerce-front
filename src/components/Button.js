const Button = ({ name, type, handleClick, text }) => {
  return (
    <button
      onClick={handleClick}
      name={name}
      type={type}
      className="flex items-center justify-center w-full px-8 py-4 mt-4 bg-yellow-500 rounded-sm"
    >
      <span className="text-sm font-medium">{text}</span>

      <svg
        className="w-5 h-5 ml-1.5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    </button>
  )
}

export default Button
