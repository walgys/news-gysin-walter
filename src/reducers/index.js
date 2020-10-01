import * as actions from "../actions";

const initialState = {
  news: [],
  localization: "/",
  category: "Home",
  error: undefined,
  loading: undefined,
};

// Reducer evalua action types y el caso default es retornar el state
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_NEWS_BEGIN:
      // Marcar loading a true, nos puede servir para un
      // animacion de loading, un spinner...
      return {
        ...state,
        loading: true,
        error: undefined,
      };

    case actions.FETCH_NEWS_SUCCESS:
      // Se fetchearon exitosamente las news
      // ahora paso loading a false y las news
      // que vienen en el payload las seteo en la store
      return {
        ...state,
        loading: false,
        news: action.payload.news,
      };

    case actions.FETCH_NEWS_ERROR:
      // Aqui fallo el fetch, loading ahora es false
      // y seteo el error
      return {
        ...state,
        loading: false,
        error: action.payload,
        news: [],
      };

    case actions.SET_CATEGORY_AND_LOCALIZATION:
      return {
        ...state,
        category: action.payload.category,
        localization: action.payload.localization,
        news: [],
      };

    default:
      return state;
  }
};

export default newsReducer;
