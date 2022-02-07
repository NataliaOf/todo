export const addList =(text) =>({
   type: 'ADD-LIST',
   payload: text
})

export const removeList = (id) => ({
   type: 'REMOVE-LIST',
   payload: id
})