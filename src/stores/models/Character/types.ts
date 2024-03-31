export interface ICharacterModel {
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
