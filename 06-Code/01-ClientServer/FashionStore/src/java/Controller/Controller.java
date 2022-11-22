package Controller;

import ConnectionDB.ConnectionMongoDB;
import Model.Product;
import ModelDAO.ProductDAO;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 *
 * @author bryan
 */
public class Controller extends HttpServlet {
    String addProduct = "jsps/addProducts.jsp";
    String updateProduct = "jsps/updateProducts.jsp";
    String listProduct = "jsps/listProducts.jsp";
    String outProduct = "index.jsp";
    Product product = new Product();
    ProductDAO productDAO = new ProductDAO();
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Controller</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Controller at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String access = "";
        String acction = request.getParameter("accion");
        switch(acction){
            case "addProducts":{
               access = addProduct;
               
            }
            break;
            case "Agregar":{
                
                String name = request.getParameter("name");
                String description = request.getParameter("description");
                int quantity = Integer.parseInt(request.getParameter("quantity"));
                double price = Double.parseDouble(request.getParameter("price"));
                double profit =  productDAO.calculateProfits(quantity, price);
                
                product.setName(name);
                product.setDescription(description);
                product.setQuantity(quantity);
                product.setPrice(price);
                product.setProfit(profit);
                productDAO.addProduct(product);
                access = listProduct;
               }
            break;
            
            case "updateProduct":{
                request.setAttribute("identificador", request.getParameter("identificador"));
                access = updateProduct;
            }
            break;
            case "Actualizar":{
            }
            break;
            case "deleteProduct":{
              ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
              MongoDatabase mongoDatabase;
              mongoDatabase = connectionMongoDB.getMongoDatabase();
              MongoCollection collection = mongoDatabase.getCollection("Products");
              collection.deleteOne(Filters.eq("_id", "63792c953e0b53695bdd673c"));
              access = listProduct;
            }
            break;
            
            }
        
        RequestDispatcher view = request.getRequestDispatcher(access);
        view.forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
