import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import image from '../../images/dashboard-1.png';
import modul1 from '../../images/modul/modul-1.jpg';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { IoRibbon } from 'react-icons/io5';

function Kelas() {
    return ( 
        <React.Fragment>
            <div className='banner'>
                <img className="img-dashboard" src={image}></img>
                <Card className="banner-card mb-5 justify-content-start align-items-start" style={{ width: '100%', height: 'auto' }}>
                    <Col>
                        <h4>Sudah belajar apa hari ini?</h4>
                        <span>Lihat progres belajarmu.</span>
                    </Col>
                </Card>
            </div>

            <Card className="mb-5 p-0 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto' }}>
                <Row style={{ width: '100%', height: 'auto' }}>
                    <Col md={4} className="d-flex p-0 m-0">
                        <img className="img-kelas rounded-md-start vw-100" src="https://i.pinimg.com/564x/90/8d/80/908d80b06a22f18f1531067c2e89e2df.jpg" />
                    </Col>
                    <Col md={8} className="d-flex flex-column justify-content-center p-3 gap-3" style={{ textAlign: 'left' }}>
                        <span><IoRibbon/> Kelasku</span>
                        <h5 className="m-0 p-0">Body Painting</h5>
                        <ProgressBar now={30} label={'30%'}></ProgressBar>
                        <div className="button-selengkapnya">
                            <Link to="/modul" className="link-selengkapnya">SELENGKAPNYA</Link>
                        </div>
                    </Col>
                </Row>
            </Card>

            <h5 className="mb-3">Modul yang terakhir dilihat</h5>
            <Card className="mb-5 p-0 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto' }}>
                <Row style={{ width: '100%', height: 'auto' }}>
                    <Col md={4} className="d-flex p-0 m-0">
                        <img className="img-kelas rounded-md-start vw-100" src={modul1} />
                    </Col>
                    <Col md={8} className="d-flex flex-column justify-content-center p-3 gap-3" style={{ textAlign: 'left' }}>
                        <h5 className="m-0 p-0">Modul 1: Mengenal Body Painting</h5>
                        <ProgressBar now={40} label={'40%'}></ProgressBar>
                        <div className="button-selengkapnya">
                            <Link to="/modul" className="link-selengkapnya">LANJUTKAN</Link>
                        </div>
                    </Col>
                </Row>
            </Card>

            <h5 className="mb-3">Tugas yang akan datang</h5>
            <Card className="mb-5 p-0 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto' }}>
                <Row style={{ width: '100%', height: 'auto' }}>
                    <Col md={4} className="d-flex p-0 m-0">
                        <img className="img-kelas rounded-md-start vw-100" src={modul1} />
                    </Col>
                    <Col md={8} className="d-flex flex-column justify-content-center p-3 gap-3" style={{ textAlign: 'left' }}>
                        <h5 className="m-0 p-0">Tugas 1: Perkenalan Body Painting</h5>
                        <span>Modul 1: Mengenal Body Painting</span>
                        <div className="button-selengkapnya">
                            <Link to="/modul" className="link-selengkapnya">KERJAKAN</Link>
                        </div>
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    );
}

export default Kelas;