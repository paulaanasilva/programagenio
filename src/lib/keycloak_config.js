import Keycloak from "keycloak-js";

const keycloakConfig = {
  url: "http://localhost:9090/auth",
  realm: "programagenio",
  clientId: "nextjs-programagenio",
};

try {
  const authenticated = await keycloakConfig.init({
    onLoad: "check-sso",
    silentCheckSsoRedirectUri: `${location.origin}/`,
  });
  console.log(
    `User is ${authenticated ? "authenticated" : "not authenticated"}`
  );
} catch (error) {
  console.error("Failed to initialize adapter:", error);
}

export default keycloakConfig;
