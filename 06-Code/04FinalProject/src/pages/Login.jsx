/* Author: Steven Jaramillo*/

import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "../css/login.module.css";

const Login = () => {
  const clientID =
    "251742290273-2marja185r0v9n3u0ost29e361msl243.apps.googleusercontent.com";

  const navigate = useNavigate();
  useEffect(() => {
    const start = () => {
      gapi.auth2.init({ clientId: clientID });
    };
    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    console.log(JSON.parse(localStorage.getItem("user")));
    navigate("/");
  };

  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <main className={style.container__login}>
      <form className={style.form__container}>
        <h1 className={style.form__title}>Inicio Sesión</h1>
        <div className="form__group">
          <label className={style.form__label}>Correo electrónico: </label>
          <input
            type="email"
            className={`form-control ${style.form__input}`}
            placeholder="example@example.com"
          />
        </div>
        <div className="form__group">
          <label className={style.form__label}>Contraseña: </label>
          <input
            type="password"
            className={`form-control ${style.form__input}`}
          />
        </div>
        <button className={`btn btn-success ${style.form__button}`}>
          Iniciar
        </button>
        <hr />
        <h4 className="text-center">O</h4>
        <div className="d-flex justify-content-center mb-4">
          <GoogleLogin
            clientId={clientID}
            buttonText="Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
            className=""
          />
        </div>
      </form>
    </main>
  );
};

export default Login;
