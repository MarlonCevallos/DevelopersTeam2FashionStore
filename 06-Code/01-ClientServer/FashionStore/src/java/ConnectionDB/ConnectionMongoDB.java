package ConnectionDB;

import com.mongodb.MongoException;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;

/**
 *
 * @author bryan
 */
public class ConnectionMongoDB {

    private com.mongodb.client.MongoClient mongoClient = null;

    public ConnectionMongoDB() {
        try {
            String uri = "mongodb+srv://MarlonTeam2:2022@cluster0.pvig5s9.mongodb.net/test";
            mongoClient = MongoClients.create(uri);
        } catch (MongoException e) {
            System.out.println(e);
        }
    }

    public MongoDatabase getMongoDatabase() {
        return mongoClient.getDatabase("FashionStoreDB");
    }
}
