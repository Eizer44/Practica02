import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
    console.log('gastos', gastos)
    return (
        <div className='listado-gastos contenedor'>
            <h2>{gastos.length ? 'Gastos' : 'No hay gastos'}</h2>

            {gastos.map(gasto => (
                <Gasto 
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
                />
            ))}

        </div>
    )
}

export default ListadoGastos