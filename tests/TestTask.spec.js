const { test, expect } = require('@playwright/test');

const baseUrl = 'https://graintrack.com/'


test('Visit the main page', async ({page}) => {
   await page.goto(baseUrl) 
   expect(page).toHaveTitle('Grain Track ⋆ CTRM-system for managing grain trading company')
});

test('Visit the vacancies page', async ({page}) => {
    await page.goto(baseUrl + /vacancies/) 
    expect(page).toHaveTitle('Vacancies ⋆ Grain Track')
});

test('Visit the case studies page', async ({page}) => {
    await page.goto(baseUrl + /use-cases/) 
    expect(page).toHaveTitle('Use cases ⋆ Grain Track')
});

test('Visit the podcast page', async ({page}) => {
    await page.goto(baseUrl + /podcast/) 
    expect(page).toHaveTitle('Podcasts - Grain Live ⋆ Grain Track')
});

test('Visit the blog page', async ({page}) => {
    await page.goto(baseUrl + /blog-en/) 
    expect(page).toHaveTitle('Blog ⋆ Grain Track')
});


test('Visit the team page', async ({page}) => {
    await page.goto(baseUrl + /team/) 
    expect(page).toHaveTitle('Management Team ⋆ Grain Track')
});

test('Visit the features page', async ({page}) => {
    await page.goto(baseUrl + /features-eng/) 
    expect(page).toHaveTitle('Features ⋆ Grain Track')
});

test('Visit the request demo page', async ({page}) => {
    await page.goto(baseUrl + /request-demo/) 
    expect(page).toHaveTitle('Request Demo ⋆ Grain Track')
});

test('Send the request demo', async ({page}) => {
    await page.goto(baseUrl + /request-demo/) 
    await page.locator('[placeholder="info@company.com"]').fill('test@mail.com')
    await page.locator('[placeholder="+0 000 0000000"]').fill('+380671231212')
    await page.locator('[type="submit"]').click()
    await page.locator('text=Oh...Something went wrong, please check all fields').isVisible()
});

test('Send the request demo with invalid email', async ({page}) => {
    await page.goto(baseUrl + /request-demo/) 
    await page.locator('[placeholder="info@company.com"]').fill('test')
    await page.locator('[placeholder="+0 000 0000000"]').fill('+380671231212')
    await page.locator('[type="submit"]').click()
    await page.locator('[class="wpcf7-not-valid-tip"]').isVisible('Incorrect e-mail.')
});

test('Send the request demo with incorrect number', async ({page}) => {
    await page.goto(baseUrl + /request-demo/) 
    await page.locator('[placeholder="info@company.com"]').fill('test@mail.com')
    await page.locator('[placeholder="+0 000 0000000"]').fill('test')
    await page.locator('[type="submit"]').click()
    await page.locator('[class="wpcf7-not-valid-tip"]').isVisible('Incorrect phone number.')
});

