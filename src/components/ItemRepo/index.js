import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, onRemove }) {
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver Repositório</a><br></br>
            <a
                href="#"
                alt="botão remover"
                className='remover'
                onClick={(e) => {
                    e.preventDefault(); 
                    onRemove(repo.id);
                }}
            >
                Limpar
            </a>
            <hr />
        </ItemContainer>
    )
}

export default ItemRepo;
