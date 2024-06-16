import { Given, Then, setDefaultTimeout} from "@cucumber/cucumber"
import PreferredPartnersPage from "../pages/preferred-partners-page";
import { fixture } from "../../utils/fixture";

let preferredPartnersPage: PreferredPartnersPage;
const URL: string = process.env.BASEURL ?? 'https://smartservices.axaxl.com/preferred-partners#/search';
setDefaultTimeout(60 *20000);

Given('I open the web application', async function() {
    preferredPartnersPage = new PreferredPartnersPage(fixture.page); 
    await preferredPartnersPage.goto(URL);
    fixture.logger.info(`I open the web application on the browser`);
});

Then('The web application should be opened', async function() {
    preferredPartnersPage.assertHomePageIsOpened(URL);
    fixture.logger.info('The browser is showing the web application');
  });

Then('Select the Computer Vision Hazard Detection checkbox', async function() {
    preferredPartnersPage.selectComputerVisionHazardDetectionCheckbox();
    fixture.logger.info('The Computer Vision Hazard Detection checkbox was selected');
})

Then('Verify if Computer Vision Hazard Detection card is visible', async function() {
    preferredPartnersPage.verifyPreferredPartnersNetworktitle();
    fixture.logger.info('The Computer Vision Hazard Detection card is visible');
})

Then('Verify just two cards are visible', async function() {
    preferredPartnersPage.verifyJustTwoCardsAreVisible();
    fixture.logger.info('Just two cards are visible');
})

Then('Click On Reset All button', async function() {
    preferredPartnersPage.clickOnResetAllButton();
    fixture.logger.info('The Reset All button was selected');
})

Then('Input invalid value into the Search field', async function() {
    preferredPartnersPage.invalidInputOnSearch();
    fixture.logger.info('Input an invalid value into the search field');
})

Then('Input valid value into the Search field', async function() {
    preferredPartnersPage.validInputOnSearch();
    fixture.logger.info('Input valid value into the search field');
})

Then('Clean the Search Field', async function() {
    preferredPartnersPage.cleanTheSearchField();
    fixture.logger.info('Clean the search field');
})

Then('Click On Search Button', async function() {
    preferredPartnersPage.clickOnSearchButton();
    fixture.logger.info('Click on search button');
})

Then('Click On Read More Link', async function() {
    preferredPartnersPage.clickOnReadMoreLink();
    fixture.logger.info('Click on read more link');
})

Then('Click On Submit Your Message Button', async function() {
    preferredPartnersPage.clickOnSubmitYourMessageButton();
    fixture.logger.info('Click on Submit Your Message button');
})

Then('Verify Form Multiple Errors', async function() {
    preferredPartnersPage.verifyFormErrorMessages();
    fixture.logger.info('Verify Request an introduction Form multiple errors');
})

Then('Input Name On Request An Introduction Form', async function() {
    preferredPartnersPage.inputNameOnRequestAnIntroductionForm();
    fixture.logger.info('Input User Name On Request An Introduction Form');
})

Then('Input Invalid Email On Request An Introduction Form', async function() {
    preferredPartnersPage.inputInvalidEmailOnRequestAnIntroductionForm();
    fixture.logger.info('Input Email On Request An Introduction Form');
})

Then('Verify Email Invalid Format Error Message', async function() {
    preferredPartnersPage.verifyEmailInvalidFormatError();
    fixture.logger.info('Verify Email Invalid Format Error Message');
})

Then('Input Invalid Name On Request An Introduction Form', async function() {
    preferredPartnersPage.inputInvalidNameOnRequestAnIntroductionForm()
    fixture.logger.info('Input Invalid Name On Request An Introduction Form');
})

Then('Verify Invalid Name Format Error Message', async function() {
    preferredPartnersPage.verifyInvalidNameCharactersError();
    fixture.logger.info('Verify Name Invalid Format Error Message');
})

Then('Input Invalid Message On Request An Introduction Form', async function() {
    preferredPartnersPage.inputInvalidMessageOnRequestAnIntroductionForm()
    fixture.logger.info('Input Invalid Message On Request An Introduction Form');
})

Then('Verify Invalid Message Format Error Message', async function() {
    preferredPartnersPage.verifyMessageInvalidCharactersError();
    fixture.logger.info('Verify Message Invalid Format Error Message');
})

Then('Input Email On Request An Introduction Form', async function() {
    preferredPartnersPage.inputEmailOnRequestAnIntroductionForm()
    fixture.logger.info('Input Email On Request An Introduction Form');
})

Then('Select Country On Request An Introduction Form', async function() {
    preferredPartnersPage.selectCountryOnRequestAnIntroductionForm()
    fixture.logger.info('Select Country On Request An Introduction Form');
})

Then('Input Message On Request An Introduction Form', async function() {
    preferredPartnersPage.inputMessageOnRequestAnIntroductionForm()
    fixture.logger.info('Input Message On Request An Introduction Form');
})










