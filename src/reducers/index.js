import member from './member';
import locale from './locale';
import test from './test';
import PushMessage from './PushMessage';

const rehydrated = (state = false, action) => {
    switch (action.type) {
      case 'persist/REHYDRATE':
        return true;
      default:
        return state;
    }
  };
  

export default {
  rehydrated,
  member,
  locale,
  recipes : test,
  PushMessage
};
