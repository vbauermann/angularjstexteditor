# AngularJsTextEditor 2.0.10
Melhorias que foram feitas nesse projeto.
1. Corrigido problema ao gerar links
2. Corrigido tooltip do botões da toolbar

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

## Requisitos

1. `AngularJS` ≥ `1.6.x` Preferência a mais recente
3. `Font-Awesome` ≥ `4.x` Preferência a mais recente
1. `Bootstrap` ≥ `3.x` Preferência a mais recente


## Licença
Este projeto é licenciado por [MIT license](http://opensource.org/licenses/MIT).

## Contribuidores

<a href="https://github.com/EbenauDev" target="_blank">João Tiago</a>
