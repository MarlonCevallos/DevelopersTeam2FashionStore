import React from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function TableOptions() {
  const btn = {
    background: "linear-gradient(45deg, #fe6b8b 20%, #ff8e53 80%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "o 3px 5px 2px rbga(255, 105, 135, .3)",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    height: 48,
    "&:hover": {
      opacity: [0.9, 0.9, 0.9],
    },
  };

  return (
    <Box
      sx={{
        width: "15%",
        height: "74vh",
        marginBottom: "30px",
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
      <h2>OPCIONES</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          to="/publicapi/url"
          style={{
            height: "100%",
            paddingTop: "12px",
            textDecoration: "none",
          }}
        >
          <Button to={`client-info`} sx={btn} className="text-center">
            Generar URL
          </Button>
        </Link>
        <Link
          to="/publicapi/client-info"
          style={{
            height: "100%",
            paddingTop: "12px",
            textDecoration: "none",
          }}
        >
          <Button to={`client-info`} sx={btn} className="text-center">
            Informacion Cliente
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default TableOptions;
