import Pagination from "@mui/material/Pagination";
import { Link, useLocation } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem";

export default function CustomPagination({ count }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get("page") || "1", 10);
  return (
    <Pagination
      count={count}
      showFirstButton
      showLastButton
      boundaryCount={2}
      page={page}
      size="large"
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`${location.pathname}${
            item.page === 1 ? "" : `?page=${item.page}`
          }`}
          {...item}
        />
      )}
    />
  );
}
