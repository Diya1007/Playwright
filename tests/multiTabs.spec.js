const{test,expect}=require('@playwright/test')
test("handling multiple tabs", async function ({browser}) {
    const context= await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://freelance-learn-automation.vercel.app/login")
   const [Page2]= await Promise.all([
         context.waitForEvent("page"),
         page.locator("a[href='https://www.facebook.com/groups/256655817858291']").nth(0).click()
        
    ])
    await page.locator("input[name='email1']").fill("hellu!")
    await Page2.close();
    await page.waitForTimeout(3000)
})