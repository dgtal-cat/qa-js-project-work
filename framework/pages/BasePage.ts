import { type Page } from '@playwright/test';

export default class BasePage {
    page: Page

    constructor(page) {
        this.page = page
    }

    async getUrl() {
        return await this.page.url()
    }

}