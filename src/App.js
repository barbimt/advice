import Advice from './components/Advice/index.tsx';
import {connect} from "react-redux"


function App(props) {
  return (

   <div class="h-screen w-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center ">
    <Advice id={props.id} text={props.text}/>
    </div>

  );
}

// lo q le pase a connect tiene q ser funciones
//esta funcion va a recibir el propio estado 
const mapStateToProps = (state) => {
  return {...state}
}

export default connect(mapStateToProps, null)(App)