import * as actions from "../actions"

const initialState = {
  categories: [
    { link: `${process.env.PUBLIC_URL}/`, label: "Home", id: 0, visible: true },
    { link: `${process.env.PUBLIC_URL}/Politics`, label: "Política", id: 1, visible: true },
    { link: `${process.env.PUBLIC_URL}/International`, label: "Internacionales", id: 2, visible: true },
    { link: `${process.env.PUBLIC_URL}/Tech`, label: "Tecnología", id: 3, visible: true },
    { link: `${process.env.PUBLIC_URL}/Shows`, label: "Espectáculos", id: 4, visible: true },
    { link: `${process.env.PUBLIC_URL}/Sports`, label: "Deportes", id: 5, visible: true },
    { link: `${process.env.PUBLIC_URL}/Design`, label: "Diseño", id: 6, visible: true },
    { link: `${process.env.PUBLIC_URL}/search`, label: "Buscar", id: 7, visible: false },
  ],
  news: [],
  navigation: { location: `${process.env.PUBLIC_URL}/`, modal: false },
  error: undefined,
  loading: undefined,
  responded: false,
}

// Reducer evalua action types y el caso default es retornar el state
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_NEWS_BEGIN:
      // Marcar loading a true, nos puede servir para un
      // animacion de loading, un spinner...
      return {
        ...state,
        news: [],
        loading: true,
        responded: false,
        error: undefined,
      }

    case actions.FETCH_NEWS_SUCCESS:
      // Se fetchearon exitosamente las news
      // ahora paso loading a false y las news
      // que vienen en el payload las seteo en la store
      return {
        ...state,
        news: action.payload.news,
      }

    case actions.FETCH_NEWS_ERROR:
      // Aqui fallo el fetch, loading ahora es false
      // y seteo el error
      return {
        ...state,
        loading: false,
        error: action.payload,
        news: [],
      }

    case actions.LOADING_FINISHED:
      return {
        ...state,
        loading: false,
      }

    case actions.FETCH_RESPONSE:
      return {
        ...state,
        responded: true,
      }

    case actions.SET_LOCATION:
      let newCategories = {}
      if (action.payload.location === 7) {
        newCategories = state.categories.map((cat) =>
          cat.id === 7 ? { ...cat, visible: true } : cat
        )
      } else {
        newCategories = state.categories.map((cat) =>
          cat.id === 7 ? { ...cat, visible: false } : cat
        )
      }
      return {
        ...state,
        categories: newCategories,
        navigation: {
          ...state.navigation,
          location: action.payload.location,
        },
      }

    case actions.OPEN_MODAL:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          modal: true,
        },
      }

    case actions.CLOSE_MODAL:
      return {
        ...state,
        navigation: {
          ...state.navigation,
          modal: false,
        },
      }

    default:
      return state
  }
}

export default newsReducer
