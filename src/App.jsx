import Products from "./components/Product";
import Cart from "./components/Cart";

import { useState } from "react";

import { PRODUCTS } from "./products.js";

function App() {
    const [productsCart, setProductCart] = useState({
        products: [],
    });

    function handleCart(id) {
        //check if the product already exist in the cart an increse the quantity
        if (productsCart.products.some((product) => product.id === id)) {
            productsCart.products.map((product) => {
                if (product.id === id) product.quantity++;
            });

            setProductCart((prevState) => {
                return {
                    ...prevState,
                    products: [...prevState.products],
                };
            });
        } else {
            // check if the product doesn't exist in the cart and add it
            const productById = PRODUCTS.filter((product) => product.id === id);

            const productsToBuy = {
                id: productById[0].id,
                title: productById[0].title,
                price: productById[0].price,
                quantity: 1,
            };

            setProductCart((prevState) => {
                return {
                    ...prevState,
                    products: [...prevState.products, productsToBuy],
                };
            });
        }
    }

    function increaseDecrease(id, plusOrMinus) {
        productsCart.products.map((product) => {
            //Adding and removing products from the cart
            if (product.id === id && plusOrMinus === "+") {
                product.quantity++;
            } else if (product.id === id && plusOrMinus === "-") {
                product.quantity--;
            }

            //finding the product to be removed
            const productToBeRemoved = productsCart.products.filter(
                (product) => product.id === id
            );

            //finding the index of the product inside productsCart to remove the product from cart
            const indexOfProductToRemove = productsCart.products.indexOf(
                productToBeRemoved[0]
            );

            //removing product from cart
            if (product.quantity <= 0) {
                productsCart.products.splice(indexOfProductToRemove, 1);
            }

            setProductCart((prevState) => {
                return {
                    ...prevState,
                    products: [...prevState.products],
                };
            });
        });
    }

    return (
        <div className="h-screen absolute mt-10 left-[50%] transform -translate-x-[50%] flex flex-col min-w-[70.9%] font-merriweather">
            <Cart
                productsOnCart={productsCart}
                increaseDecrease={increaseDecrease}
            />
            <p className="uppercase text-stone-500 text-2xl my-5 font-bold">
                Elegant Clothing for Everyone
            </p>
            <ul className="flex flex-wrap justify-center content-between gap-10 pb-10">
                {PRODUCTS.map((product) => (
                    <li key={product.id} className="min-w-[25rem] flex-1">
                        <Products
                            id={product.id}
                            img={product.image}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            click={() => handleCart(product.id)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
