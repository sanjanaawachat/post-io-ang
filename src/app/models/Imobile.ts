export interface IMobile {
  id: number;
  brand: string;
  model: string;
  price: number;
  ram: number; // in GB
  storage: number; // in GB
  battery: number; // in mAh
  camera: number; // in MP
  os: string;
  inStock: boolean;
  image:string;
}
