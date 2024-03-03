import { useState } from "react"
import Modal from "./modal";
import './modal.css';
export default function ModalTest(){

    const [showModalPopup,setShowModalPopup] = useState(false);

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup)       
    }
    function onClose(){
        setShowModalPopup(false)
    }
    return (
        <div>
            <button onClick={handleToggleModalPopup}>Modal Popup</button>
            {
                showModalPopup && <Modal body={<div>body</div>} onClose={onClose}/>
            }
        </div>
    )
}