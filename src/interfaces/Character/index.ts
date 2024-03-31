export interface ICharacterResponse {
  id: number;
  name: string;
  balance: string;
  experience: string;
  hp: string;
  valor: string;
  appearance: {
    assetPath: string;
  };
}

export interface ICharacterRequest {
  genderId: number;
  factionId: number;
  hairId: number;
  hairColorId: number;
}

export interface ICharacterAppearancePresetResponse {
  id: number;
  factionId: number;
  genderId: number;
  hairId: number;
  hairColorId: number;
  assetPath: string;
}
