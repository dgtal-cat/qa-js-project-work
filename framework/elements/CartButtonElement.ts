import BaseElement from "./BaseElement";

export default class CartButtonElement extends BaseElement {
    locator = this.page.locator('.HeaderMenu__button_basket')

    clickOnCartButton = () => {
        this.locator.click()
    }
}