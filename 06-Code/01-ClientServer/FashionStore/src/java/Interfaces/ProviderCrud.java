package Interfaces;

import Model.Provider;
import java.util.List;

/**
 *
 * @author micha
 */
public interface ProviderCrud {

    public List listProviders();

    public Provider listProvider(String identify);

    public boolean addProvider(Provider provider);

    public boolean updateProvider(Provider provider);

    public boolean deleteProvider(String identify);
}
