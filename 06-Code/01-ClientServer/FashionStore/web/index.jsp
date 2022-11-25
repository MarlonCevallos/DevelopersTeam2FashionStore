<%-- 
    Document   : index
    Created on : 19 nov. 2022, 10:42:12
    Author     : bryan
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="css/styles.css" type="text/css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
              rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
              crossorigin="anonymous">
        <title>Fashion-Store</title>
    </head>
    <body>
         <div>
              <h1 class="text-center mt-4">
                TIENDA DE MODA
            </h1>
             <table align="center">
                
            <tr> 
             <td><img src="img/logo.jpg" alt=""/></td>
             <td>
             <button type="submit" id="AgregarProducto" class="button">     
                 <a class="text" href="jsps/listProducts.jsp">PRODUCTOS</a>
             </button>
             <br>
             <br>
             <button class="button" type="submit" id="Providers">     
             <a class="text" href="jsps/listProviders.jsp">PROVEEDORES</a>
             </button>
            </td>
             <td></td>
            </tr>
            <hr size=10 color="#B60DCC">
         </table>
         </div>
    </body> 
</html>
