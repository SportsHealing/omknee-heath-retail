/** Hostnames that serve the live, indexable site. Any other host (such as the kneelens.com staging site) is noindexed. */
export const PRODUCTION_HOSTS = ["omkneehealth.com", "www.omkneehealth.com"];

export const isProductionHost = (hostname = window.location.hostname) =>
  PRODUCTION_HOSTS.includes(hostname);
