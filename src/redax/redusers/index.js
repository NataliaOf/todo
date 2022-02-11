import { combineReducers } from 'redux';
import toDoListReduser from './toDoListReduser';
import noteReduser from './noteReduser';
import challengeReduser from './challengeReduser';
import calendarReduser from './calendarReduser';



const rootReduser = combineReducers({
   toDoList : toDoListReduser,
   note : noteReduser,
   challenge : challengeReduser,
   calendar : calendarReduser

})

export default  rootReduser;