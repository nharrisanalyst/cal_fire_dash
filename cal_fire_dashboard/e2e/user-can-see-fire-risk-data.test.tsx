import {test, expect} from '@playwright/test';
import {URL} from './utilis/env' ;

const fire_data_URL = `${URL}/dashboard/95614`;

test('user can got to a dashboard and see the firedata', async ({page})=>{
  await page.goto(fire_data_URL);
  await expect(page.getByText('Fire Risk Data')).toBeVisible() 
  await expect(page.getByText('Fire Hazard Severity')).toBeVisible()

})