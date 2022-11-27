<%-- 
    Document   : listProviders
    Created on : 22 nov. 2022, 14:29:11
    Author     : micha
--%>

<%@page import="java.util.Iterator"%>
<%@page import="Model.Provider"%>
<%@page import="java.util.List"%>
<%@page import="ModelDAO.ProviderDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
              rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
              crossorigin="anonymous">
        <title>List Provider</title>
    </head>
    <body>
        <div class="container mt-4">
            <h1 class="text-center mt-4">
                Proveedores
            </h1>
            <table class="table table-info mt-4">
                <thead>
                    <tr>
                        <th class="text-conter">NOMBRE</th>
                        <th class="text-conter">CÉDULA</th>
                        <th class="text-conter">DIRECCIÓN</th>
                        <th class="text-conter">TELÉFONO</th>
                    </tr>
                </thead>
                <%
                    ProviderDAO providerDAO = new ProviderDAO();
                    List<Provider> list = providerDAO.listProviders();
                    Iterator<Provider> iterator = list.iterator();
                    Provider provider = null;
                    while (iterator.hasNext()) {
                        provider = iterator.next();
                %>
                <tbody>
                    <tr>
                        <td class="text-center">
                            <%= provider.getName()%> 
                        </td>
                        <td class="text-center">
                            <%= provider.getIdentify()%> 
                        </td>
                        <td class="text-center">
                            <%= provider.getDirection()%> 
                        </td>
                        <td class="text-center">
                            <%= provider.getPhone()%> 
                        </td>
                    </tr>
                    <%}%>
                </tbody>
            </table>
            <a href="../Controller1?accion1=addProviders">
                <button class="btn btn-success">
                    Agregar
                </button>
            </a>
            <a href="../Controller1?accion1=index">
                <button type="submit" class="btn btn-primary">
                    Salir
                </button>
            </a>
        </div>
    </body>
</html>
