import { Builder, Capabilities, By } from "selenium-webdriver"; // need to bring in the functions from the Selenium Webdriver to build a driver that will allow us to interact with the browser

const chromedriver = require('chromedriver')// need to require chromedriver as part of the boilerplate

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()// boilerplate also the same as far as setting up Chrome

beforeAll(async () =>{//// A beforeAll will run a single time in the beginning before all of our tests
    await driver.get('http://127.0.0.1:5500/automation/movieList/index.html')//similar to axios, .get to pull in the URL that we want to test
})

afterAll(async () => {// An afterAll will run after all of our tests have ran
    await driver.quit()// function to make the testing end using .quit()
})

test('I can add a movie', async ()=> {//calling a test with the first parameter is the name of the test, then call async to use the functions
    let inputField = await driver.findElement(By.xpath('(//main/section/form/input)'))//assigning the input field to a variable called inputField
    await inputField.sendKeys('Bonanza\n')//.sendKeys() sends the info we want to insert into the variable. \n is new line and is used as a Enter button. await is used when we're dealing with the browser
    let submitBtn = await driver.findElement(By.xpath('(//main/section/form/button)'))//assigning the button on the browser to a variable called submitBtn
    await submitBtn.click()//.click() is called to actually click on the button automatically
    
    await driver.sleep(3000)//.sleep() is a built in function that doesn't immediately close out the browser 3000MS is 3 sec
})

test('lets delete a movie', async ()=>{
    let exBtn = await driver.findElement(By.xpath('(//main/ul/li/button)'))
    await exBtn.click()

    await driver.sleep(3000)

// Brendan's code
  // -- get the hidden aside message when delete the movie.
  // - use the getText() method to get the inner text.
    let asideEl: string = await driver.findElement(By.id('message')).getText();

    // - if the asides text is absolutely equal to our desired text.
    if (asideEl === 'Bonanza deleted!') {
    console.log('message the same');
    } else {
    console.log('message not the same');
    }

})
