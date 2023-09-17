export default function ItensLista(props){
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
			<td></td>
		</tr>
	)
}