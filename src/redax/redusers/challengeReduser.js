const inishialState = {
   chellenge:{
      id: 0,
      numberDays: 0,
      chellengeText: '',
      days: []
   }
}

function challengeReduser(state= inishialState, action){
   switch (action.type) {
      case 'ADD-NAMBER-OF-DAY':
         return{
            ...state, ...state.chellenge, numberDays: action.payload
         }

      case 'ADD-CHALLENGE':
         return{
            ...state, ...state.chellenge, chellengeText: action.payload
         } 
         
      case 'ADD-ARR-DAYS':
         return{
            ...state, ...state.chellenge, days: action.payload
         }   
   
      default:
         return state;
   }
}

export default  challengeReduser;