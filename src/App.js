import logo from './logo.svg';
import Profilecomponent from './profile/Profilecomponent'
import './App.css';
import photo from './sport.jpeg'

const App=() =>{
  const handleAlert = (fullName)=>{
    alert(`hi! welcome to the website ${fullName}`)
  }
  return (
    <div className="App">
     <Profilecomponent
     fullName='slim ben miled'
     bio='fqsfqsflqsflslfsmlqflmmlfslmflmsqlkmfms'
     profession=' full stack js developper '
     handleAlert={handleAlert}
     >
      
         {photo}
       
       </Profilecomponent>
    </div>
  );
}

export default App;
