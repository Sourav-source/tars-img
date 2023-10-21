import React from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "65%",
    height: "80%",
  },
};

function ImageModal({ setIsOpen, modalIsOpen, setModalDetails, modalDetails }) {
  function closeModal() {
    setIsOpen(false);
    setModalDetails(null);
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <AiOutlineClose
        size={33}
        className="float-right font-bold cursor-pointer"
        onClick={closeModal}
      />
      <div className="mt-8">
        <img
          className="object-cover max-w-[80vw] mx-auto rounded max-h-[50vh]"
          src={modalDetails?.urls.full}
          alt="Loading......"
        />
        <div className="flex flex-col justify-between p-4 leading-normal text-center">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {modalDetails?.description}
          </h5>
          <p className="mb-3 font-normal text-gray-700">
            {modalDetails?.alt_description}
          </p>
          <div className="flex items-center mt-2.5 mb-5 mx-auto">
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">
              Likes
            </h5>
            <span className="bg-slate-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 text-white">
              {modalDetails?.likes}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ImageModal;