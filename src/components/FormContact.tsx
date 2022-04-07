import { UiSchema } from "@rjsf/core";
import Form from "@rjsf/material-ui";
import type { JSONSchema7 } from "json-schema";
import { onChange, onError, onSubmit } from "../logic/utils";

const schema: JSONSchema7 = {
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    email: {
      type: "string",
    },
    name: {
      type: "string",
    },
    message: {
      type: "string",
    },
  },
  required: ["email", "message", "name"],
  type: "object",
};

const uiSchema: UiSchema = {
  message: {
    "ui:widget": "textarea",
  },
  email: {
    "ui:widget": "email",
  },
};

export default function FormContact() {
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
