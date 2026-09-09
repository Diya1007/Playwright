const{test,expect}= require('@playwright/test')
test.use({viewport:{width:1920,height:1080}})
test("wait for page load", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    //await page.waitForLoadState("networkidle")
   // const count= await page.locator(".interest-div").count();
    await expect(await page.locator(".interest-div")).toHaveCount(8);
})