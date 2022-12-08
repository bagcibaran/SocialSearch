const express = require("express");
const axios = require("axios");
const domains = require("./data");
const server = express();
var cors = require("cors");
const log = require("ololog");
const getApi = async (domainName, domain, searchKey) => {
  try {
    log.blue("Requesting for:  " + domainName);
    const searchUrl = domain.urlProbe ? domain.urlProbe : domain.url;
    const replacedUrl = searchUrl.replace("{}", searchKey);
    const response = await axios.get(`${replacedUrl}`);
    //log.yellow("Request finished:  " + domainName);
    console.log(response.status);
    const hasAccount = response.status === 200;

    if (hasAccount) {
      log.green("Has Account for domain: " + domainName);
      return hasAccount;
    }

    log.cyan("Account not found for domain: " + domainName);
    return hasAccount;
  } catch (error) {
    console.log(error.response.status);
    if (error?.response?.status === 404) {
      log.magenta("Account not found for domain: " + domainName);
      return false;
    }
    log.red("Request Error:  " + domainName);
    return "Server Error";
  }
};

server.get("/search", async (req, res) => {
  const { searchKey } = req.query;
  console.log({ searchKey });

  if (!searchKey) {
    return res.json("Search Key is required!");
  }

  let data = [];

  // for (const domain in domains) {
  //   setTimeout(async () => {
  //     const hasAccount = await getApi(domain, domains[domain], searchKey);
  //     data.push({
  //       domain,
  //       hasAccount,
  //     });
  //   }, 2000);
  // }
  let searchRequests = [];
  for (const domain in domains) {
    // "instagram", "twitter"
    const searchUrl = domains[domain].urlProbe
      ? domains[domain].urlProbe
      : domains[domain].url;
    const replacedUrl = searchUrl.replace("{}", searchKey);
    log.yellow(replacedUrl);
    const searchRequest = axios.get(replacedUrl);
    searchRequests.push(searchRequest);
    // arr.push(replacedUrl); // https://2Dimensions.com/a/bagcibaran
  }
  //console.log(searchRequests);

  const resultResponses = await Promise.allSettled(searchRequests);

  let resultList = [];
  //console.log(resultResponses[2].reason?.response?.status);

  // for (site in domains) {
  //   for (let i = 0; i < domains.length; i++) {
  //     site = domains[i];
  //   }
  // }

  for (let i = 0; i < resultResponses.length; i++) {
    //for (let site in domains) {
    if (resultResponses[i].value?.status !== 200) {
      if (resultResponses[i].reason?.response?.status === 404) {
        resultList.push({
          //siteName: resultResponses,
          url: resultResponses[i].reason?.config?.url,
          hasAccount: false,
        });
      } else {
        resultList.push({
          //siteName: site,
          url: resultResponses[i].reason?.config?.url,
          hasAccount: "Server Error",
        });
      }
    } else {
      resultList.push({
        siteName: resultResponses[i].value?.headers?.server,
        urlName: resultResponses[i].value?.config?.url,
        hasAccount: true,
      });
    }
    //}
  }
  //console.log(resultList);

  //console.log(domains);
  /*
    //TODO: 
    resultResponse döngü yapacan

    fulfilled ve status 200 ise accountVar
    fullfilled ve status 200 değilse account yok
    rejected ise server error
    instagram: accountvar 
    github: accountYok
  
  */

  // log.cyan(resultResponses[3]);
  // const hasAccountGithub = resultResponses[0].value?.status === 200;
  // const hasAccount2Dimensions = resultResponses[1].value?.status === 200;
  // const hasAccountRune = resultResponses[2].value?.status === 200;
  // const hasAccountInstagram = resultResponses[3].value?.status === 200;

  // return res.json({
  //   hasAccountGithub,
  //   hasAccount2Dimensions,
  //   hasAccountRune,
  //   hasAccountInstagram,
  // });
  // console.log(responses);

  // console.log(data);

  // console.log(responses);

  const sampleList = [
    {
      siteName: "GitHub",
      url: "https://github.com/bagcibaran",
      hasAccount: true,
    },
    {
      siteName: "2Dimensions",
      url: "https://2Dimensions.com",
      hasAccount: false,
    },
    {
      siteName: "Instagram",
      url: "https://Instagram.com/bagcibaran",
      hasAccount: "Server Error",
    },
  ];

  return res.json(resultList);
});

server.listen(5000, () => {
  console.log("True");
});
