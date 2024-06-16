import { Page, expect } from "@playwright/test";

export default class PreferredPartnersPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }  
    
    async goto(url: string) {
        await this.page.goto(url)
        await this.page.waitForURL(url);
        await this.page.getByRole('button', { name: /ACCEPT ALL COOKIES/i }).click();
    }

    async assertHomePageIsOpened(url: string) {
        expect(this.page.url()).toContain(url);
    }

    async selectComputerVisionHazardDetectionCheckbox() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(15000);
        await this.page.locator('xpath=//mat-checkbox[@id="mat-checkbox-12"]').click()
        expect(await this.page.locator('xpath=//a[@id="submenu-link-13"][contains(text(),"Meet our Preferred Partners")]')).toBeVisible();
    }

    async verifyPreferredPartnersNetworktitle() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(15000);
        const preferrerd = await this.page.locator('xpath=//div[contains[text(),"Computer Vision Hazard Detection"]')
        expect(preferrerd).toBeVisible()
    }

    async verifyJustTwoCardsAreVisible() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(15000);
        const verifyElement = await this.page.locator('xpath=//div[contains[text()," Showing 2 of 2 partners "]')
        expect(verifyElement).toBeVisible()
    }

    async clickOnResetAllButton() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(15000);
        await this.page.locator('xpath=//button[contains[text(),"RESET ALL"]').click()
        const verifyElement = await this.page.locator('xpath=//div[contains(text()," Showing 10 of 36 partners ")]')
        expect(verifyElement).toBeVisible()
    }

    async inputValueOnSearch(value: string) {
        await this.page.locator('xpath=//input[@type="text"][@class="form-control search-bar ng-untouched ng-pristine ng-valid"]').fill(value);
        const verifyElement = await this.page.locator('xpath=//div[contains[text(),"The search only allow A-Z a-z À-ÿ 0-9 and the special characters:-_\'. Please enter a valid value on the search."]')
        expect(verifyElement).toBeVisible()
    }

    async cleanTheSearchField() {
        await this.page.getByRole('button', { name: /search-close-button ng-star-inserted/i }).click();
        const verifyElement = await this.page.getByPlaceholder('Search partners').textContent();
        expect(verifyElement == '')
    }

    async clickOnSearchButton() {
        await this.page.locator('xpath=//button[@type="submit"][contains(text()," Search ")]').click();
        const verifyElement = await this.page.locator('xpath=//span[contains(text(),"READ MORE")]')
        expect(verifyElement).toBeVisible()
    }

    async clickOnReadMoreLink() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(5000);
        await this.page.locator('xpath=//a[@class="link mb-spacing-xs mb-sm-spacing-s"]//span[contains(text(),"READ MORE")]').click();
        const verifyElement = await this.page.locator('xpath=//p[contains(text(),"Genda provides real time construction job site visibility, helping contractors see who’s on site, where they are, and what they are doing right from their app.")')
        expect(verifyElement).toBeVisible()
    }

    async clickOnSubmitYourMessageButton() {
        await this.page.locator('xpath=//button[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_submit"]').click();
    }

    async verifyFormErrorMessages() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(5000);
        const verifyName = await this.page.locator('xpath=//span[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_name--required"]').isVisible()
        const verifyEMail = await this.page.locator('xpath=//span[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_email--required"]').isVisible()
        const verifyCountry = await this.page.locator('xpath=//span[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_country--required"]').isVisible();
        const verifyMessage = await this.page.locator('xpath=//span[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_message--required"]').isVisible();
        const verifyCaptcha = await this.page.locator('xpath=//div[@id="g-recaptcha-response--captcha-invalid"]').isVisible();
        expect(verifyName && verifyEMail && verifyCountry && verifyMessage && verifyCaptcha)
    }

    async inputNameOnRequestAnIntroductionForm() {
        await this.page.locator('xpath=//input[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_name"]').fill("Peter Parker");
    }

    async verifyEmailInvalidFormatError() {
        const verifyEmailInvalidErrorMessage = await this.page.locator('xpath=//span[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_email--invalid"]').isVisible();
        expect(verifyEmailInvalidErrorMessage);
    }

    async inputInvalidEmailOnRequestAnIntroductionForm() {
        await this.page.locator('xpath=//input[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_email"]').fill("Peter");
    }

    async inputInvalidNameOnRequestAnIntroductionForm() {
        await this.page.locator('xpath=//input[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_name"]').clear();
        await this.page.locator('xpath=//input[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_name"]').fill("!”·$%&");
    }

    async verifyInvalidNameCharactersError() {
        const verifyNameInvalidErrorMessage = await this.page.locator('xpath=//span[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_name--invalid--chars"]').isVisible();
        expect(verifyNameInvalidErrorMessage);
    }

    async inputInvalidMessageOnRequestAnIntroductionForm() {
        await this.page.locator('xpath=//textarea[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_message"]').clear();
        await this.page.locator('xpath=//textarea[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_message"]').fill("!”·$%&");
    }

    async verifyMessageInvalidCharactersError() {
        const verifyNameInvalidErrorMessage = await this.page.locator('xpath=//span[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_message--invalid--chars"]').isVisible();
        expect(verifyNameInvalidErrorMessage);
    }

    async selectCountryOnRequestAnIntroductionForm() {
        await this.page.locator('xpath=//select[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_country"]').fill("Spain");
    }

    async inputEmailOnRequestAnIntroductionForm() {
        await this.page.locator('xpath=//input[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_email"]').fill("peter@gmail.com");
    }

    async inputMessageOnRequestAnIntroductionForm() {
        await this.page.locator('xpath=//textarea[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_message"]').clear();
        await this.page.locator('xpath=//textarea[@id="_com_axa_dcp_ssp_contact_requestforintro_web_RequestIntroductionFormPortlet_message"]').fill("Message");
    }
}