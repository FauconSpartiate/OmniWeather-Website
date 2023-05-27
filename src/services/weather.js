const axios = require("axios");
import { Buffer } from "buffer";

const owner = "FauconSpartiate";
const repo = "OmniWeather-Reports";
const directoryPath = "reports/20";

export default {
  async getCurrentWeather() {
    try {
      // Fetch the list of commits for the specified repository and branch
      const commitsResponse = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/commits`
      );
      const commits = commitsResponse.data;

      // Get the latest commit sha
      const latestCommitSha = commits[0].sha;

      const commitDetails = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/commits/${latestCommitSha}`
      );

      // Filter the tree to get only the files in the specified directory path
      const filesInDirectory = commitDetails.data.files.filter((item) =>
        item.filename.startsWith(directoryPath)
      );

      // Get the latest committed file
      const latestCommittedFile = filesInDirectory.slice(-1)[0];

      // Fetch the raw content of the latest committed file
      const fileContentResponse = await axios.get(
        latestCommittedFile.contents_url
      );
      const fileContent = fileContentResponse.data.content;

      const decodedContent = Buffer.from(fileContent, "base64").toString();
      const contentObject = JSON.parse(decodedContent);

      console.log("Latest committed file:", latestCommittedFile.filename);
      console.log("File content:", contentObject);

      return contentObject;
    } catch (error) {
      console.error("Error:", error.message);
      throw error;
    }
  },
};
