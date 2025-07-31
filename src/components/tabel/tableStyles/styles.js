import { tableColors } from "./color";

// tabel styles
export const tabelStyles = {
  container: {
    padding: "8px",
    background: tableColors.backGroundColor,
  },
  box: {
    overflowX: "auto",
    width: "100%",
    height: "470px",
    boxSizing: "border-box",
  },
  tabel: {
    borderCollapse: "separate",
    borderSpacing: "2px 6px",
    minWidth: "100%",
    width: "max-content",
  },
  thead: {
    head: {},
    tr: {
      cursor: "pointer",
      position: "sticky",
      top: "0",
      zIndex: "1",
      border: "1px solid #ddd",
    },
    th: {
      padding: "8px",
      fontSize: "16px",
      fontWeight: "600",
      textAlign: "left",
      whiteSpace: "nowrap",
      background: tableColors.headRowColor,
    },
    sortingBox: {
      box: {
        display: "flex",
        alignItems: "center",
      },
      icon: {
        color: "#575757ea",
        marginLeft: "10px",
        fontSize: "20px",
      },
      heading: {},
    },
  },
  tbody: {
    tr: {
      border: "2px solid #ddd",
      boxShadow: "0 4px 6px -4px rgba(141, 141, 141, 0.2)",
    },
    td: {
      padding: "8px",
      textAlign: "left",
      fontSize: "16px",
      fontWeight: "400",
      whiteSpace: "nowrap",
      borderInline: "none",
      background: tableColors.bodyRowColor,
    },
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    color: tableColors.secondarColor,
  },
};

// tabel pagination styles

export const tabelPaginationStyles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 10px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  totalrecord: {
    fontSize: "14px",
  },
  box: {
    display: "flex",
    maxWidth: "400px",
    minWidth: "400px",

    justifyContent: "space-evenly",
    alignItems: "center",
  },
  lastPageArrows: {
    fontSize: "28px",
    fontWeight: "600",
  },
  nextPageArrows: {
    fontSize: "26px",
    fontWeight: "600",
  },

  pageButtonsBox: {
    width: "70%",
    display: "flex",
    justifyContent: "space-evenly",
  },
  pageButtons: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "14px",
    margin: "0 4px",
    background: "none",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    color: tableColors?.secondarColor,
  },
  pageButtonActive: {
    width: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "14px",
    margin: "0 2px",
    background: tableColors?.primaryColor,
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    color: tableColors?.light,
  },
  pageDotsButton: {
    all: "unset",
    fontWeight: "600",
    fontSize: "14px",
    cursor: "default",
    color: tableColors?.secondarColor,
  },
};

// search box styles

export const tableToolStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    box: {
      background: "white",
      borderRadius: "5px",
      boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)", // ✅ subtle shadow
      margin: "0px 5px",
    },
    icon: {
      fontSize: "22px",
      fontWeight: "600",
    },
  },
  search: {
    box: {
      position: "relative",
      display: "inline-block",
    },
    input: {
      width: "250px",
      height: "35px",
      borderRadius: "5px",
      border: `solid 1px #a1a1a1ff`,
      padding: "0px 10px",
      fontSize: "14px",
      outline: "0",
    },
    icon: {
      position: "absolute",
      right: "8px",
      bottom: "8px",
      color: "#a1a1a1ff",
    },
  },
  moreMenus: {
    menus: {},
  },
};

export const tableDateStyles = {
  container: {
    display: "flex",
    alignItems: "center",
    marginRight: "20px",
  },
  box: {
    margin: "0px 5px",
  },
  label: {
    display: "block",
    fontSize: "12px",
    color: "#a1a1a1ff",
  },
  input: {
    display: "block",
    height: "35px",
    borderRadius: "5px",
    border: `solid 1px #a1a1a1ff`,
    padding: "0px 10px",
    fontSize: "14px",
    outline: "0",
  },
};
