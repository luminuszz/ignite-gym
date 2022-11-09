import { StatusBar, Text } from "react-native";
import { Provider } from "react-redux";

import Loading from "@components/Loading";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "@routes/index";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";
import Store from "@store/store";
import { defaultTheme } from "@themes/index";
import { useFonts } from "expo-font";
import { Flex, NativeBaseProvider } from "native-base";

const App = () => {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={defaultTheme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Provider store={Store}>
        <NavigationContainer>
          {fontsLoaded ? <Routes /> : <Loading />}
        </NavigationContainer>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;
