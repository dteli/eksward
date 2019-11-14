let APIURL = "";

switch (window.location.hostname) {
  case "localhost" || "127.0.0.1":
    APIURL = "http://localhost:3014";
    break;
  case "eksward.herokuapp.com":
    APIURL = "https://eksward-server.herokuapp.com";
    break;
}

export default APIURL;