/* This is exporting multiple components from different files using the `export` keyword and the `as`
keyword to give them new names. These components can then be imported into other files using their
new names. */
// * Link label component
export { default as LinkLabel } from './LinkLabel';

// * Status label component
export { default as StatusLabel } from './StatusLabel';

// * Seconday label
export { default as SecondaryLabel } from './SecondaryLabel';
