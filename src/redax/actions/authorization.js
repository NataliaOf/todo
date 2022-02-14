export const addUser= (obj) =>({
   type: 'ADD-USER',
   payload: obj
});

export const remoweUser = (obj) => ({
   type: 'REMOVE-USER',
   payload: obj
})

export const authUser = (boolean) =>({
   type: 'AUTH-USER',
   payload: boolean
})