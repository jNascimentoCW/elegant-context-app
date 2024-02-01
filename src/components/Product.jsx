export default function Products({
    id,
    img,
    title,
    price,
    description,
    click,
}) {
    return (
        <div className="bg-[#5f4e33] grid-cols-auto-fit-27 rounded-lg h-[100%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] relative">
            <div className="object-contain">
                <img className="rounded-lg" src={img} alt="mocha-img" />
            </div>
            <div className="flex flex-col p-5 pb-[6rem]">
                <p className="text-amber-400 text-xl">{title}</p>
                <p className="text-stone-400 pb-4">${price}</p>
                <p className="text-stone-300 pb-10">{description}</p>
                <button
                    className="absolute bottom-8 right-8 px-6 py-4 bg-amber-500 hover:bg-amber-600 self-end rounded-md"
                    onClick={click}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
