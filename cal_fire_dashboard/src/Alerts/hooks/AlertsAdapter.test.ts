import {test} from "vitest";
import { AlertsAdapter } from './useGetAlerts';

const alertsData = [
  {
    event: "Red Flag Warning",
    headline: "123",
    description: "123",
    instruction: "123",
  },
  {
    event: "Random text",
    headline: "345",
    description: "345",
    instruction: "345",
  },
  {
    event: "More Random Text",
    headline: "567",
    description: "567",
    instruction: "567",
  }
]




test('alert adapter filters out for only “Fire Weather Watch” or “Red Flag Warning”', ()=>{
  const FireAlerts = AlertsAdapter(alertsData);
  expect(FireAlerts).toStrictEqual([
    {
    event: "Red Flag Warning",
    headline: "123",
    description: "123",
    instruction: "123",
  }
  ])
})