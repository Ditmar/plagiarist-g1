import Theme from './theme/theme';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './components/DashboardComponent/Dashboard';
import UploadComponent from './components/UploadComponent';
import LoaderComponent from './components/LoaderComponent';
// import {CardsFather} from './components/Card/CardFather';
import LoaderSpinnerContextProvider from './context/LoaderSpinnerContextProvider';

// import LastDocument from './components/LastDocuments/LastDocument';
function App() {



  return (

    <Theme>
      <LoaderSpinnerContextProvider>
        <BrowserRouter>
          <LoaderComponent />
          <Routes>
            <Route path="/" element={<>
              <Dashboard>
                <p>content </p>
              </Dashboard>
            </>} />
            <Route path="/upload" element={<>
              <Dashboard>
                <UploadComponent />
              </Dashboard>
            </>} />
            {/* <Route path="/lastdocument" element={<>
              <Dashboard>
                <LastDocument />
              </Dashboard>
            </>} /> */}
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </LoaderSpinnerContextProvider>
    </Theme>
  );
}

export default App;