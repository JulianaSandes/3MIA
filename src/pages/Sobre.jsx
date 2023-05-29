import NavProjeto from "../components/NavProjeto";
import Carrossel from "../components/Carrossel";
import Cards from "../components/Cards";
//import "../App.css";

function Sobre() {
  return (
    <div>
      <NavProjeto />
      <div className="sobre">
        <h1>VEJA NOSSOS TÊNIS</h1>
        <p>Presenteie quem você ama</p>
      </div>
      <div className="carrossel-group">
        <Carrossel />
      </div>
      <div className="card-group">
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
export default Sobre;
