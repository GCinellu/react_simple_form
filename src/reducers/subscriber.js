let defaultState = {
  nameFirst: '',
  nameLast: '',
  nameAddition: '',
  nameInitials: '',

  addressStreet: '',
  addressNumber: '',
  addressAddition: '',
  addressCity: '',
};

const subscriber = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SUBSCRIBER':
      return {
        nameFirst: action.values.nameFirst,
        nameLast: action.values.nameLast,
        nameAddition: action.values.nameAddition,
        nameInitials: action.values.nameInitials
      };

    default:
      return state
  }
};

export default subscriber;