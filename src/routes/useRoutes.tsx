import * as React from "react";
import MainPage from "../views/mainpage";

interface RoutesObj {
  path: string;
  element: React.ReactNode;
  key: string;
}

const useRoutes = (): RoutesObj[] => {
  // const user = useContext(AuthContext);

  // if (user)
  //   return [
  //     {
  //       path: '/next-steps',
  //       element: <NextSteps />,
  //       key: '/next-steps'
  //     },
  //   ];

  return [
    {
      path: "/",
      element: <MainPage />,
      key: "/",
    },
  ];
};

export default useRoutes;
