// import JSONForm, { UiSchema } from "@rjsf/core";
import { UiSchema } from "@rjsf/core";
import Form from "@rjsf/material-ui";
import type { JSONSchema7 } from "json-schema";
import { onChange, onError, onSubmit } from "../logic/utils";

const schema: JSONSchema7 = {
  $schema: "http://json-schema.org/draft-07/schema#",
  definitions: {
    IComponentFactoryItem: {
      properties: {
        name: {
          enum: ["SimpleText"],
          type: "string",
        },
        props: {},
      },
      required: ["name", "props"],
      type: "object",
    },
    QAMode: {
      enum: ["QuizDo", "QuizResultsCorrect", "QuizResultsWrong"],
      type: "string",
    },
    QuizType: {
      enum: [
        "JobInterview",
        "Predefined",
        "RandomReactCategories",
        "ReactCategories",
      ],
      type: "string",
    },
    default_1: {
      properties: {
        categories: {
          $ref: "#/definitions/default_2",
        },
        description: {
          type: "string",
        },
        name: {
          type: "string",
        },
        type: {
          $ref: "#/definitions/QuizType",
        },
      },
      required: ["categories", "description", "name", "type"],
      type: "object",
    },
    default_2: {
      properties: {
        Advanced: {
          items: {
            enum: [
              "Accessibility",
              "CodeSplitting",
              "Context",
              "ErrorBoundaries",
              "ForwardingRefs",
              "Fragment",
              "Hoc",
              "IntegratingWithOtherLibraries",
              "JSXInDepth",
              "Portal",
              "Profiler",
              "ReactWithoutEs6React",
              "ReactWithoutJSX",
              "Reconciliation",
              "Ref",
              "RenderProps",
              "StaticTypeChecking",
              "StrictMode",
              "TypeCheckingWithPropsTypes",
              "UncontrolledComponent",
              "WebComponent",
            ],
            type: "string",
          },
          type: "array",
        },
        Basic: {
          items: {
            enum: [
              "AdvancedRendering",
              "Api",
              "ClassComponent",
              "Debugging",
              "Events",
              "Forms",
              "FunctionComponent",
              "Hooks",
              "Project",
              "Props",
              "RenderingElement",
              "State",
              "Style",
            ],
            type: "string",
          },
          type: "array",
        },
        JavaScript: {
          items: {
            enum: ["Destructuring", "map"],
            type: "string",
          },
          type: "array",
        },
      },
      type: "object",
    },
    default_3: {
      properties: {
        answers: {
          properties: {
            correctAnsIndex: {
              type: "number",
            },
            values: {
              items: {
                properties: {
                  cfItems: {
                    items: {
                      $ref: "#/definitions/IComponentFactoryItem",
                    },
                    type: "array",
                  },
                },
                required: ["cfItems"],
                type: "object",
              },
              type: "array",
            },
          },
          required: ["correctAnsIndex", "values"],
          type: "object",
        },
        categories: {
          $ref: "#/definitions/default_2",
        },
        question: {
          $ref: "#/definitions/default_4",
        },
      },
      required: ["answers", "categories", "question"],
      type: "object",
    },
    default_4: {
      properties: {
        mode: {
          $ref: "#/definitions/QAMode",
        },
        value: {
          properties: {
            cfItems: {
              items: {
                $ref: "#/definitions/IComponentFactoryItem",
              },
              type: "array",
            },
          },
          required: ["cfItems"],
          type: "object",
        },
      },
      required: ["mode", "value"],
      type: "object",
    },
  },
  properties: {
    _id: {
      type: "string",
    },
    head: {
      $ref: "#/definitions/default_1",
    },
    items: {
      items: {
        $ref: "#/definitions/default_3",
      },
      type: "array",
    },
  },
  required: ["_id", "head", "items"],
  type: "object",
};
const uiSchema: UiSchema = {};

export default function FormQuiz() {
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
