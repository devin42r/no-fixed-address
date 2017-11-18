import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'FirstName LastName'
  };
  render() {
    const { navigate } = this.props.navigation;
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style= {styles.container}>
        <Image source={pic} style={{width: 200, height: 200, borderRadius: 100}}/>
        <View style= {styles.buttons}>
          <Button
            onPress={() => navigate('About', { user: 'Name'})}
            title="About"
          />
          </View>
          <View style= {styles.buttons}>
          <Button
            onPress={() => navigate('Items', { user: 'Name'})}
            title="Items Needed"
          />
          </View>
          <View style= {styles.buttons}>
          <Button
            onPress={() => navigate('Chat', { user: 'Name'})}
            title="Start a chat"
          />
          </View>
      </View>
    );
  }
}

class AboutScreen extends React.Component {
  static navigationOptions = ({ navigation}) => ({
    title: 'About' ,
  });
  render() {

    const { params } = this.props.navigation.state;
    return (
      <View style= {styles.container}>
        <Text>All about {params.user}</Text>
        <Text>This is where the text goes. Everything here will be a bio about who where and why.</Text>
      </View>
    );
  }
  }

  class ItemScreen extends React.Component {
    static navigationOptions = ({ navigation}) => ({
      title: 'Items Needed' ,
    });
    render() {
  
      const { params } = this.props.navigation.state;
      return (
        <View style= {styles.container}>
          <Text>Items that {params.user} needs</Text>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
        </View>
      );
    }
    }

    class ChatScreen extends React.Component {
      static navigationOptions = ({ navigation}) => ({
        title: 'Chat' ,
      });
      render() {
    
        const { params } = this.props.navigation.state;
        return (
          <View style= {styles.container}>
            <Text>Chat with {params.user}</Text>
            <Text>This is where the text goes. Everything here will be a bio about who where and why.</Text>
          </View>
        );
      }
      }

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  About: { screen: AboutScreen },
  Items: { screen: ItemScreen },
  Chat: { screen: ChatScreen }
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: 'skyblue'
  },
  buttons: { 
      margin: 25,
      width: 300,
      height: 40
    },
  }
);
