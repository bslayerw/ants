# ants
[![Coverage Status](https://coveralls.io/repos/github/bslayerw/ants/badge.svg?branch=master)](https://coveralls.io/github/bslayerw/ants?branch=master)
## Setup
```sh
npm install
# or yarn install
```
```sh
npm run test:windows
# test on unix
# npm run test
# or yarn test
```
```sh
npm run start
# or yarn start
```

## input
```js
const ant = new Ant(grid);
ant.simulateStep(8);
printGrid(grid);
```

## Expected output: 
```sh
[ 'E', 'E', 'E', 'E', 'E' ]
[ 'E', 'O', 'O', 'E', 'E' ]
[ 'E', 'O', 'O', 'O', 'E' ]
[ 'E', 'E', 'O', 'O', 'E' ]
[ 'E', 'E', 'E', 'E', 'E' ]
```
