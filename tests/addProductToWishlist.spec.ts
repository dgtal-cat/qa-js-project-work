import { test, expect } from '@playwright/test';
import MainPage from '../framework/pages/MainPage'
import WishlistPage from '../framework/pages/WishlistPage';
import ProductPage from '../framework/pages/ProductPage';
import ProductsList from '../framework/helpers/ProductsList';
import WishlistButtonElement from '../framework/elements/WishlistButtonElement'


test('Добавление товара в избранное', async ({ page }) => {
    const mainPage = new MainPage(page)
    const productsList = new ProductsList(page)
    const productPage = new ProductPage(page)
    const wishListPage = new WishlistPage(page)
    const wishListButton = new WishlistButtonElement(page)

    await mainPage.open();
    await mainPage.clickFirstPopularCategory()

    const productTitleFromList = await productsList.getFirstProductTitle()
    console.log('Наименование товара: ', productTitleFromList);

    await productsList.openFirstProductFromList()
    console.log('Перешли на страницу товара')

    await productPage.addToWishlist()
    console.log('Добавили товар в избранное')

    await wishListButton.openWishlist()
    console.log('Перешли в Избранное')

    expect(await wishListPage.getFirstProductTitle()).toBe(productTitleFromList)
    console.log('Наименование товара в Избранном соответствует')
})