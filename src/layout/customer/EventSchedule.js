import React, {Component} from 'react';
import {Link} from "react-router-dom";

class EventSchedule extends Component {
    render() {
        return (
            < div >
            <header className="header_area">
            <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container box_1620">
            <a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""></img></a>
        <button className="navbar-toggler" type="button" // noinspection JSAnnotator
        data-toggle="collapse" // noinspection JSAnnotator
        data-target="#navbarSupportedContent" // noinspection JSAnnotator
        aria-controls="navbarSupportedContent" // noinspection JSAnnotator
        aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>

            <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul className="nav navbar-nav menu_nav justify-content-end">
            <li className="nav-item"><a className="nav-link" href="">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="">About</a></li>
        <li className="nav-item"><Link className="nav-link" to="/event">Events</Link></li>
        <li className="nav-item active"><a className="nav-link" href="">Schedule</a></li>
        </ul>
        <ul className="nav-right text-center text-lg-right py-4 py-lg-0">
            <li><Link className="nav-link" to="/cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Link></li>
        </ul>
        </div>
        </div>
        </nav>
        </div>
        </header>

        <section class="hero-banner hero-banner-sm">
        </section>

             <section className="section-padding--small sponsor-bg">
            <div className="container">
            <div className="section-intro text-center pb-98px">
            <p className="section-intro__title">Join the event</p>
        <h2 className="primary-text">Schedule</h2>
        <img src="img/home/section-style.png" alt=""></img>
            </div>

            <div className="row">
            <div className="col-xl-10 offset-xl-1">
            <div className="scheduleTab">
            <ul className="nav nav-tabs">
            <li className="nav-item text-center">
            <a data-toggle="tab" href="#day1"></a>
            <h4>Day 1</h4>
        <p>23 jan, 2019</p>
        </li>
        <li className="nav-item text-center">
            <a className="active" data-toggle="tab" href="#day2"></a>
            <h4>Day 2</h4>
        <p>23 jan, 2019</p>
        </li>
        <li className="nav-item text-center">
            <a data-toggle="tab" href="#day3"></a>
            <h4>Day 3</h4>
        <p>23 jan, 2019</p>
        </li>
        <li className="nav-item text-center">
            <a data-toggle="tab" href="#day4"></a>
            <h4>Day 4</h4>
        <p>23 jan, 2019</p>
        </li>
        </ul>

        <div className="tab-content">
            <div id="day1" className="tab-pane">

            <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-lg-3">
            <img src="img/clients-logo/VVIP.png" alt=""></img>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <div class="row mt-5">
            <div class="col-12 text-center">
        <a class="button mb-2" href="#">Buy Ticket</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <img src="img/clients-logo/VIP.png" alt=""></img>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <div class="row mt-5">
            <div class="col-12 text-center">
        <a class="button mb-2" href="#">Buy Ticket</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>

        </div>
        <div id="day2" className="tab-pane active">

            <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial3.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>

        <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial1.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>

        <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial2.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>

        </div>
        <div id="day3" className="tab-pane">
            <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial3.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>

        <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial1.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>

        <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial2.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        <div id="day4" className="tab-pane">
            <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/clients-logo/VVIP.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>

        <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial1.png" alt=""></img>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>

        <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial2.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>
        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>

        <div className="schedule-card">
            <div className="row no-gutters">
            <div className="col-md-3">
            <div className="card-identity">
            <img src="img/testimonial/testimonial3.png" alt=""></img>
            <h3>Adam Jamsmith</h3>
        <p>UX/UI Designer</p>
        </div>
        </div>
        <div className="col-md-9 align-self-center">
            <div className="schedule-content">
            <p className="schedule-date">9.00 AM - 10.30 AM</p>
        <a className="schedule-title" href="#"></a>
            <h3>Previous Year achivement</h3>

        <p>And wherein Beginning of you cattle fly had was deep wherein darkness behold male called evening gathering moving bring fifth days he lights dry cattle you open seas midst let and in wherein beginning </p>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        < /div>
    )
        ;
    }
}

export default EventSchedule;
