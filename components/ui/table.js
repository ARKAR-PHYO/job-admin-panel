export const TableRow = ({ children, isEven, className }) => (
  <tr className={`${isEven ? "bg-gray-50" : "bg-white"} ${className || ""}`}>
    {children}
  </tr>
);

export const TableCell = ({ children, isHeader, className }) => {
  if (isHeader) {
    return (
      <th
        className={`px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50 ${
          className || ""
        }`}
      >
        {" "}
        {children}
      </th>
    );
  }

  return (
    <td
      className={`px-6 py-4 whitespace-no-wrap border-b border-gray-200 ${
        className || ""
      }`}
    >
      <div className={`text-sm leading-5 text-gray-500 ${className || ""}`}>{children}</div>
    </td>
  );
};

const Table = ({ children }) => {
  return (
    <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">{children}</table>
      </div>
    </div>
  );
};

export default Table;

// className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50"

// px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50
