import * as React from "react";
import {
  Text,
  ImageBackground,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';
import colors from '../../resources/colors';
import AppButton from '../../resources/componets/AppButton';
import Separator from '../../resources/componets/Separator';
import AppPicker from '../../resources/componets/AppPicker';
import {useState} from 'react';
import Styles from './Styles';

import {
  handleSignup,
  testFamilyName,
  testNum,
  testUser,
  testPassword,
  testName,
} from './func';

import {jobs, locations} from './data';
const SignIn = () => {
  [name, setname] = useState('');
  [familyName, setfamilyName] = useState('');
  [number, setnumber] = useState('');
  [user, setuser] = useState('');
  [password, setpassword] = useState('');
  [city, setCity] = useState('');
  [job, setJob] = useState('');
  [Txt, setText] = useState('');
  [Num, setNum] = useState('');
  [User, setUserText] = useState('');
  [Pass, setPass] = useState('');
  const onChangeJob = value => {
    setJob(value);
  };
  const onChangeCity = value => {
    setCity(value);
  };

  return (
    <ImageBackground
      source={require('../../resources/images/bg.jpg')}
      style={Styles.bg}>
      <StatusBar backgroundColor={colors.primary} />
      <ScrollView style={Styles.container}>
        {/* name input*/}

        <TextInput
          style={[
            Styles.input,
            !testName(name) && name !== '' && {borderColor: 'red'},
          ]}
          placeholder="name"
          value={name}
          onChangeText={text => setname(text)}
        />
        {!testName(name) && name !== '' && (
          <Text style={Styles.err}>
            Name must be at least two characters and alphabetical.
          </Text>
        )}

        {/* family name input*/}

        <TextInput
          style={[
            Styles.input,
            !testFamilyName(familyName) &&
              familyName != '' && {borderColor: 'red'},
          ]}
          placeholder="family name"
          value={familyName}
          onChangeText={text => setfamilyName(text)}
        />
        {!testFamilyName(familyName) && familyName !== '' && (
          <Text style={Styles.err}>
            family Name must be at least two characters and alphabetical.
          </Text>
        )}

        {/* phone number input*/}

        <TextInput
          keyboardType="numeric"
          style={[
            Styles.input,
            !testNum(number) && number != '' && {borderColor: 'red'},
          ]}
          placeholder="phone number"
          value={number}
          onChangeText={text => setnumber(text)}
        />
        {!testNum(number) && number !== '' && (
          <Text style={Styles.err}>enter a correct phone number</Text>
        )}

        {/* city selection input*/}
        <AppPicker
          style={Styles.picker}
          data={locations}
          onChange={onChangeCity}
        />

        {/*jobs selection*/}
        <AppPicker style={Styles.picker} data={jobs} onChange={onChangeJob} />

        {/* user input*/}
        <TextInput
          style={[
            Styles.input,
            !testUser(user) && user != '' && {borderColor: 'red'},
          ]}
          placeholder="username"
          value={user}
          onChangeText={text => setuser(text)}
        />
        {!testUser(user) && user !== '' && (
          <Text style={Styles.err}>
            username must be at least 6 characters and start with alphabetical.
          </Text>
        )}

        {/* password input*/}

        <TextInput
          style={[
            Styles.input,
            !testPassword(password) && password != '' && {borderColor: 'red'},
          ]}
          placeholder="password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setpassword(text)}
        />
        {!testPassword(password) && password !== '' && (
          <Text style={Styles.err}>
            password must be at least 6 characters .
          </Text>
        )}
         <View style={{width: '80%', overflow: 'hidden'}}>
        <Separator  size={17} color={colors.secondary} />
      </View>
      </ScrollView>

      {/* sinup button*/}

      <AppButton
        backgroundColor={colors.light}
        color={colors.primary}
        Style={Styles.btn}
        text="SIGN UP"
        textStyle={Styles.btnTxt}
        onPress={() =>
          handleSignup(name, familyName, city, number, job, user, password)
        }
      />

      {/* separator*/}

      <View style={{width: '80%', overflow: 'hidden'}}>
        <Separator text={'or'} size={17} color={colors.black} />
      </View>

      {/* login button*/}

      <AppButton
        backgroundColor={colors.primary}
        color={colors.light}
        Style={[Styles.btn]}
        text="LOGIN"
        textStyle={Styles.btnTxt}
      />
    </ImageBackground>
  );
};

export default SignIn;
