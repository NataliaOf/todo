export const addList =(text) =>({
   type: 'ADD-LIST',
   payload: text
})

export const remove = (id) => ({
   type: 'REMOVE-LIST',
   payload: id
})