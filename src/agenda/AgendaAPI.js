export default class AgendaApi {
    constructor($http) {
        this.$http = $http;
    }

    getAgenda(pesquisa) {
        const params = {
            params: {
                'q': pesquisa,
                '_limit': 10
            }
        };
        return this.$http.get('/contatos', params)
            .then(response => response.data);
    }

    getContato(contatoId) {
        return this.$http.get(`/contatos/${contatoId}`)
            .then(response => response.data);
    }
}
