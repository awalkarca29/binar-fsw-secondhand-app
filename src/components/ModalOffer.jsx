import React, { useState, useEffect } from "react";
import { X } from "phosphor-react";
import { message } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

function ModalOffer({ showModal, setShowModal, buyerId, productImage, productName, productPrice, bargainPrice, sellerPhone }) {
  const [showModalVisible, setShowModalVisible] = useState(false);
  const [bargain, setBargain] = useState(false);

  let { id } = useParams();

  const handleOffer = async (e) => {
    e.preventDefault();

    await axios({
      url: `https://final-project-fsw-3-kel-1.herokuapp.com/buyer/bargain/${id}/accept`,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
    })
      .then(() => {
        message.success("Bargain successfully accepted!");
      }).catch(err => {
        // message.error("Failed to accept bargain!");
        console.log(err);
      })

  }
  return (
    <>
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
                  <X size={24} weight="fill" />
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
                      <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="w-11 h-auto rounded-full absolute" alt="" />
                      <h1 className="absolute mx-16 text-sm font-bold">Buyer ID: {buyerId}</h1>
                      {/* <h3 className="absolute mx-16 text-sm mt-6  text-textcolor2">Kota</h3> */}
                    </div>

                    <div className="mb-4">
                      <img src={productImage} className="absolute my-20 w-12 h-12 rounded-lg object-cover" alt="sepatu01" />
                      <h3 className="text-dark-purple absolute mx-16 my-20">{productName}</h3>
                      <h1 className="absolute mx-16 text-sm my-24">Rp. {productPrice}</h1>
                      <h1 className="absolute mx-16 text-sm my-28 font-semibold text-black">Ditawar {bargainPrice}</h1>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end p-6   rounded-b">

                  <form action={`https://wa.me/${sellerPhone}`}>
                    <button className="w-80 bg-medium-purple text-light-grey font-semibold  py-2 px-4 rounded hover:text-dark-purple hover:bg-light-grey border border-dark-purple"
                      type="submit"
                      onClick={handleOffer}
                    >
                      Contact via whatsapp
                    </button>
                  </form>
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

export default ModalOffer;