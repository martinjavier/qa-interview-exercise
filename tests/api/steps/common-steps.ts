import { Given, Then } from "@cucumber/cucumber";
import { getEndpoint, postEndpoint } from "../common/endpoint";
import { expect } from "playwright/test";
import { fixture } from "../../utils/fixture";

Given('The user execute a GET to the {string} endpoint', async function (endpointName:string) {
    this.endpoint = getEndpoint(endpointName);
    this.response = await this.endpoint.sendGetRequestWithoutToken()
    fixture.logger.info(`The user execute a GET to the ${endpointName} endpoint`);
  });

Then('The response status code is {string} successful', async function (responseCode:string) {
  expect(String(this.response.status())).toEqual(responseCode);
  fixture.logger.info(`the response status code is ${responseCode} successful`);
});

Then('The response message is {string}', async function (message:string) {
  expect(String(await this.response.body())).toContain(message);
  fixture.logger.info(`the response message is ${message}`);
});

Given('The user execute a POST to the {string} endpoint with {string} data', async function (endpointName:string, userData: string ) {
  this.endpoint = postEndpoint(endpointName);
  this.response = await this.endpoint.createUser(endpointName, userData)
  fixture.logger.info(`The user execute a POST to the ${endpointName} endpoint`);
});

Given('The user execute a POST to the {string} endpoint for login with {string} user and {string} password', async function (endpointName:string, userName: string, password: string ) {
  this.endpoint = postEndpoint(endpointName);
  this.endpoint = JSON.stringify(this.endpoint);
  this.endpoint = this.endpoint.endpoint;
  this.response = await this.endpoint.loginUser(this.endpoint, userName, password)
  fixture.logger.info(`The user execute a POST to the ${endpointName} endpoint`);
});

Given('The user execute a GET to the {string} endpoint in order to get profile information', async function (endpointName:string) {
  this.endpoint = getEndpoint(endpointName);
  this.response = await this.endpoint.sendGetRequestWithoutToken()
  fixture.logger.info(`The user execute a GET to the ${endpointName} endpoint`);
});