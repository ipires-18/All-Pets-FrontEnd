import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer>
            <ul className="footbar-foot">
                <li className="foot-item">
                    <Link className="foot-link">Home</Link>
                </li>
                <li className="foot-item">
                    <Link className="foot-link">Quem somos</Link>
                </li>
                <li class="foot-item">
                    <Link className="foot-link" to={"/contrato"}>Planos</Link>
                </li>
                <li className="foot-item">
                    <Link className="foot-link">Fale conosco</Link>
                </li>
            </ul>
        </footer>
    )
}