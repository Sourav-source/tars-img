import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { imageSearch } from "../redux/searchSlice";
import toast from "react-hot-toast";

function SearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [noSearchResult, setNoSearchResult] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();
  const params = useParams();

  const pageNum = params.pagenumber;
  const searchVal = params.searchvalue;

  useEffect(() => {
    let newpageNum = Number(pageNum);
    setInputValue("");
    searchVal !== undefined && setNoSearchResult(false);
    searchVal !== undefined &&
      dispatch(imageSearch({ value: searchVal, pageNum: newpageNum })).then(
        (result) => {
          if (
            result &&
            result?.payload &&
            result?.payload.status === 200 &&
            result?.payload.data.total > 0
          ) {
            toast.success(result?.payload?.status + "  SUCCESS");
          } else if (
            result &&
            result?.payload &&
            result?.payload.status === 200 &&
            result?.payload.data.total === 0
          ) {
            setNoSearchResult(true);
            navigate(`/`);
            toast.error("No Images Found !!!");
          } else result?.error.message && toast.error(result?.error.message);
        }
      );
  }, [pageNum, searchVal, dispatch, navigate]);

  const submitHandler = (e) => {
    const page = 1;
    e.preventDefault();
    navigate(`/s/photos/${inputValue}/${page}`);
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
        <div className="relative w-full border-2 border-gray-300 rounded-lg max-sm:rounded-3xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 max-sm:left-auto max-sm:right-0 max-sm:px-[10px] max-sm:h-[70%] max-sm:bg-gray-900 max-sm:rounded-[50%] max-sm:my-auto max-sm:mr-[10px] max-sm:cursor-pointer" onClick={submitHandler}>
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
            className="block w-[calc(100%-118px)] p-4 pl-10 text-sm text-gray-900 bg-gray-50 focus:outline-none rounded-lg max-sm:pl-3 max-sm:w-[calc(100%-46px)] max-sm:rounded-3xl"
            placeholder="Search Images by Name ..."
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-gray-900 focus:outline-none font-semibold rounded-lg text-sm px-8 py-2 max-sm:hidden"
          >
            Search
          </button>
        </div>
      </form>
      {noSearchResult && (
        <div className="loading-center">
          <h1 className="mb-2 text-3xl font-extrabold text-red-700 ">
            OOps!! Nothing Found......
          </h1>
          <p className="mb-4 text-base font-semibold text-red-500">
            Plese Provide a valid search input value
          </p>
        </div>
      )}
    </>
  );
}

export default SearchInput;
