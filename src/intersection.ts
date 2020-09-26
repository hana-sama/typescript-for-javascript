export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
};
type TwoWayPlayer = Pitcher1 & Batter1;
const OtaniShohei: TwoWayPlayer = {
  battingAverage: 0.286,
  throwingSpeed:165
}