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
