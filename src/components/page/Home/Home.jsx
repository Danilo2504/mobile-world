import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import { getProducts } from "../../../services/getProducts";
import HomePresentational from "./HomePresentational";
import { Loading } from "../../layout";

function Home() {
  const { categoryId } = useParams();
  const { data, isLoading } = useFetch(getProducts, categoryId);

  if (isLoading) return <Loading />;
  return <HomePresentational data={data} />;
}

export default Home;
