package ConnectionDB;

import Model.MongoDB;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.MongoSecurityException;
import com.mongodb.client.MongoDatabase;
/**
 *
 * @author bryan
 */
public class ConnectionMongoDB {
        MongoDB mongoDB = new MongoDB();
        public static MongoDatabase database;
        
        public MongoDatabase connect (){
            String URI = "mongodb+srv://MarlonTeam2:2022@cluster0.pvig5s9.mongodb.net/test";
        
        try {
            mongoDB.setUri(new MongoClientURI(URI));
            mongoDB.setMongoClient(new MongoClient(mongoDB.getUri()));
            mongoDB.setMongoDataBase(mongoDB.getMongoClient().getDatabase("FashionStoreDB"));
            mongoDB.setMongoCollection(mongoDB.getMongoDataBase().getCollection((URI)));
            mongoDB.getMongoCollection().drop();
            
            } catch (MongoSecurityException a) {
                mongoDB.setMongoDataBase(null);
            }
            return mongoDB.getMongoDataBase();          
        }
        public void ConnectionMongo(){
        ConnectionMongoDB mongoDBConnection = new ConnectionMongoDB()  ;   
        database = mongoDBConnection.connect(); 
        }
}
