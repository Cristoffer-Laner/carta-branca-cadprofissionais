'use client'
import { useForm } from 'react-hook-form'

export default function Cadastro() {
    const { register, handleSubmit, reset } = useForm()

    async function enviaDados(data) {
		//boa pratica usando try catch
        try {
            const profissional = await fetch("http://localhost:3004/profissionais", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ ...data })
            })
			reset()
        } catch (error) {
            console.log("erro")
            alert("Erro!")
        }
    }

    return (
        <div className="container">
            <h2 className="my-3 text-center">Cadastro de Profissionais</h2>

            <form onSubmit={handleSubmit(enviaDados)}>
                <div className="row">
                    <div className="col-sm-6 my-2">
                        <label for="nome" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="nome" {...register("nome")} required />
                    </div>
                    <div className="col-sm-6 my-2">
                        <label for="CPF" className="form-label">CPF</label>
                        <input type="text" className="form-control" id="CPF" {...register("CPF")} required />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 my-2">
                        <label for="contato" className="form-label">Contato</label>
                        <input type="text" className="form-control" id="contato" {...register("contato")} required />
                    </div>
                    <div className="col-sm-4 my-2">
                        <label for="dataNasc" className="form-label">Data de Nascimento</label>
                        <input type="date" className="form-control" id="dataNasc" {...register("dataNasc")} required />
                    </div>
                    <div className="col-sm-4 my-2">
                        <label for="especialidade" className="form-label">Especialidade</label>
                        <select className="form-select" id="especialidade" {...register("especialidade")} required >
                            <option selected>Selecione</option>
                            <option value="black-work">Black Work</option>
                            <option value="pontilhismo">Pontilhismo</option>
                            <option value="old-school">Old School</option>
                            <option value="minimalista">Minimalista</option>
                            <option value="mão-livre">A mão livre</option>
                            <option value="musico">Músico</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6 my-2">
                        <label for="imagem" className="form-label">Foto de Perfil</label>
                        <input type="url" className="form-control" id="imagem" {...register("imagem")} required/>
                    </div>
                </div>

                <input type="submit" className="btn bg-dark me-3 mt-2 text-light" value="Cadastrar" />
                <input type="button" className="btn bg-dark mt-2 text-light" value="Limpar" onClick={() => reset()}/>
            </form >
        </div >
    )
}