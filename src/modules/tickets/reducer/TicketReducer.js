const initialState = {
    category: [],
    event:[],
    ticket:[],
    ticketForm:{
        categoryIdTransient:"",
        eventIdTransient:"",
        price:"",
        quantity:""
    }

}

export default function categoryReducer(state = initialState, action) {
    console.log("categoryReducer", state, action);
    switch (action.type) {
        case "FETCH_CATEGORY_SUCCESS":
            return {...state, category: action.payload};
        case "FETCH_EVENT_SUCCESS":
            return {...state, event: action.payload};
        case "FETCH_TICKET_SUCCESS":
            return {...state, ticket: action.payload};
        case "HANDLE_CATEGORY_ID":
            return {...state, ticketForm: {...state.ticketForm, categoryIdTransient:action.categoryIdTransient}};
        case "HANDLE_EVENT_ID":
            return {...state, ticketForm: {...state.ticketForm, eventIdTransient: action.eventIdTransient}};
        case "HANDLE_PRICE":
            return {...state, ticketForm: {...state.ticketForm, price: action.price}};
        case "HANDLE_QUANTITY":
            return {...state, ticketForm: {...state.ticketForm, quantity: action.quantity}};
        case "CLEAR_STATE":
            return {...state, ticketForm: {...initialState.ticketForm}}
        default:
            return {...state}
    }

}
