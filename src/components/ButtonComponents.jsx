import React from 'react';
import '../stylesheets/_buttons.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export const LetsEatButtonComponent = () => {

    return (
        <div className="button-container">
            <Link to='/payment'>
                <button className="button">
                    LET'S EAT !
                </button>
            </Link>
        </div>
    )
}


export const UploadButtonComponent = () => {

    return (
        <div className="button-container">
            <button className="button">
                UPLOAD
            </button>
        </div>
    )
}


export const GetStartedButtonComponent = () => {

    return (
        <div className="button-container">
            <Link to='/'>
                <button className="button">
                    GET STARTED
                </button>
            </Link>
        </div>
    )
}


export const LoginButtonComponent = () => {

    return (
        <div className="button-container">
            <Link to='/login'>
                <button className="button">
                    LOGIN
                    </button>
            </Link>
        </div>
    )
}


export const SignUpButtonComponent = () => {

    return (
        <div className="button-container">
            <Link to='/newuser'>
                <button className="button">
                    SIGN UP
                </button>
            </Link>
        </div>
    )
}


export const ShareButtonComponent = () => {

    return (
        <div className="button-container">
            <button className="button">
                SHARE
            </button>
        </div>
    )
}


export const DoneButtonComponent = () => {

    return (
        <div className="button-container">
            <Link to='/receipt'>
                <button className="button">
                    DONE
                </button>
            </Link>
        </div>
    )
}


export const OnMyWayButtonComponent = () => {

    return (
        <div className="button-container">
            <button className="button">
                I'M ON MY WAY
            </button>
        </div>
    )
}


export const SeeYouSoonComponent = () => {

    return (
        <div className="button-container">
            <button className="button">
                SEE YOU SOON
            </button>
        </div>
    )
}

