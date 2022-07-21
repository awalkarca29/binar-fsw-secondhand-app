import { Navbar, Footer, CardAbout } from "../components";
import ImageLogo from "../assets/logo-dark.svg";
import IllustrationShopping from "../assets/il_shopping.svg";
import IllustrationShoppingCart from "../assets/il_shopping_cart.svg";
import IllustrationOnlineShopping from "../assets/il_online_shopping.svg";

const about = () => {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col justify-center items-center content-center mt-36 mx-auto w-1/2">
                <img src={ImageLogo} className="" />
                <h1 className="text-4xl font-bold text-dark-purple mt-2">SecondHand</h1>
                <h2 className="text-2xl font-semibold text-dark-purple">Your number one solution.</h2>
            </div>
            <div className="flex flex-wrap justify-center content-center items-center">
                <CardAbout
                    imgSrc={IllustrationOnlineShopping}
                    title="Easy to use"
                />
                <CardAbout
                    imgSrc={IllustrationShopping}
                    title="Various products"
                />
                <CardAbout
                    imgSrc={IllustrationShoppingCart}
                    title="Offer as you want"
                />
            </div>
            <Footer />
        </div>
    )
}

export default about;