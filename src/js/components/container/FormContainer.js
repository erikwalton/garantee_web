import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import style from '../../../styles/main.scss';
import { Button } from 'reactstrap';

class FormContainer extends Component {
    constructor() {
        super();

        this.state = {
            seo_title: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { seo_title } = this.state;
        return (
            <Button color="danger">Danger!</Button>
    );
    }
}

export default FormContainer;

const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;