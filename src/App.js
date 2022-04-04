import { useState } from "react";
import "./App.css";

import Header from "./Components/header/Header";
import Textbox from "./Components/textbox/Textbox";
import Checkbox from "./Components/checkbox/Checkbox";
import Footer from "./Components/footer/Footer";

function App() {
  const [userName, setUserName] = useState("");
  const [checkedCheckboxes, setCheckedCheckboxes] = useState({
    first: false,
    second: false,
    third: false,
  });

  return (
    <div>
      <Header />
    <div className="flex">
      <Textbox userName={userName} setUserName={setUserName} setChecks={setCheckedCheckboxes} />
      <Checkbox checks={checkedCheckboxes} setChecks={setCheckedCheckboxes} />
      <Footer
        userName={userName}
        setUserName={setUserName}
        checks={checkedCheckboxes}
        setChecks={setCheckedCheckboxes}
      />
</div>
    </div>
  );
}

export default App;
