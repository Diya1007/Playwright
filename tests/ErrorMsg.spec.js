const{test,expect}= require('@playwright/test')
test.use({viewport:{width:1920,height:1080}})
test("Check Error Msg", async function({page}){
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder("Username").fill("Admin");
    //page.waitForTimeout(3000)
    await page.locator("input[type='password']").fill("admin1234");
    //await page.waitForTimeout(3000)
    await page.getByRole('button',{name:'Login'}).click();
   await page.waitForTimeout(3000)
    
   const locate= await page.getByText("Invalid credentials")
   await expect(locate).toBeVisible()
    console.log(locate.textContent())
})