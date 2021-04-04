import { initialState } from "./QuizContainer";

const SET_CHECKBOX_PAGE1 = 'SET_CHECKBOX_PAGE1';
const SHANGE_PAGE = 'SHANGE_PAGE';
const CHANGE_RADIO_PAGE2 = 'CHANGE_RADIO_PAGE2';
const CHANGE_SELECT_PAGE3 = 'CHANGE_SELECT_PAGE3';
const CHANGE_PROGRES_BAR = 'CHANGE_PROGRES_BAR';


const quiz = (state, action) => {
    switch (action.type) {
        case SET_CHECKBOX_PAGE1:
            const newCheckBoxItems = { ...state.page1.items[action.id] }
            newCheckBoxItems.checked = !newCheckBoxItems.checked;

            return {
                ...state,
                page1: {
                    ...state.page1,
                    items: {
                        ...state.page1.items,
                        [action.id]: newCheckBoxItems
                    }
                }
            }
        case SHANGE_PAGE:
            return {
                ...state,
                activePage: action.page
            }
        case CHANGE_RADIO_PAGE2:
            let newItems = {};

            for (let key in state.page2.items) {
                if (action.id === key) {
                    newItems[key] = {
                        ...state.page2.items[key],
                        checked: true
                    }
                }
                else newItems[key] = { ...state.page2.items[key], checked: false }
            }

            return {
                ...state,
                selects: initialState.selects,
                page2: {
                    ...state.page2,
                    items: newItems
                },
            }
        case CHANGE_SELECT_PAGE3:
            const newSelect = { ...state.selects[action.id] };
            newSelect.value = action.value;
            return {
                ...state,
                selects: {
                    ...state.selects,
                    [action.id]: newSelect
                }
            }
        case CHANGE_PROGRES_BAR:
            return {
                ...state,
                progresBar: { ...state.progresBar, value: action.value, progres: action.progres }
            }
        default: return state
    }
}

export default quiz;

export const setCheskBoxPage1 = id => ({ type: SET_CHECKBOX_PAGE1, id });
export const changePage = page => ({ type: SHANGE_PAGE, page });
export const changeRadioPage2 = id => ({ type: CHANGE_RADIO_PAGE2, id });
export const changeSelectPage3 = (id, value) => ({ type: CHANGE_SELECT_PAGE3, id, value });
export const changeProgresBar = (value, progres) => ({ type: CHANGE_PROGRES_BAR, value, progres });

