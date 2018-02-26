# The Expo Link For Project Is Here :-
 * https://expo.io/@skynet-08/chatbot
<image src=" https://drive.google.com/open?id=1N0xKsUWsGUOt7AEwHrX-ipq13snW2ugF"/>
 
 
 
 

 
 
 
 # Introduction :-

This tutorial will walk through building a simple real-time chat app with React Native for Android and iOS. Along the way, you'll get to practice React Native basics and learn about tools you can use to build apps.

Work the tutorial at your own pace. The instructions below assume that you are comfortable with writing JavaScript and using npm. The tutorial assumes the use of `npm`, but the equivalent `yarn` commands will work as well.




##  Features :-
* [Load Earlir messages]
* [Touchable link using react-native-app]
* [System message ]
* [Messaging by api]
* [Redux support.]

## Dependencies :-
* Use version 0.2.x for RN >= 0.44.0
* Use version 0.1.x for RN >= 0.40.0
* Use version 0.0.10 for RN < 0.40.0

## Notes for local Development :-
* npm install -g create-react-native-app
* create-react-native-app Projectname
* cd projectname
* npm start

## Installation :- 
* Using npm:
* npm install react-native --save
* npm install native-base --save

## Code  :-
```jsx

import React, { Component } from 'react';
import { View,TextInput,ImageBackground,StyleSheet } from 'react-native';
import { Container, Header, Title, Content, FooterTab, Button, Left, Right, Body, Icon, Text,Input,InputGroup} from 'native-base';
export default class Example extends Component {
 state={
    isReady: false
  }

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
  });
  this.setState({isReady:true})
}

 handlePress = async () => {
              fetch('https://app.abstraction59.hasura-app.io/webhook', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                      "type": "select",
                "args": {
                    "table": "author",
                    "columns": [
                        "name"
                    ],
                    "limit": "1"
  }
    })
})

            requestOptions.body = JSON.stringify(body);

            fetch(url, requestOptions)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                console.log(result);
            })
            .catch(function(error) {
                console.log('Request Failed:' + error);
            });
      }


  render() {
     if (!this.state.isReady) {
    return <Expo.AppLoading />;
         }


  return(
    <Container>
       <Header style={styles.headerStyle}>
            <Left>
                <Body>
                   <Title style={styles.headerTitleStyle}>Online Store</Title>
                </Body>
            </Left>
      </Header>

      <ImageBackground source={require('./rt.jpeg')}style={styles.container}>
                <Content>
                    <Text>
                          Start here
                    </Text>
               </Content>

            <View style={styles.flowRight}>
                           <TextInput style={styles.data}
                           underlineColorAndroid={'transparent'}
                            placeholder='Ask me anything'
                           />
             <Button style={styles.hh} onPress={() => this._handlePress.bind(this)}>
                       <Text>Send</Text>
              </Button>
           </View>
    </ImageBackground>

  </Container>

     );
  }
}

const styles = StyleSheet.create({

    container: {
                  flex: 1,

                  justifyContent:'center',

                  padding: 20,
                  backgroundColor:'transparent',

                   alignSelf: 'stretch',
                     width: undefined,
                  },

   headerStyle:{

                  backgroundColor:'black',
                  padding:30,
                  borderColor:'transparent',


                },

 headerTitleStyle:{
                   fontSize:23,
                   padding:10,


                  },

  flowRight:{

                 flexDirection: 'row',
                 alignItems: 'center',
                 alignSelf: 'baseline',
            },

   data: {
                height: 40,
                padding: 6,
                marginRight:6,
                flexGrow: 1,
                fontSize: 18,
                borderWidth: 2,
                borderColor: 'black',
                borderRadius: 5,
                color: 'black',
          },
   hh:{

                 backgroundColor: "black",
       },
 }
);

```

## Props :-
- ImageBackground 
- TextInput 
- TouchableOpacity



# Publish your app!

Because we've built the app on Expo, you can distribute the app via Expo's `exp` CLI. Let's install that globally on your machine and sign up:
```sh
npm install -g exp
exp register
```


# Summary
Building this small app, we've covered a lot of ground. We...
- Learned how to create a new app with Create React Native App (CRNA)
- Learned how to set up a live-reloading development environment with Expo
- Learned about the anatomy of a React Native module
- Learned about native primitives like Views, Texts, Images and more
- Learned how to style and layout our components with the CSS-like Flexbox implementation
- Learned how to gather user input with TextInput
- Learned how to work with the device keyboard with KeyboardAvoidingView
- Learned how to use async/await to perform asynchronous API calls
- Learned about the power of third-party Components and how to use them in your app
- Learned how to split your app into multiple components
- Learned how to publish an app to the Expo store

Of course, we didn't learn them very deeply. You now have an idea on how to build a simple app in React Native, but the learning only starts here!


# Resources
Useful resources:
- [React Native docs](https://facebook.github.io/react-native/)
  - [Built-in components](https://facebook.github.io/react-native/docs/components-and-apis.html)
- [React Native Express](http://www.reactnativeexpress.com/) - A great guide for experienced JavaScripp developers
- [React (Native) Parts](https://react.parts/native) - React Native components from NPM
- [React docs](https://facebook.github.io/react/docs/hello-world.html)
- [Expo docs](https://docs.expo.io/versions/v17.0.0/index.html)
- [Awesome React Native](https://github.com/jondot/awesome-react-native) - More resources than you will ever have time to read!


## Made by rohitpardhi90@gmail.com  
   * URL OF MY GIHUB CHAT PROJECT IS  :-
  -https://github.com/rohitpardhi1998/HPDF_PROJECT1,
