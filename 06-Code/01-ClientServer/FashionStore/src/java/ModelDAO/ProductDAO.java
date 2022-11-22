package ModelDAO;

import ConnectionDB.ConnectionMongoDB;
import Interfaces.ProductCrud;
import Model.Product;
import com.mongodb.MongoException;
import com.mongodb.MongoClient;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;
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
                product.setName(docObject.getString("name"));
                product.setDescription(docObject.getString("description"));
                product.setPrice(docObject.getDouble("price"));
                product.setQuantity(docObject.getInteger("quantity"));
                product.setProfit(docObject.getDouble("profit"));
                productList.add(product);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }

        return productList;
    }
    @Override
    public Product listProduct(int id) {
        return product;
    }

    @Override
    public boolean addProduct(Product product) {
        String query = "{"
                + "name: " +"'"+ product.getName() + "'"+","
                + "description: " +"'"+ product.getDescription()+ "'"+","
                + "quantity: " + product.getQuantity() +","
                + "price: " + product.getPrice() +","
                + "profit: " + product.getProfit()+","
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
        return false;
    }

    @Override
    public boolean deleteProduct(String nombre) {
        System.out.println(nombre);
        String query = "{"
                + "_id: " +"'"+ "63792c953e0b53695bdd673c" + "'"+","
            //    + "descripcion: " +"'"+ product.getDescription()+ "'"+","
              //  + "cantidad: " + product.getQuantity() +","
               // + "precio: " + product.getPrice() +","
               // + "ganancia: " + product.getProfit()+","
                //+ "identificador: " +"'"+ product.getId() +","
                + "}";
         
          try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            collection.deleteOne(Filters.eq("_id", "63792c953e0b53695bdd673c"));
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
