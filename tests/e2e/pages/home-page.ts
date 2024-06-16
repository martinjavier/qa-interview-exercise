import { Page, expect } from "@playwright/test";

export default class HomePage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }  
    
    async goto(url: string) {
        await this.page.goto(url)
        await this.page.waitForURL(url);
        await this.page.getByRole('button', { name: /ACCEPT ALL COOKIES/i }).click();
    }

    async closeTheBrowser() {
        await this.page.close()
    }

    async assertHomePageIsOpened(url: string) {
        expect(this.page.url()).toContain(url);
    }

    async verifyMainTitle() {
        const element = await this.page.locator('h3:has-text("Digital Commercial Platform")');
        expect(element);
    }

    async verifyServicesMenu() {
        const element = await this.page.locator("//a[id='submenu-link-4']");
        expect(element);
    }

    async verifyAboutMenu() {
        const element = await this.page.locator("//a[id='submenu-link-5']");
        expect(element);
    }

    async verifyContactMenu() {
        const element = await this.page.locator("//a[id='submenu-link-6']");
        expect(element);
    }

    async verifyWildfireMenu() {
        const element = await this.page.locator("//a[id='submenu-link-7']");
        expect(element);
    }

    async openServicesMenu() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(15000);
        await this.page.locator('xpath=//a[@id="submenu-link-4"][contains(text(),"SERVICES")]').click()
        expect(await this.page.locator('xpath=//a[@id="submenu-link-13"][contains(text(),"Meet our Preferred Partners")]'))
    }

    async selectMeetOurPreferredPartnersOption() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(15000);
        await this.page.locator('xpath=//a[@id="submenu-link-13"][contains(text(),"Meet our Preferred Partners")]').click();
        expect(await this.page.locator('h1:has-text("Preferred Partners Network")'))
    }

    async verifyPreferredPartnersNetworktitle() {
        const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await delay(15000);
        const preferrerd = await this.page.locator('h1:has-text("Preferred Partners Network")')
        expect(preferrerd).toBeVisible()
    }
      
}