import React, { Component } from "react";
import { DefaultButton } from "@fluentui/react";
import { Grid } from "fluentui-react-grid";
import usersData from "../../helper/data.json";
import "./footer.css"
export class Footer extends Component {
  render() {
    const { userName, setUserName, checks, setChecks } = this.props;

    function onSaveClick() {
      // console.log({ userName, ...checks });
      const existUser = usersData.findIndex((user) => user.userName === userName);

      if (existUser > -1) {
        usersData[existUser] = { userName, ...checks };
        console.log(usersData);
      } else {
        usersData.push({ userName, ...checks });
      }
    }

    function onCancelClick() {
      setUserName("");
      setChecks({
        first: false,
        second: false,
        third: false,
      });
    }

    return (
      <div className="footer">
        <Grid dir="ltr">
          <Grid.Row>
            <Grid.Col sizeSm={6} sizeMd={6} sizeLg={6} style={gridStyle}>
              <DefaultButton onClick={onSaveClick}>Save</DefaultButton>
            </Grid.Col>

            <Grid.Col sizeSm={6} sizeMd={6} sizeLg={6} style={gridStyle}>
              <DefaultButton onClick={onCancelClick}>Cancel</DefaultButton>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export const gridStyle = {
  textAlign: "center",
};

export default Footer;
