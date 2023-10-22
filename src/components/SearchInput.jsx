import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { imageSearch } from "../redux/searchSlice";
import toast from "react-hot-toast";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(imageSearch(inputValue)).then((result) => {
      if (result?.payload.status === 200 && result?.payload.data.total > 0) {
        navigate(`/s/photos/${inputValue}`);
        toast.success(result?.payload?.status + "  SUCCESS");
      } else if (
        result?.payload.status === 200 &&
        result?.payload.data.total === 0
      ) {
        navigate(`/`);
        toast.error("No Images Found !!!");
      } else result?.error.message && toast.error(result?.error.message);
    });
  };

  return (
    <>
      {location.pathname === "/" && (
        <>
          <h1 className="mb-2 text-3xl font-extrabold text-gray-900">
            High Resolution Images
          </h1>
          <p className="mb-4 text-base font-semibold text-gray-500">
            At the edge of your fingers
          </p>
        </>
      )}
      <form onSubmit={submitHandler}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative w-full border-2 border-gray-300 rounded-lg">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-[calc(100%-118px)] p-4 pl-10 text-sm text-gray-900 bg-gray-50 focus:outline-none rounded-lg"
            placeholder="Search Images by Name ..."
            required=""
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-gray-900 focus:outline-none font-semibold rounded-lg text-sm px-8 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchInput;
