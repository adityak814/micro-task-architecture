export const dataGridClassNames =
  "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200";

export const dataGridSxStyles = (isDarkMode: boolean) => ({
  // Header cells
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
    borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
  },

  // Header text
  "& .MuiDataGrid-columnHeaderTitle": {
    color: isDarkMode ? "#e5e7eb" : "#111827",
    fontWeight: 700,
  },

  // Grid borders
  "& .MuiDataGrid-withBorderColor": {
    borderColor: isDarkMode ? "#2d3135" : "#e5e7eb",
  },

  // Body cells
  "& .MuiDataGrid-cell": {
    border: "none",
  },

  // Rows
  "& .MuiDataGrid-row": {
    borderBottom: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
  },

  // Pagination
  "& .MuiTablePagination-root": {
    color: isDarkMode ? "#a3a3a3" : "#374151",
  },

  "& .MuiTablePagination-selectIcon": {
    color: isDarkMode ? "#a3a3a3" : "#374151",
  },

  "& .MuiDataGrid-filler": {
    backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
  },

  // Toolbar/Menu Icons
  "& .MuiIconButton-root": {
    color: isDarkMode ? "#a3a3a3" : "#374151",
  },

  // Footer
  "& .MuiDataGrid-footerContainer": {
    borderTop: `1px solid ${isDarkMode ? "#2d3135" : "#e5e7eb"}`,
    backgroundColor: isDarkMode ? "#1d1f21" : "#ffffff",
  },
});
