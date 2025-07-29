import { tabelPaginationStyles } from "../tableStyles/styles";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { tableColors } from "../tableStyles/color";

const TablePagination = ({
  table,
  setPagination,
  pagination,
  pageCount,
  recordCount,
}) => {
  const getPaginationButtons = (currentPageIndex, totalPages) => {
    const currentPage = currentPageIndex + 1;
    const buttons = [];

    // Always show the first page
    buttons.push(1);

    // Show near pages
    if (currentPage > 3) {
      buttons.push("• • •");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      buttons.push(i);
    }

    if (currentPage < totalPages - 2) {
      buttons.push("• • •");
    }

    // Always show the last page if totalPages > 1
    if (totalPages > 1) {
      buttons.push(totalPages);
    }

    return [...new Set(buttons)];
  };

  const handlePageChange = (number) => {
    setPagination({
      ...pagination,
      pageIndex: number - 1,
    });
  };

  return (
    <div style={{ ...tabelPaginationStyles.container }}>
      <div>
        <p style={{ ...tabelPaginationStyles.totalrecord }}>
          Total Record Count :{" "}
          <span style={{ color: tableColors.primaryColor, fontWeight: "700" }}>
            {recordCount}
          </span>
        </p>
      </div>

      <div style={{ ...tabelPaginationStyles.box }}>
        {table.getCanPreviousPage() && (
          <>
            <KeyboardDoubleArrowLeftIcon
              onClick={() => table.firstPage()}
              disabled={!table.getCanPreviousPage()}
              sx={{ ...tabelPaginationStyles.lastPageArrows }}
            />

            <ArrowLeftIcon
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              sx={{ ...tabelPaginationStyles.nextPageArrows }}
            />
          </>
        )}

        <div style={{ ...tabelPaginationStyles.pageButtonsBox }}>
          {getPaginationButtons(pagination.pageIndex, pageCount).map(
            (item, index) => (
              <button
                key={index}
                onClick={() =>
                  typeof item === "number" && handlePageChange(item)
                }
                disabled={item === "• • •"}
                style={
                  item === pagination.pageIndex + 1
                    ? {
                        ...tabelPaginationStyles.pageButtonActive,
                      }
                    : item === "• • •"
                    ? { ...tabelPaginationStyles.pageDotsButton }
                    : {
                        ...tabelPaginationStyles.pageButtons,
                      }
                }
              >
                {item}
              </button>
            )
          )}
        </div>
        {table.getCanNextPage() && (
          <>
            <ArrowRightIcon
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              sx={{ ...tabelPaginationStyles.nextPageArrows }}
            />

            <KeyboardDoubleArrowRightIcon
              onClick={() => table.lastPage()}
              disabled={!table.getCanNextPage()}
              sx={{ ...tabelPaginationStyles.lastPageArrows }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default TablePagination;
