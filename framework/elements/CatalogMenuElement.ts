import BaseElement from "./BaseElement";

export default class SearchElement extends BaseElement {
    locator = this.page.locator('.CatalogMenu__left')

    openCatalogMenu = () => {
        this.locator.click()
    }
}