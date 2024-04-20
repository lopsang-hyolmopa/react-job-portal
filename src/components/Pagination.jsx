import ReactPaginate from "react-paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { number, func } from "prop-types";

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  console.log(currentPage);

  const showPrevButton = currentPage !== 0;
  const showNextButton = currentPage !== totalPages - 1;
  return (
    <div>
      <ReactPaginate
        breakLabel={<span className="mr-2">...</span>}
        previousLabel={
          showPrevButton ? (
            <span className="size-10 flex items-center justify-center border border-indigo-100 bg-indigo-100 rounded-md mr-2 hover:bg-indigo-700 hover:text-white">
              <FaAngleLeft />
            </span>
          ) : null
        }
        nextLabel={
          showNextButton ? (
            <span className="size-10 flex items-center justify-center border border-indigo-100 bg-indigo-100 rounded-md hover:bg-indigo-700 hover:text-white">
              <FaAngleRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center my-8"
        pageClassName="flex items-center justify-center size-10 text-lg mr-2 bg-white border border-gray-300 rounded-md hover:bg-indigo-700 hover:text-white"
        activeClassName="bg-indigo-700 text-white"
      />
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  totalPages: number,
  setCurrentPage: func,
  currentPage: number,
};
