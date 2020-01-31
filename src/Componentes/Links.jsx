import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';

export default class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NLinks: [],
            direccion: 'http://192.168.0.229:8000/url/'
        }


        //declaracion de funciones si es que hay?
    }

    componentDidMount() {
        fetch(this.state.direccion)
            .then((respuesta) => { return respuesta.json() })
            .then(respuesta => {
                this.setState({
                    NLinks: respuesta
                })
            })
    }

    render() {
        return (
            <div>
                <div>
                    <Nav
                        activeKey="/home"
                        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
                    >
                        {this.state.NLinks.map((nl, index) => {
                            return (
                                <tr key={nl.id}>
                                    <Nav.Item>
                                        <Nav.Link href={nl.url} >{nl.descripcion}</Nav.Link>
                                    </Nav.Item>

                                </tr>
                            );
                        })}


                    </Nav>

                </div>
            </div>

        );

    }
}
