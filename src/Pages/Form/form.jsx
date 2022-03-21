import './form.css';
import { Btn } from '../../Components/Buttons/button';
import { useState } from 'react';



function Formulario() {

    const [contador, setContador] = useState(1);
    const [textoa, setTextoa] = useState('Alguma duvida ou recado?');

    function diminuir() {
        setContador(contador - 1);
    }

    function somar() {
        setContador(contador + 1);
    }

    function trocar(event) {
        event.preventDefault();
        document.location.href = "/Checkout";
    }

    return (
        <>
            <form className='form-adesivo' onSubmit={trocar} action="/Checkout" method='POST'>
                <div className='form-top'>
                    Formulário <br /> para compra de <br /> <strong>Pacote de adesivos</strong>
                </div>
                <fieldset id="adesivo">
                    <legend>Quais adesivos:</legend>
                    <p><input type='checkbox' id="react" name="react"  checked/> <label htmlFor='react'>React</label></p>
                    <p><input type="checkbox" id="vue" name="vue" /> <label htmlFor='vue'>Vue</label></p>
                    <p><input type="checkbox" id="angular" name="angular" /> <label htmlFor='angular'>Angular</label></p>
                </fieldset>

                <fieldset>
                    <legend>Mais adesivos</legend>
                    <select>
                        <option value='nextJs'>NextJs</option>
                        <option value='node'>Node</option>
                        <option value='bootstrap'>Bootstrap</option>
                        <option value='php'>PHP</option>
                    </select>
                </fieldset>

                <fieldset id="quantidade">
                    <legend>Quantos adesivos de cada?</legend>
                    <Btn funcao={diminuir} botao={"-"} /> <input type='number' min={1} value={contador} onChange={(e) => setContador(e.target.value)} /><Btn funcao={somar} botao={"+"} />
                </fieldset>

                <fieldset id="obs">
                    <legend>Observações:</legend>
                    <textarea id="mensagem" placeholder={textoa} rows='10'></textarea>
                </fieldset>
                <div className='enviar'>
                    <input type='submit' value='Enviar' />
                </div>
            </form>
        </>
    );
}

export default Formulario;

