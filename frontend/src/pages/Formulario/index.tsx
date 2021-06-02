import Footer from "componets/Footer";
import Form from "componets/Form";
import NavBar from "componets/NavBar";
import { Link } from "react-router-dom";

const Formulario = () => {
    return (
        <>
        <NavBar />
  
        <div className="container" >
          <h2 className = "bs-font-sans-serif " >  Dados Pessoais </h2>
          <Form /> 
        </div>
    
         
                
         <Footer />
      </>
    );
}

export default Formulario;
