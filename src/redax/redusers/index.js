import { combineReducers } from 'redux';
import toDoListReduser from './toDoListReduser';



const rootReduser = combineReducers({
   toDoList:toDoListReduser,

})

export default  rootReduser;