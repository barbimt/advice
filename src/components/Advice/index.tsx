//me va a permitir conectar entre las particularidades del store, tanto el estado como el dispatch y conectarlo a este componente advice. La funcion connect recibe dos params ->1- mapStatetoProps (el propio estado para q podamos pasarle a este componente y ahi poder usarlo) y 2- recibe el mapDispatchToProps, va a darle conocimiento al componente advice de nuestra funcion dispatch, es crear una refe al dispatch propio del store para usarla y poder tener impacto en el store. 
import React from 'react'
import {connect} from "react-redux"
import {setAdvice} from "../../actions/advice"

//primero tipamos las props
interface IAdviceProps {
    id: number,
    text: string
}

interface IDispatchProps {
    setAdvice: () => void
}


//combina ambas interfaces, creamos un nuevo tipo
type Props = IAdviceProps & IDispatchProps;

function Advice (props: Props) {
    return (
        <>
        <div className='rounded-lg flex-col flex justify-center items-center place-self-center mx-auto border-double border-4 border-[#FFB8CB] p-4 shadow-2xl'>
            <h2 className='text-white italic font-medium mb-2 '>Advice #{props.id.toString().padStart(3,"0")}</h2>
            <h3 className='text-pink-50'>{props.text}</h3>
            <button  className="text-white bg-pink-500 hover:bg-pink-700  font-bold py-2 px-4 rounded mt-4" onClick={()=> {
                props.setAdvice();
            }}>Take an advice</button>
        </div>
        </>
    )
}

/*dos cosas para hacer q el reducer conozca el dispatch ->
useSelector, useDispatch -> dos hooks.
utilizar una funcion connect
*/
const mapDispatchToProps = {
    //se puede crear un objeto y q este objeto tenga muchos métodos, cada uno de ellos va a desencadenar una accion
    setAdvice:setAdvice,
}

//exportamos el valor de retorno. le pasamos el dispatch pero ninguna funcion  
export default connect(null, mapDispatchToProps)(Advice)