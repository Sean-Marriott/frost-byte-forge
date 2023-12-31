"use client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import StyledPaper from "../styled_paper/StyledPaper";
import { RecordModel } from "pocketbase";

interface PartsTableProps {
  parts: RecordModel[];
}

const PartsTable = (props: PartsTableProps) => {
  const parts = props.parts;
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      editable: true,
    },
    {
      field: "condition",
      headerName: "Condition",
      flex: 0.8,
      editable: true,
      type: "singleSelect",
      valueOptions: ["New", "Used", "Faulty", "Test"],
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.8,
      editable: true,
      type: "singleSelect",
      valueOptions: ["Awaiting Dispatch", "Shipped", "Recieved"],
    },

    {
      field: "purchase_date",
      headerName: "Purchase Date",
      flex: 1,
      editable: true,
      type: "date",
      valueGetter: (params) => {
        return new Date(params.row.purchase_date);
      },
    },
  ];
  return (
    <StyledPaper>
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 25 } },
        }}
        rows={parts}
        columns={columns}
        pageSizeOptions={[25, 50, 100]}
      />
    </StyledPaper>
  );
};
export default PartsTable;
