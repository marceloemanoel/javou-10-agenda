import angular from "angular";
import AgendaController from "./agenda/AgendaController";
import AgendaApi from "./agenda/AgendaApi";

angular.module('app', [])
    .service('api', AgendaApi)
    .component('contato', {
        templateUrl: 'src/agenda/contato.html',
        bindings: {
            ngModel: '<'
        }
    })
    .component('agenda', {
        templateUrl: 'src/agenda/agenda.html',
        controller: AgendaController
    });
