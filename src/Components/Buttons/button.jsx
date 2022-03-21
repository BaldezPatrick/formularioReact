import './button.css'

export function Btn(props) {
    return(
        <input id='butto' type="button" onClick={props.funcao} value={props.botao} />
    );
}