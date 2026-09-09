const { expect } = require('allure-playwright');

class homePage
{
    /**@type{import ('@playwright/test').Page} */
    page;
    constructor(page)
    {
        this.page=page;
        this.sidebutton=this.page.locator("img[src='/static/media/burger-menu.93a4e66d6d393af53ac4ed46e5193397.svg']");
        this.signout=this.page.getByRole('button',{name:"Sign out"});
    }

    async SignOut()
    {
        
       await this.sidebutton.click();
       await this.signout.click();
    }

    async VerifyLogout()
    {
      await  expect(this.page).toHaveURL("https://freelance-learn-automation.vercel.app/login");
    }
}
module.exports = homePage;