const inishialState = {
   calendar: ''
}

function calendarReduser(state=inishialState, action){

   switch (action.type) {
      case 'ADD-DATE':
         
         return{
            ...state
         }
   
      default:
         return{
            state
         }
         
   }
}

export default calendarReduser;