import BaseElement from "./BaseElement";

export default class SearchElement extends BaseElement {
    locator = this.page.locator('.InputSearch__container-input')

    searchForProduct = (text) => {
        this.locator.fill(text)
        this.locator.press('Enter')
    }
}