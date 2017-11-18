import { Button } from "../../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/react-native";

class Main extends React.Component {
    static navigationOptions = {
        title: "Welcome",
    };
    render 
    () {
        const { navigate } = this.props.navigation;
        return (
            <Button
            title ="Go to profile"
            onPress={() =>
            navigate('Profile', { name: 'Brad'})
        }
        />
        );
    }
}