
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

describe('tests for duel duo', () => {
    
    test('Title shows up when page loads', async () => {
        const title = await driver.findElement(By.id('title'))
        const displayed = await title.isDisplayed()
        expect(displayed).toBe(true)
    })
    
    test('clicking the Draw button displays the div with id = choices', async () => {
        await driver.findElement(By.id('draw')).click()
        driver.sleep(2000)
        const choicesDiv = await driver.findElement(By.id('choices'))
        const displayed = await choicesDiv.isDisplayed()
        expect(displayed).toBeTruthy
    })
    
    test('add to duo button displays the div with id = player-duo', async () => {
        await driver.findElement(By.id('draw')).click()
        driver.sleep(2000)
        const atd = await driver.findElement(By.id('player-duo')).isDisplayed
        await driver.findElement(By.css('.bot-btn')).click()
        driver.sleep(2000)
        expect(atd).toBeTruthy()
    })

})