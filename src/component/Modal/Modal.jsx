import React from 'react'
import REACTDOM from 'react-dom'
import './Modal.css'



const Backdrop = (props)=> {

    return (
      <div
      
        onClick={props.handleRemoveModal}
        className="cursor-pointer backdrop"
      ></div>
    );

}


const ModalBody = (props)=> {

    return (
      <div className=" top-[30%] md:top-[35%] left-[22%] font-mono sm:left-[3%] md:left-[40%]    z-14 fixed">
        {props.children}
      </div>
    );

}


const elementPortal = document.getElementById("root")

const Modal = (props)=> {

    return (
      <>
        {REACTDOM.createPortal(<Backdrop handleRemoveModal={props.onCloseHandler} />, elementPortal)}
        {REACTDOM.createPortal(<ModalBody> {props.children} </ModalBody>, elementPortal)}
      </>
    );

}

export default Modal