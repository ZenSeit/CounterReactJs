import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import {useState} from 'react';

function App() {

  const [numClics,setNumClics]=useState(0);

    const manejarClic=()=>{
      setNumClics(numClics+1);
    }

    const restarClic=()=>{
      setNumClics(0);
    }



  return (
    <div className="App">
     <div className='react-logo'>
       <img className='react-img' src={'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png'} alt=" "/>
     </div>
     <div className="contenedor-principal">
       <Contador numClics={numClics}/>
       <div>
       <Boton 
       texto='Clic'
       esBotonClic={true}
       manejarClic={manejarClic}/>
       <Boton texto='Reiniciar'
       esBotonClic={false}
       manejarClic={restarClic}
       />
       </div>
      
     </div>
    </div>
  );
}

export default App;
