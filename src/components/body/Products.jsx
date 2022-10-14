import { useContext } from "react";
import { ProductsContext } from "../../App";
import Card from "./card";

const Products = () => {
  const products = useContext(ProductsContext);

  return (
    <>
      <div className='grid relative$ grid-cols-3 gap-5 w-3/4 mx-auto'>
        {products.map((el) => (
          <Card key={el._id} {...el} />
        ))}
      </div>
    </>
  );
};

export default Products;
