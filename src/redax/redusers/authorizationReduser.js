
const inishialState = {
   user: {
      checkbox: true,
      email: "",
      fName: "",
      password: ""
   },
   authUser:false
}

function authorizationReduser(state= inishialState, action){
   switch (action.type) {
      case 'ADD-USER':
         return{
            ...state, user: action.payload
         }

      case 'REMOVE-USER':
         return{
            ...state, user: action.payload
         }
         case 'AUTH-USER':
            return{
               ...state, authUser: action.payload
            }
   
      default:
         return state
   }
}

export default authorizationReduser;
