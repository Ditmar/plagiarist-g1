import Theme from "./theme/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Header from "./components/Header/Header";
import Dashboard from "./components/DashboardComponent/Dashboard";
import UploadComponent from "./components/UploadComponent";
import LoaderComponent from "./components/LoaderComponent";
import { CardsFather } from "./components/Card/CardFather";
import LoaderSpinnerContextProvider from "./context/LoaderSpinnerContextProvider";
import { io } from "socket.io-client";
import { useEffect } from "react";
import socketIoEndpoint from "./async/services/socketIO";
import ListarTesis from "./components/listarTesis/ListarTesis";
const setUpSocketIO = () => {
  //socket = io(uri);
  // socket.on('serverresponse', (room) => {
  //   console.log(room);
  //   socket.emit('joinroom', room);
  // })
};
function App() {
  const items = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/searchgiffs",
      name: "Search Memes",
    },
    {
      to: "/login",
      name: "Login",
    },
  ];

  return (
    <Theme>
      <Header />
    </Theme>
  );
}

export default App;
