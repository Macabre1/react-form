import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        addressOpt: '',
        phone: '',
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    changePhoneFormat = e => {
        var phoneFormat = function (value) {
            var cleanValue = value.replace(/[^\d]/g,"");

            if (cleanValue.length < 3) {
                cleanValue = "(" + cleanValue.substring(0, 3)
            } else if (cleanValue.length >= 3 && cleanValue.length < 7) {
                cleanValue = "(" + cleanValue.substring(0, 3) + ") " + cleanValue.substring(3, 6);

            } else if (cleanValue.length >= 7 && cleanValue.length < 11) {
                cleanValue = "(" + cleanValue.substring(0, 3) + ") " + cleanValue.substring(3, 6) + " - " + cleanValue.substring(6, 10); 
            }
            return cleanValue;
        }

        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: phoneFormat(e.target.value)
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            address: '',
            addressOpt: '',
            phone: '',
        });
        this.props.onChange({
            firstName: '',
            lastName: '',
            address: '',
            addressOpt: '',
            phone: '',
        });
    };

    render() {
        return (
            <form>
                FIRST NAME
                <br />
                <input
                    name="firstName"
                    value={this.state.firstName}
                    onChange={e => this.change(e)} />
                    <br />
                LAST NAME
                <br />
                <input
                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => this.change(e)} />
                    <br />
                ADDRESS
                <br />
                <input
                    name="address"
                    value={this.state.address}
                    onChange={e => this.change(e)} />
                    <br />
                ADDRESS 2 (OPTIONAL)
                <br />
                <input
                    name="addressOpt"
                    value={this.state.addressOpt}
                    onChange={e => this.change(e)} />
                    <br />
                Phone
                <br />
                <input
                    name="phone"
                    value={this.state.phone}
                    maxlength="16"
                    onChange={e => this.changePhoneFormat(e)} />
                    <br />
            </form>
        )
    }
}