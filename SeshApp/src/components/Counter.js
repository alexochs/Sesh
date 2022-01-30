/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Button, Text} from 'react-native';

import database from '@react-native-firebase/database';

import {connect} from 'react-redux';
import {changeCount} from '../actions/counts';
import {bindActionCreators} from 'redux';

class Counter extends Component {
  incrementCount() {
    let {count, actions} = this.props;
    count++;
    actions.changeCount(count);
  }

  decrementCount() {
    let {count, actions} = this.props;
    count--;
    actions.changeCount(count);
  }

  fetchCount() {
    let {actions} = this.props;
    database()
      .ref('/users/testuser/counter')
      .once('value')
      .then(snapshot => {
        actions.changeCount(snapshot.val().counter.toString());
      });
  }

    render() {
    const {count} = this.props;

    return (
      <>
        <Button title="Increment" onPress={() => this.incrementCount()} />
        <Text>{count}</Text>
        <Button title="Decrement" onPress={() => this.decrementCount()} />
        <Button title="Load Count from DB" onPress={() => this.fetchCount()} />
      </>
    );
  }

}

const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign({}, {changeCount});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
