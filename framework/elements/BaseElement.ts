import { Page, Locator } from "@playwright/test";

export default class BaseElement {
    page: Page
    locator: Locator

    constructor(page: Page) {
        this.page = page
    }
}