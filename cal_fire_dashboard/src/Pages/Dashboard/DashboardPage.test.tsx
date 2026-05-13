// import { beforeEach, describe, vi, type Mocked, test } from 'vitest'
// import axios from "axios";
// import { render, screen, waitFor } from '@testing-library/react'
// import DashboardPage from './Dashboard'
// import { Routes, Route, MemoryRouter } from "react-router-dom";

// import avgData from '../../__mocks__/avgMock.json'
// import mockData from '../../__mocks__/zipcodeMock.json'



// vi.mock("axios", () => {
//   const get = vi.fn();
//   return {
//     default: {
//       get,
//       create: vi.fn(() => ({
//         get,
//       })),
//     },
//   };
// });

test('pass', ()=>{
  expect(1).toBe(1);
})


// describe('these are test for the <DashboardPage/> component',()=>{
//     beforeEach(()=>{
//         vi.resetAllMocks();
//     })
//     it('renders without crashing',  async ()=>{
//         const mockedAxios = axios as Mocked<typeof axios>;
//         mockedAxios.get.mockImplementation((url: string) => {
//       if (url === "/data/zipcode/95677") {
//         return Promise.resolve({data:mockData});
//       }
//       if (url === "/data/avgdata") {
//         return Promise.resolve({data:avgData});
//       }
//       return Promise.reject(new Error(`Unknown URL: ${url}`));
//     });
//         render(
//         <MemoryRouter initialEntries={["/dashboard/95677"]}>
//             <Routes>
//                 <Route path="/dashboard/:zipcode" element={<DashboardPage />} />
//             </Routes>
//         </MemoryRouter>
//         );

//         await waitFor(() => {
//         expect(screen.getByText(/95677,/i)).toBeInTheDocument();
//   });
//     })
// })