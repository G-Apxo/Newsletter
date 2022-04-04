import { Label } from "@fluentui/react/lib/Label";
import { TextField } from "@fluentui/react/lib/TextField";
import userData from "../../helper/data.json";
import "./texbox.css"

export default function Textbox(props) {
  const { userName, setUserName, setChecks } = props;

  const onInputKeyUp = () => {
    const existUser = userData.find((user) => user.userName === userName);

    if (existUser) {
      setChecks({
        first: existUser.first,
        second: existUser.second,
        third: existUser.third,
      });
    }
  };

  const onInputChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div className="textbox container">
      <Label className="input">Input User Names</Label>
      <TextField className="input__field" value={userName} onChange={onInputChange} onKeyUp={onInputKeyUp} />
    </div>
  );
}
