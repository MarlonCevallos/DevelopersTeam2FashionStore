/* Author: Steven Jaramillo*/

import React, { useState, useEffect } from "react";
import { getArticle } from "../services/axiosPublicApi";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function AbstractPage() {
  const [abstract, setAbstract] = useState("");
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }

    async function getParams() {
      const url = new URLSearchParams(window.location.search);
      const id = url.get("id");

      const article = await getArticle(id);
      setTitle(article.title_display);
      setAuthors(article.author_display);

      if (article.abstract[0] === "") setAbstract("Nothing to show");
      else setAbstract(article.abstract[0]);
    }

    getParams();
  }, []);

  return (
    <>
      <AppBar position="fixed" color="primary" sx={{ padding: "0 10%" }}>
        <Toolbar>
          <Link to="/publicapi/">
            <IconButton sx={{ color: "#fff" }} aria-label="Return" size="large">
              <ArrowBackIcon sx={{ fontSize: "1.5em" }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        fullWidth
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <Box
          sx={{
            margin: "0px 15%",
            marginTop: "100px",
            padding: "50px 5%",
            height: "100%",
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "1px 1px 5px #333",
          }}
        >
          <Box>
            <h1 className="title">{`${title}`}</h1>
          </Box>
          <Box>
            <h2>{authors.join(", ")}</h2>
          </Box>

          <Box
            sx={{
              borderRadius: "15px",
              boxShadow: "1px 1px 5px #333",
              padding: "30px",
              background: "#eeeeee",
              textAlign: "justify",
            }}
          >
            <Typography variant="h4">Abstract: </Typography>
            <p>{abstract}</p>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AbstractPage;
