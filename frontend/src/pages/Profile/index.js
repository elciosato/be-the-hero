import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assests/logo.svg'
import api from '../../services/api';

import './styles.css';

export default function Profile() {
    const ong_id = localStorage.getItem('ong_id');
    const ong_name = localStorage.getItem('ong_name');

    const [incidents, setIncident] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ong_id,
            }
        }).then(response => {
            setIncident(response.data);
        })
    }, [ong_id]); 

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ong_id
                }
            });
            setIncident(incidents.filter(incident => incident.id !== id));
        } catch(err) {
            alert('Erro ao deletar caso, tente novamente!')
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>
                    Bem vinda, {ong_name} - [{ong_id}]
                </span>
                <Link className="button" to="/incident/new">
                    Cadastrar novo caso
                </Link>
                <button 
                    type="button"
                    onClick={handleLogout}
                >
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>  
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>
                        
                        <button 
                            type="button"
                            onClick={() => handleDeleteIncident(incident.id)}
                        >
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}