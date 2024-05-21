
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import Callback from "./Hooks/Callback"
import Effect from "./Hooks/Effect"
import Memo from "./Hooks/Memo"
import Reducer from "./Hooks/Reducer"
import Ref from "./Hooks/Ref"
import State from "./Hooks/State"


function App() {

  return (
   <>
   <State/>
   <hr />
   <Effect/>
   <hr />
   <Ref/>
    <hr />
    <Memo/>
    <hr />
    <Callback/>
    <hr />
    <Profile/>
    <Footer/>
    <hr />
    <Reducer/>
   </>
  )
}

export default App
