import './style.css';
import {Plus} from 'phosphor-react';
import {CardUser} from '../../components/CardUser';

export function Home() {
    return (
        <div className="container">
            <h1>Lista de alunos do curso</h1>
            <div className="input-container">
                <input type="text" placeholder="Nome do aluno" />
                <button title="Adicionar aluno">
                    <Plus size={26} weight="bold" color='#fff'/>
                </button>
            </div>

            <div className="container-list">
                <CardUser name="Felipe Matos"/>
                <CardUser name="Diogo Matos"/>
                <CardUser name="Felipe Matos"/>
            </div>
        </div>
    );
}