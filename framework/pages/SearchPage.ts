import BasePage from "./BasePage";

export default class SearchPage extends BasePage {
    constructor(page) {
        super(page)
    }

    getSearchResultCount = async () => {
        const searchResultCount = await this.page.textContent('div.SearchResults__search-categories >> sup')
        return Number(searchResultCount)
    }
}