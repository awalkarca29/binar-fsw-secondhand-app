import React from 'react';

const InputForm = ({ type, inputType, name, placeholder, value, action, disabled }) => {
  switch (type) {
    case "userdata":
      return (
        <input type={inputType} name={name} placeholder={placeholder} value={value} onChange={action} className={ inputType === 'email' ? `text-grey md:w-auto mt-2 md:mt-3 md:mb-5 md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200` : `md:w-auto mt-2 md:mt-3 md:mb-5 md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 focus:ring-gray-200`} disabled={disabled} />
      )
    case "price":
      return (
        <input type="text" name={name} className="w-72 h-11 shadow-sm mt-1 px-3 py-2 bg-white border drop-shadow-lg placeholder-textcolor1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder={placeholder} value={value} onChange={action} required />
      )
    case "textarea":
      return (
        <textarea name={name} placeholder={placeholder} value={value} onChange={action} className="lg:w-4/5 sm:w-4/5 lg:h-[180px] sm:h-28 lg:mx-12 sm:mx-8 my-4 px-2 bg-white-normal border border-slate-600 shadow-sm placeholder-grey focus:outline-none focus:border-light-grey block rounded-md sm:text-sm focus:ring-1 resize-none focus:ring-gray-200" required ></textarea>
      )
    case "textarea-auto":
      return (
        <textarea name={name} placeholder={placeholder} value={value} onChange={action} className="md:w-auto md:h-48 md:mt-3 md:mb-5 md:px-3 md:py-3 bg-light-grey border border-slate-600 shadow-sm placeholder-grey block rounded-md sm:text-sm focus:ring-1 resize-none focus:ring-gray-200" ></textarea>
      )
    default:
      return (
        <input type="text" name={name} placeholder={placeholder} value={value} onChange={action} className="lg:w-4/5 sm:w-4/5 lg:mx-12 sm:mx-8 my-4 px-2 py-2 border shadow-sm placeholder-grey focus:outline-none focus:border-light-grey focus:ring-purple block rounded-md sm:text-sm focus:ring-1" required />
      )
  }
}

export default InputForm