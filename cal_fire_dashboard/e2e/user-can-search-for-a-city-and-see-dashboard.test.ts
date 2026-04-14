import {URL} from './utilis/env';
import {test, expect} from '@playwright/test';

test('user can search for a city and see the city dashboard', async ({page})=>{
  await page.goto(URL);
  //find search 
  const search = page.getByRole('textbox')
  await search.focus();
  await search.fill('cool');
  await search.blur();


  await page.getByText('95614, Cool').click();

  // insure that it is the correct dashboard
  await page.getByRole('heading', {name:/cool/i}).waitFor();
  await expect(page.getByRole('heading', {name:/cool/i})).toBeVisible();

  //insure data is there 
  await expect(page.getByText('Fire Risk Data')).toBeVisible();


})