const inishialState = {
   list: []
};

// check: false
// id: "gc253e5"
// task: "dddddddd"
const a ={ ...inishialState}.list
console.log(a)

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
    
   
         return{
            ...state, list : action.payload
            
         }
         

           
         
   
      default:
         return state;
   }
}

export default toDoListReduser;