# AngularJsTextEditor
Melhorias que foram feitas nesse projeto.

1. Encapsulado o rangy em um módulo angularjs
   - Essa mexida tem o intuito de evitar problemas caso se utilize o webpack como bundle
2. Ajustado UI do componente
3. Ajustado angularjstexteditorSanitize para ser compátivel com versões mais novas do angularJs
4. Melhorias de estilo
5. Ajustado build para ser feito utilizando gulp
6. Removido alguma ferramentas que não estavam sendo utilizadas

# Como deve ser utilizado?
Para que o componente funcione é necessário ter as importações na seguinte ordem:

```html
  <script src="../dist/angularjstexteditorSanitize.min.js"></script>
  <script src="../dist/angularjstexteditorRangy.min.js"></script>
  <script src="../dist/angularjstexteditorSetup.min.js"></script>
  <script src="../dist/angularjstexteditor.min.js"></script>
```
### Para não ter problemas com algumas tags ou estilos se perdendo, o componente deve estar conforme abaixo

```html
     <angularjstexteditor ta-keep-styles="true" ng-model="vm.meuTextoPersonalizado" ta-unsafe-sanitizer="true">
      </angularjstexteditor>
```
=======
## angularjstexteditor v2.0.0
===========


## Requisitos

1. `AngularJS` ≥ `1.3.x` Caso utilize a versão acima de 1.6.* 
2. `Rangy` ≥ `1.3.x`,
3. `Font-Awesome` ≥ `4.x` Preferência a mais recente
1. `Bootstrap` ≥ `3.x` Preferência a mais recente


## Licença
Este projeto é licenciado por [MIT license](http://opensource.org/licenses/MIT).

## Contribuidores

<a href="https://github.com/EbenauDev" target="_blank">João Tiago</a>
