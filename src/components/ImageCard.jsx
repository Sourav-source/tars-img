function ImageCard({ img, setIsOpen, setModalDetails, setLoading }) {
  function openModal() {
    setIsOpen(true);
    setModalDetails(img);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  return (
    <div
      className="w-full max-w-sm border border-gray-200 rounded-lg shadow cursor-pointer"
      style={{
        backgroundColor: img?.color,
        margin: "0 auto",
      }}
      onClick={openModal}
    >
      <img className="p-8 rounded-t-lg" src={img?.urls.regular} alt="" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {img?.description ? img?.description : img?.alt_description}
        </h5>
        <div className="flex items-center mt-2.5 mb-5">
          <h5 className="text-xl font-semibold tracking-tight text-white">
            {" "}
            Likes
          </h5>
          <span className="bg-slate-950 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3 text-white">
            {img?.likes}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
