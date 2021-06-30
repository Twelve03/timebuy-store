import useAxios from "../Components/useAxios";
import { Link } from "react-router-dom";

const Products = () => {
  let productList = useAxios(
    "https://60d1258d7de0b2001710a1cb.mockapi.io/nfts/"
  );

  return (
    <div className="pt-10 flex flex-col justify-center items-center">
      {productList.map((product) => (
        <div key={product.id} className="mt-4 h-2/4 w-2/4 border-solid border-4 border-light-blue-500">
          <Link to={`products/${product.id}`}>
            <h1>{product.name}</h1>
            <img src={product.img} className="h-1/4 w-1/4" alt="" />
          </Link>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
