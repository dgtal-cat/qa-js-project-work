import BasePage from "./BasePage";

export default class ProductPage extends BasePage {
    constructor(page) {
        super(page)
    }

    getProductTitle = async () => {
        const productTitle = await this.page.textContent('h1.ProductPageTitleSection__text')
        return productTitle?.trim()
    }

    clickAddToOrderButton = async () => {
        await this.page.locator('button.ProductPageCTAButtonsSection__add-to-cart').click()
    }

    goToOrderPageFromModal = async () => {
        await this.page.locator(':nth-match(.UpsaleBasket__order, 1)').click()
    }
}