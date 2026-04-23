// import {test} from 'vitest';
// import {mapAlertsToZipcode} from './mapAlertsToZipcode';

// const fireData = [
//   {
//     event: "Red Flag Warning",
//     headline: "123",
//     description: "123",
//     instruction: "123",
//     geocode:{
//       SAME:[
//         "006061"
//       ]
//     }
//   },
//   {
//     event: "Red Flag Warning",
//     headline: "345",
//     description: "345",
//     instruction: "345",
//     geocode:{
//       SAME:[
//         "039176"
//       ]
//     }
//   },
//   {
//     event: "Red Flag Warning",
//     headline: "567",
//     description: "567",
//     instruction: "567",
//     geocode:{
//       SAME:[
//         "039176"
//       ]
//     }
//   }
// ]

// test('mapAlertsTpZipcode takes in a list of Fire Alerts and returns only the ones that match the zipcode returns [] if no match', ()=>{
//   const zipFireAlerts = mapAlertsToZipcode("95677", fireData);
//   expect(zipFireAlerts).toStrictEqual([
//       {
//       event: "Red Flag Warning",
//       headline: "123",
//       description: "123",
//       instruction: "123",
//       geocode:{
//         SAME:[
//           "006061"
//         ]
//       }
//     }
//   ])

// })