import ImageShoes from "../assets/sepatu_1.png";

const ListBuyerHistory = () => {
    return (

        <div class="mt-8 mr-8 p-4 rounded-lg shadow w-full inline-block bg-light-grey">
            <div className="grid grid-flow-col flex-row justify-start content-start items-start text-left">
                <div>
                    <img className='rounded-md my-5 mr-5 w-20 h-20 object-none' src={ImageShoes} />
                </div>
                <div>
                    <span className="text-xs font-semibold py-1 px-2 rounded text-dark-blue bg-light-blue ">
                        Fashion
                    </span>
                    <p class="font-semibold mt-4 text-left text-sm">
                        Product Name
                    </p>
                    <p class="mt-1 text-sm text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque morbi donec senectus egestas viverra ut. Sagittis porta tortor augue at morbi pulvinar. Pellentesque enim mauris dui molestie et at. Ullamcorper posuere arcu molestie erat tristique enim, eu morbi.
                    </p>
                </div>
                <div class="inline-flex items-center justify-end w-full ">
                    <p class="text-xs text-grey mt-2 mr-2">
                        19 June 2022, 13:11
                    </p>
                </div>
            </div>
            <div className="grid grid-flow-col flex-row">
                <p class="text-lg font-bold text-right text-purple mr-2">
                    Rp 150.000
                </p>
            </div>
        </div>
    )
}

export default ListBuyerHistory;