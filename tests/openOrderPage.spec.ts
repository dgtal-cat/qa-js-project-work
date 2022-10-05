import { test, expect } from '@playwright/test';
import MainPage from '../framework/pages/MainPage'
import OrderPage from '../framework/pages/OrderPage'
import BasketButtonElement from '../framework/elements/BasketButtonElement'

test('Переход на страницу корзины по клику на иконку корзины', async ({ page }) => {
    const mainPage = new MainPage(page);
    const orderPage = new OrderPage(page)
    const basketButton = new BasketButtonElement(page)

    await mainPage.open();

    await expect(mainPage.page).toHaveTitle('Ситилинк - интернет-магазин техники, электроники, товаров для дома и ремонта');
    console.log('Главная страница успешно открыта');

    await basketButton.openBasket()
    await expect(page).toHaveURL('https://www.citilink.ru/order/')

    await expect(orderPage.getBasketEmptyTitle()).toHaveText('В корзине нет товаров')
    console.log('На странице есть тайтл "В корзине нет товаров"');
})