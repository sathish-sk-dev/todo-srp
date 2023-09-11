import { Primitive } from "./Primitive";
import { Collection } from "./Collection";
import { ObjectType } from "./ObjectType";

export type IsEmptyValueType =
  | Primitive
  | Collection
  | ObjectType
  | null
  | undefined;
