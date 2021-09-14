# NYTimes Most Popular
[The New York Times](http://nytimes.com) reader mobile app, made with [React Native](https://facebook.github.io/react-native/).



## Features
- Uses `React 16.0.0 and latest`
- Uses `React Native 0.59.8 0 and latest`
- Displays most popular articles from NY Times

## Development

### Folder structure
This application is structured by features along with their unit test cases. 
- The articles have a listing page which contains each listing cell item component and it's unit test cases
- The articles has it's detail page along with the test cases structured in a similar manner.

### Usage of frameworks
- The React-navigation-v3 was used.
- The React-native-webview starting with v0.60 
- The React-native-vector-icons which simplifies using icons which a variety of icon collection
- The jest, enzyme and react-dom to facilitate unit testing

### Getting started
Clone or download the repository, cd to the folder and follow the below steps 
```
$ npm install 
$ react-native link
$ react-native run-ios
$ react-native run-android
```
Read more about linking libraries manually here [Linking iOS](https://facebook.github.io/react-native/docs/linking-libraries-ios)

### Scripts
- `$ npm start` - Starts the react native package manager
- `$ npm test` - Executes tests and prepares code coverage report
- `$ npm run lint` - Lints the code using ESLint with the popular airbnb config

## Testing
This project contains unit-tests for the components, at same path with name suffixed `.test.js`.

Run `npm test` to execute these tests. This will generate a `coverage report` under coverage folder. To view this report open coverage -> lcov-report and click on `index.html`.


### Unit Test Coverage Report



## Author
- [@Thato Mmusi](https://github.com/Mmusi)
- http://mmusi-thato.herokuapp.com/
- https://bw.linkedin.com/in/thato-mmusi-13940b5b
