import { Locale } from 'actions';

const messages = (state = {}, { type, payload }) => {
  switch (type) {
    case Locale.LOAD_MESSAGES_SUCCESS:
      return {
        [payload.locale]: payload.messages,
        ...state,
      };
    default:
      return state;
  }
};

export default messages;
