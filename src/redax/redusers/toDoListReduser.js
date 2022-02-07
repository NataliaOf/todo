const inishialState = {
   list: []
};

function toDoListReduser(state=inishialState, action){
   switch (action.type) {
      case 'ADD-LIST':
         return{
            ...state, ...state.list.push(action.payload) 
         };

      case 'REMOVE-LIST':
         return{
            ...state, list: action.payload
         }   
         
   
      default:
         return state;
   }
}

export default toDoListReduser;