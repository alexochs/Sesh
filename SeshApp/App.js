import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from './src/actions/counts';
import {bindActionCreators} from 'redux';
import database from '@react-native-firebase/database';

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
      <SafeAreaView styles={styles.container}>
        <Button title="Increment" onPress={() => this.incrementCount()} />
        <Text>{count}</Text>
        <Button title="Decrement" onPress={() => this.decrementCount()} />
        <Button title="Load Count from DB" onPress={() => this.fetchCount()} />
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
