import {useEffect} from "react";
import { createPortal } from "react-dom";
import styles from "./TodoModal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default function TodoModal({onClose, children}) {
    useEffect(() => {
        const closeOnKeydown = (event) => {       
            if (event.code === "Escape") {
                onClose();
            }
        }
        window.addEventListener('keydown', closeOnKeydown);
        
        return function listenerCleanup() {
            window.removeEventListener('keydown', closeOnKeydown);
        }
    }, [onClose]);

    const closeOnBackdrop = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }     
    }

    return createPortal(
        <div className={ styles.Overlay } onClick={closeOnBackdrop}>
            <div className={styles.Modal}>
                {children}
            </div>
        </div>,
        modalRoot
    ); 
}