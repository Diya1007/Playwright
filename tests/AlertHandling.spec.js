const{test,expect}=require('@playwright/test')
test.use({viewport:{width:2100,height:1200}})
test("Testing alert",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    page.on('dialog', async (d) => {
    await expect (d.type()).toContain("alert");
    await expect (d.message()).toContain("I am a JS Alert")
    await d.accept()
    })
    await page.getByRole("button",{name:"Click for JS Alert"}).click();
    await page.waitForTimeout(8000);
})

test("Testing confirm",async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    
    page.on('dialog', async (d) => {
    await expect (d.type()).toContain("confirm");
    await expect (d.message()).toContain("Confirm")
    await d.dismiss()
    })
    await page.getByRole("button",{name:"Click for JS Confirm"}).click();
})