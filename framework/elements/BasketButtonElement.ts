import BaseElement from "./BaseElement";

export default class BasketButtonElement extends BaseElement {
    locator = this.page.locator('.HeaderMenu__button_basket')

    openBasket = () => {
        this.locator.click()
    }
}