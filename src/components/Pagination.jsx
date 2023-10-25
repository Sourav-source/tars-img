import { useNavigate, useParams } from "react-router-dom";

function Pagination({ image }) {
  const params = useParams();
  const navigate = useNavigate();

  const pageNum = params.pagenumber;
  const searchVal = params.searchvalue;

  let newpageNum = Number(pageNum);

  function pageIncrement() {
    navigate(`/s/photos/${searchVal}/${newpageNum + 1}`);
  }

  function pageDecrement() {
    navigate(`/s/photos/${searchVal}/${newpageNum - 1}`);
  }

  return (
    <div className="flex items-center justify-center gap-10 mt-2.5 mb-5">
      {newpageNum > 1 && (
        <button
          className="px-3 py-3 text-sm font-semibold text-white capitalize bg-gray-900 rounded-lg w-max focus:outline-none"
          onClick={pageDecrement}
        >
          Previous
        </button>
      )}

      {newpageNum < image?.data.total_pages && (
        <button
          className="px-3 py-3 text-sm font-semibold text-white capitalize bg-gray-900 rounded-lg w-max focus:outline-none"
          onClick={pageIncrement}
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Pagination;
