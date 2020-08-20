import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import { Link } from 'react-router-dom';
import { Container, Col, Row, FormGroup, Alert, Label, Input, Button, Form } from 'reactstrap';


const api = 'http://localhost:3001';


class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_mahasiswa: this.props.location.state.id_mahasiswa,
            nim: this.props.location.state.nim,
            nama: this.props.location.state.nama,
            jurusan: this.props.location.state.jurusan,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    ubahMahasiswa = (idmahasiswa) => {
        const data = qs.stringify({
            id_mahasiswa: idmahasiswa,
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        })

        axios.put(api+'/edit', data).then(json => {
            if (json === 200) {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })

    }


    render() {
        return (
            <Container>
                <h2>Form Edit Data</h2>
                <Alert color="success" style={{display: this.state.display
            }}>
                {this.state.response}
               </Alert>
                <hr />
                <Form className="form">
                    <Col>
                        <Label><b>Nomor Induk Mahasiswa</b></Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nim" value={this.state.nim} onChange={this.handleChange} placeholder="Masukkan Nomor Induk Mahasiswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label><b>Nama</b></Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="nama" value={this.state.nama} onChange={this.handleChange} placeholder="Masukkan Nama Mahasiswa" />
                                </Col>
                            </Row>
                        </FormGroup>

                        <Label><b>Program Studi</b></Label>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Input type="text" name="jurusan" value={this.state.jurusan} onChange={this.handleChange} placeholder="Masukkan Program Studi" />
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col>
                                    <Button type="button" onClick={()=>this.ubahMahasiswa(this.state.id_mahasiswa)}>Edit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
                </Form>
            </Container>
        );
    }
}

export default EditComp;