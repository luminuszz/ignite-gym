import { FC } from "react";

import { useAppSelector } from "@hooks/redux";
import AppRoutes from "@routes/app.routes";
import PublicRoutes from "@routes/public.routes";
import { getUserIsLoggedSelector } from "@store/features/user/userAuth.slice";

const Routes: FC = () => {
  const isLogged = useAppSelector(getUserIsLoggedSelector);

  return isLogged ? <AppRoutes /> : <PublicRoutes />;
};

export default Routes;
