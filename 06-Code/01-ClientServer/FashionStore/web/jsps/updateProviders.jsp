<%-- 
    Document   : updateProviders
    Created on : 22 nov. 2022, 15:49:39
    Author     : micha
--%>

<%@page import="Model.Provider"%>
<%@page import="ModelDAO.ProviderDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
              rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
              crossorigin="anonymous">
        <title>Actualización de proveedores</title>
    </head>
    <body>
        <div class="container mt-4">
            <%
                ProviderDAO providerDAO = new ProviderDAO();
                String identify = request.getParameter("identify");
                Provider provider = (Provider) providerDAO.listProvider(identify);
            %>
            <h1 class="text-center mt-4">
                Modificar un proveedor
            </h1>
            <form action="../Controller1">
                <div class="row mt-4">
                    <label>Nombre </label> 
                    <input type="text" name="name" value="<%= provider.getName()%>" class="form-control">
                </div>
                <div class="row mt-4">
                    <label>Cédula </label> 
                    <input type="text" name="identify" value="<%= provider.getIdentify()%>" class="form-control">
                </div>
                <div class="row mt-4">
                    <label>Dirección </label> 
                    <input type="text" name="direction" value="<%= provider.getDirection()%>" class="form-control">
                </div>
                <div class="row mt-4">
                    <label>Teléfono </label> 
                    <input type="text" name="phone" value="<%= provider.getPhone()%>" class="form-control">
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <button type="submit" value="Actualizar" name="accion1" class="btn btn-primary">
                            Confirmar
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </body>
</html>
