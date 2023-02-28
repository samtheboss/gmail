import Navbar from "./components/Navbar";
import Inbox from "./components/inbox";
import Emails from "./components/Emails";
import LeftSide from "./components/LeftSide";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex">
        <LeftSide />
        <div className="w-full">
          <Inbox />
          <Emails />
        </div>
      </div>
    </div>
  );
}

export default App;
