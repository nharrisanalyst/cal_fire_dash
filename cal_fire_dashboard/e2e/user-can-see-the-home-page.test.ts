import {URL} from './utilis/env';
import {test, expect} from '@playwright/test';

test('a user can see the homepage', async ({page})=>{
  await page.goto(URL);
  //header should be visible
  expect(page.getByRole('heading', {name:/Insure/}))

})
