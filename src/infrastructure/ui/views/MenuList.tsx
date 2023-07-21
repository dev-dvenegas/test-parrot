import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../application/reducers";
import MenuItem from "../components/MenuItem";
import useStoreActions from "../../../features/stores/useStoreActions";
import useProductsActions from "../../../features/products/useProductsActions";

const MenuList: React.FC = () => {
  const { stores } = useStoreActions();
  const { getProducts, handleUpdateProductAvailability } = useProductsActions();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.products,
  );
  return (
    <div>
      <div>Stores</div>
      {stores.map((store) => (
        <div key={store.uuid}>
          <p>tienda : {store.name}</p>
          <button onClick={() => getProducts(store.uuid)}>
            ver productos de tienda
          </button>
        </div>
      ))}
      <div>Menu List</div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data.map((category) => (
        <div key={category.uuid}>
          <h2>{category.name}</h2>
          <p>Number of elements: {category.products.length}</p>
          <ul>
            {category.products.map((product) => (
              <MenuItem
                key={product.uuid}
                product={product}
                handleAvailability={handleUpdateProductAvailability}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
