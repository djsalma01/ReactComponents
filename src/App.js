
import FullNAme from "./component/profil/FullName"
import Adresse from "./component/profil/Adresse"
import ProfilePhoto from "./component/profil/ProfilePhoto"

function App() {
  return (
    <div>
      <ProfilePhoto photo="/logo192.png" />
      <FullNAme name="salma" />
      <Adresse adresse="ALGER" />
    </div>
  );
}

export default App;
