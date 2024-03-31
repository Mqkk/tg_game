export interface ICharacterResponse {
  data: ICharacter;
}

export interface ICharacterRequest {
  genderId: number;
  factionId: number;
  hairId: number;
  hairColorId: number;
}

export interface ICharacterAppearancePresetResponse {
  data: {
    id: number;
    factionId: number;
    genderId: number;
    hairId: number;
    hairColorId: number;
    assetPath: string;
  };
}

export interface ICharacter {
  id: number;
  name: string;
  balance: number;
  experience: number;
  hp: number;
  valor: number;
  appearance: {
    assetPath: string;
  };
}
