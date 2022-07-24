const ButtonCustom = ({ type, text, icon, action }) => {
  switch (type) {
    case "primary-icon":
      return (
        <button className={`${type = 'light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-dark-purple'} hover:text-dark-purple hover:bg-light-grey border border-dark-purple font-semibold py-2 px-4 rounded inline-flex items-center`}>
          <img src={icon} className="w-4 h-4 mr-2" />
          <span>{text}</span>
        </button>
      )
    case "primary-large":
      return (
        <button onClick={action} className="bg-medium-purple text-light-grey font-semibold py-2 px-4 border border-dark-purple rounded hover:text-light-grey hover:bg-light-purple text-center items-center md:w-80 w-full sm:text-sm">
          {text}
        </button>
      )
    case "secondary":
      return (
        <button className="bg-light-grey text-dark-purple font-semibold py-2 px-4 m-2 rounded hover:bg-light-blue border border-dark-purple">
          {text}
        </button>
      )
    default:
      return (
        <button className="bg-medium-purple text-light-grey font-semibold py-2 px-4 border border-dark-purple rounded m-2 hover:text-light-grey hover:bg-light-purple">
          {text}
        </button>
      )
  }
}

export default ButtonCustom;