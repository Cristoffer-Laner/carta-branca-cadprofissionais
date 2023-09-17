'use client'
import { useForm } from 'react-hook-form'

export default function Cadastro() {
    const { register, handleSubmit } = useForm()

    async function enviaDados(data) {
        try {
            console.log("entreiaqui");
            const profissional = await fetch("http://localhost:3004/profissionais", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ ...data })
            })
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
                    <div class="col-sm-6 my-2">
                        <label for="nome" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="nome" {...register("nome")} required />
                    </div>
                    <div class="col-sm-6 my-2">
                        <label for="CPF" class="form-label">CPF</label>
                        <input type="number" class="form-control" id="CPF" {...register("CPF")} required />
                    </div>
                </div>

                <div className="row">
                    <div class="col-sm-4 my-2">
                        <label for="contato" class="form-label">Contato</label>
                        <input type="text" class="form-control" id="contato" {...register("contato")} required />
                    </div>
                    <div class="col-sm-4 my-2">
                        <label for="dataNasc" class="form-label">Data de Nascimento</label>
                        <input type="date" class="form-control" id="dataNasc" {...register("dataNasc")} required />
                    </div>
                    <div class="col-sm-4 my-2">
                        <label for="especialidade" class="form-label">Especialidade</label>
                        <select class="form-select" id="especialidade" {...register("especialidade")} required >
                            <option selected>Selecione -</option>
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
                    <div class="col-sm-6 my-2">
                        <label for="imagem" class="form-label">Foto de Perfil</label>
                        <input type="file" class="form-control" id="imagem" />
                    </div>
                </div>

                <input type="submit" className="btn btn-primary me-3 mt-2" value="Cadastrar" />
                <input type="button" className="btn btn-danger mt-2" value="Limpar" />
            </form >
        </div >
    )
}