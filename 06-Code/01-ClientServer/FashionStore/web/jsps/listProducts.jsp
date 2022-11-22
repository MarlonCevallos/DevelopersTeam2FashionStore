<%-- 
    Document   : listProducts
    Created on : 19 nov. 2022, 10:41:29
    Author     : bryan
--%>

<%@page import="java.util.Iterator"%>
<%@page import="java.util.List"%>
<%@page import="Model.Product"%>
<%@page import="ModelDAO.ProductDAO"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
              rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
              crossorigin="anonymous">
        <title>Lista</title>
        
    </head>
    <body>
        <div class="container mt-4">
            <h1 class="text-center mt-4">
                Lista de Productos
            </h1>
            <table class="table table-info mt-4">
                <thead>
                    <tr>
                        <!--<th class="text-center">ID</th>-->
                        <th class="text-center">NOMBRE</th>
                        <th class="text-center">DESCRIPCIÓN</th>
                        <th class="text-center">PRECIO</th>
                        <th class="text-center">CANTIDAD</th>
                        <th class="text-center">GANANCIAS</th>
                        <th class="text-center">EDITAR</th>
                        <th class="text-center">ELIMINAR</th>
                    </tr>
                </thead>
                <%
                    ProductDAO productDAO = new ProductDAO();
                    List<Product> list = productDAO.listProducts();
                    Iterator<Product> iterator = list.iterator();
                    Product product = null;
                    while(iterator.hasNext()){
                        product = iterator.next();
                    
                %>
                <tbody>
                    <tr>
                        <!--<td class="text-center">
                             <%= product.getId()%> 
                        </td>-->
                        <td class="text-center">
                             <%= product.getName()%> 
                        </td>
                        <td class="text-center">
                             <%= product.getDescription()%> 
                        </td>
                        <td class="text-center">
                             <%= product.getPrice()%> 
                        </td>
                        <td class="text-center">
                             <%= product.getQuantity()%> 
                        </td>
                        <td class="text-center">
                             <%= product.getProfit()%> 
                        </td>
                        <td class="text-center">
                            <a href="../Controller?accion=updateProduct&id=<%= product.getId()%>">
                                <button class="btn btn-primary">
                                    Editar
                                </button>
                            </a>
                           
                        </td>
                        <td class="text-center">
                              <a href="../Controller?accion=deleteProduct">
                                <button class="btn btn-danger">
                                    Eliminar
                                </button>
                            </a> 
                        </td>
                    </tr>
                    <%}%>
                </tbody>
            </table>
                <a href="../Controller?accion=addProducts">
                    <button class="btn btn-success">
                        Agregar
                    </button>
                    </a>
                <a href="index.jsp">
                    <button type="submit" class="btn btn-primary">
                             Salir
                    </button>
                </a>
    </body>
</html>
