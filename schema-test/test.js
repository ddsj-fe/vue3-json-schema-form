const Ajv = require("ajv");
const localize = require("ajv-i18n");

const ajv = new Ajv({ allErrors: true, messages: false });

const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string", maxLength: 10 },
  },
  required: ["foo"],
  additionalProperties: false,
};

const data = { foo: 1, bar: "1 " };
const validate = ajv.validate(schema, data);
console.log(validate);
if (!validate) {
  localize.zh(validate.errors);
  console.log(ajv.errors);
}
