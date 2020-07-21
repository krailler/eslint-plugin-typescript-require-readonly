/**
 * @fileoverview Enforces to use readonly on interfaces and objects by default.
 * @author Aitor Chicharro
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports.rules = {
  "typescript-require-readonly": {
    meta: {
      type: "suggestion",
      docs: {
        description: "Enforces to use readonly",
        category: "Best Practices",
        recommended: "warn",
        suggestion: true,
      },
      fixable: "code",
      schema: [],
    },
    create: function (context) {
      return {
        TSPropertySignature(node) {
          if (!node.readonly) {
            context.report({
              node: node,
              message: "readonly is required.",
              fix: function (fixer) {
                return fixer.insertTextBefore(node, "readonly ");
              },
            });
          }
        },
      };
    },
  },
};
