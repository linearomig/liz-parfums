

function validarSenha() {

    NovaSenha = document.getElementById('NovaSenha').value;
    CNovaSenha = document.getElementById('CNovaSenha').value;

    if (NovaSenha != CNovaSenha) {
        alert("SENHAS DIFERENTES!\nFAVOR DIGITAR SENHAS IGUAIS");
    } else {
        document.FormSenha.submit();
    }


    <div className="container-fluid container_reset">
        <div className="row-fluid">
            <div className="well">
                <form action="troca_senha.php" method="POST" id="FormSenha" name="FormSenha">
                    <div className="centraliza_reset">
                        <fieldset>
                            <br /><br />
                            <div className="row">
                                <div className="span2"></div>
                                <div className="span3">Nova Senha:</div>
                                <div className="span6"><input type="password" maxlength="10" id="NovaSenha" /></div>
                            </div>
                            <div className="row">
                                <div className="span2"></div>
                                <div className="span3">Confirme a nova Senha:</div>
                                <div className="span6"><input type="password" maxlength="10" id="CNovaSenha" /></div>
                            </div>

                            <button type="reset" className="btn btn-primary pull-left botao_limpar_senha">Cancelar</button>
                            <button type="button" className="btn btn-primary pull-right botao_reset_senha" onClick="validarSenha()">Modificar</button>
                        </fieldset>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
