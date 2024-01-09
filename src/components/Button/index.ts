/* This code exports several components from different files in the current directory. Each export
statement uses the `default as` syntax to give a new name to the exported component. The components
being exported are: `ActionButton`, `IconButton`, `SecondaryButton`, `LinkButton`, `SwitchButton`,
and `default` (which is the primary toggle group component). The components are exported from their
respective files (`./ActionButton`, `./IconButton`, etc.) using the `default` export syntax. */
// * Action button component
export { default as ActionButton } from './ActionButton';

// * Icon button component
export { default as IconButton } from './IconButton';

// * Secondary button component
export { default as SecondaryButton } from './SecondaryButton';

// * Link button component
export { default as LinkButton } from './LinkButton';

// * Switch button component
export { default as SwitchButton } from './Switch';

// * Primary toggle group
export { default } from './ToggleGroup';

// * Secondary toggle group
// export { default as SecondaryToggleGroup } from './ToggleGroup';
