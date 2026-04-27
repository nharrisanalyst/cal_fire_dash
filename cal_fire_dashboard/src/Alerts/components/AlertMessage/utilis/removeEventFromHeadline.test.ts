import {test} from 'vitest';
import {removeEventFromHeadline} from './removeEventFromHeadline';

test('removeEventFromHeadline romeves the event from he headline', ()=>{
  const event ="Red Flag Warning";
  const headline = "Red Flag Warning issued April 27 at 11:49AM MDT until April 28 at 8:00PM MDT by NWS Albuquerque NM";

  const newHeadline = removeEventFromHeadline(event,headline);
  expect(newHeadline).toBe("April 27 at 11:49AM MDT until April 28 at 8:00PM MDT by NWS Albuquerque NM");
})