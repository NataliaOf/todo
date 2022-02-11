const inishialState = {
   list: []
};

// check: false
// id: "gc253e5"
// task: "dddddddd"

function toDoListReduser(state=inishialState, action){
   switch (action.type) {
      case 'ADD-LIST':
         return{
            ...state, ...state.list.push(action.payload) 
         };

      case 'REMOVE-LIST':
         return{
            ...state, list: action.payload
         };
         
      case 'CHECK-LIST':
         return{...state, ...state.list.map((list)=> list.id === action.peyload 
            ?{...state, ...state.list, check: !state.list.check}
            :{...state}
         )}  

           
         
   
      default:
         return state;
   }
}

export default toDoListReduser;