import './checkout.css'

function CheckOut() {

    function comprar(event) {
        event.preventDefault();
        document.location.href = '/Compra-Realizada';
    }

    return (
        <>
            <main>
                <section id='texto-check'>
                    <h1>Agradecemos por sua compra</h1>
                    <h3>Nossas compras são realizadas somente com cartões</h3>
                    <p>Estamos a poucos passos de efetivar seu pedido <br />
                        Preencha o formulário a seguir e aproveite seus adesivos logo!</p>
                </section>

                <form onSubmit={comprar} class="row g-3 needs-validation" novalidate>
                    <div class="col-md-4 position-relative">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" placeholder='Insira seu nome' required/>
                            <div class="valid-tooltip">
                                Nome válido!
                            </div>
                    </div>
                    <div class="col-md-4 position-relative">
                        <label for="sobrenome" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="sobrenome" placeholder='Insira seu sobrenome' required/>
                            <div class="valid-tooltip">
                                Sobrenome válido!
                            </div>
                    </div>
                    <div class="col-md-4 position-relative">
                        <label for="email" class="form-label">E-mail</label>
                        <div class="input-group has-validation">
                            <input type="email" class="form-control" id="email" placeholder="exemplo@exemplo.com"aria-describedby="validationTooltipUsernamePrepend" required/>
                                <div class="invalid-tooltip">
                                    Por favor, informe um e-mail válido.
                                </div>
                        </div>
                    </div>
                    <div class="col-md-6 position-relative">
                        <label for="endereco" class="form-label">Endereço</label>
                        <input type="text" class="form-control" id="endereco" placeholder='Avenida, rua, número' required/>
                            <div class="invalid-tooltip">
                                Por favor, informe seu endereço.
                            </div>
                    </div>
                    <div class="col-md-6 position-relative">
                        <label for="cidade" class="form-label">Cidade</label>
                        <input type="text" class="form-control" id="cidade" required/>
                            <div class="invalid-tooltip">
                                Por favor, informe sua cidade.
                            </div>
                    </div>
                    <div class="col-md-3 position-relative">
                        <label for="estado" class="form-label">Estado</label>
                        <select class="form-select" id="estado" required>
                            <option selected disabled value="">Selecionar...</option>
                            <option value='rj'>Rio de Janeiro</option>
                            <option value='sp'>São Paulo</option>
                            <option value='pe'>Pernambuco</option>
                            <option value='pi'>Piauí</option>
                        </select>
                        <div class="invalid-tooltip">
                            Selecione um estado
                        </div>
                    </div>
                    <div class="col-md-3 position-relative">
                        <label for="cep" class="form-label">CEP</label>
                        <input type="text" class="form-control" id="cep" placeholder='XXXX-XXXX'required/>
                            <div class="invalid-tooltip">
                                Insira seu CEP
                            </div>
                    </div>
                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Finalizar</button>
                    </div>
                </form>

                
            </main>
        </>
    );
}

export default CheckOut;

/*


*/