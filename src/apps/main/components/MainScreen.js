import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { requestMainService } from '../actions/main';

class MainScreen extends Component {

    componentDidMount() {
        this.props.requestMainService();
    }

    render() {
        console.log('Current Props: ', this.props);
        return (
            <View style={{ flex: 1 }}>
                <Text>Work hard Play hard!</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ main }) => ({ main });

export default connect(mapStateToProps, { requestMainService })(MainScreen);
