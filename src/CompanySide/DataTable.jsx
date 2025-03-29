import React from 'react';

const DataTable = ({ columns, data }) => {
  if (!Array.isArray(data)) {
    console.error("DataTable received invalid data:", data);
    return <p>No data available</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-green-50">
            {columns.map((column) => (
              <th key={column.key} className="text-left p-3 border-b">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center p-3">
                No records found
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-green-50 transition-colors">
                {columns.map((column) => (
                  <td key={`${rowIndex}-${column.key}`} className="p-3 border-b">
                    {column.render ? column.render(row) : row[column.key] || "—"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
