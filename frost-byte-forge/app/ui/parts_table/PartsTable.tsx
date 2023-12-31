"use client";
import {
  DataGrid,
  GridColDef,
  GridRowModel,
  GridValidRowModel,
} from "@mui/x-data-grid";
import React from "react";
import StyledPaper from "../styled_paper/StyledPaper";
import { RecordModel } from "pocketbase";
import { Autocomplete, TextField } from "@mui/material";

interface PartsTableProps {
  parts: RecordModel[];
  descriptionOptions: RecordModel[];
  processRowUpdate: (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => GridValidRowModel;
}

const PartsTable = (props: PartsTableProps) => {
  const parts = props.parts;
  const descriptionOptions = props.descriptionOptions;

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
      renderCell: (params) => {
        return params.value;
      },
      renderEditCell: (params) => {
        return (
          <Autocomplete
            fullWidth
            freeSolo={true}
            value={params.value}
            options={descriptionOptions}
            renderInput={(params) => <TextField {...params} />}
            onChange={(event, newValue) => {
              if (newValue) {
                params.api.setEditCellValue({
                  id: params.id,
                  field: params.field,
                  value: newValue,
                });
              }
            }}
          />
        );
      },
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
        editMode="row"
        processRowUpdate={props.processRowUpdate}
        onProcessRowUpdateError={(error) => {
          console.error(error);
        }}
      />
    </StyledPaper>
  );
};
export default PartsTable;
