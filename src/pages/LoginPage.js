import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import {checkUser, loginUser} from '../redux/actions/AuthAction';

const LoginPage = props => {
  // State
  const [inputName, setInputName] = useState('');
  // Store
  const {userName, loginStatus} = useSelector(state => state.AuthReducer);

  // Set Dispatch
  const dispatch = useDispatch();

  // Component Did Mount
  useEffect(() => {
    console.log('ok');
    dispatch(checkUser());
  }, []);

  // Component Did Update
  useEffect(() => {
    if (userName) {
      console.log(userName);
      props.navigation.navigate('HomePage');
    }
  }, [userName]);

  // Handle Button Enter
  const enterButtonAction = () => {
    dispatch(loginUser(inputName));
  };

  // Styles
  const styles = StyleSheet.create({
    containerSplashStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'tomato',
    },
    containerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    inputContainerStyle: {
      marginTop: 50,
      marginBottom: 40,
      width: '100%',
    },
  });

  if (loginStatus) {
    props.navigation.navigate('HomePage');
  }

  return (
    <View style={styles.containerStyle}>
      <Text h3 style={{fontSize: 40, color: 'tomato'}}>
        Tomato App
      </Text>
      <View style={styles.inputContainerStyle}>
        <Input
          placeholder="Username"
          name="userName"
          onChangeText={text => setInputName(text)}
        />
      </View>
      <Button
        title="Enter"
        containerStyle={{width: '95%'}}
        buttonStyle={{backgroundColor: 'tomato', color: 'white'}}
        onPress={enterButtonAction}
      />
    </View>
  );
};

export default LoginPage;
