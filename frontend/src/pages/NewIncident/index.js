import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';
import logoImg from '../../assests/logo.svg';
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ong_id = localStorage.getItem('ong_id');

    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        }
        try {
            console.log(data);
            api.post('incidents', data, {
                headers: {
                    Authorization: ong_id
                },
            });
            history.push('/profile');
        } catch(err) {
            alert('Erro ao cadastrar um novo caso, tente novamente!');
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo Caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um heroi para resolver isso
                    </p>
                        <Link className="back-link" to="/profile">
                            <FiArrowLeft size={16} color="#e02041" />
                            Voltar para Home
                        </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso" 
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Valor em reais" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    
                    <button className="button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>

    );
}
