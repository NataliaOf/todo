const inishialState = {
   calendar: []
}

function calendarReduser(state=inishialState, action){

   switch (action.type) {
      case 'ADD-DATE':
         
         return{
            ...state, ...state.calendar.push(action.payload)
         }

      case 'REMOVE-DATE':
         return{
            ...state, calendar: action.payload
         }
   
      default:
         return state
         
   }
}

export default calendarReduser;