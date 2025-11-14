export type Category = "Pipe" | "Valve" | "Flange" | "Elbow";

export interface Part {
  id: number;           
  name: string;         
  category: Category;   
  material: string;     
  diameterMm: number;   
}
