import { UiSchema } from "@rjsf/core";
import Form from "@rjsf/material-ui";
import type { JSONSchema7 } from "json-schema";
import { onChange, onError, onSubmit } from "../logic/utils";

const schema: JSONSchema7 = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false },
  },
};

const uiSchema: UiSchema = {};

export default function MyFormMaterialUiTheme1() {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
      onChange={onChange}
      onError={onError}
    />
  );
}
