import BasePage from "./BasePage";

export default class ProductPage extends BasePage {
    constructor(page) {
        super(page)
    }

    getProductTitle = async () => {
        const productTitle = await this.page.textContent('div.ProductPageTitleSection >> .ProductPageTitleSection__text')
        return productTitle?.trim()
    }

    getProductId = async () => {
        const productId = await this.page.textContent('button:has-text("Код товара%") >> nth=0')
        return productId?.slice(12)
    }

    addToOrder = async () => {
        await this.page.locator('.ProductPageCTAButtonsSection__add-to-cart').click()
    }

    addToWishlist = async () => {
        await this.page.locator('.ProductPageCTAButtonsSection__add-to-wishlist').click()
    }

    goToOrderPageFromModal = async () => {
        await this.page.locator('button:has-text("Перейти в корзину") >> nth=0').click()
    }
}