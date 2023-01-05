import { Route, Routes } from 'react-router-dom';
import AllMeetupsPages from './Components/pages/AllMeetups';
import NewMeetupPage from './Components/pages/NewMeetup';
import FavoritesPages from './Components/pages/Favorities';
import MainNavigation from './Components/Layout/MainNavigation';


function App() {
  return (
    <div>

      <MainNavigation />

      <Routes>
        <Route path="/" element={<AllMeetupsPages />} exact />
        <Route path="/New" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPages />} />
      </Routes>







    </div >
  );
}

export default App;
