package ModelDAO;

import ConnectionDB.ConnectionMongoDB;
import Interfaces.ProductCrud;
import Model.Product;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
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
    MongoDatabase mongoDatabase;
    ResultSet resultSet;
    Product product;
    String category;
    @Override
    public List listProducts() {
         ArrayList<Product> productList = new ArrayList<>();

        try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            FindIterable<Document> findIterable = collection.find(new Document());
            MongoCursor<Document> mongoCursor = findIterable.iterator();

            while (mongoCursor.hasNext()) {
                Document docObject = mongoCursor.next();
                product = new Product();
                product.setName(docObject.getString("nombre"));
                product.setDescription(docObject.getString("descripcion"));
                product.setPrice(docObject.getDouble("precio"));
                product.setQuantity(docObject.getInteger("cantidad"));
                product.setProfit(docObject.getDouble("ganancia"));
                productList.add(product);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }

        return productList;
    }
    @Override
    public Product listProduct(int id) {
      /*  String query = "SELECT * FROM `productos` WHERE id=" +id;
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
        }*/
        return product;
    }

    @Override
    public boolean addProduct(Product product) {
       //double iva = 0.12;
       calculateProfits(0, 0);
        
        String query = "{"
                + "nombre: " +"'"+ product.getName() + "'"+","
                + "descripcion: " +"'"+ product.getDescription()+ "'"+","
                + "cantidad: " + product.getQuantity() +","
                + "precio: " + product.getPrice() +","
                + "ganancia: " + product.getProfit()+","
                //+ "identificador: " +"'"+ product.getId() +","
                + "}";
       try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            collection.insertOne(Document.parse(query));
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }

        return false;
    }

    @Override
    public boolean updateProduct(Product product) {
        /*String query = "UPDATE productos SET name = '"
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
        }*/
        return false;
    }

    @Override
    public boolean deleteProduct(int id) {
        
        String query = "{"
                + "nombre: " +"'"+ product.getName() + "'"+","
                + "descripcion: " +"'"+ product.getDescription()+ "'"+","
                + "cantidad: " + product.getQuantity() +","
                + "precio: " + product.getPrice() +","
                + "ganancia: " + product.getProfit()+","
                //+ "identificador: " +"'"+ product.getId() +","
                + "}";
       
          try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            collection.insertOne(Document.parse(query));
        } catch (MongoException e) {
            System.out.println("Error" + e);
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
