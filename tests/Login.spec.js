const{test,expect}= require('@playwright/test')
test("Login Validation", async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder("username").type("Admin");
    await page.locator("input[type='password']").type("admin123");
    await page.locator("//button[@type='submit']").click();
    const url = await page.url();
    
    await expect(page).toHaveURL(/dashboard/);
    //await page.locator("//span[@class='oxd-userdropdown-tab']").click();
    //await page.getByRole('img',{name:'profile picture'}).click();
    await page.getByAltText("profile picture").click();
    await page.waitForTimeout(2000);
    //await page.locator("//a[@href='/web/index.php/auth/logout']").click();
    await page.getByRole('menuitem',{name:'Logout'}).click();
    console.log("Browser:", await page.evaluate(() => navigator.userAgent));
})