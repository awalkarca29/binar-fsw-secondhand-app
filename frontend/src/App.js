import './App.css';
import 'antd/dist/antd.min.css';

import { CardProduct, CarouselHeadline, ModalNotification, Footer, SideNav } from './components';

function App() {
  return (
    <div className="App font-body">
      <SideNav 
        imgSrc='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
      /><br />
      <CarouselHeadline
        src='https://images.unsplash.com/photo-1541110729715-84eeda8be2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGFuZHNjYXBlJTIwdmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' /><br />
      <div className="flex flex-wrap justify-center">
        <CardProduct
          title='Product Name'
          price='150,000'
          location='East Jakarta'
        />
        <CardProduct
          title='Product Name'
          price='150,000'
          location='East Jakarta'
        />
        <CardProduct
          title='Product Name'
          price='150,000'
          location='East Jakarta'
        />
      </div>
      <br />
      <Footer />
      <br />
      <ModalNotification
      productName='Bershka Hooded Top'
      imgSrc='https://media.karousell.com/media/photos/products/2021/6/11/hoodie_bershka_1623402602_0f4daecf.jpg'
      seller='Jane Doe' 
      locationSeller='East Jakarta'
      date='22 June 2022, 22:22'
      openPrice='600,000'
      finalPrice='500,000'
      />
    </div>
  );
}

export default App;
