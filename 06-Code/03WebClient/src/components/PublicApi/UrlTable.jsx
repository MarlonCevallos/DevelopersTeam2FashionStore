import { Box } from "@mui/system";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";

function UrlTable(props) {
  const articles = props.articles;
  const columns = [
    {
      field: "key",
      headerName: "URL",
      width: 580,
      renderCell: (params) => (
        <>
          <a href={params.value} target="_blank" rel="noreferrer">
            <IconButton
              aria-label="delete"
              sx={{
                color: "primary.main",
                fontSize: "16px",
                textDecoration: "none",
                "&:hover": {
                  color: "#111",
                },
              }}
            >
              <LaunchIcon
                sx={{
                  fontSize: "1.5em",
                  marginRight: "5px",
                }}
              />
              {params.value}
            </IconButton>
          </a>
        </>
      ),
    },
    {
      field: "title_display",
      headerName: "TITULO",
      width: 550,
      renderCell: (params) => (
        <>
          <Link to={`/publicapi/abstract?id=${params.id}`}>
            <IconButton
              aria-label="delete"
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "#111",
                },
              }}
            >
              <LaunchIcon sx={{ fontSize: "1em" }} />
            </IconButton>
          </Link>
          {params.value}
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "90%",
        height: "74vh",
        marginBottom: "30px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: "20px",
        paddingRight: "20px",
        background: "#ffff",
        borderRadius: "15px",
        boxShadow: "1px 1px 20px #333",
      }}
    >
      <h2>URL DE LOS ARTÍCULOS</h2>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={articles.map((item) => ({
            id: item.id,
            key: `https://journals.plos.org/plosone/article?id=${item.id}`,
            title_display: item.title_display,
          }))}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      </div>
    </Box>
  );
}

export default UrlTable;
