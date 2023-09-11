import { DragControls, MotionValue } from "framer-motion";
import { Shadow } from "../../../enum/Shadow";

export type UseTodoItemHooks = {
  y: MotionValue<number>;
  dragControls: DragControls;
  boxShadow: MotionValue<Shadow>;
  showTrash: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSave: (value: string) => void;
  onDelete: () => void;
};
