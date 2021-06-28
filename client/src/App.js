import './App.css';
import Sidebar from './components/sidebar/index'
import Chat from './components/chat/index'
function App() {
  return (
    <div className="app">
      <div className="app-body"> 
        <Sidebar />
        <Chat/>
      </div>   
    </div>
  );
}

export default App;
