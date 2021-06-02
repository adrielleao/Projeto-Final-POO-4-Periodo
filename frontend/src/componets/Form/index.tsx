import { getByLabelText } from "@testing-library/dom";
import { Link } from "react-router-dom";

const Form = () => {
    return (
        <form>
            <div className="row g-3">
                <label >Nome</label>
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
            </div>

            <div>
                <label>Idade:</label>
                <div className="col">
                    <input type="number" className="form-control" placeholder=" Idade" aria-label="Idade" />
                </div>
            </div>
            <div className="row g-3">
                <label className="autoSizingSelect">Gênero</label>
                <div className="col">
                    <select className="form-select" id="autoSizingSelect">
                        <option selected>Escolher...</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
            </div>

            <div>
                <label>Telefone:</label>
                <div className="col">
                    <input type="number" className="form-control" placeholder=" Telefone" aria-label="Telefone" />
                </div>
            </div>

            <div className="row g-3">
                <label >Endereço</label>

                <div className="col-sm-7">
                    <input type="text" className="form-control" placeholder="City" aria-label="City" />
                </div>
                <div className="col-sm">
                    <input type="text" className="form-control" placeholder="State" aria-label="State" />
                </div>
                <div className="col-sm">
                    <input type="text" className="form-control" placeholder="Zip" aria-label="Zip" />
                </div>
            </div>

            <div>
                <label>Formação:</label>
                <div className="col">
                    <input type="text" className="form-control" placeholder=" Ex. Computação" aria-label="Ex. Computação" />
                </div>
            </div>

            <div>
                <label> Qualificação:</label>
                <div className="col">
                    <input type="text" className="form-control" placeholder=" Qualificação" aria-label="Ex. Computação" />
                </div>
            </div>
            <div>

                <label>Exeperiência</label>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                    <label >Comments</label>
                </div>
            </div>

            <div className="row g-3">
                <label className="autoSizingSelect">Situação Laboral</label>
                <div className="col">
                    <select className="form-select" id="autoSizingSelect">
                        <option selected>Escolher...</option>
                        <option value="Masculino">Empregado</option>
                        <option value="Feminino">Desempregado</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
            </div>


            <Link className="btn btn-primary btn-lg" to="/dashboard">
                Enviar Formulario
            </Link>


        </form>

    );
}

export default Form;