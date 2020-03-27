import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';

import heroesImg from '../../assests/heroes.png';
import logoImg from '../../assests/logo.svg';

export default function Logon() {
    const [ ong_id, setId ] = useState('');

    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        const data = { ong_id }
        console.log(data);
        try {
            const response = await api.post('sessions', data);

            localStorage.setItem('ong_id', ong_id);
            localStorage.setItem('ong_name', response.data.name);
            
            history.push('profile');
            
        } catch(err) {
            alert('Falha no login, tente novamente!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={ong_id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}