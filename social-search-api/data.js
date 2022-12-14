const domains = {
  "2Dimensions": {
    errorType: "status_code",
    rank: 190608,
    url: "https://2Dimensions.com/a/{}",
    urlMain: "https://2Dimensions.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  "7Cups": {
    errorType: "status_code",
    rank: 39707,
    url: "https://www.7cups.com/@{}",
    urlMain: "https://www.7cups.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  "9GAG": {
    errorType: "status_code",
    rank: 405,
    url: "https://9gag.com/u/{}",
    urlMain: "https://9gag.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  "About.me": {
    errorType: "status_code",
    rank: 13722,
    url: "https://about.me/{}",
    urlMain: "https://about.me/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  AskFM: {
    errorMsg: "Well, apparently not anymore.",
    errorType: "message",
    rank: 2040,
    url: "https://ask.fm/{}",
    urlMain: "https://ask.fm/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Blogger: {
    errorType: "status_code",
    rank: 244,
    regexCheck: "^[a-zA-Z][a-zA-Z0-9_-]*$",
    url: "https://{}.blogspot.com",
    urlMain: "https://www.blogger.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Canva: {
    errorType: "response_url",
    errorUrl: "https://www.canva.com/{}",
    rank: 97,
    url: "https://www.canva.com/{}",
    urlMain: "https://www.canva.com/",
    username_claimed: "jenny",
    username_unclaimed: "xgtrq",
  },
  Codecademy: {
    errorType: "status_code",
    rank: 2725,
    url: "https://www.codecademy.com/profiles/{}",
    urlMain: "https://www.codecademy.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Coderwall: {
    errorMsg: "404! Our feels when that url is used",
    errorType: "message",
    rank: 14806,
    url: "https://coderwall.com/{}",
    urlMain: "https://coderwall.com/",
    username_claimed: "jenny",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Codewars: {
    errorType: "status_code",
    rank: 22043,
    url: "https://www.codewars.com/users/{}",
    urlMain: "https://www.codewars.com",
    username_claimed: "example",
    username_unclaimed: "noonewouldeverusethis7",
  },
  DailyMotion: {
    errorType: "status_code",
    rank: 185,
    url: "https://www.dailymotion.com/{}",
    urlMain: "https://www.dailymotion.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  "Docker Hub": {
    errorType: "status_code",
    rank: 3468,
    url: "https://hub.docker.com/u/{}/",
    urlMain: "https://hub.docker.com/",
    urlProbe: "https://hub.docker.com/v2/users/{}/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Etsy: {
    errorType: "status_code",
    rank: 162,
    url: "https://www.etsy.com/shop/{}",
    urlMain: "https://www.etsy.com/",
    username_claimed: "JennyKrafts",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Facebook: {
    errorType: "status_code",
    rank: 10,
    regexCheck: "^[a-zA-Z0-9\\.]{3,49}(?<!\\.com|\\.org|\\.net)$",
    url: "https://www.facebook.com/{}",
    urlMain: "https://www.facebook.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Fiverr: {
    errorType: "response_url",
    errorUrl: "https://www.fiverr.com/",
    rank: 173,
    url: "https://www.fiverr.com/{}",
    urlMain: "https://www.fiverr.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis",
  },
  Flipboard: {
    errorType: "status_code",
    rank: 11050,
    regexCheck: "^([a-zA-Z0-9_]){1,15}$",
    url: "https://flipboard.com/@{}",
    urlMain: "https://flipboard.com/",
    username_claimed: "blue",
    username_unclaimed: "xgtrq",
  },
  GitHub: {
    errorType: "status_code",
    rank: 92,
    regexCheck: "^[a-zA-Z0-9](?:[a-zA-Z0-9]|-(?=[a-zA-Z0-9])){0,38}$",
    url: "https://www.github.com/{}",
    urlMain: "https://www.github.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  GitLab: {
    errorMsg: "[]",
    errorType: "message",
    rank: 2933,
    url: "https://gitlab.com/{}",
    urlMain: "https://gitlab.com/",
    urlProbe: "https://gitlab.com/api/v4/users?username={}",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  HackerNews: {
    errorMsg: "No such user.",
    errorType: "message",
    rank: 3348,
    url: "https://news.ycombinator.com/user?id={}",
    urlMain: "https://news.ycombinator.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  HackerRank: {
    errorMsg: "Something went wrong",
    errorType: "message",
    rank: 3272,
    url: "https://hackerrank.com/{}",
    urlMain: "https://hackerrank.com/",
    username_claimed: "satznova",
    username_unclaimed: "noonewouldeverusethis7",
  },
  ImageShack: {
    errorType: "response_url",
    errorUrl: "https://imageshack.us/",
    rank: 41197,
    url: "https://imageshack.us/user/{}",
    urlMain: "https://imageshack.us/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Instagram: {
    errorMsg: "The link you followed may be broken",
    errorType: "message",
    rank: 30,
    url: "https://www.instagram.com/{}",
    urlMain: "https://www.instagram.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Keybase: {
    errorType: "status_code",
    rank: 29458,
    url: "https://keybase.io/{}",
    urlMain: "https://keybase.io/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  LeetCode: {
    errorType: "status_code",
    rank: 3575,
    url: "https://leetcode.com/{}",
    urlMain: "https://leetcode.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Medium: {
    errorType: "status_code",
    rank: 69,
    url: "https://medium.com/@{}",
    urlMain: "https://medium.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Myspace: {
    errorType: "status_code",
    rank: 3477,
    url: "https://myspace.com/{}",
    urlMain: "https://myspace.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Pinterest: {
    errorType: "status_code",
    rank: 149,
    url: "https://www.pinterest.com/{}/",
    urlMain: "https://www.pinterest.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  PlayStore: {
    errorType: "status_code",
    rank: 1,
    url: "https://play.google.com/store/apps/developer?id={}",
    urlMain: "https://play.google.com/store",
    username_claimed: "Facebook",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Reddit: {
    errorType: "status_code",
    rank: 19,
    url: "https://www.reddit.com/user/{}",
    urlMain: "https://www.reddit.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  "Repl.it": {
    errorMsg: "404",
    errorType: "message",
    rank: 5025,
    url: "https://repl.it/@{}",
    urlMain: "https://repl.it/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Signal: {
    errorMsg: "Oops! That page doesn\u2019t exist or is private.",
    errorType: "message",
    rank: 1971912,
    url: "https://community.signalusers.org/u/{}",
    urlMain: "https://community.signalusers.org",
    username_claimed: "jlund",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Slack: {
    errorType: "status_code",
    rank: 407,
    regexCheck: "^[a-zA-Z][a-zA-Z0-9_-]*$",
    url: "https://{}.slack.com",
    urlMain: "https://slack.com",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  SoundCloud: {
    errorType: "status_code",
    rank: 82,
    url: "https://soundcloud.com/{}",
    urlMain: "https://soundcloud.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Spotify: {
    errorType: "status_code",
    rank: 74,
    url: "https://open.spotify.com/user/{}",
    urlMain: "https://open.spotify.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Steam: {
    errorMsg: "The specified profile could not be found",
    errorType: "message",
    rank: 310,
    url: "https://steamcommunity.com/id/{}",
    urlMain: "https://steamcommunity.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Telegram: {
    errorMsg: '<meta property="twitter:title" content="Telegram: Contact',
    errorType: "message",
    rank: 402,
    url: "https://t.me/{}",
    urlMain: "https://t.me/",
    username_claimed: "saman",
    username_unclaimed: "noonewouldeverusethis7",
  },
  TikTok: {
    errorMsg: "Couldn&#x27;t find this account",
    errorType: "message",
    rank: 907,
    url: "https://www.tiktok.com/@{}",
    urlMain: "https://www.tiktok.com/",
    username_claimed: "red",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Twitch: {
    errorType: "status_code",
    rank: 35,
    url: "https://www.twitch.tv/{}",
    urlMain: "https://www.twitch.tv/",
    urlProbe: "https://m.twitch.tv/{}",
    username_claimed: "jenny",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Twitter: {
    errorMsg: "page doesn\u2019t exist",
    errorType: "message",
    rank: 42,
    url: "https://www.twitter.com/{}",
    urlMain: "https://www.twitter.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  VSCO: {
    errorType: "status_code",
    rank: 3822,
    url: "https://vsco.co/{}",
    urlMain: "https://vsco.co/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  Wikidot: {
    errorMsg: "User does not exist.",
    errorType: "message",
    rank: 3010,
    url: "http://www.wikidot.com/user:info/{}",
    urlMain: "http://www.wikidot.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
  YouTube: {
    errorMsg: "Not Found",
    errorType: "message",
    rank: 2,
    url: "https://www.youtube.com/{}",
    urlMain: "https://www.youtube.com/",
    username_claimed: "blue",
    username_unclaimed: "noonewouldeverusethis7",
  },
};

module.exports = domains;
