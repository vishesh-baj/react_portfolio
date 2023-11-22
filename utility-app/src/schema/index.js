import * as yup from "yup";
export const todoSchema = yup.object({
  todoItem: yup.string().required("todo Item is required and cannot be empty"),
});
