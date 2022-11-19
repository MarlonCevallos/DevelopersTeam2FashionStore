package Model;

/**
 *
 * @author bryan
 */
public class Product {
    private int id;
    private String name;
    private String description;
    private double price;
    private int quantity;
    private double profit;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getProfit() {
        profit = Math.round(profit*100)/100.0;
        return profit;
    }

    public void setProfit(double profit) {
        this.profit = profit;
    }

    public Product(int id, String name, String description, double price, int quantity, double profit) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.profit = profit;
    }

    public Product() {
    }

}
