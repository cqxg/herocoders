const axios = require("axios");
const { getComponentsWithoutLead } = require("./index");

jest.mock("axios");

describe("getComponentsWithoutLead", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should fetch components and issues from Jira API", async () => {
    axios.get
      .mockResolvedValueOnce({ data: [{ name: "Component 1", lead: null }] })
      .mockResolvedValueOnce({ data: { issues: [] } });

    await getComponentsWithoutLead();

    expect(axios.get).toHaveBeenCalledWith(
      "https://herocoders.atlassian.net/rest/api/3/project/SP/components"
    );
    expect(axios.get).toHaveBeenCalledWith(
      "https://herocoders.atlassian.net/rest/api/3/search?jql=project=SP"
    );
  });

  it("should display components without a lead and the number of associated tasks", async () => {
    axios.get
      .mockResolvedValueOnce({ data: [{ name: "Component 1", lead: null }] })
      .mockResolvedValueOnce({
        data: {
          issues: [
            { fields: { components: [{ name: "Component 1" }] } },
            { fields: { components: [{ name: "Component 2" }] } },
          ],
        },
      });

    const consoleSpy = jest.spyOn(console, "log");

    await getComponentsWithoutLead();

    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("List of components without a component lead:")
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("- Component: Component 1, Number of tasks: 1")
    );
  });

  it("should handle errors when fetching data from Jira API", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error");
    axios.get.mockRejectedValueOnce(new Error("Network error"));

    await getComponentsWithoutLead();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Failed to retrieve components without lead:",
      new Error("Network error")
    );
  });
});
