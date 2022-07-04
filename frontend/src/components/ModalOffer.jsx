import React from "react";
import { X } from "phosphor-react";
import sepatu01 from "../assets/sepatu-01.png";

export default function ModalOffer() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
        <button className="bg-medium-purple text-light-grey font-semibold  py-2 px-4  rounded hover:text-dark-purple hover:bg-light-grey border border-dark-purple"
         type="button"
         onClick={() => setShowModal(true)}
        >
          received
        </button>
      
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-96">
              {/*content*/}
              <div className="p-4 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white-normal outline-none focus:outline-none">
                {/*header*/}
                <button className="bg-transparent text-black text-sm p-2 ml-auto inline-flex items-center dark:hover:text-light-grey3"
                  type="button"
                  onClick={() => setShowModal(false)}
                >   
                  <X size={24} weight="fill"  />
                </button>
                
                <div className="flex items-start justify-center ">
                  <h3 className="text-sm text-medium-purple font-semibold mt-2">
                    Yeay you managed to get the right price!
                  </h3>
                </div>

                {/*body*/}
                <div className="relative p-3 pl-5 flex-auto">
                  <p className="text-textcolor1 text-sm leading-relaxed text-left">
                    Immediately contact the buyer via whatsapp for further transactions
                  </p>
                    <div className="relative mx-2 bg-light-grey w-72 h-56 rounded-2xl text-black p-4  drop-shadow-sm shadow-xl">
                        <h2 className="text-black mb-5">Product Match</h2>
                        <div className="mb-4">
                            <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="w-11 h-auto rounded-full absolute" alt=""/>
                            <h1 className="absolute mx-16 text-sm font-bold">Nama Pembeli</h1>
                            <h3 className="absolute mx-16 text-sm mt-6  text-textcolor2">Kota</h3>
                        </div>

                        <div className="mb-4">
                            <img src={sepatu01} className="absolute my-20 w-12 h-12 rounded-lg" alt="sepatu01"/>
                            <h3 className="text-dark-purple absolute mx-16 my-20">Nike shoes</h3>
                            <h1 className="absolute mx-16 text-sm my-24">Rp. 950.000</h1>
                            <h1 className="absolute mx-16 text-sm my-28 font-semibold text-black">Ditawar Rp. 800.000</h1>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end p-6   rounded-b">
                <button className="w-80 bg-medium-purple text-light-grey font-semibold  py-2 px-4 rounded hover:text-dark-purple hover:bg-light-grey border border-dark-purple"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Contact via whatsapp
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