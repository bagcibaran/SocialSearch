const express = require("express");
const axios = require("axios");
const domains = require("./data");
const server = express();
const log = require("ololog");
var cors = require("cors");

server.use(cors());

server.get("/search", async (req, res) => {
  const { searchKey } = req.query;
  console.log({ searchKey });

  if (!searchKey) {
    return res.json("Search Key is required!");
  }

  let data = [];

  let searchRequests = [];

  for (const domain in domains) {
    const searchUrl = domains[domain].urlProbe
      ? domains[domain].urlProbe
      : domains[domain].url;
    const replacedUrl = searchUrl.replace("{}", searchKey);
    const searchRequest = axios({
      method: "get",
      url: replacedUrl,
      timeout: 3000,
    });
    searchRequests.push(searchRequest);
  }

  const resultResponses = await Promise.allSettled(searchRequests);
  let resultList = [];
  let domainNames = Object.keys(domains);

  for (let i = 0; i < resultResponses.length; i++) {
    const resultResponse = resultResponses[i];
    let status = "";
    let url = "";
    if (resultResponse.status === "fulfilled") {
      status = resultResponse.value.status;
      url = resultResponse.value.config.url;

      if (status == 200) {
        resultList.push({
          siteName: domainNames[i],
          url,
          hasAccount: true,
          status,
        });
      }
    } else {
      status = resultResponse.reason.response?.status || "Timeout";
      url =
        resultResponse.reason?.response?.config?.url ||
        resultResponse.reason?.request?._currentUrl;

      resultList.push({
        siteName: domainNames[i],
        url,
        hasAccount: false,
        status,
      });
    }
  }
  //onsole.log(resultList);
  console.log("Doing");
  return res.json(resultList);
});

server.listen(5000, () => {
  console.log("True");
});
