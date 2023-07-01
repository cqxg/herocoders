const axios = require("axios");

async function fetchJiraData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch data from Jira: ${error}`);
    throw error;
  }
}

async function getComponentsWithoutLead() {
  const projectKey = "SP";
  const componentsUrl = `https://herocoders.atlassian.net/rest/api/3/project/${projectKey}/components`;
  const searchUrl = `https://herocoders.atlassian.net/rest/api/3/search?jql=project=${projectKey}`;

  try {
    const components = await fetchJiraData(componentsUrl);
    const searchResults = await fetchJiraData(searchUrl);

    const componentTasksCount = {};

    for (const issue of searchResults.issues) {
      if (issue.fields.components) {
        for (const component of issue.fields.components) {
          componentTasksCount[component.name] =
            (componentTasksCount[component.name] || 0) + 1;
        }
      }
    }

    const componentsWithoutLead = components.filter(
      (component) => !component.lead
    );

    console.log("List of components without a component lead:");
    for (const component of componentsWithoutLead) {
      const tasksCount = componentTasksCount[component.name] || 0;
      console.log(
        `- Component: ${component.name}, Number of tasks: ${tasksCount}`
      );
    }
  } catch (error) {
    console.error("Failed to retrieve components without lead:", error);
  }
}

if (process.env.RUN_ENV !== "test") {
  getComponentsWithoutLead();
}

module.exports = {
  getComponentsWithoutLead,
};
