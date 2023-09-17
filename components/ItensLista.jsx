import 'bootstrap-icons/font/bootstrap-icons.css'

export default function ItensLista(props){

	function confirmaExclusao(id, nome){
		if (confirm(`Confirma Exclusao do Profissional "${nome}"?`)){
			props.exclusao(id)
		}

	}
	return(
		<tr>
			<td>
				<img src={props.profissional.imagem}
				alt={`Imagem do Profissional ${props.profissional.nome}`} width={100} />
			</td>
			<td>{props.profissional.nome}</td>
			<td>{props.profissional.CPF}</td>
			<td>{props.profissional.dataNasc}</td>
			<td>{props.profissional.especialidade}</td>
			<td>
				<i class="bi bi-x-circle-fill text-danger"
				style={{fontSize:36, cursor: 'pointer'}}
				title='Excluir'
				onClick={() => confirmaExclusao(props.profissional.id, props.profissional.nome)}></i>
			</td>
		</tr>
	)
}