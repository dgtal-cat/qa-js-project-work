import { test, expect } from '@playwright/test';
import MainPage from '../framework/pages/MainPage'
import CatalogMenuElement from '../framework/elements/CatalogMenuElement'

test('Поиск товара через строку поиска', async ({ page }) => {
    const mainPage = new MainPage(page)
    const catalogMenu = new CatalogMenuElement(page)

    await mainPage.open();

    await catalogMenu.openCatalogMenu()

    await expect(catalogMenu.isCatalogTitleVisible()).toBeTruthy()
    console.log('Каталог товаров открыт')
})