import React from 'react';
import InfoViewer from '../InfoViewer/InfoViewer.jsx';
import './form.css';

export default class Form extends React.Component {

    rName = React.createRef();
    rLastName = React.createRef();
    rMiddleName = React.createRef();
    rPhoneNumber = React.createRef();
    rEmail = React.createRef();
    rCity = React.createRef();
    infoObj = {};

    handlerSubmit = (event) => {
        event.preventDefault();
        this.infoObj.name = this.rName.current.value;
        this.infoObj.lastName = this.rLastName.current.value;
        this.infoObj.middleName = this.rMiddleName.current.value;
        this.infoObj.phoneNumber = this.rPhoneNumber.current.value;
        this.infoObj.email = this.rEmail.current.value;
        this.infoObj.city = this.rCity.current.value;
        this.forceUpdate();
    }

    render() {
        return(
            <div className="container">
            <div className="form-container">
                <form className="form" onSubmit={this.handlerSubmit}>
                    <div className="form-group">
                        <label htmlFor="first-name">Ваше имя</label>
                        <input type="text" name="first-name" placeholder="Ваше имя" ref={this.rName} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="last-name">Ваша фамилия</label>
                        <input type="text" name="last-name" placeholder="Ваша фамилия" ref={this.rLastName} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="middle-name">Ваше отчество</label>
                        <input type="text" name="middle-name" placeholder="Ваше отчество" ref={this.rMiddleName} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone-number">Номер телефона</label>
                        <input type="tel" name="phone-number" placeholder="Номер телефона" ref={this.rPhoneNumber} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email адрес</label>
                        <input type="email" name="email" placeholder="Email адрес" ref={this.rEmail} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">Город проживания</label>
                        <input type="text" name="city" placeholder="Город проживания" ref={this.rCity} required />
                    </div>
                    <button type="submit" className="btn-submit">Модифицировать</button>
                </form>
            </div>
            <InfoViewer info={this.infoObj}/>
            </div>
        )
    }
}