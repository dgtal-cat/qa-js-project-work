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

    const abTestCoockie = {
        name: 'ab_test_analytics',
        value: '90x10v4%3A1%7Creindexer%3A1%7Cproduct_card_design%3A1%7Cdynamic_yield%3A3%7Cwelcome_mechanics%3A4%7Cdummy%3A20%7Cpage_listing%3A3',
        path: '/',
        domain: '.citilink.ru'
    }

    await mainPage.open();
    console.log('Открыта главная страница')

    await mainPage.clickFirstPopularCategory()

    await page.context().clearCookies()
    await page.context().addCookies([abTestCoockie])
    console.log('Почистили куки и добавили свои')

    let cookie = await page.context().cookies()
    console.log(cookie)

    await productsList.openFirstProductFromList()
    console.log('Перешли на страницу товара')

    cookie = await page.context().cookies()
    console.log(cookie)

    const productTitle = await productPage.getProductTitle()
    console.log('Наименование товара: ', productTitle)

    await productPage.addToOrder()
    console.log('Добавили товар в корзину')

    await productPage.goToOrderPageFromModal()
    console.log('Перешли в корзину')

    const productTitleInOrder = await orderPage.getFirstProductTitle()
    console.log('Наименование в корзине: ', productTitleInOrder)

    expect(productTitleInOrder).toBe(productTitle)
    console.log('Наименование товара в корзине соответствует')
})
