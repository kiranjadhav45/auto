import React from "react";

function Pagination(props) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.itemList / props.pageSize); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="text-center">
      <ul className="pagination">
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
