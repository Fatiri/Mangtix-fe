import React, {Component} from 'react';
import {Provider} from "react-redux";
import {createStore} from "redux";
import eventReducer from "../modules/events/reducer/EventReducer";
import {CartRoute, EventRoute, EventScheduleRoute} from "./constants";
import reducerCustomer from "../reducerCustomer/ReducerCustomer";

class SwitcerCustomer extends Component {
    render() {
        return (
            <>
                <Provider store={createStore(reducerCustomer)}>
                    <EventScheduleRoute exact path="/event-schedule"></EventScheduleRoute>
                    <EventRoute exact path="/event"></EventRoute>
                    <CartRoute exact path="/cart"></CartRoute>
                </Provider>
            </>
        );
    }
}

export default SwitcerCustomer;
