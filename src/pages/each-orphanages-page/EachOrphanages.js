import { useParams, Link } from "react-router-dom";
const EachOrphanages = () => {
  const { id } = useParams();
  return (
    <div>
      <section style={{textAlign:"center"}}><h1>orphanages home page for orphanage {id}</h1></section>
    </div>
  );
};

export default EachOrphanages;
