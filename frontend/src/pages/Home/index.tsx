import Footer from "componets/Footer";
import NavBar from "componets/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
      <>
      <NavBar />

      <div className="container" >
        <h2 className = "bs-font-sans-serif " >  Página Inicial  </h2>

        <Link className= "btn btn-primary btn-lg"to="/Formulario">
          Acessar Formulario
        </Link>
        
      </div>

       <Footer />
    </>
      
    );
}

export default Home;
