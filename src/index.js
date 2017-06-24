import angular from "angular";
import AgendaController from "./agenda/AgendaController";
import AgendaApi from "./agenda/AgendaApi";
import "jquery";
import "materialize-css/dist/js/materialize.js";

import "materialize-css/dist/css/materialize.css";
import "./style.css";

const contatoTemplate = require("./agenda/contato.html");
const agendaTemplate = require("./agenda/agenda.html");

angular.module('app', [])
    .service('api', AgendaApi)
    .component('contato', {
        templateUrl: contatoTemplate,
        bindings: {
            ngModel: '<'
        }
    })
    .component('agenda', {
        templateUrl: agendaTemplate,
        controller: AgendaController
    });

angular.element(document).ready(() => {
    const app = document.createElement("div");
    app.className = "container";
    app.appendChild(document.createElement("agenda"));
    document.body.appendChild(app);
    angular.bootstrap(app, ["app"]);
    $('select').material_select();
});