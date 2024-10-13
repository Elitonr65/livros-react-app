import React, { useEffect, useState } from "react";
import { ControleLivros } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";
import { useNavigate } from "react-router-dom";

const LivroDados = () => {
    const controleLivro = new ControleLivros();
    const controleEditora = new ControleEditora();

    const [opcoes, setOpcoes] = useState([])
    const [titulo, setTitulo] = useState('');
    const [autores, setAutores] = useState('');
    const [resumo, setResumo] = useState('');
    const [codEditora, setCodEditora] = useState(0);

    useEffect(() =>{
        const editoras = controleEditora.getEditoras().map(editora =>({
            value: editora.codEditora,
            text: editora.nome,
        }));

        setOpcoes(editoras);
        setCodEditora(editoras[0]?.value || 0);
    }, []);

    const navigate = useNavigate();

    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    const incluir = (event) => {
        event.preventDefault()

        const livro = {
            codigo: 0,
            codEditora,
            titulo,
            resumo,
            autores: autores.split('\n'),
        };
        controleLivro.incluir(livro);
        navigate('/');
    };


    return (
        <main className="container mt-4">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>  
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Titulo</label>
                    <input
                        type="text"
                        className="form-control"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="resumo" className="form-label">Resumo</label>
                    <textarea
                        className="form-control"
                        id="resumo"
                        value={resumo}
                        onChange={(e) => setResumo(e.currentTarget.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="autores" className="form-label">Autores</label>
                    <textarea
                        className="form-control"
                        id="autores"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="editoras" className="form-label">Editora</label>
                    <select
                        className="form-select"
                        id="editoras"
                        value={codEditora}
                        onChange={tratarCombo}
                        required
                    >
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                    <button type="submit" className="btn btn-primary m-1">Salvar Dados</button>
                </div>
            </form>
        </main>
    );
}

export default LivroDados;