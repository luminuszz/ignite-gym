import { FC } from "react";

import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { View } from "native-base";

const AppRoutesTabsNavigator = createBottomTabNavigator();

type AppRoutesParams = {};

export type AppPage<T extends keyof AppRoutesParams> = FC<
  BottomTabScreenProps<AppRoutesParams, T>
>;

const AppRoutes = () => <View />;

export default AppRoutes;
