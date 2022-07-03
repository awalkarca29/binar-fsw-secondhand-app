import React from 'react';
import { Circle } from 'phosphor-react';

function Label() {
  return (
    <div >
      <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-dark-blue bg-light-blue  last:mr-0 mr-1">
        Placeholder
      </span>
      <span className="text-xs font-semibold inline-block py-1 px-2  rounded text-light-grey bg-medium-purple  last:mr-0 mr-1">
        Product Offer
      </span>
      <span className="text-xs w-24 font-semibold inline-block py-1 px-2  rounded text-light-grey bg-dark-blue last:mr-0 mr-1">
        Order Status
      </span>
      <span className="text-xs w-16 font-semibold inline-block py-1 px-2  rounded text-light-grey bg-success last:mr-0 mr-1">
        Received
      </span>
      <span className="text-xs w-16 font-semibold inline-block py-1 px-2  rounded text-light-grey bg-danger last:mr-0 mr-1">
        Rejected
      </span>
    </div>    
  )
}

export default Label