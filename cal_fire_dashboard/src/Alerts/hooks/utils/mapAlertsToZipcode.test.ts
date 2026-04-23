import {test} from 'vitest';
import { type FireAlert } from '../useGetAlerts'
import {  mapAlertsToZipcode, 
          filterAlertsByCname,
          trimSAME
        } from './mapAlertsToZipcode';

const fireData = [
  {
    event: "Red Flag Warning",
    headline: "123",
    description: "123",
    instruction: "123",
    geocode:{
      SAME:[
        "006061"
      ]
    }
  },
  {
    event: "Red Flag Warning",
    headline: "345",
    description: "345",
    instruction: "345",
    geocode:{
      SAME:[
        "039176"
      ]
    }
  },
  {
    event: "Red Flag Warning",
    headline: "567",
    description: "567",
    instruction: "567",
    geocode:{
      SAME:[
        "039176"
      ]
    }
  }
] as FireAlert[];


test('filterAlertsByCname returns true when the arrays have one matching canme and false when none', ()=>{
      const  cname_1 =['a','b','c'];
      const cname_2 = ['b'];
      const cname_3 = ['d']
      
      const inter_1 = filterAlertsByCname(cname_1, cname_2);
      const inter_2 = filterAlertsByCname(cname_1, cname_3);

      expect(inter_1).toBeTruthy();
      expect(inter_2).toBeFalsy();

       
})

test('trim SAME data to match zipcode data', ()=>{
      const SAME = [
                        "039063",
                        "039147",
                        "039175"
                    ]
    const trimmed = trimSAME(SAME);

    expect(trimmed).toStrictEqual([
                        "39063",
                        "39147",
                        "39175"
    ])
       
})



test('mapAlertsTpZipcode takes in a list of Fire Alerts and returns only the ones that match the zipcode returns [] if no match', async ()=>{
  const zipFireAlerts = await mapAlertsToZipcode("95677", fireData);
  expect(zipFireAlerts).toStrictEqual([
      {
      event: "Red Flag Warning",
      headline: "123",
      description: "123",
      instruction: "123",
      geocode:{
        SAME:[
          "006061"
        ]
      }
    }
  ])

})