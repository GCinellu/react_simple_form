let defaultState = {
  nameFirst: '',
  nameLast: '',
  nameAddition: '',
  nameInitials: '',

  addressStreet: '',
  addressNumber: '',
  addressAddition: '',
  addressPostcode: '',
  addressCity: '',
};

const subscriber = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SUBSCRIBER':
      return {
        nameFirst: action.values.nameFirst,
        nameLast: action.values.nameLast,
        nameAddition: action.values.nameAddition,
        nameInitials: action.values.nameInitials,

        addressStreet: action.values.addressStreet,
        addressNumber: action.values.addressNumber,
        addressAddition: action.values.addressAddition,
        addressPostcode: action.values.addressPostcode,
        addressCity: action.values.addressCity
      };

    default:
      return state
  }
};

export default subscriber;