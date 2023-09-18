import 'bootstrap-icons/font/bootstrap-icons.css'
import Swal from 'sweetalert2'

export default function ItensLista(props){

	function confirmaExclusao(id, nome){
		Swal.fire({
			title: `Confirma Exclusão do Profissional "${titulo}"?`,
			text: "Esta operação não podera ser desfeita",
			icon: 'question',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim. Excluir!'
		  }).then((result) => {
			if (result.isConfirmed) {
			  props.exclui(id)
			  Swal.fire(
				'Exclusao!',
				'Profissional Excluido com Sucesso!',
				'success'
			  )
			}
		  })

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
					onClick={() => confirmaExclusao(props.profissional.id, props.profissional.nome)}
					title='Excluir'
				></i>
				<i class="bi bi-pencil text-warning ms-2"
				style={{fontSize:36, cursor: 'pointer'}}
				onClick={props.altera}
				title='Alterar'
				></i>
			</td>
		</tr>
	)
}