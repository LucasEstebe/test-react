export default (state, action) => {
    switch (action.type) {
        case "INPUT_FIRSTNAME":
            return {
                ...state,
                patient: {...state.patient, firstName: action.payload}
            }

        case "INPUT_LASTNAME":
            return {
                ...state,
                patient: {...state.patient, lastName: action.payload}
            }
        case "CHOOSE_SEX":
            return {
                ...state,
                patient: {...state.patient, isFemale: action.payload }
            }
        default:
            return state;
    }
}