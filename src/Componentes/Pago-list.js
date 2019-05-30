import React from 'react'
import PagoRow from './Pago-row'
import CONFIG from '../Configuracion/Config'
class PagoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            concepto: [],
            datos: []
        }
    }


    /* Back - Mostrar los estados de autorizacion del alumno*/


    render() {
        console.log("CONCEPTOS XD");
        console.log(this.state.concepto)
        console.log("listas");
        console.log(this.state.datos)
        return (
            <tbody>

                <tr>

                    <td> X </td>
                    <td> 1 </td>
                    <td> Operación1 </td>
                    <td>05/05/2019 </td>
                    <td> C1 </td>
                    <td>05/05/2019 </td>
                    <td> S/. 1000 </td>
                    <td> S/. 2000 </td>
                    <td>05/05/2019 </td>
                    <td>Pendiente </td>
                </tr>


                <tr>


                    <td> X </td>
                    <td> 2 </td>
                    <td> Operación2 </td>
                    <td>05/05/2019 </td>
                    <td> C2 </td>
                    <td>05/05/2019 </td>
                    <td> S/. 1000 </td>
                    <td> S/. 2000 </td>
                    <td>05/05/2019 </td>
                    <td>Pendiente </td>
                </tr>
                <tr>



                    <td> X </td>
                    <td> 3 </td>
                    <td> Operación3 </td>
                    <td>05/05/2019 </td>
                    <td> C3 </td>
                    <td>05/05/2019 </td>
                    <td> S/. 1000 </td>
                    <td> S/. 2000 </td>
                    <td>05/05/2019 </td>
                    <td>Pendiente </td>


                </tr>

                {




                    this.props.listado.map((pago, key) => {


                        /*

                        return <PagoRow Funciones={this.props.funcion} key={pago.idRec} numero={key}
                            pago={pago} conceptos={this.props.conceptos} datos={this.props.datos}
                            datosmonedas={this.props.datosMonedas} monedas={this.props.monedas} />

                        */

                    })
                }
            </tbody>
        )
    }
}

export default PagoList