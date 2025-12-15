export default function Home ()
{
    return (
        <div id="home" className="flex flex-col">
            <nav>
                <ul className="flex justify-center items-center my-10 gap-10 tracking-wider text-xl font-semibold">
                    <li><a href="#" className="hover:text-(--hover-color) transition duration-300 ease-in-out">Home</a></li>
                    <li><a href="#" className="hover:text-(--hover-color) transition duration-300 ease-in-out">Category</a></li>
                    <li><a href="#" className="hover:text-(--hover-color) transition duration-300 ease-in-out">Shop</a></li>
                    <li id="innerNav">
                        <a href="#" className="hover:text-(--hover-color) transition duration-300 ease-in-out">Popular</a>
                        <span id="innerLabel" className="text-white text-lg font-semibold">Hot Offer</span>
                    </li>
                    <li><a href="#" className="hover:text-(--hover-color) transition duration-300 ease-in-out">Recent</a></li>
                </ul>
            </nav>

            <div className="min-h-screen w-full flex justify-center items-center px-20">
                <div className="w-[40%] flex flex-col gap-y-10">
                    <div><p className="text-3xl font-bold tracking-[0.75rem] text-(--main-dark)">COLLECTION</p></div>
                    <div><p className="text-8xl font-bold">Rich Collection Of Flowers</p></div>
                    <div><p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti illo vero ducimus quis et temporibus ipsa itaque repudiandae error.</p></div>
                    <div><a href="#" className="bg-(--main-dark) text-white px-10 py-4">Shop Now</a></div>
                </div>
                <div className="w-[60%]">
                    <img src="model.png" alt="flower main" width="900px" />
                </div>
            </div>

            <div className="min-h-screen flex bg-amber-300">

            </div>
        </div>
    );
}