# PRUEBA FRONTEND

El presente documento describe la prueba técnica asociada a la postulación “Front-end Developer” de la Fundación Epistemonikos. El objetivo es desarrollar una SPA utilizando Vue.js, React o Angular (de preferencia en Vue.js si es que manejan más de un framework) y Bootstrap (o bootstrap-vue, o algún otro framework), extrayendo los datos desde la API pública https://docs.coincap.io/. Problema a resolver

El postulante debe desarrollar un sitio web para que sea capaz de mostrar un listado de criptomonedas obtenido desde este endpoint api.coincap.io/v2/assets. Dicho listado debe estar paginado en páginas de 15 criptomonedas cada página. Al hacer click en una criptomoneda el usuario debe ser llevado a otra ruta, la cual debe mostrar los precios de apertura, cierre, el precio más alto y el más bajo de cada uno de los últimos 7 días de dicha moneda (Similar a esto https://coinmarketcap.com/currencies/bitcoin/historical-data/ pero solo deben desplegar los últimos 7 días). Esta información la deben obtener utilizando el endpoint detallado acá https://docs.coincap.io/#61e708a8-8876-4fb2-a418-86f12f308978

Se espera que el sitio sea desarrollado usando Vue.js y Bootstrap. El postulante deberá crear un repositorio en GitHub con la solución, de tal forma que el equipo de Epistemonikos pueda acceder y evaluarla.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install coins
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
