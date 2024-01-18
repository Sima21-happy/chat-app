import logo from './logo.svg';
import './App.css';
import './components/Chat_section/chat.css'
import './components/User_section/Users.css'
import images from './components/images/profile.png'
// import card from './card_component/card.component.jsx'
import Card from './card_component/card.component.jsx'
function App() {
   const students=[
    {
      name:'sima',
      address:'Nawalparasi'

    },
    {
      name:'Samima',
      address:'Damauli'

    },
    {
      name:'Ashika',
      address:'Bardiya'

    },
    {
      name:'Nabina',
      address:'Baglung'

    },
    {
      name:'Praju',
      address:'Pokhara'

    },
    {
      name:'Sambhavi',
      address:'Chitwan'

    }
   ];
  return (
    <div className="App">


       {
        students.map((st)=>
          <Card key={st.name}  s={st}/>
        )
       }
         
    </div>
  );
}
export default App;
