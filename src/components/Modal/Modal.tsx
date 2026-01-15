import { useEffect } from "react";
import { VscChromeClose } from "react-icons/vsc";
import './Modal.css';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal = ({ onClose, children }: ModalProps) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const handleBackdropClick = (event: React.MouseEvent) => {
        if(event.target === event.currentTarget) {
            onClose();          
        }
    };

    return (
        <div className="backdrop" onClick={handleBackdropClick}>
            <div className="modal">
                <button className="close" onClick={onClose}>
                    <VscChromeClose size={32} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;