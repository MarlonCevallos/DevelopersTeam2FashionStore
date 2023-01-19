import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function FormArticle(props) {
  const { formArticle, setFormArticle, to } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormArticle({ ...formArticle, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChange();
  };

  return (
    <form className="container d-flex" onSubmit={handleSubmit}>
      <Link to={to}>
        <IconButton sx={{ color: "#000" }} aria-label="Return" size="large">
          <ArrowBackIcon sx={{ fontSize: "1.5em" }} />
        </IconButton>
      </Link>
      <Box
        sx={{
          width: "500px",
          height: "60px",
          marginLeft: "auto",
          marginRight: "2%",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: "20px",
          background: "#fff" /* fallback for old browsers */,
          borderRadius: "15px",
          boxShadow: "1px 1px 20px #333",
        }}
      >
        <br />
        <TextField
          fullWidth
          color="secondary"
          size="small"
          name="article"
          id="article"
          value={formArticle.article}
          onChange={handleChange}
          placeholder="Artículo"
          label="Artículo"
        />
        <IconButton aria-label="search" size="large" color="secondary">
          <SearchIcon fontSize="inherit" />
        </IconButton>
        <br />
      </Box>
    </form>
  );
}

export default FormArticle;
