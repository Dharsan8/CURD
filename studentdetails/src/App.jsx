import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateStudent from './CreateStudent'
import Details from './Details'
import Update from './Update'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Details/>}></Route>
        <Route path='/create' element={<CreateStudent/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
