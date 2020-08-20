import React, { useEffect, useState } from 'react'
import axios from 'axios';
import qs from 'querystring';
import { Table, Button, Container, NavLink, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

const api = 'http://localhost:3001';


function KrsComp() {

    const [krs, setKrs] = useState([]);

    useEffect(() => {
        axios.get(api + '/krs-mahasiswa').then(res => {
            setKrs(res.data.values)
        })
    }, [])

    console.log(krs)
    return (
        <Container>
            <h2>Data Mahasiswa</h2>
            <NavLink href="#">
                <Button outline color="primary">Tambah Data Mahasiswa</Button>
            </NavLink>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Jurusan</th>
                        <th>matkul</th>
                        <th>Total Sks</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {krs.map(total =>
                        <tr key={total.id_krs}>
                            <td>{total.nim}</td>
                            <td>{total.nama}</td>
                            <td>{total.jurusan}</td>
                            <td>{total.matkul}</td>
                            <td>{total.sks}</td>
                            <td>
                                <Button style={{ marginRight: 10 + 'px' }}>Edit</Button>
                                <Button color="danger">Hapus</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}

export default KrsComp
