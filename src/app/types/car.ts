export interface ICar {
  id: number;
  name: string;
  price: number;
}

export interface ICarsResponse {
  getAllCars: ICar[];
}
