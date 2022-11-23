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
    private int numberSales;
    private int productSales;
    private double totalSales;
    private double totalProfit;

    public int getProductSales() {
        return productSales;
    }

    public void setProductSales(int productSales) {
        this.productSales = productSales;
    }
    

    public double getTotalSales() {
        return totalSales;
    }

    public void setTotalSales(double totalSales) {
        this.totalSales = totalSales;
    }

    public int getNumberSales() {
        return numberSales;
    }

    public void setNumberSales(int numberSales) {
        this.numberSales = numberSales;
    }

    public Product(int numberSales, int productSales, double totalSales, double totalProfit) {
        this.numberSales = numberSales;
        this.productSales = productSales;
        this.totalSales = totalSales;
        this.totalProfit = totalProfit;
    }

    public double getTotalProfit() {
         //totalProfit = totalProfit + Math.round(profit*100)/100.0;
        return totalProfit;
    }

    public void setTotalProfit(double totalProfit) {
        this.totalProfit = totalProfit;
    }

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
