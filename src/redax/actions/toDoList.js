export const addList =(text) =>({
   type: 'ADD-LIST',
   payload: text
})

export const removeList = (arr) => ({
   type: 'REMOVE-LIST',
   payload: arr
})

export const checkList = ( checked) =>({
   type:'CHECK-LIST',
   payload:  checked
})