import path from "path";

const env = process.env.NODE_ENV || "development";
// eslint-disable-next-line import/no-dynamic-require
const config = require(`./${env}`);
const defaults = {
  root: path.join(__dirname, "./")
};

console.log('\n=================Path===================');
console.log( path.join(__dirname, "./") );
console.log('=================Path===================\n');

export default Object.assign(defaults, config);

console.log('\n===============Assign=====================');
console.log( Object.assign(defaults, config) );
console.log('===============Assign=====================\n');

console.log('\n================config====================');
console.log({ config });
console.log('================config====================\n');

console.log('\n===============defaults=====================');
console.log({ defaults });
console.log('===============defaults=====================\n');