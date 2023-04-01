const defaultState = {
    isDisplay: false,
    isNumbers: false,
    isOptions: false,
    isEquals: false
}

 export default function constructorReducer(state=defaultState, action) {
    
    switch (action.type) {
        case 'ADD_DISPLAY': return {...state, isDisplay:true }
        case 'ADD_NUMBERS': return {...state, isNumbers:true }
        case 'ADD_OPTIONS': return {...state, isOptions:true }
        case 'ADD_EQULS': return {...state, isEquals:true }
   
        default:
            return state;
    }
}
