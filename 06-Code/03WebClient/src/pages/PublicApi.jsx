import Table from "../components/PublicApi/Table";
import { getArticles } from "../services/axiosPublicApi";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import FormArticle from "../components/PublicApi/FormArticle";
import TableOptions from "../components/PublicApi/TableOptions";
import TableLayout from "../css/tableLayout.module.css";
import { useNavigate } from "react-router-dom";

const PublicApi = () => {
  const [formArticle, setFormArticle] = useState({
    article: "",
  });

  const [articles, setArticles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }
    async function loadArticles() {
      const response = await getArticles(formArticle.article);
      setArticles(response);
    }

    loadArticles();
  }, [formArticle]);

  return (
    <>
      <Box>
        <br />
        <FormArticle
          formArticle={formArticle}
          setFormArticle={setFormArticle}
          to="/"
        />
        <br />
        <br />
        <div className={TableLayout.container}>
          <TableOptions />
          <Table articles={articles} />
        </div>
      </Box>
    </>
  );
};
export default PublicApi;