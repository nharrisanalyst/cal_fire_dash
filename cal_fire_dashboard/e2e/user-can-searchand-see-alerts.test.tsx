import {URL} from './utilis/env';
import {test, expect} from '@playwright/test';

test('user can search by zipcode and see alerts', async ({page})=>{
  await page.goto(URL);
  //find search 
  const search = page.getByRole('textbox')
  await search.focus();
  await search.fill('95614');
  await search.blur();


  await page.getByText('95614, Cool').click();

  await expect(page.getByText(/alert/i)).toBeVisible();
})