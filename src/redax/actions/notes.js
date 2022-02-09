export const addNote =(text) =>({
   type: 'ADD-NOTE',
   payload: text
})

export const removeNote = (arr) => ({
   type: 'REMOVE-NOTE',
   payload: arr
})