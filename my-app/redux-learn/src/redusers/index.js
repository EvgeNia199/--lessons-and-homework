import counterReducer from "./counterReducer";
import themeReducer from "./themeReducer";
import userReduser from "./userReduser";
import userDataReducer from "./userDataReducer";
import superHeroReducer from "./superHeroReducer";
import {combineReducers} from 'redux';
// собирает коллекцию редюсеров в главный
const rootReducer = combineReducers({
    counterReducer: counterReducer,
    themeReducer: themeReducer,
    userReduser: userReduser,
    userDataReducer: userDataReducer,
    superHeroReducer: superHeroReducer,
});
export default rootReducer;