import { test, expect } from '@playwright/test';
import MainPage from '../framework/pages/MainPage'
import OrderPage from '../framework/pages/OrderPage'
import ProductsList from '../framework/helpers/ProductsList';
import ProductPage from '../framework/pages/ProductPage';

test('Добавление товара в корзину', async ({ page }) => {
    const mainPage = new MainPage(page)
    const orderPage = new OrderPage(page)
    const productPage = new ProductPage(page)
    const productsList = new ProductsList(page)

    await mainPage.openMainPageByUrl();
    await mainPage.clickFirstPopularCategory()
    await productsList.clickFirstProductFromList()
    const productTitle = await productPage.getProductTitle() //нужно доработать локатор
    console.log('Перешли на страницу товара')
    console.log('Наименование товара: ', productTitle?.trim());

    await productPage.clickAddToOrderButton()
    await productPage.goToOrderPageFromModal()

    expect(await orderPage.getFirstProductTitle()).toBe(productTitle)
    console.log('Наименование товара в корзине соответствует')
})