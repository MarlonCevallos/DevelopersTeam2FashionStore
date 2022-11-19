package Controller;

import Model.Product;
import ModelDAO.ProductDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.bson.Document;

/**
 *
 * @author bryan
 */
public class Controller extends HttpServlet {
    String addProduct = "jsps/addProducts.jsp";
    String updateProduct = "jsps/updateProducts.jsp";
    Product product = new Product();
    ProductDAO productDAO = new ProductDAO();
    int id;
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
                
               }
            break;
            
            case "updateProduct":{
                request.setAttribute("identificador", request.getParameter("identificador"));
                access = updateProduct;
            }
            break;
            case "Actualizar":{
                    id = Integer.parseInt(request.getParameter("idProduct")); //no cambiar idProduct update productp jsp 
                    String name = request.getParameter("name");
                    float price = Float.parseFloat(request.getParameter("price"));
                    int quantity = Integer.parseInt(request.getParameter("quantity"));
                    double profit = productDAO.calculateProfits(quantity, price);
                    product.setId(id);
                    product.setName(name);
                    product.setPrice(price);
                    product.setQuantity(quantity);
                    product.setProfit(profit);
                    productDAO.updateProduct(product);
            }
            break;
            case "deleteProduct":{
                
               
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
