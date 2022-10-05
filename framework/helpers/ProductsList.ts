import { Page } from "@playwright/test"

export default class ProductsList {
    page: Page

    constructor(page) {
        this.page = page
    }

    openFirstProductFromList = async () => {
        await this.page.locator('.ProductCardVertical__name >> nth=0').click()
    }

    getFirstProductTitle = async () => {
        const firstProductTitle = await this.page.textContent('.ProductCardVertical__name')
        return firstProductTitle?.trim()
    }
}
