import BaseElement from "./BaseElement";

export default class CatalogMenuElement extends BaseElement {
    locator = this.page.locator('.CatalogMenu__left')

    openCatalogMenu = async () => {
        await this.locator.click()
    }

    isCatalogTitleVisible = async () => {
        await this.page.locator('.CatalogMenu__category-title').isVisible()
    }
}