'use client'
import ItensLista from "@/components/ItensLista"
import { useEffect, useState } from "react"
import {useRouter} from 'next/navigation'

export default function Listagem() {
	const [profissionais, setProfissionais] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	const router = useRouter()

	useEffect(() => {
		async function getProfissionais(){
			const response = await fetch("http://localhost:3004/profissionais")
			const dados = await response.json()
			setProfissionais(dados)
			setIsLoading(false)
		}
		getProfissionais()
	}, [])

	async function excluiProfissional(id){
		await fetch("http://localhost:3004/profissionais/"+id, {
			method:"DELETE"
		})
		const novoDados = profissionais.filter(profissional => profissional.id != id)
		setProfissionais(novoDados)
	}

	const listaProfissionais = profissionais.map(profissional => (
		<ItensLista
			key={profissional.id}
			profissional={profissional}
			exclusao={() => excluiProfissional(profissional.id)}
			altera={() => router.push('altera/'+profissional.id)}
			consulta={() => router.push('consulta/'+profissional.id)}
		/>
	))

	if(isLoading){
		return(
			<div className="container">
				<h2 className="mt-3">Listagem de Profissionais</h2>
				<h4>Aguarde... Carregando do Profissionais</h4>
			</div>
		)
	}
    return (
		<div className="container">
			<h2 className="mt-3">Listagem de Profissionais</h2>
			<table className="table table-striped">
				<thead>
					<tr>
						<th>Profissional</th>
						<th>Nome</th>
						<th>CPF</th>
						<th>Nascimento</th>
						<th>Especialidade</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					{listaProfissionais}
				</tbody>
			</table>
		</div>
    )
}