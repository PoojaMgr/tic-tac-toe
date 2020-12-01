import { createStore, compose } from 'redux';
import rootReducer from './redux/reducer';

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default createStore(rootReducer, enhancers);