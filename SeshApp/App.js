import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from './actions/counts';
import {bindActionCreators} from 'redux';

class App extends Component {
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

  render() {
    const {count} = this.props;
    return (
      <SafeAreaView styles={styles.container}>
        <Button title="increment" onPress={() => this.incrementCount()} />
        <Text>{count}</Text>
        <Button title="decrement" onPress={() => this.decrementCount()} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  count: state.count.count,
});

const ActionCreators = Object.assign({}, {changeCount});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
