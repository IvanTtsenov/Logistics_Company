import UserGreeting from "./UserGreeting";

function App() {
    return(
      <>
      <UserGreeting isLoggedIn={false} username="BroCode"></UserGreeting>
      </>
    );  
}

export default App
