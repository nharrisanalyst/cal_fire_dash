import {useGetAlerts} from '../../hooks/useGetAlerts';
import Alert from '../Alert/Alert';

import alertI18n from '../../i18n/Alerts.i18n.json';

interface AlertMessageProps{
  zipcode:string;
} 

type Message = {
  event:string;
  headline:string;
  description?:string;
  instruction?:string;
}

const AlertMessage = ({zipcode}:AlertMessageProps)=>{
  const {
    data:fireAlerts,
    isLoading,
    isError,
    error
  } = useGetAlerts(zipcode);

  if(isError || error){
    <div>
        <span>{error?.message}</span>
        <button>retry</button>
      </div>
  }

  if(isLoading || !fireAlerts){
    return(
      <div>
        <span>...Loading</span>
      </div>
    )
  }

  const message:Message = fireAlerts.length>0?fireAlerts[0]: alertI18n.alerts.noWarnings;
  const activeAlert = fireAlerts.length>0?'active' : 'inactive';
  const events = message.event
  const headline = message.headline;
  const description = message?.description??"";
  const instruction = message?.instruction??"";

  return( 
      <div role='fire-alert'>
        <div>
          <Alert status={activeAlert} />
        </div>
        <div>
          <div data-testId='alert-event-321'>{events}</div>
          <div data-testId='alert-headline-321'>{headline}</div>
          <div data-testId='alert-description-321'>{description}</div>
          <div data-testId='alert-instruction-321'>{instruction}</div>
        </div>


      </div>
  )

}

export default AlertMessage;