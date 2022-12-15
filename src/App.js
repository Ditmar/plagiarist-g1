import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './components/DashboardComponent/Dashboard';
// import UploadComponent from './components/UploadComponent';
import LoaderComponent from './components/LoaderComponent';
// import {CardsFather} from './components/Card/CardFather';
import LoaderSpinnerContextProvider from './context/LoaderSpinnerContextProvider';
import {Trabajos} from './components/nav/pages/Trabajos'
import {RevisarTesis} from './components/nav/pages/RevisarTesis'
import {ListarTesis} from './components/nav/pages/ListarTesis'
import {PublicarTesis} from './components/nav/pages/PublicarTesis'
import {Reportes} from './components/nav/pages/Reportes'
import {Settings} from './components/nav/pages/Settings'
import { Inicio } from './components/nav/pages/Inicio';
function App() {

  // const items = [
  //   {
  //     to: '/',
  //     name: 'Home'  
  //   },
  //   {
  //     to: '/searchgiffs',
  //     name: 'Search Memes'
  //   },
  //   {
  //     to: '/login',
  //     name: 'Login'
  //   }
  // ];

  return (
    
      <Theme>
        <LoaderSpinnerContextProvider>
          <BrowserRouter>
            <LoaderComponent />
            <Routes>
              <Route path="/" element={<>
                <Dashboard> 
                  <Inicio />
                </Dashboard>
              </>}/>
              <Route path="/trabajos" element={<>
                <Dashboard> 
                  <Trabajos />
                </Dashboard>
              </> } />
              <Route path="/revisar" element={<>
                <Dashboard> 
                  <RevisarTesis />
                </Dashboard>
              </> } />
              <Route path="/listar" element={<>
                <Dashboard> 
                  <ListarTesis />
                </Dashboard>
              </> } />
              <Route path="/publicar" element={<>
                <Dashboard> 
                  <PublicarTesis />
                </Dashboard>
              </> } />
              <Route path="/reportes" element={<>
                <Dashboard> 
                  <Reportes />
                </Dashboard>
              </> } />
              <Route path="/settings" element={<>
                <Dashboard> 
                  <Settings />
                </Dashboard>
              </> } />
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </LoaderSpinnerContextProvider>
      </Theme>
  );
}

export default App;