import React, { Component } from 'react'

export default class ClientForm extends Component {
    render() {
        const{nom,email}=this.props;
        return (
            <div>
            <h1>Client Form</h1>
            <ul>
                <li>Nom :{nom}</li>
                <li>email : {email}</li>
            </ul>
            </div> 
        )
    }
}
