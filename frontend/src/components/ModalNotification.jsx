import { Button, Modal } from 'antd';
import { useState } from 'react';
import IconStore from '../assets/ic_store.svg';
import IconLocation from '../assets/ic_location.svg';

const ModalNotification = ({ imgSrc, productName, seller, locationSeller, date, openPrice, finalPrice }) => {
    const [modalNotificationVisible, setModalNotificationVisible] = useState(false);

    return (
        <div>
            <Button onClick={() => setModalNotificationVisible(true)}>
                Modal Notification
            </Button>
            <Modal
                style={{
                    borderRadius: "12px",
                    overflow: "auto"
                }}
                width={780}
                title="Detail Transaksi"
                centered
                visible={modalNotificationVisible}
                onOk={() => setModalNotificationVisible(false)}
                onCancel={() => setModalNotificationVisible(false)}
                footer={null}
            >
                <div className="grid grid-rows-3 justify-end">
                    <div className="grid grid-flow-col auto-cols-auto">
                        <div>
                            <img src={imgSrc} className="rounded-full object-cover h-24 w-24" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg m-0 pb-1">{productName}</p>
                            <div className="flex flex-row items-center text-icon text-medium-purple mb-2">
                                <img src={IconStore} />
                                <p className="m-0 pl-2">{seller}</p>
                            </div>
                            <div className="flex flex-row items-center text-icon text-medium-purple mb-2">
                                <img src={IconLocation} />
                                <p className="m-0 pl-2">{locationSeller}</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-md bg-success text-light-grey p-1 mb-2">Diterima</div>
                            <p className="text-grey">{date}</p>
                        </div>
                    </div>
                    <p className="text-sm m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus purus sit adipiscing sed odio. Vel at lorem netus dolor. Rutrum a vel feugiat molestie. Scelerisque pulvinar facilisis velit dui in ridiculus aliquet eget ultrices. Diam posuere leo, faucibus pellentesque mauris non. Erat varius posuere mi, convallis urna. Pretium at egestas tincidunt blandit morbi consectetur condimentum ornare.</p>
                    <div className="price-detail flex flex-col items-end">
                        <p className="line-through text-light-purple">Rp {openPrice}</p>
                        <p className="text-lg font-bold text-medium-purple">Rp {finalPrice}</p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default ModalNotification;