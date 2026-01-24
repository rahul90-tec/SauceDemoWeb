import {test,expect} from '@playwright/test'
test('first test', async({page})=>{
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.waitForTimeout(5000)

})
