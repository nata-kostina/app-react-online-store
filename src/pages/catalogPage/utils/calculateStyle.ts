export const calculateStyleForGridContainer = (perRow: number): { [key: string]: string } =>({
  'gridTemplateColumns': `repeat(${perRow}, 1fr)`
})
