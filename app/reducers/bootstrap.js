import { Bootstrap } from 'actions';

const booting = (state = true, { type }) => {
  switch (type) {
    case Bootstrap.SUCCESS:
      return false;
    default:
      return state;
  }
};

export default booting;
