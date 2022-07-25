import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";
import { X } from "phosphor-react";
import { message } from "antd";
import ButtonCustom from "./ButtonCustom";
import InputForm from "./InputForm";

const ModalBuyer = ({ modalNotificationVisible, setModalNotificationVisible, image, name, price }) => {
  let { id } = useParams();

  const [newBargain, setNewBargain] = useState({
    price: '',
    productId: Number(id)
  })

  const [navigate, setNavigate] = useState(false);

  const handleSubmit = async () => {
    await axios({
      url: "https://final-project-fsw-3-kel-1.herokuapp.com/buyer/bargain",
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      data: newBargain
    })

      .then(() => {
        message.success("Product successfully bargained!")
        setNavigate(true);
      }).catch(err => {
        message.error("Bargain failed!")
        console.log(err);
        setModalNotificationVisible(false)
      })
  }

  console.log('BARGAIN: ', newBargain);

  if (navigate) {
    return (
      <Navigate to="/" />
    )
  }

  return (
    <div>
      {modalNotificationVisible ? (
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
                  onClick={() => setModalNotificationVisible(false)}
                >
                  <X size={24} weight="fill" />
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
                      <img src={image} className="absolute ml-3 my-2 w-12 h-12 rounded-lg" alt="sepatu01" />
                    </div>
                    <h3 className="text-dark-purple w-full text-left absolute mx-20 -my-2">{name}</h3>
                    <h1 className="absolute mx-20 text-base mt-4">Rp. {price}</h1>
                  </div>
                  <div className="m-2 pt-4 text-left">
                    <h1 className="text-xs -ml-2">Bargain Price</h1>
                    <form onSubmit={handleSubmit}>
                      <InputForm
                        type="price"
                        placeholder="500000"
                        action={(e) => setNewBargain({ ...newBargain, price: Number(e.target.value) })}
                      />
                      <div className="flex items-center justify-center p-6 mt-2 rounded-b">
                        <ButtonCustom
                          type="primary-large"
                          text="Send"
                        />
                      </div>
                    </form>
                  </div>
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

export default ModalBuyer;