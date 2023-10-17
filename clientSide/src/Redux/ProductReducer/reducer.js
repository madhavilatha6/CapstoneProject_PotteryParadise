import {
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_FAILURE,
    GET_ALL_PRODUCTS_SUCCESS,
    // GET_SEARCH_PRODUCT_SUCCESS,
    // GET_SEARCH_PRODUCT_FAILURE,
    // GET_SEARCH_PRODUCT_REQUEST,
    // GET_PRODUCT_REQUEST,
    // GET_PRODUCT_FAILURE,
    // GET_PRODUCT_SUCCESS
  } from "./actionTypes";
  
  export const initState = {
    productData: [],
    error: "",
    loading: false,
    searchData: [],
    requestedProduct: []
  };
  
  const reducer = (state = initState, action) => {
    switch (action.type) {
      case GET_ALL_PRODUCTS_REQUEST:
        return {
          ...state,
          loading: true,
          error: "",
        };
      case GET_ALL_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: "Something went wrong",
        };
      case GET_ALL_PRODUCTS_SUCCESS:
        return {
          ...state,
          error: "",
          loading: false,
          productData: action.loadData,
        };
    //   case GET_SEARCH_PRODUCT_REQUEST:
    //     return {
    //       ...state,
    //       error: "",
    //     };
    //   case GET_SEARCH_PRODUCT_FAILURE:
    //     return {
    //       ...state,
    //       error: "Something went wrong",
    //     };
    //   case GET_SEARCH_PRODUCT_SUCCESS:
    //     return {
    //       ...state,
    //       error: "",
    //       searchData: action.payload,
    //     };
    //   case GET_PRODUCT_REQUEST:
    //     return {
    //       ...state,
    //       error: "",
    //     };
    //   case GET_PRODUCT_FAILURE:
    //     return {
    //       ...state,
    //       error: "Something went wrong",
    //     };
    //   case GET_PRODUCT_SUCCESS:
    //     return {
    //       ...state,
    //       error: "",
    //       requestedProduct: action.payload,
    //     };
      default:
        return state;
    }
  };
  
  export default reducer;
  