const inishialState = {
   list=[]
};

function toDoListReduser(state=inishialState, action){
   switch (action.tipe) {
      case 'ADD-LIST':
         return{
            ...state, list: action.payload
         }
         
   
      default:
         return state;
   }
}

export default toDoListReduser;