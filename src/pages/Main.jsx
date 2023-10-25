import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import { useSelector } from "react-redux";
import ImageModal from "../components/ImageModal";
import { AiFillHome } from "react-icons/ai";
import LoadSpinner from "../utils";

function Main() {
  const { searchvalue } = useParams();
  const { loading, error, image } = useSelector((state) => state.image);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // ---------------------------- Pagination ----------------------------

  const [totalPages, setTotalPages] = useState(image?.data.total_pages);
  const [page, setPage] = useState(1);

  return (
    <>
      {!loading && (
        <div className="flex items-center justify-between">
          <h1 className="my-4 text-2xl font-bold text-gray-900 uppercase">
            {searchvalue}
          </h1>
          <Link to="/">
            <AiFillHome size={33} />
          </Link>
        </div>
      )}
      {loading ? (
        <LoadSpinner />
      ) : !loading && error === null ? (
        <>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {image?.data.results &&
              image?.data.results.map((img) => (
                <ImageCard
                  img={img}
                  key={img.id}
                  setIsOpen={setIsOpen}
                  setModalDetails={setModalDetails}
                  setLoading={setLoading}
                  setTotalPages={setTotalPages}
                />
              ))}
          </div>
          <ImageModal
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            setModalDetails={setModalDetails}
            modalDetails={modalDetails}
            setLoading={setLoading}
            isLoading={isLoading}
          />
          <div className="flex items-center justify-center gap-10 mt-2.5 mb-5">
            {page > 1 && (
              <button className="px-3 py-3 text-sm font-semibold text-white capitalize bg-gray-900 rounded-lg w-max focus:outline-none">
                Previous
              </button>
            )}
            <button className="px-3 py-3 text-sm font-semibold text-white capitalize bg-gray-900 rounded-lg w-max focus:outline-none">
              Next
            </button>
          </div>
        </>
      ) : !loading && error ? (
        <div>{error?.message}</div>
      ) : null}
    </>
  );
}

export default Main;
