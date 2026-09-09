const{test,expect}= require('@playwright/test')
const loginC=require('../POM/Login')
const logout=require('../POM/homePage')
test("Login Validation", async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const obj= new loginC(page);
    const obj1=new logout(page);
    await obj.loginTest();
    await expect(page.getByText("Manage",{exact:true})).toBeVisible();
    await obj1.SignOut();
    await obj1.VerifyLogout();
})