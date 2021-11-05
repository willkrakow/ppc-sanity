const getSanitySchema = require('@sanity/core/lib/actions/graphql/getSanitySchema')
const SchemaError = require('@sanity/core/lib/actions/graphql/SchemaError')
// Ideally this would call resolveRootDir but for now you have to run from the sanity.json dir.
const workDir = process.cwd();
const sanitySchema = getSanitySchema(workDir);
const hasErrors =
    sanitySchema._validation &&
    sanitySchema._validation.some((group) =>
        group.problems.some((problem) => problem.severity === 'error')
    );
if (hasErrors) {
    new SchemaError(sanitySchema._validation).print(console);
    process.exit(1);
} else {
    console.log('Sanity schema is OK.');
    process.exit(0);
}