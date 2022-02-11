const inishialState = {
   chellenge:{
      // id: 0,
      numberDays: 0,
      chellengeText: '',
      daysObj: []
   }
}



function challengeReduser(state= inishialState, action){
   switch (action.type) {
      case 'REMOVE-CHALLENGE':
        return {
           ...state, chellenge: {
            numberDays: 0,
            chellengeText: '',
            daysObj: []
           }
        }
      case 'ADD-CHALLENGE':
       const {days} = action.payload;
         const { chalenge } = action.payload;

         const arrDays= [];
         for (let index = 0; index < days; index++) {
            
            const newDayChellenge={
               id:Math.random().toString(36).substring(2,9),
               check: false
            }
            arrDays.push(newDayChellenge)
            
         }
        
         return{
            ...state, ...{chellenge : {numberDays:days, chellengeText: chalenge, daysObj:arrDays }}
         } 
         
      case 'CHACKED-TOGGLE':
         // let {chek} = action.payload;
         // const { id } = action.payload;
         // if(state.chellenge.daysObj.id === id)
         
         
         return{
            // ...state, ...state.chellenge, ...{daysObj: chek= !chek}
            state
         }   
   
      default:
         return state;
   }
}

export default  challengeReduser;