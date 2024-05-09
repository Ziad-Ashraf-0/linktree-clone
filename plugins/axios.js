import axios from "axios";

export default defineNuxtPlugin((NuxtApp) => {
  axios.defaults.baseURL =
    "http://linktree-env.eba-htckqqk9.eu-north-1.elasticbeanstalk.com/";
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  return {
    provide: {
      axios: axios,
    },
  };
});
