package ModelDAO;

import ConnectionDB.ConnectionMongoDB;
import Interfaces.ProviderCrud;
import Model.Provider;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import java.util.ArrayList;
import java.util.List;
import org.bson.Document;

/**
 *
 * @author micha
 */
public class ProviderDAO implements ProviderCrud {

    ConnectionMongoDB connectionMongoDB = new ConnectionMongoDB();
    MongoDatabase mongoDatabase;
    Provider provider;

    @Override
    public List listProviders() {
        ArrayList<Provider> providerList = new ArrayList<>();
        try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Provider");
            FindIterable<Document> findIterable = collection.find(new Document());
            MongoCursor<Document> mongoCursor = findIterable.iterator();

            while (mongoCursor.hasNext()) {
                Document docObject = mongoCursor.next();
                provider = new Provider();
                provider.setName(docObject.getString("name"));
                provider.setIdentify(docObject.getString("identify"));
                provider.setDirection(docObject.getString("direction"));
                provider.setPhone(docObject.getString("phone"));
                providerList.add(provider);
            }
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return providerList;
    }

    @Override
    public Provider listProvider(String identify) {
        return provider;
    }

    @Override
    public boolean addProvider(Provider provider) {
        String query = "{"
                + "name: " + "'" + provider.getName() + "'" + ","
                + "identify: " + "'" + provider.getIdentify() + "'" + ","
                + "direction: " + "'" + provider.getDirection() + "'" + ","
                + "phone: " + "'" + provider.getPhone() + "'" + ","
                + "}";
        try {
            mongoDatabase = connectionMongoDB.getMongoDatabase();
            MongoCollection collection = mongoDatabase.getCollection("Provider");
            collection.insertOne(Document.parse(query));
        } catch (MongoException e) {
            System.out.println("Error" + e);
        }
        return false;
    }

    @Override
    public boolean updateProvider(Provider provider) {
        return false;
    }

    @Override
    public boolean deleteProvider(String identify) {
        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
    }

}
