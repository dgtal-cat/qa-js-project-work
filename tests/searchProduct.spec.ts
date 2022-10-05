import { test, expect } from '@playwright/test';
import MainPage from '../framework/pages/MainPage'
import SearchFieldElement from '../framework/elements/SearchFieldElement'
import SearchPage from '../framework/pages/SearchPage';

test('Поиск товара через строку поиска', async ({ page }) => {
    const mainPage = new MainPage(page)
    const searchField = new SearchFieldElement(page)
    const searchPage = new SearchPage(page)

    await mainPage.open();

    await searchField.searchForProduct('стиральная машина indesit')
    console.log('Начали поиск...')

    const searchResultCount = searchPage.getSearchResultCount()
    console.log('Количество найденных товаров ', searchResultCount)

    await expect(searchResultCount).toBeGreaterThan(0)
    console.log('Количество найденных товаров больше 0')
})