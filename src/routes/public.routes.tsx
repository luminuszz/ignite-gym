import { FC } from "react";

import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";

export type PublicRoutesParams = {
  SignIn: undefined;
  SignUp: undefined;
};

export type PublicPage<T extends keyof PublicRoutesParams> = FC<
  NativeStackScreenProps<PublicRoutesParams, T>
>;

const AppStackRoutes = createNativeStackNavigator<PublicRoutesParams>();

const PublicRoutes = () => (
  <AppStackRoutes.Navigator
    initialRouteName="SignIn"
    screenOptions={{ headerShown: false }}
  >
    <AppStackRoutes.Screen name="SignIn" component={SignIn} />
    <AppStackRoutes.Screen name="SignUp" component={SignUp} />
  </AppStackRoutes.Navigator>
);

export default PublicRoutes;
