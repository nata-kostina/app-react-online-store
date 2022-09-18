export const calculateStyleForGridContainer = (perRow: number): { [key: string]: string } =>({
  'grid-template-columns': `repeat(${perRow}, 1fr)`
})
