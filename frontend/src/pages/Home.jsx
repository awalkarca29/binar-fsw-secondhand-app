import { Navbar, CardProduct, CarouselHeadline, Footer } from '../components';

const Home = () => {
    return (
        <div>
            <Navbar />
            <br /><br /><br />
            <CarouselHeadline />
            <h2 className="text-3xl text-dark-purple font-bold my-8">Explore Our Valuable Products</h2>
            <div className="flex flex-wrap justify-center">
                <CardProduct
                    imgSrc='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b92c70e8-9d43-4901-b33e-9ebb9f2e9cfd/zoomx-invincible-run-flyknit-2-road-running-shoes-0lCQ5S.png'
                    category='Fashion'
                    title='Nike ZoomX Invincible Run Flyknit 2'
                    price='2,849,000'
                    location='East Jakarta'
                />
                <CardProduct
                    imgSrc='https://www.tradeinn.com/f/13779/137792376/noble-collection-harry-potter-wand-with-bookmark.jpg'
                    category='Stationary'
                    title='Noble collection Harry Potter Wand With Bookmark'
                    price='250,000'
                    location='South Jakarta'
                />
                <CardProduct
                    imgSrc='https://i5.walmartimages.com/asr/3e332be0-ea10-431e-bae6-f3293ed5cfb9_2.123d235a2dae23631b1aa212a92ec198.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
                    category='Fashion'
                    title='Harry Potter Invisibility Cloak with Exclusive Gift Box Package'
                    price='670,000'
                    location='Semarang'
                />
                <CardProduct
                    imgSrc='https://www.adidas.co.id/media/catalog/product/g/x/gx6395_sl_ecom.jpg'
                    category='Fashion'
                    title='Adidas Superstar Shoes'
                    price='1,450,000'
                    location='East Jakarta'
                />
                <CardProduct
                    imgSrc='https://d3998kv9mq5thy.cloudfront.net/1645686335133.jpeg'
                    category='Fashion'
                    title='NIKE ZOOM FREAK 3 NRG BLUE X UNO'
                    price='1,250,000'
                    location='Bandung'
                />
                <CardProduct
                    imgSrc='https://assets.teenvogue.com/photos/5a74994905a0581fa4da7d93/1:1/w_1000,h_1000,c_limit/Balenciaga-Crocs-Tout.jpg'
                    category='Fashion'
                    title='Crocs x Balenciaga'
                    price='3,500,000'
                    location='Makassar'
                />
                <CardProduct
                    imgSrc='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU83_VW_PF+watch-41-alum-midnight-nc-7s_VW_PF_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171035000,1631661182000'
                    category='Fashion'
                    title='Apple Watch Midnight Aluminum Case with Sport Band'
                    price='4,120,000'
                    location='Bandung'
                />
                <CardProduct
                    imgSrc='https://www.garmin.co.id/m/id/g/products/forerunner-745-black-cf-xl.png'
                    category='Fashion'
                    title='Garmin Smartwatch Forerunner 745'
                    price='3,500,000'
                    location='Bekasi'
                />
            </div>
            <Footer />
        </div>
    )
}

export default Home;