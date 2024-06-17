import HealthEndpoint from "../pages/health-endpoint";
import UsersEndpoint from "../pages/users-endpoints";

const baseUrl =
    process.env.BASE_URL_API ?? "https://practice.expandtesting.com/notes/api";

function getEndpoint(name: string) {
    const healthEndpoint = new HealthEndpoint(baseUrl);
    if (name === "health-check") {
        return healthEndpoint;
    } else {
        console.log("The endpoint '" + name + "' is not implemented");
    }
}

function postEndpoint(name: string) {
    const usersEndpoint = new UsersEndpoint(baseUrl);
    if (name === "users") {
        return usersEndpoint;
    } else {
        console.log("The endpoint '" + name + "' is not implemented");
    }
    if (name === "users/register") {
        return usersEndpoint;
    } else {
        console.log("The endpoint '" + name + "' is not implemented");
    }
}

export { getEndpoint, postEndpoint };
