angularjstexteditor v1.2.0
===========

## Notas da versão
```html
   <ul>
       <li>Alterar tamanho da fonte</li>
       <li>Alterar cor da fonte</li>
       <li>Adicionar marcação de texto</li>
       <li>Correção de bug</li>
       <li>Melhorado botões</li>
   </ul>
```

## Requisitos

1. `AngularJS` ≥ `1.3.x` Caso utilize a versão acima de 1.6.* terá problemas com lowercase
2. `Rangy` ≥ `1.3.x`,
3. `Font-Awesome` ≥ `4.x` Preferência a mais recente
1. `Bootstrap` ≥ `3.x` Preferência a mais recente

## Aviso

Caso utilize o angularjstexteditor em uma versão acima do 1.6.8 terá problemas com angular lowercase, pois a sintaxe muda de uma versão para outra. 


**Via Bower:**

Rode `bower install angularjstexteditor` Por linha de comando, lembre-se de especificar a versão que vai utilizar.
Inclua as tags similar ao código abaixo:

```html
<link rel='stylesheet' href='your_path/angularjstexteditor/dist/angularjstexteditor.css'>
<script src='your_path/angularjstexteditor/dist/angularjstexteditor-rangy.min.js'></script>
<script src='your_path/angularjstexteditor/dist/angularjstexteditor-sanitize.min.js'></script>
<script src='your_path/angularjstexteditor/dist/angularjstexteditor.min.js'></script>
```


## FAQ

Caso tenha problemas com os estilos do tamanho da fonte, color e background-color, utlize a tag 'ta-keep-styles="true"'.

```html
   <angularjstexteditor ta-keep-styles="true"  ng-model="vm.yourModel"></angularjstexteditor>
```

Caso tenha problemas com inserção de vídeos utilize a tag 'ta-unsafe-sanitizer="true"'

```html
    <angularjstexteditor ta-keep-styles="true" ta-unsafe-sanitizer="true" ng-model="vm.yourModel"></angularjstexteditor>
```

## Licensa
Este projeto é licenciado por [MIT license](http://opensource.org/licenses/MIT).

## Contribuidores
```html
<a href="https://github.com/EbenauDev" target="_blank">João Tiago</a>
```

