import React from 'react';
import './info-viewer.css';

export default class InfoViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Антон',
            lastName: 'Поляев',
            middleName: 'Александрович',
            phoneNumber: '+38000000000',
            email: 'email@mail.com',
            city: 'Кривой Рог'
        };
    }

    render() {

        return(
            <div className="info-container">
                <div className="container-group">
                    <span className="group-title">Имя: </span>
                    <span className="group-content">{this.props.info.name || this.state.name}</span>
                </div>
                <div className="container-group">
                    <span className="group-title">Фамилия: </span>
                    <span className="group-content">{this.props.info.lastName || this.state.lastName}</span>
                </div>
                <div className="container-group">
                    <span className="group-title">Отчество: </span>
                    <span className="group-content">{this.props.info.middleName || this.state.middleName}</span>
                </div>
                <div className="container-group">
                    <span className="group-title">Телефон: </span>
                    <span className="group-content">{this.props.info.phoneNumber || this.state.phoneNumber}</span>
                </div>
                <div className="container-group">
                    <span className="group-title">Email: </span>
                    <span className="group-content">{this.props.info.email || this.state.email}</span>
                </div>
                <div className="container-group">
                    <span className="group-title">Город: </span>
                    <span className="group-content">{this.props.info.city || this.state.city}</span>
                </div>
            </div>
        );
    }
}