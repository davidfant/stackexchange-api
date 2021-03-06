const ts = require('typescript');
const keysTransformer = require('ts-transformer-keys/transformer').default;

const program = ts.createProgram(["build/fields/buildFields.ts"], {
  outDir: "build/fields/dist",
  allowJs: true,
  checkJs: true,
  target: ts.ScriptTarget.ES2020,
  module: ts.ModuleKind.CommonJS,
  moduleResolution: ts.ModuleResolutionKind.NodeJs,
  strict: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  noFallthroughCasesInSwitch: true,
  newLine: ts.NewLineKind.LineFeed,
  forceConsistentCasingInFileNames: true,
  resolveJsonModule: true,
  noEmitOnError: true,
});

const transformers = {
  before: [keysTransformer(program)],
  after: [],
};
const {emitSkipped, diagnostics} = program.emit(undefined, undefined, undefined, false, transformers);

if (emitSkipped) {
  throw new Error(diagnostics.map(diagnostic => diagnostic.messageText).join('\n'));
}
