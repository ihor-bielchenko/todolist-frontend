import main from 'components/Store/main/reducer.js';
import * as actionsLocal from './actions';

const task = () => main('task', actionsLocal);

export default task;
