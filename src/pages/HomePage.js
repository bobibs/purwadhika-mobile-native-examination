import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataHomePage} from '../redux/actions/HomeAction';
import {
  View,
  StyleSheet,
  Platform,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import {Header} from 'react-native-elements';

const HomePage = props => {
  console.log('props', props);
  // Reducer
  const {dataHomePage} = useSelector(state => state.HomeReducer);
  const {userName} = useSelector(state => state.AuthReducer);

  // Set Dispatch
  const dispatch = useDispatch();

  // Component Did Mount
  useEffect(() => {
    dispatch(getDataHomePage());
  }, []);

  // Styles
  const styles = StyleSheet.create({
    containerStyle: {
      backgroundColor: '#fff',
      flex: 1,
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.containerStyle}>
      <Header
        rightComponent={{
          text: `Hallo, ${userName}`,
          style: {color: 'white', fontSize: 18, fontWeight: '700'},
        }}
        containerStyle={{
          backgroundColor: 'tomato',
          justifyContent: 'space-around',
          elevation: 2,
          marginTop: Platform.OS === 'ios' ? 0 : -25,
        }}
        rightContainerStyle={{
          flex: 3,
        }}
      />
    </View>
  );
};

export default HomePage;
