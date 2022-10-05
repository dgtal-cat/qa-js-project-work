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

    await mainPage.open();
    await mainPage.clickFirstPopularCategory()
    await productsList.openFirstProductFromList()
    console.log('Перешли на страницу товара')

    const productTitle = await productPage.getProductTitle()
    console.log('Наименование товара: ', productTitle?.trim());

    await productPage.addToOrder()
    console.log('Добавили товар в корзину')
    await productPage.goToOrderPageFromModal()
    console.log('Перешли в корзину')

    expect(await orderPage.getFirstProductTitle()).toBe(productTitle)
    console.log('Наименование товара в корзине соответствует')
})