import * as UserActionCreators from './user';
import * as TodoAtionCreators from './todo';

export default {
    ...TodoAtionCreators,
    ...UserActionCreators,
}