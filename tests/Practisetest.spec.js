const{test,expect}=require('@playwright/test')
test('first func', async ({page})=>{
    expect("hello".includes("ello")).toBeTruthy()
});
test.skip('second function', async({page})=>{
    expect(101).toBe(101)
})

