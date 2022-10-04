import { Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class MainPage extends BasePage {
    constructor(page) {
        super(page)
    }

    openMainPageByUrl = async () => {
        try {
            await this.page.goto('https://www.citilink.ru')
        } catch (error) {
            throw error
        }
    }

    clickFirstPopularCategory = async () => {
        try {
            await this.page.locator(':nth-match(.PopularCategoryMain__link, 1)').click()
        } catch (error) {
            throw error
        }
    }

}