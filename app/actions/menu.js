const prefix = 'MENU';

const TOGGLE = `${prefix}.TOGGLE`;
const TOGGLE_VCG_HOME = `${prefix}.TOGGLE_VCG_HOME`;

function toggle() {
  return {
    type: TOGGLE,
  };
}

export default {
  TOGGLE,
  TOGGLE_VCG_HOME,
  toggle,
};
