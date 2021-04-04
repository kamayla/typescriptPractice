export default function objectSample() {
  type Country = {
    capital: string;
    language: string;
    name: string;
  };

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Tokyo',
  };

  console.log(japan);

  type Knight = {
    hp: number;
    sp: number;
    weapon: string;
    swordSkill: string;
  };
  type Wiz = {
    hp: number;
    sp: number;
    weapon: string;
    magicSkill: string;
  };

  type Adventurer = Knight | Wiz;
  type Paladin = Knight & Wiz;

  const Ad: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '斬鉄剣',
    magicSkill: '変態仮面',
  };

  const paladin: Paladin = {
    hp: 4000,
    sp: 600,
    weapon: 'エクスカリバー',
    swordSkill: 'アルティメッドソード',
    magicSkill: '変態',
  };

  console.log(Ad, paladin);
}
