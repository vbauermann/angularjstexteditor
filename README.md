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
