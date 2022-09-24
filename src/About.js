import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";


class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    const { user } = this.props.auth0;
    console.log(user);
    return(
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <img src={user.picture} alt="pic"></img>
        </div>
    )
  }
};

export default withAuth0(Profile);
