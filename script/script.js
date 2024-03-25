window.onload = function() {
    var resposta = confirm("Se você tem mais de 18 anos e deseja continuar clique em OK");
    
    if (!resposta) {
        window.location.href = "./pages/erro.html";
    }
}