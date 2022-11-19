package ModelDAO;

import ConnectionDB.ConnectionMongoDB;
import Interfaces.ProductCrud;
import Model.Product;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author bryan
 */
public class ProductDAO  implements ProductCrud{
    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    Connection connection;
    PreparedStatement preparedStatement;
    ResultSet resultSet;
    Product product = new Product(); 
    
    @Override
    public List listProducts() {
       ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
       ArrayList<Product> produtos = new ArrayList<>();
       MongoDatabase database = connectionMongoDB.connect();
       MongoCollection collection = database.getCollection("Products");
       MongoCursor<Document> cursor = collection.find().iterator();     
        try {
            
            while (cursor.hasNext()) {
                JsonObject jsonObject = new JsonParser().parse(cursor.next().toJson()).getAsJsonObject();
                Product producUnit = new Product();
                producUnit.setId(jsonObject.get("identificador").getAsInt());
                producUnit.setName(jsonObject.get("nombre").getAsString());
                producUnit.setDescription(jsonObject.get("descripcion").getAsString());
                producUnit.setQuantity(jsonObject.get("cantidad").getAsInt());
                producUnit.setPrice(jsonObject.get("precio").getAsFloat());
                //producUnit.set(jsonObject.get("total").getAsDouble());
                producUnit.setProfit(jsonObject.get("ganancia").getAsFloat());
                produtos.add(producUnit);
          }
           
       } finally {
           cursor.close();
       }
        return produtos; 
    }

    @Override
    public Product listProduct(int id) {
        String query = "SELECT * FROM `productos` WHERE id=" +id;
        try{
           // connection = connectionMySQL.getConnection();
            preparedStatement = connection.prepareStatement(query);
            resultSet = preparedStatement.executeQuery();
            while(resultSet.next()){
                product.setId(resultSet.getInt("id"));
                product.setName(resultSet.getString("name"));
                product.setPrice(resultSet.getFloat("price"));
                product.setQuantity(resultSet.getInt("quantity"));
                product.setProfit(resultSet.getFloat("profit"));
            }
        }catch(Exception e){
            System.out.println("Error " + e);
        }
        return product;
    }

    @Override
    public boolean addProduct(Product product) {
        String query = "INSERT INTO `productos`(`name`, `price`, `quantity`, `profit`) "
                + "VALUES ('"
                + product.getName()
                + "','"
                + product.getPrice()
                + "','"
                + product.getQuantity()
                + "','"
                + product.getProfit()
                + "')";
        
        try{
          //  connection = connectionMySQL.getConnection();
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.executeUpdate();
            
        }catch(Exception e){
            System.out.println("Error " + e);
        }
        return false;
    }

    @Override
    public boolean updateProduct(Product product) {
        String query = "UPDATE productos SET name = '"
                + product.getName() + "', price = '"
                + product.getPrice() + "', quantity = '"
                + product.getQuantity() + "', profit = "
                + product.getProfit() + "WHERE id =" + product.getId();
        try{
           // connection = connectionMySQL.getConnection();
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.executeUpdate();
        }catch(Exception e){
            System.out.println("Error " + e);
        }
        return false;
    }

    @Override
    public boolean deleteProduct(int id) {
        
        String query = "DELETE FROM productos WHERE id = " +id;
        //String query = "db.Products.remove({"indentificador": "2"})";
        try{
          //  connection = connectionMySQL.getConnection();
            preparedStatement = connection.prepareStatement(query);
            preparedStatement.executeUpdate();
        }catch(Exception e){
            System.out.println("Error " + e);
        }
        return false;
    }
    //regla de negocio
    @Override
    public double calculateProfits(int quantity, double price) {
        double profit;
        double IVA = (float) 0.12;
        profit = (quantity * price) * IVA;
        return profit;
    }
}
