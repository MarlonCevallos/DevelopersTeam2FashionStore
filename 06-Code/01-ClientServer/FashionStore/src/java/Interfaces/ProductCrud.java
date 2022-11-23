package Interfaces;

import Model.Product;
import java.util.List;

/**
 *
 * @author bryan
 */
public interface ProductCrud {
    public List listProducts(); 
    public Product listProduct (int id);
    public boolean addProduct(Product product);
    public boolean updateProduct(Product product);
    public boolean deleteProduct(int id);
    //REGLA DE NEGOCIO
    public double calculateProfits(int quantity, double price);
    public double calculateTotalSales(double price);
    
}
