import React, { Component } from 'react'
import axios from 'axios'
import { Container, Col, Row, FormGroup, Alert, Label, Input, Button, Form} from 'reactstrap';
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001';

class TambahComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            nim: '',
            nama: '',
            jurusan: '',
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    addMahasiswa = () => {
        axios.post(api+'/posts', {
            nim: this.state.nim,
            nama: this.state.nama,
            jurusan: this.state.jurusan
        }).then(json => {
            if(json.data.status === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                this.props.history.push('/mahasiswa')
            }else{
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
               <h2>Form Tambah Data</h2>
               <Alert color="success" style={{display: this.state.display}}>
                {this.state.response}
               </Alert>
               <hr/>
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
                                    <Button type="button" onClick={this.addMahasiswa}>Submit</Button>
                                </Col>
                            </Row>
                        </FormGroup>
                    </Col>
               </Form>
           </Container>
        )
    }
}

export default TambahComp
