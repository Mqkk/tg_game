import { CreateCharacter } from "../pages/CreacteCharacter";
import { Main } from "../pages/Main";
import { SCREENS } from "./endpoints";

export const ROUTES = [
  { key: 1, code: "main", path: SCREENS.MAIN, element: () => <Main /> },
  {
    key: 2,
    code: "createCharacter",
    path: SCREENS.CREATE_CHARACTER,
    element: () => <CreateCharacter />,
  },
];
