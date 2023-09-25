import Header from "./components/Header.jsx";
import TeamMembersList from "./components/TeamMembersList.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";
import "./style/header.css";
import "./style/teamMembersList.css";
import "./style/teamMember.css";
import "./style/footer.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <TeamMembersList />
      </div>
      <Footer />
    </>
  );
}

export default App;
