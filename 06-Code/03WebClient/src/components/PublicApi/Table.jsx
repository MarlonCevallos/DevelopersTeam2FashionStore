import { Box } from "@mui/system";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import LaunchIcon from "@mui/icons-material/Launch";

function TableArticles(props) {
  const articles = props.articles;
  const columns = [
    {
      field: "key",
      headerName: "ID",
      width: 250,
      renderCell: (params) => (
        <>
          <a
            href={`https://journals.plos.org/plosone/article?id=${params.value}`}
            target="_blank"
            rel="noreferrer"
          >
            <IconButton
              aria-label="delete"
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "#111",
                },
              }}
            >
              <LaunchIcon
                sx={{
                  fontSize: "1em",
                }}
              />
            </IconButton>
          </a>
          {params.value}
        </>
      ),
    },
    {
      field: "title_display",
      headerName: "TITULO",
      width: 500,
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
    { field: "author_display", headerName: "AUTORES", width: 300 },
    { field: "journal", headerName: "REVISTA", width: 100 },
    { field: "eissn", headerName: "EISSN", width: 100 },
    {
      field: "publication_date",
      headerName: "FECHA DE PUBLICACION",
      width: 200,
    },
    { field: "article_type", headerName: "TIPO DE ARTICULO", width: 150 },
    { field: "score", headerName: "PUNTUACION", width: 100 },
  ];

  return (
    <Box
      sx={{
        width: "75%",
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
      <h2>ARTÍCULOS</h2>
      <div style={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={articles.map((item) => ({
            id: item.id,
            key: item.id,
            title_display: item.title_display,
            author_display: item.author_display,
            journal: item.journal,
            eissn: item.eissn,
            publication_date: item.publication_date,
            article_type: item.article_type,
            score: item.score,
          }))}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
        />
      </div>
    </Box>
  );
}

export default TableArticles;
