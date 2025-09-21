import BookForm from "../components/book/book.form";

import { useState, useEffect } from "react";
import { fetchAllBookAPI } from "../services/api.service";
import BookTable from "../components/book/book.table";

const BookPage = () => {
  const [currentPageBook, setCurrentPageBook] = useState(1);
  const [pageSize, setPageSize] = useState(1);
  const [total, setTotal] = useState(0);

  const [dataBook, setDataBook] = useState([]);

  useEffect(() => {
    loadBook();
  }, [currentPageBook, pageSize]);

  const loadBook = async () => {
    const res = await fetchAllBookAPI(currentPageBook, pageSize);
    if (res.data) {
      setDataBook(res.data.data);
      setCurrentPageBook(res.data.metaPagination.currentPage);
      setPageSize(res.data.metaPagination.pageSize);
      setTotal(res.data.metaPagination.totalItems);
    }
  };
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <BookForm />
      <BookTable
        dataBook={dataBook}
        loadBook={loadBook}
        currentPageBook={currentPageBook}
        pageSize={pageSize}
        total={total}
        setCurrentPageBook={setCurrentPageBook}
        setPageSize={setPageSize}
      />
    </div>
  );
};

export default BookPage;
