import BasePage from "./BasePage";

export default class OrderPage extends BasePage {
    constructor(page) {
        super(page)
    }

    getBasketEmptyTitle = () => {
        const basketEmptyTitle = this.page.locator('.Basket__basket-empty-title')
        return basketEmptyTitle
    }

    getFirstProductTitle = async () => {
        const firstProductTitle = await this.page.textContent('.ProductCardForBasket__name')
        return firstProductTitle?.trim()
    }
}