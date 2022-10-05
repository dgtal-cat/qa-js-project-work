import BaseElement from "./BaseElement";

export default class WishlistButtonElement extends BaseElement {
    locator = this.page.locator('.HeaderMenu__button_wishlist')

    openWishlist = () => {
        this.locator.click()
    }
}