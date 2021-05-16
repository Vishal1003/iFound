import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

function DashBoard(props) {
  const { isAuthenticated, user } = props;
  return (
    <div>
      {isAuthenticated ? (
        <React.Fragment>
          <h1>Hi {user.name}</h1>
        </React.Fragment>
      ) : (
        <React.Fragment>Hi</React.Fragment>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated,
});

DashBoard.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(DashBoard);
