import React from 'react';

const DataTable = ({ columns, data, onRowAction }) => {
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
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-green-50 transition-colors">
              {columns.map((column) => (
                <td key={`${rowIndex}-${column.key}`} className="p-3 border-b">
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;