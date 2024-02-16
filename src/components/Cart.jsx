/*eslint-disable*/
import Modal from "./Modal";

import { useRef } from "react";

import logoImg from "../assets/logo.png";

export default function Cart({ productsOnCart, increaseDecrease }) {
    let counter = productsOnCart.products.length;
    let price = 0;

    productsOnCart.products.map((product) => {
        price += product.price * product.quantity;
    });

    console.log(price);

    const modal = useRef();

    function handleCart() {
        modal.current.open();
    }

    function closeCart() {
        modal.current.close();
    }

    return (
        <div>
            <Modal ref={modal}>
                <h2 className="text-amber-800 text-xl pb-5">YOUR CART</h2>
                <div className="text-lg">
                    <ul className=" rounded-md">
                        {productsOnCart.products.map((products) => (
                            <li
                                key={products.id}
                                className="flex justify-between rounded-md bg-[#fbd392] mb-2"
                            >
                                <div className="w-[75%] p-2">
                                    <span>
                                        {products.title}{" "}
                                        <span>${products.price}</span>
                                    </span>
                                </div>
                                <div className="flex items-center w-[25%] justify-between p-2">
                                    <button
                                        onClick={() =>
                                            increaseDecrease(products.id, "-")
                                        }
                                    >
                                        -
                                    </button>
                                    <span>{products.quantity}</span>
                                    <button
                                        onClick={() =>
                                            increaseDecrease(products.id, "+")
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-end py-2">
                        <p>Cart Total: ${price}</p>
                    </div>
                </div>
            </Modal>

            <header className="relative flex items-center pb-[3rem]">
                <div className="w-[5rem]">
                    <img src={logoImg} alt="logo-img" />
                </div>
                <h1 className="uppercase pl-6 text-amber-500 text-4xl ">
                    Elegant Context
                </h1>
                <button
                    className="absolute right-0 text-lg rounded-md bg-amber-300 hover:bg-amber-400 px-6 py-2"
                    onClick={handleCart}
                >
                    Cart ({counter})
                </button>
            </header>
        </div>
    );
}
