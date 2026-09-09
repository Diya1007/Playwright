const {test,expect}= require('@playwright/test')
test.use({viewport:{width:1920,height:1080}});
test("Mouse Hover", async function({page}){
    await page.goto("https://www.flipkart.com/mobile-phones-store?pageUID=1788400761265");
    //await page.locator("a[aria-haspopup='true'] img[alt]")
    await page.waitForTimeout(2000)
    await page.getByLabel("Help Center").scrollIntoViewIfNeeded();
     await page.getByLabel("Help Center").click();
    //await page.getByLabel("Login").scrollIntoViewIfNeeded();
    //await page.getByLabel("Login").hover();
    //await page.getByTitle("Wishlist").click();
    await page.waitForTimeout(2000)
})