class AgendaApi {
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
    return this.$http.get('/api/contatos', params)
      .then(response => response.data);
  }
  getContatosPorSobrenome(letra) {
    const params = {
      params: {
        'sobrenome_like': `^${letra}`,
        '_limit': 10
      }
    };
    return this.$http.get('/api/contatos', params)
            .then(response => response.data);
  }

  getContato(contatoId) {
    return this.$http.get(`/api/contatos/${contatoId}`)
      .then(response => response.data);
  }
}
AgendaApi.$inject = ["$http"];
export default AgendaApi;
