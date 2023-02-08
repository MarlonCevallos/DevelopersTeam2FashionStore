/* Author: Marlon Cevallos*/

import React, { useState, useEffect } from "react";
import { getClientPC } from "../services/axiosPublicApi";
import CardInfo from "../components/InfoClientePage/CardInfo";
import { Box } from "@mui/system";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";

function InfoClientPage() {
  const [filesAccepted, setFilesAccepted] = useState([]);
  const [host, setHost] = useState("");
  const [browser, setBrowser] = useState([]);
  const [language, setLanguage] = useState([]);
  const [oprativeSystem, setOprativeSystem] = useState("");
  const [ipOrigin, setIpOrigin] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }
    async function loadInfoPc() {
      const response = await getClientPC();

      setFilesAccepted(`${response.headers["Accept"]}`.split(","));
      console.log(filesAccepted);
      setBrowser(`${response.headers["Sec-Ch-Ua"]}`.split(`"`));
      setLanguage(response.headers["Accept-Language"]);
      setOprativeSystem(`${response.headers["Sec-Ch-Ua-Platform"]}`.split(`"`));
      setIpOrigin(response.origin);
      setHost(response.headers.Host);
    }

    loadInfoPc();
  }, []);

  function getIdiom() {
    const abr = `${language}`.substring(0, 2);
    if (abr === "es") return "Español";
    else if (abr === "en") return "Ingles";
    else return "Idioma no detectado";
  }

  return (
    <div>
      <AppBar position="fixed" color="primary" sx={{ padding: "0 10%" }}>
        <Toolbar>
          <Link to="/publicapi">
            <IconButton sx={{ color: "#fff" }} aria-label="Return" size="large">
              <ArrowBackIcon sx={{ fontSize: "1.5em" }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          marginTop: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">
          Información del computador del usuario
        </Typography>

        <Box
          sx={{
            width: "100%",
            margin: "10px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardInfo
            title="Archivos Aceptados"
            img="https://i.ibb.co/XL5wnd3/Png-Item-312785.png"
            info={filesAccepted}
          />
          <CardInfo
            title="Idioma"
            img="https://i.ibb.co/6PZxKtz/Idioma.jpg"
            info={getIdiom()}
          />
          <CardInfo
            title="Host"
            img="https://i.ibb.co/kKDPJZX/web.jpg"
            info={host}
          />
          <CardInfo
            title="IP de Origen"
            img="https://i.ibb.co/qy6g8sv/Ip.jpg"
            info={ipOrigin}
          />
          <CardInfo
            title="Navegador"
            img="https://i.ibb.co/SvZfwrz/browser.jpg"
            info={browser[5]}
          />
          <CardInfo
            title="Sistema Operativo"
            img="https://i.ibb.co/kGd8wqb/SO.png"
            info={oprativeSystem[1]}
          />
        </Box>
      </Box>
    </div>
  );
}

export default InfoClientPage;
