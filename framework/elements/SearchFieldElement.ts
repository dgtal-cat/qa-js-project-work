import BaseElement from "./BaseElement";

export default class SearchFieldElement extends BaseElement {
    locator = this.page.locator('text=Все результаты Мы используем файлы cookie для вашего удобства пользования сайтом >> input[name="text"]')

    searchForProduct = async (text) => {
        await this.locator.click()
        await this.locator.fill(text)
        await this.locator.press('Enter')
    }
}