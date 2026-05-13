import {test } from 'vitest'
import {screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {render} from '../../../../tests/test_utilis/renderWithQueryClient'
import AlertMessage from './AlertMessage';


test('when there is an alert the message should dexcribe the alert', async ()=>{
  render(<AlertMessage zipcode="80435" />)

    const alert = await screen.findByTestId('alert-icon-321')
    const event = await screen.findByTestId('alert-event-321');
    const headline = await screen.findByTestId('alert-headline-321');
    const description = await screen.findByTestId('alert-description-321');
    const instruction = await screen.findByTestId('alert-instruction-321');

    expect(alert).toHaveClass(/activeAlert/i);
    expect(event).toHaveTextContent(/Red Flag Warning|Fire Weather Watch/i);
    expect(headline).toBeInTheDocument();
    expect(description).toHaveTextContent(/.../i);
    expect(instruction).toBeInTheDocument();
  
  
})

test('when there are no alerts a no alert message is shown', async ()=>{
    render(<AlertMessage zipcode="95677" />)
  
   
   const event = await screen.findByText(/No Active Alerts/i);
   const alert = await screen.findByTestId('alert-icon-321'); 
    const headline = await screen.findByText(/There are No Active/i);

    expect(alert).toHaveClass(/inactiveAlert/i);
    expect(event).toBeInTheDocument();
    expect(headline).toBeInTheDocument();
  
})

test('the Read Full Alert Warning to be in the document and when pressed the full alert is there',async ()=>{
  render(<AlertMessage zipcode="80435" />);


  const button = await screen.findByRole('button', {name:/read/i})
  const description = await screen.findByTestId('alert-description-321');
  expect(description).toHaveClass(/hiddenDescription/i)
  await userEvent.click(button);
  const description_2 = screen.getByTestId('alert-description-321');
  expect(description_2).toHaveClass(/showDescription/i)

})

test('if there are no alerts there should be no Red Full Alert Warning', async()=>{
    render(<AlertMessage zipcode="95677" />)
    await screen.findByText(/No Active Alerts/i);
    expect(screen.queryByRole('button', {name:/read/i})).not.toBeInTheDocument()
})