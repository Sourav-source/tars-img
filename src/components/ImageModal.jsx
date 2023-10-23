import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import LoadSpinner from "../utils";
import { Link, useNavigate } from "react-router-dom";

function ImageModal({
  setIsOpen,
  modalIsOpen,
  setModalDetails,
  modalDetails,
  setLoading,
  isLoading,
}) {
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

  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
    setModalDetails(null);
    setLoading(false);
  }

  const handleClick = (tag) => {
    closeModal();
    navigate(`/s/photos/${tag}`);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="relative flex flex-row-reverse">
        <AiOutlineClose
          className="sticky top-0 right-0 text-2xl font-bold cursor-pointer"
          onClick={closeModal}
        />

        {isLoading ? (
          <LoadSpinner />
        ) : (
          <div className="w-full mt-8">
            <img
              className="object-cover max-w-[80vw] mx-auto rounded max-h-[50vh]"
              src={modalDetails?.urls.full}
              alt="Loading......"
            />
            <div className="flex flex-col justify-between p-4 leading-normal text-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 capitalize ">
                {modalDetails?.description}
              </h5>
              <p className="mb-3 font-bold text-gray-700 capitalize">
                {modalDetails?.alt_description}
              </p>
              <div className="flex items-center justify-center gap-3 mt-2.5 mb-5">
                <img
                  src={modalDetails?.user.profile_image.small}
                  alt=""
                  className="rounded-[50%]"
                />
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                  {" "}
                  {modalDetails?.user.username}
                  {" -- "}
                </h5>
                <h5 className="text-xl font-semibold tracking-tight text-slate-900">
                  Likes
                </h5>
                <span className="bg-slate-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 text-white">
                  {modalDetails?.likes}
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 mt-2.5 mb-5">
                {modalDetails?.tags &&
                  modalDetails?.tags.map((tag) => (
                    <button
                      className="w-full px-1 py-1 text-sm font-semibold text-white capitalize bg-gray-900 rounded-lg focus:outline-none"
                      onClick={() => handleClick(tag.title)}
                    >
                      {tag.title}
                    </button>
                  ))}
              </div>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={modalDetails?.links.download}
              >
                <button className="w-full px-8 py-2 text-sm font-semibold text-white bg-gray-900 rounded-lg focus:outline-none">
                  View
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ImageModal;
