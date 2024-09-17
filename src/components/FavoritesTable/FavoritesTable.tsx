"use client";

import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Property, PublicRoutes } from "@/models";

import { Delete } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { numberWithCommas } from "@/utilities";
import { useStore } from "@/store";

const PAGE_SIZE = 5;

const FavoritesTable: React.FC = () => {
  const favorites = useStore((state) => state.favoritesList);
  const removeFavorite = useStore((state) => state.removeFavorite);

  const handleClick = (property: Property) => {
    removeFavorite(property);
  };

  const columns: GridColDef[] = [
    {
      field: "actions",
      headerName: "",
      type: "actions",
      sortable: false,
      width: 50,
      renderCell: (params: GridRenderCellParams) => (
        <IconButton
          size="large"
          aria-label="favorites"
          aria-haspopup="true"
          onClick={() => handleClick(params.row)}
          color="inherit"
        >
          <Delete />
        </IconButton>
      ),
    },
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <Link to={`${PublicRoutes.PROPERTY_DETAILS}/${params.row.Id}`}>
            {params.value}
          </Link>
        </>
      ),
    },
    {
      field: "Location",
      headerName: "Location",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
    },
    {
      field: "Sale Price",
      headerName: "Sale Price",
      flex: 1,
      renderCell: (params: GridRenderCellParams) => (
        <>$ {numberWithCommas(params.value)}</>
      ),
    },
  ];

  return (
    <DataGrid
      rows={favorites}
      columns={columns}
      disableColumnSelector
      autoHeight
      initialState={{
        pagination: { paginationModel: { pageSize: PAGE_SIZE } },
      }}
      pageSizeOptions={[PAGE_SIZE]}
      getRowId={(row) => row.Id}
    />
  );
};

export default FavoritesTable;
