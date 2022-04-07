import { UiSchema } from "@rjsf/core";
import Form from "@rjsf/material-ui";
import type { JSONSchema7 } from "json-schema";
import { onChange, onError, onSubmit } from "../logic/utils";

const schema: JSONSchema7 = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "anyOf": [
        {
            "$ref": "#/definitions/I1"
        },
        {
            "$ref": "#/definitions/I2"
        }
    ],
    "definitions": {
        "I1": {
            "properties": {
                "age": {
                    "type": "number"
                },
                "name": {
                    "type": "string"
                }
            },
            "required": [
                "age",
                "name"
            ],
            "type": "object"
        },
        "I2": {
            "properties": {
                "desc": {
                    "type": "string"
                },
                "name": {
                    "type": "string"
                },
                "pages": {
                    "type": "number"
                }
            },
            "required": [
                "desc",
                "name",
                "pages"
            ],
            "type": "object"
        }
    }
}




const uiSchema: UiSchema = {};

export default function FormUnion() {
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
