package Interfaces;

import Model.Product;
import java.util.List;

/**
 *
 * @author bryan
 */
public interface ProductCrud {
    public List listProducts(); 
    public Product listProduct (int id); // unico product
    public boolean addProduct(Product product);
    public boolean updateProduct(Product product); // recibe un producto de tipo producto
    public boolean deleteProduct(String nombre);
    //REGLA DE NEGOCIO
    public double calculateProfits(int quantity, double price);
}
