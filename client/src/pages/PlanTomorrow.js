import React from "react";
import TomorrowUser from "../components/TomorrowUser";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class PlanTomorrow extends React.Component {

  componentDidUpdate() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }

  render() {
    return <TomorrowUser />;
  }
}

PlanTomorrow.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PlanTomorrow);
