import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carrossel from '../../components/Carrossel';
import Busca from '../../components/Busca';

export default function SiteInstitucional() {
    return(
    <>
        <Header/>
        <Carrossel/>
        <Busca/>
        <Footer/>
    </>
    );
}