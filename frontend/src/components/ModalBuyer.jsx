import React from "react";
import { X } from "phosphor-react";
import sepatu01 from "../assets/sepatu-01.png";


export default function ModalBuyer() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button className="m-5 w-80 bg-medium-purple text-light-grey font-semibold  py-2 px-4 rounded hover:text-dark-purple hover:bg-light-grey border border-dark-purple"
        type="button"
        onClick={() => setShowModal(true)} 
        >
            Buy
      </button>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative max-w-sm ">
              {/*content*/}
              <div className="bg-white-normal p-3 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <button className="bg-transparent text-black text-sm p-2 ml-auto inline-flex items-center dark:hover:text-light-purple"
                  type="button"
                  onClick={() => setShowModal(false)}
                >   
                  <X size={24} weight="fill"  />
                </button>
                
                <div className="flex items-start justify-between pl-5">
                  <h3 className="text-sm text-black font-semibold mt-2">
                    Enter Your Bid Price 
                  </h3>
                </div>

                {/*body*/}
                <div className="relative p-3 pl-5 flex-auto">
                  <p className="text-textcolor1 text-sm leading-relaxed text-left">
                  Your bid price will be known by the seller, if the seller matches you will immediately contact the seller.
                  </p>
                    <div className="relative mx-2 bg-light-grey w-72 h-20 rounded-2xl text-black p-2  shadow-md ">
                        <div class="mb-4">
                            <img src={sepatu01} className="absolute ml-3 my-2 w-12 h-12 rounded-lg" alt="sepatu01"/>
                        </div>
                        <h3 className="text-dark-purple absolute mx-20 -my-2">Nike shoes</h3>
                        <h1 className="absolute mx-20 text-base mt-4">Rp. 950.000</h1>
                    </div>
                    <div className="m-2 pt-4 text-left">
                        <h1 className="text-xs -ml-2">Bargain Price</h1>
                        <input type="text" name="text" className="w-72 h-11 shadow-sm mt-1 px-3 py-2 bg-white border drop-shadow-lg placeholder-textcolor1 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" placeholder="Rp.0" />
                    </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="w-80 bg-medium-purple text-light-grey font-semibold  py-2 px-4 rounded hover:text-dark-purple hover:bg-light-grey border border-dark-purple"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Send
                </button>    
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black-normal"></div>
        </>
      ) : null}
    </>
  );
}