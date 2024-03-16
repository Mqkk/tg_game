import { observer } from "mobx-react-lite";

import { Selector } from "../../../../components/Selector";
import { THairColorList } from "../../../../stores/domains/HairCharacter/types";

const HairColorList: THairColorList = [
  { id: 1, value: "#000" },
  { id: 2, value: "green" },
  { id: 3, value: "blue" },
  { id: 4, value: "yellow" },
];

export const Appearance = observer(() => {
  return (
    <div>
      <Selector options={HairColorList} />
    </div>
  );
});
