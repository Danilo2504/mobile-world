import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig.js";
import jsonProducts from "../mocks/products.json";

export const getProducts = async (categoryId) => {
  const productsRef = collection(db, "products");

  let products;

  // if (categoryId) {
  //   const productsFiltered = query(
  //     productsRef,
  //     where("category", "==", categoryId)
  //   );
  //   products = productsFiltered;
  // } else {
  //   products = productsRef;
  // }
  // const response = await getDocs(products);
  
  return jsonProducts;
  // return response.docs.map((product) => {
  //   return { ...product.data(), id: product.id };
  // });
};
