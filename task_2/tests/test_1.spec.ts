import { test, expect } from '@playwright/test';

const authFile = 'user.json';

test('simple test', async ({ page }) => {
  await page.goto('https://www.avito.ru/avito-care/eco-impact/');
  await page.locator(".desktop-impact-items-F7T6E").screenshot({path:"./output/simple_test.png"});
});

test('load test', async ({ page }) => {
  await page.goto('https://www.avito.ru/avito-care/eco-impact/');
  await page.locator(".desktop-impact-items-F7T6E").screenshot({path:"./output/load_test_1.png"});
  await page.locator(".desktop-impact-items-F7T6E").screenshot({path:"./output/load_test_2.png"});
  await page.locator(".desktop-impact-items-F7T6E").screenshot({path:"./output/load_test_3.png"});
  await page.goto('https://www.avito.ru/avito-care/eco-impact/');
  await page.locator(".desktop-impact-items-F7T6E").screenshot({path:"./output/load_test_4.png"});
});