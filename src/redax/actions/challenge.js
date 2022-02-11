export const removeChallenge = ()=>({
   type: 'REMOVE-CHALLENGE',

})

export const addChallenge = ( days, chalenge) => ({
   type: 'ADD-CHALLENGE',
   payload:  {days, chalenge}
})

export const chackedToggle =(check, id) => ({
   type: 'CHACKED-TOGGLE',
   payload: check, id
})

