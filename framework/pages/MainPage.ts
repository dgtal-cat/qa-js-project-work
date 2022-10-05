import BasePage from "./BasePage";

export default class MainPage extends BasePage {
    constructor(page) {
        super(page)
    }

    open = async () => {
        await this.page.goto('https://www.citilink.ru/')
    }

    clickFirstPopularCategory = async () => {
        await this.page.locator('.PopularCategoryMain__link >> nth=0').click()
    }
}