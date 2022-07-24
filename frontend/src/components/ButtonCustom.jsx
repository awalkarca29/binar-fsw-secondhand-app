const ButtonCustom = ({ type, text, icon, action, isSold }) => {
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
        <button onClick={action} className='bg-medium-purple text-light-grey font-semibold py-2 px-4 border border-dark-purple rounded hover:text-light-grey hover:bg-light-purple text-center items-center md:w-80 w-full sm:text-sm disabled:opacity-50' disabled={isSold}>
          {text}
        </button>
      )
    case "primary-light":
      return (
        <button class="bg-light-grey text-dark-purple font-bold m-2 py-2 px-4 rounded hover:bg-light-blue border border-light-grey" >
          {text}
        </button>
      )
    case "secondary":
      return (
        <button className="bg-light-grey text-dark-purple font-semibold mx-2 py-2 px-4 rounded hover:bg-light-blue border border-dark-purple">
          {text}
        </button>
      )
    case "secondary-light":
      return (
        <button class=" bg-transparent text-light-grey font-semibold m-2 py-2 px-4 border border-light-grey rounded hover:text-light-blue hover:border-light-blue">
          {text}
        </button>
      )
    default:
      return (
        <button className="bg-medium-purple text-light-grey font-semibold mx-2 py-2 px-4 border border-dark-purple rounded hover:text-light-grey hover:bg-light-purple">
          {text}
        </button>
      )
  }
}

export default ButtonCustom;