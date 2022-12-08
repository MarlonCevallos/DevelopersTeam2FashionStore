package Controller;

import Model.Provider;
import ModelDAO.ProviderDAO;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author micha
 */
public class Controller1 extends HttpServlet {

    String exit = "jsps/index.jsp";
    String addProvider = "jsps/addProviders.jsp";
    String updateProvider = "jsps/updateProviders.jsp";
    String listProvider = "jsps/listProviders.jsp";
    Provider provider = new Provider();
    ProviderDAO providerDAO = new ProviderDAO();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try ( PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Controller1</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Controller1 at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String access = "";
        String acction1 = request.getParameter("accion1");
        switch (acction1) {
            case "addProviders": {
                access = addProvider;
            }
            break;

            case "Add": {
                String name = request.getParameter("name");
                String identify = request.getParameter("identify");
                String direction = request.getParameter("direction");
                String phone = request.getParameter("phone");

                provider.setName(name);
                provider.setIdentify(identify);
                provider.setDirection(direction);
                provider.setPhone(phone);
                providerDAO.addProvider(provider);
                access = listProvider;
            }
            break;

            case "updateProvider": {
                request.setAttribute("identifier", request.getParameter("identifier"));
                access = updateProvider;
            }
            break;

            case "exit": {
                access = exit;
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
