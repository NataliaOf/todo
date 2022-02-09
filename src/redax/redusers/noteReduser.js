const inishialState = {
   notes: []
};

function noteReduser(state=inishialState, action){

   switch (action.type) {
      case'ADD-NOTE':
         return{
            ...state, ...state. notes.push(action.payload) 
         };

      case'REMOVE-NOTE':
         return{
            ...state, notes: action.payload
         };   
   
      default:
         return state;
   }
};


export  default noteReduser;