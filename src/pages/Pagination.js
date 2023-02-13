import React from "react";

function Pagination(props) {
  const pageNumbers = [];
  // this loop for Number of Page Buttons
  for (let i = 1; i <= Math.ceil(props.itemList / props.pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="text-center">
      <ul className="pagination">
        {/* this map fun for pageNumber buttons  */}
        {pageNumbers.map((num) => (
          <li key={num} className="page-item">
            <a onClick={() => props.pagination(num)} className="page-link">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
