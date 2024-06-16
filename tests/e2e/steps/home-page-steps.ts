import { Given, Then, setDefaultTimeout} from "@cucumber/cucumber"
import HomePage from "../pages/home-page";
import { fixture } from "../../utils/fixture";

let homePage: HomePage;
const URL: string = process.env.BASEURL ?? 'https://smartservices.axaxl.com/';
setDefaultTimeout(60 *20000);

Given('I open the web application on the browser', async function () {
    homePage = new HomePage(fixture.page); 
    await homePage.goto(URL);
    fixture.logger.info(`I open the web application on the browser`);
});

Then('The web application should be opened on the browser', async function () {
    homePage.assertHomePageIsOpened(URL);
    fixture.logger.info(`The browser is showing the web application`);
  });

Then('Main title should be visible', async function () {
    homePage.verifyMainTitle();
    fixture.logger.info(`The Main Title is visible`);
  });

Then('Services Menu should be visible', async function () {
    homePage.verifyServicesMenu();
    fixture.logger.info('The Services Menu is visible');
})

Then('About Menu should be visible', async function() {
    homePage.verifyAboutMenu();
    fixture.logger.info('The About Menu is visible');
})

Then('Contact Menu should be visible', async function() {
    homePage.verifyContactMenu();
    fixture.logger.info('The Contact Menu is visible');
})

Then('Wildfire Menu should be visible', async function() {
    homePage.verifyWildfireMenu();
    fixture.logger.info('The Wildfire Menu is visible');
})

Then('Open Services Menu', async function () {
    homePage.openServicesMenu();
    fixture.logger.info('The Services Menu was selected');
})

Then('Select Meet Our Preferred Partners option', async function() {
    homePage.selectMeetOurPreferredPartnersOption();
    homePage.verifyPreferredPartnersNetworktitle();
    fixture.logger.info('The Preferred Partners Network section was selected');
})

Then('Close the Browser', async function() {
    homePage.closeTheBrowser()
})

