import React from "react";
import { X } from "phosphor-react";

const ModalFilter = ({ modalFilter, setModalFilter }) => {
  
  
  // const filterItem = (category) => {

  // }
  
  
  return (
    <div>
      {modalFilter ? (
        <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative max-w-sm ">
              {/*content*/}
              <div className="bg-white-normal p-3 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button className="bg-transparent text-black text-sm p-2 ml-auto inline-flex items-center dark:hover:text-light-purple"
                  type="button"
                  onClick={() => setModalFilter(false)}
                >
                  <X size={24} weight="fill" />
                </button>
                <h3 className="text-lg text-black font-semibold mt-2">
                  Filter Category
                </h3>

                {/*body*/}
                <div className="flex flex-col justify-center">
                  <button className="relative m-2 bg-light-grey hover:bg-light-blue w-72 h-auto rounded-lg text-black-normal font-medium py-4 shadow-md">
                    Clothes
                  </button>
                  <button className="relative m-2 bg-light-grey hover:bg-light-blue w-72 h-auto rounded-lg text-black-normal font-medium py-4 shadow-md">
                    Electronics
                  </button>
                  <button  className="relative m-2 bg-light-grey hover:bg-light-blue w-72 h-auto rounded-lg text-black-normal font-medium py-4 shadow-md">
                    Spareparts
                  </button>
                  <button  className="relative m-2 bg-light-grey hover:bg-light-blue w-72 h-auto rounded-lg text-black-normal font-medium py-4 shadow-md">
                    Furnitures
                  </button>
                  <button  className="relative m-2 bg-light-grey hover:bg-light-blue w-72 h-auto rounded-lg text-black-normal font-medium py-4 shadow-md">
                    Others
                  </button>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black-normal"></div>
        </div>
      ) : null}
    </div>
  );
}

export default ModalFilter;