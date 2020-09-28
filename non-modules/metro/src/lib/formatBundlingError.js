/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 *
 */
"use strict";

const GraphNotFoundError = require("../IncrementalBundler/GraphNotFoundError");

const ResourceNotFoundError = require("../IncrementalBundler/ResourceNotFoundError");

const RevisionNotFoundError = require("../IncrementalBundler/RevisionNotFoundError");

const serializeError = require("serialize-error");

const _require = require("../node-haste/DependencyGraph/ModuleResolution"),
  UnableToResolveError = _require.UnableToResolveError;

const _require2 = require("metro-core"),
  AmbiguousModuleResolutionError = _require2.AmbiguousModuleResolutionError;

function formatBundlingError(error) {
  if (error instanceof AmbiguousModuleResolutionError) {
    const he = error.hasteError;
    const message =
      "Ambiguous resolution: module '" +
      `${error.fromModulePath}\' tries to require \'${he.hasteName}\', but ` +
      "there are several files providing this module. You can delete or " +
      "fix them: \n\n" +
      Object.keys(he.duplicatesSet)
        .sort()
        .map(dupFilePath => `${dupFilePath}`)
        .join("\n\n");
    return {
      type: "AmbiguousModuleResolutionError",
      message,
      errors: [
        {
          description: message
        }
      ]
    };
  }

  if (
    error instanceof UnableToResolveError ||
    (error instanceof Error &&
      (error.type === "TransformError" || error.type === "NotFoundError"))
  ) {
    error.errors = [
      {
        description: error.message,
        filename: error.filename,
        lineNumber: error.lineNumber
      }
    ];
    return serializeError(error);
  } else if (error instanceof ResourceNotFoundError) {
    return {
      type: "ResourceNotFoundError",
      errors: [],
      message: error.message
    };
  } else if (error instanceof GraphNotFoundError) {
    return {
      type: "GraphNotFoundError",
      errors: [],
      message: error.message
    };
  } else if (error instanceof RevisionNotFoundError) {
    return {
      type: "RevisionNotFoundError",
      errors: [],
      message: error.message
    };
  } else {
    return {
      type: "InternalError",
      errors: [],
      message: "Metro has encountered an error: " + error.message
    };
  }
}

module.exports = formatBundlingError;
