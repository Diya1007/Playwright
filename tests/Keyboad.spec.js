const{test,expect}= require('@playwright/test')
test("keyboad keyPress",async function ({page}) {
    await page.goto("https://www.google.com/");
    await page.getByTitle("Search").type("Diya Singh");
    await page.waitForTimeout(2000);
    //await page.keyboard.press('Meta+A');
    //await page.keyboard.press('Backspace');
    await page.keyboard.down('Shift');
    for (let i=0;i<5;i++)
    {
        await page.keyboard.press("ArrowLeft");
    }
    await page.waitForTimeout(2000);
    await page.keyboard.press('Backspace');
    await page.keyboard.type("Laddu Lali");
    await page.waitForTimeout(2000);
    await page.keyboard.press("Enter");
    
    
})

