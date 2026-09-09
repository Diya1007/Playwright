const{test,expect}= require('@playwright/test')
const testdata=JSON.parse(JSON.stringify(require("../tests/testdata.json")))
test.use({viewport:{width:1920, height:1080}})

test.describe("data driven testing", function()
{
    for(const data of testdata )
    {
    test(`vercel Demo app ${data.id}`, async function({page}){
   await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.locator("#email1").fill(data.user);
    await page.locator("#password1").fill(data.pw)
    await page.waitForTimeout(5000)
    });
}})