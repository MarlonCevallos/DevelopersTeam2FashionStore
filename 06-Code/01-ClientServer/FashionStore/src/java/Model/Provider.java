package Model;

/**
 *
 * @author micha
 */
public class Provider {

    private String name;
    private String identify;
    private String direction;
    private String phone;

    public Provider() {
    }

    public Provider(String name, String identify, String direction, String phone) {
        this.name = name;
        this.identify = identify;
        this.direction = direction;
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdentify() {
        return identify;
    }

    public void setIdentify(String identify) {
        this.identify = identify;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

}
