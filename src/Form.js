import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        addressOpt: '',
    }

    change = e => {
        this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            firstName: '',
            lastName: '',
            address: '',
            addressOpt: '',
        });
        this.props.onChange({
            firstName: '',
            lastName: '',
            address: '',
            addressOpt: '',
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
                    <div class="form-divider"/>
                LAST NAME
                <br />
                <input
                    name="lastName"
                    value={this.state.lastName}
                    onChange={e => this.change(e)} />
                    <br />
                    <div class="form-divider"/>
                ADDRESS
                <br />
                <input
                    name="address"
                    value={this.state.address}
                    onChange={e => this.change(e)} />
                    <br />
                    <div class="form-divider"/>
                ADDRESS 2 (OPTIONAL)
                <br />
                <input
                    name="addressOpt"
                    value={this.state.addressOpt}
                    onChange={e => this.change(e)} />
                    <br />
                    <div class="btn-divider"/>
                <button className="next-btn" type="submit">Next <img SRC="White_Arrow.svg" alt="GIANT ROBOT LTD." width="12" height="10"/></button>
            </form>
        );
    }
}