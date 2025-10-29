import { Base } from "../../common"

type CoordinatesAnnotation = {
  x: number; 
  y: number; 
  w: number; 
  h: number; 
};

export interface Message extends Base {
id_message: string;
id_document: string;
id_user: string;
page?: number;
coordinates?: CoordinatesAnnotation;
text: string;
done: boolean;
}