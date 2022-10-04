import { Page } from "@playwright/test"

export default class ProductsList {
    page: Page

    constructor(page) {
        this.page = page
    }

    clickFirstProductFromList = async () => {
        await this.page.locator(':nth-match(.ProductCardVertical__name, 1)').click()
    }
}
