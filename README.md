##### Node.js v18.16.0

The provided code is a JavaScript/Node.js solution that uses the Jira REST API to extract data from a sample project and presents the information in a readable format. The task was to retrieve a list of project components that do not have a component lead, along with the count of issues associated with each component.

The code uses the axios library to make requests to the Jira REST API. It fetches the list of components for the sample project and the list of issues using the provided API endpoints. Then, it iterates through the issues and counts the number of issues associated with each component. Finally, it filters the components that do not have a component lead and displays the results in the console, including the component name and the count of associated issues.

To use the code u needs run

```javascript
npm i
```

```javascript
node index.js
```

To run tests

```javascript
npm i
```

```javascript
npm run test
```
