import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import 'containers/App/App.scss';

class App extends Component {
  
  static propTypes = {
    children: PropTypes.node
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit" to={'/home'}>Home</Button>
            <Button color="inherit" to={'/offer/list'}>Offers</Button>
            <Button color="inherit" to={'/offer/create'}>Create offer</Button>
          </Toolbar>
        </AppBar>
        <div className="content">
          {children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(App);
