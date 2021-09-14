# New York Times Most Popular
[The New York Times](http://nytimes.com) reader mobile app, made with [React Native].

## Features / Components
- Uses `React 16.8.3`
- Uses `React Native 0.59.8`
- Displays most popular articles from NY Times

## Development

### Folder structure
The application is structured by features along with unit test cases. 
- The articles have a listing page which contains each listing cell item component and it's unit test cases
- The articles has it's detail page along with the test cases structured in a similar manner.

### Usage of frameworks
- React-navigation-v3 which is extremely popular solution for navigating between screens
- React-native-vector-icons which simplifies using icons which a variety of icon collection
- Jest, enzyme and react-dom to facilitate unit testing

### Getting started
Clone or download the repository, cd to the folder and follow the below steps 
```
$ npm install 
```

### Scripts
- `$ npm start` - Starts the react native package manager
- `$ npm test` - Executes tests and prepares code coverage report
- `$ npm run lint` - Lints the code using ESLint with the popular airbnb config

## Testing
The project currently contains unit-tests for the components, at same path with name suffixed `.test.js`.

Run `npm test` to execute these tests. This will generate a `coverage report` under coverage folder. To view this report open coverage -> lcov-report and click on `index.html`.

## Author
- [Thato Mmusi](https://github.com/)
