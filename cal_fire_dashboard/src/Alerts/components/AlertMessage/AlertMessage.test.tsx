import {test, vi} from 'vitest'
import {screen} from '@testing-library/react';
import {render} from '../../../../tests/test_utilis/renderWithQueryClient'
import AlertMessage from './AlertMessage';

import alertI18n from '../../i18n/Alerts.i18n.json';

test('when there is an alert the message should dexcribe the alert', async ()=>{
  render(<AlertMessage zipcode="80435" />)
  
  await vi.waitFor(()=>{
    expect(screen.getByTestId('alert-event-321')).toBeInTheDocument();
  })

    const alert = screen.getByTestId('alert-icon-321')
    const event = screen.getByTestId('alert-event-321');
    const headline = screen.getByTestId('alert-headline-321');
    const description = screen.getByTestId('alert-description-321');
    const instruction = screen.getByTestId('alert-instruction-321');

    expect(alert).toHaveClass(/activeAlert/i);
    expect(event).toHaveTextContent(/Red Flag Warning|Fire Weather Watch/i);
    expect(headline).toHaveTextContent(/Red Flag Warning|Fire Weather Watch/i);
    expect(description).toHaveTextContent(/.../i);
    expect(instruction).toBeInTheDocument();
  
  
})

test('when there are no alerts a no alert message is shown', async ()=>{
  render(<AlertMessage zipcode="95677" />)

  await vi.waitFor(()=>{
   expect(screen.getByTestId('alert-event-321')).toBeInTheDocument();
  })

   const alert = screen.getByTestId('alert-icon-321');
    const event = screen.getByTestId('alert-event-321'); 
    const headline = screen.getByTestId('alert-headline-321');

    expect(alert).toHaveClass(/inactiveAlert/i);
    expect(event).toHaveTextContent(alertI18n.alerts.noWarnings.event);
    expect(headline).toHaveTextContent(alertI18n.alerts.noWarnings.headline);
  
  
})