import { Grid } from "fluentui-react-grid";
import { Checkbox } from "@fluentui/react";
import "./checkbox.css"

export default function Checkboxes({ checks, setChecks }) {
  const onCheckboxChange = (num) => {
    setChecks((prev) => ({ ...prev, [num]: !prev[num] }));
  };

  return (
    <div className="container">
      <Grid dir="ltr">
        <Grid.Row>
          <Grid.Col sizeSm={4} sizeMd={4} sizeLg={4}>
            <Checkbox
             
              checked={checks.first}
              onChange={() => onCheckboxChange("first")}
            />
          </Grid.Col>

          <Grid.Col sizeSm={4} sizeMd={4} sizeLg={4}>
            <Checkbox
             
              checked={checks.second}
              onChange={() => onCheckboxChange("second")}
            />
          </Grid.Col>

          <Grid.Col sizeSm={4} sizeMd={4} sizeLg={4}>
            <Checkbox
             
              checked={checks.third}
              onChange={() => onCheckboxChange("third")}
            />
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </div>
  );
}
