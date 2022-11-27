package ModelDAO;

import ConnectionDB.ConnectionMongoDB;
import Interfaces.ProductCrud;
import Model.Product;
import com.mongodb.MongoException;
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
public class ProductDAO implements ProductCrud {

    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    ResultSet resultSet;
    Product product;

    @Override
    public List listProducts() {
        ArrayList<Product> productList = new ArrayList<>();

        try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Products");
            FindIterable<Document> findIterable = collection.find(new Document());
            MongoCursor<Document> mongoCursor = findIterable.iterator();
            int counter = 0;
            int productSales = 0;
            double addSales = 0;
            double totalProfits = 0;
            while (mongoCursor.hasNext()) {
                Document docObject = mongoCursor.next();
                product = new Product();
                counter = counter + 1;
                int products = docObject.getInteger("quantity");
                productSales = productSales + products;
                double price = docObject.getDouble("price");
                addSales = addSales + price;
                double profit = docObject.getDouble("profit");
                totalProfits = totalProfits + profit;
                totalProfits = Math.round(totalProfits * 100) / 100.0;
                product.setId(docObject.getInteger("id"));
                product.setName(docObject.getString("name"));
                product.setDescription(docObject.getString("description"));
                product.setPrice(docObject.getDouble("price"));
                product.setQuantity(docObject.getInteger("quantity"));
                product.setProfit(docObject.getDouble("profit"));
                product.setNumberSales(counter);
                product.setProductSales(productSales);
                product.setTotalSales(addSales);
                product.setTotalProfit(totalProfits);

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
                + "id: " + product.getId() + ","
                + "name: " + "'" + product.getName() + "'" + ","
                + "description: " + "'" + product.getDescription() + "'" + ","
                + "quantity: " + product.getQuantity() + ","
                + "price: " + product.getPrice() + ","
                + "profit: " + product.getProfit() + ","
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
        String query = "UPDATE productos SET name='"
                + product.getName() + "', description ='"
                + product.getDescription() + "',price  ='"
                + product.getPrice() + "',quantity  ='"
                + product.getQuantity() + "',profile  ="
                + product.getProfit() + "',WHERE id   =" + product.getId();
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
    public boolean deleteProduct(int id) {

        mongoDatabase = connectionMongoDB.getMongoDatabase();
        MongoCollection collection = mongoDatabase.getCollection("Products");
        collection.deleteOne(Filters.eq("id", id));

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

    @Override
    public double calculateTotalSales(double price) {
        double Sale = 10;
        Sale = Sale + price;
        return Sale;
    }
}
