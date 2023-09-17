'use client'
import ItensLista from "@/components/ItensLista"
import { useEffect, useState } from "react"

export default function Listagem() {
	const [profissionais, setProfissionais] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function getProfissionais(){
			const response = await fetch("http://localhost:3004/profissionais")
			const dados = await response.json()
			setProfissionais(dados)
			setIsLoading(false)
		}
		getProfissionais()
	}, [])

	const listaProfissionais = profissionais.map(profissional => (
		<ItensLista
			key={profissional.id}
			profissional={profissional}
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
			<h2 className="mt-3">Listagem de Filmes</h2>
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