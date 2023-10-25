import Modal from "react-bootstrap/Modal";
import LoadSpinner from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

function ImageModal({
  setIsOpen,
  modalIsOpen,
  setModalDetails,
  modalDetails,
  setLoading,
  isLoading,
}) {
  const navigate = useNavigate();

  function closeModal() {
    setIsOpen(false);
    setModalDetails(null);
    setLoading(false);
  }

  function handleRequestCloseFunc(tag) {
    closeModal();
    const page = 1;
    navigate(`/s/photos/${tag}/${page}`);
  }

  if (isLoading) return <LoadSpinner />;

  if (!isLoading)
    return (
      <Modal show={modalIsOpen} onHide={closeModal}>
        <Modal.Header>
          <AiOutlineClose
            size={33}
            className="ml-auto text-gray-900 cursor-pointer"
            onClick={closeModal}
          />
        </Modal.Header>
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
              </h5>
            </div>
            <div className="flex items-center justify-center gap-3 mt-2.5 mb-5">
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
                    onClick={() => handleRequestCloseFunc(tag.title)}
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
        )
      </Modal>
    );
}

export default ImageModal;
