import BasePage from "./BasePage";

export default class WishlistPage extends BasePage {
    constructor(page) {
        super(page)
    }

    getFirstProductTitle = async () => {
        const firstProductTitle = await this.page.textContent('.ProductCardVertical__name')
        return firstProductTitle?.trim()
    }
}