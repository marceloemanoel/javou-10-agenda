class AgendaController {
    constructor(api) {
        this.filtroPorNome = '';
        this.ordenacao = 'nome';
        this.listaDeContatos = undefined;
        this.contato = { nome: "Contato", sobrenome: "", email: "fake@contato.com" };
        this.idSelecionado = undefined;

        this.api = api;
        this.filtroPorNomeMudou(); // inital data load
    }

    filtroPorNomeMudou() {
        this.filtrar(this.filtroPorNome)
    }

    filtrar(texto) {
        this.carregando = true;
        this.api.getAgenda(texto)
            .then(contatos => _.sortBy(contatos, this.ordenacao))
            .then(contatosOrdernados => {
                this.carregando = false;
                this.listaDeContatos = contatosOrdernados;
            });
    }

    getContatosPorSobrenome(letra) {
        this.carregando = true;
        this.api.getContatosPorSobrenome(letra)
            .then(contatos => _.sortBy(contatos, this.ordenacao))
            .then(contatosOrdernados => {
                this.carregando = false;
                this.listaDeContatos = contatosOrdernados;
            });
    }

    ordenacaoMudou() {
        this.listaDeContatos = _.sortBy(this.listaDeContatos, this.ordenacao);
    }

    selecionouContato(id) {
        this.idSelecionado = id;
        this.api.getContato(id)
            .then(c => this.contato = c);
    }
}

AgendaController.$inject = ["api"];
