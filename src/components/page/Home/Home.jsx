import { useParams } from "react-router-dom";
import { Loading } from "../../layout";
import { useFetch } from "../../../hooks/useFetch";
import { getProducts } from "../../../services/getProducts";
import HomePresentational from "./HomePresentational";

function Home() {
  const { categoryId } = useParams();
  const { data, isLoading } = useFetch(getProducts, categoryId);

  if (isLoading) return <Loading />;
  return <HomePresentational data={data} />;
}

export default Home;
