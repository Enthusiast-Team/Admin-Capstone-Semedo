// reducer.js
const initialState = {
  popup: false,
  isLogin: false,
  isLoading: false,
  user: [],
  artikelData: [],
  prediction: null,
  error: null,
  artikelDetail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_POPUP':
      return {
        ...state,
        popup: action.value,
      };
    case 'CHANGE_ISLOGIN':
      return {
        ...state,
        isLogin: action.value,
      };
    case 'CHANGE_ISLOADING':
      return {
        ...state,
        isLoading: action.value,
      };
    case 'CHANGE_USER':
      return {
        ...state,
        user: action.value,
      };
    case 'SET_ARTIKEL':
      return {
        ...state,
        artikelData: action.value,
      };
    case 'DELETE_ARTIKEL':
      return {
        ...state,
        artikelData: state.artikelData.filter((artikel) => artikel.id !== action.id),
      };
    case 'UPDATE_ARTIKEL':
      return {
        ...state,
        artikelData: state.artikelData.map((artikel) =>
          artikel.id === action.id ? { ...artikel, ...action.updatedData } : artikel
        ),
      };
    case 'SET_SELECTED_ARTIKEL':
      return {
        ...state,
        selectedArtikel: action.value,
      };
    case 'UPLOAD_IMAGE_SUCCESS':
      return {
        ...state,
        prediction: action.payload,
        error: null,
      };
    case 'UPLOAD_IMAGE_FAILURE':
      return {
        ...state,
        prediction: null,
        error: action.payload,
      };
    case 'SET_ARTIKEL_DETAIL':
      return {
        ...state,
        artikelDetail: action.payload,
      };
    // Add your additional cases here
    case 'SOME_OTHER_ACTION':
      // handle some other action
      return {
        ...state,
        // update state accordingly
      };
    default:
      return state;
  }
};

export default reducer;
