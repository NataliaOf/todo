import { combineReducers } from 'redux';
import toDoListReduser from './toDoListReduser';
import noteReduser from './noteReduser';
import challengeReduser from './challengeReduser';



const rootReduser = combineReducers({
   toDoList:toDoListReduser,
   note:noteReduser,
   challenge: challengeReduser,

})

export default  rootReduser;