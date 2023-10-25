import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import { useSelector } from "react-redux";
import ImageModal from "../components/ImageModal";
import { AiFillHome } from "react-icons/ai";
import LoadSpinner from "../utils";
import Pagination from "../components/Pagination";

function Main() {
  const { searchvalue } = useParams();
  const { loading, error, image } = useSelector((state) => state.image);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);
  const [isLoading, setLoading] = useState(false);

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
                />
              ))}
          </div>
          <Pagination image={image} />
          <ImageModal
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
            setModalDetails={setModalDetails}
            modalDetails={modalDetails}
            setLoading={setLoading}
            isLoading={isLoading}
          />
        </>
      ) : !loading && error ? (
        <div>{error}</div>
      ) : null}
    </>
  );
}

export default Main;
