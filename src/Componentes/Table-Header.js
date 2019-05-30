import React from 'react'
import '../App.css';
class TableHeader extends React.Component {

  render() {

/* Front - The Knights -  */

    return(
    <thead>
			<tr>      
        <th className="th">SELECCIONAR</th>
        <th className="th">N°</th>

        <th className="th">OPERACIÓN</th>      
        <th className="th ancho">FECHA COMPROBANTE</th>
        <th className="th">C</th>
        <th className="th">N° COMPROBANTE</th>
        <th className="th">IMPORTE</th>
        <th className="th ancho">AMORTIZACIÓN</th>
        <th className="th">FECHA VENCIMIENTO</th>
        <th className="th">CONDICIÓN</th>
        <th className="th">EDITAR</th>
        <th className="th">GUARDAR</th>
      </tr>
	</thead>
    )
  }
}

export default TableHeader