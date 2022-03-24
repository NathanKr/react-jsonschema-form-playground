import JSONForm, { UiSchema } from "@rjsf/core";
import type { JSONSchema7 } from "json-schema";
import { onChange, onError, onSubmit } from "../logic/utils";

const schema: JSONSchema7 = {
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    IPet: {
      properties: {
        legs: {
          maximum: 100,
          minimum: 1,
          type: "number",
        },
        name: {
          type: "string",
        },
      },
      required: ["legs", "name"],
      type: "object",
    },
  },
  properties: {
    age: {
      type: "number",
    },
    name: {
      maxLength: 5,
      minLength: 1,
      type: "string",
    },
    pets: {
      items: {
        $ref: "#/definitions/IPet",
      },
      maxItems: 4,
      minItems: 1,
      type: "array",
    },
  },
  required: ["name", "pets"],
  type: "object",
};
const uiSchema: UiSchema = {};

export default function MyFormDefaultTheme() {
  return (
    <JSONForm
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
      onChange={onChange}
      onError={onError}
    />
  );
}
