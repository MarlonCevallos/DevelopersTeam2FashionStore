<%-- 
    Document   : addProviders
    Created on : 22 nov. 2022, 14:28:36
    Author     : micha
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" href="css/formStyles.css" type="text/css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
          rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
          crossorigin="anonymous">
    <title>Add Provider</title>
    <body>
        <div class="container mt-4">
            <h1 class="text-center mt-4">
                Registrar Proveedor
            </h1>
            <form action="Controller1">
                <div class="row mt-4">
                    <div class="col">
                        <label>Nombre </label>
                        <input type="text" name="name" class="form-control">
                    </div>
                    <div class="col">
                        <label>Cédula </label>
                        <input type="text" name="identify" class="form-control">
                    </div>
                    <div class="col">
                        <label>Dirección </label>
                        <input type="text" name="direction" class="form-control">
                    </div>
                    <div class="col">
                        <label>Teléfono </label>
                        <input type="text" name="phone" class="form-control">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <button type="submit" value="Add" name="accion1" class="btn btn-success">
                            Agregar
                        </button>
                    </div>    
                </div>
            </form>
        </div>
         <img src="img/logo.jpg" class="img"/>
    </body>
</html>
