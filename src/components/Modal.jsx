import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
        };
    });

    return createPortal(
        <dialog
            ref={dialog}
            className="backdrop:bg-stone-950/70 bg-[#d3b17b] p-6 w-[27%] rounded-md shadow-md font-merriweather"
        >
            {children}
            <form className="flex justify-end text-lg" action="dialog">
                <button className="px-4">Close</button>
                <button className="bg-[#31220b] hover:bg-[#382e1b] text-stone-300 hover:text-stone-100 p-2 rounded-md">
                    Checkout
                </button>
            </form>
        </dialog>,
        document.getElementById("modal-root")
    );
});

export default Modal;
