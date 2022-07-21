import { Circle } from 'phosphor-react';

function Buttons(type) {
  return (
    <div className='btn m-20'>
        <button className= {`${type='light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-dark-purple'} font-semibold  py-2 px-4  rounded hover:text-dark-purple hover:bg-light-grey border border-dark-purple`}>
          Primary
        </button>
        <button className="bg-transparent text-dark-purple font-semibold py-2 px-4 border border-dark-purple rounded m-2 hover:text-light-grey hover:bg-medium-purple">
          Secondary
        </button>
        <button className= {`${type='light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-light-grey'} hover:text-light-grey hover:bg-light-grey border border-dark-purple font-semibold py-2 px-4 rounded inline-flex items-center`}>
          <Circle className="w-4 h-4" size={24} color="#d9d9d9" weight="fill" />  
        </button>

        <div>
          <button className= {`${type='light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-dark-purple'} hover:text-dark-purple hover:bg-light-grey border border-dark-purple font-semibold py-2 px-4 rounded inline-flex items-center`}>
            <Circle className="w-4 h-4 mr-2" size={24} color="#d9d9d9" weight="fill" />
            <span>Primary</span>
          </button>

          <button className=" bg-transparent text-dark-purple font-semibold py-2 px-4 border border-dark-purple rounded m-2 hover:text-light-grey hover:bg-medium-purple  inline-flex items-center">
            <Circle className="w-4 h-4 mr-2" size={24} color="#d9d9d9" weight="fill" />
            <span>Secondary</span>
          </button>
        </div>
        
        <div>
          <button className= {`${type='light-grey' ? 'bg-medium-purple text-light-grey' : 'bg-transparent text-dark-purple'} text-center items-center sm:w-80 w-52 sm:text-sm hover:text-dark-purple hover:bg-light-grey border border-dark-purple font-semibold py-2 px-4 rounded `}>
            <span>Primary</span>
          </button>
          <button className="text-center items-center sm:w-80 w-52 bg-transparent text-dark-purple font-semibold py-2 px-9 border border-dark-purple rounded m-2 hover:text-light-grey hover:bg-medium-purple">
            Secondary
          </button>
        </div>

        <div>
          <button className="sm:w-80 w-52 text-center items-center bg-medium-purple text-light-grey font-semibold py-2 px-9 border border-dark-purple rounded m-2 hover:text-dark-purple hover:bg-light-grey">
            Primary
            <Circle className=" sm:ml-11 -mt-5" size={24} color="#d9d9d9" weight="fill" />
          </button>
          <button className="sm:w-80 w-52 text-center items-center bg-transparent text-dark-purple font-semibold py-2 px-9 border border-dark-purple rounded m-2 hover:text-light-grey hover:bg-medium-purple">
            Secondary
            <Circle className=" sm:ml-11 -mt-5" size={24} color="#d9d9d9" weight="fill" />
          </button>
        </div>
    </div>
    
  )
}

export default Buttons;