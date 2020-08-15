import React, { Component } from 'react';
import axios from 'axios';
import qs from 'querystring';
import {Table, Button, Container, NavLink, ALert} from 'reactstrap';

const api = 'http://localhost:3001';

class ListComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            mahasiswa : [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res => {
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    render() {
        return (
            <Container>
                <h2>Data Mahasiswa</h2>
                <NavLink><Button outline color="primary">Tambah Data Mahasiswa</Button></NavLink>
                <hr/>
                <tr>
                    <Table className="table table-bordered" style={{width: 164+'%'}}>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>NIM</th>
                                <th>Nama</th>
                                <th>Jurusan</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.mahasiswa.map(mahasiswa => 
                                <tr key = {mahasiswa.id_mahasiswa}>
                                <td>{mahasiswa.id_mahasiswa}</td>
                                <td>{mahasiswa.nim}</td>
                                    <td>{mahasiswa.nama}</td>
                                    <td>{mahasiswa.jurusan}</td>
                                    <td>Edit || Hapus</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </tr>
            </Container>
        );
    }
}

export default ListComp;