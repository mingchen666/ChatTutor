export type CanvasElementDocumentAttribute = {
  name: string
  description: string
  required: boolean
  default?: string
}

export type CanvasElementDocument = {
  name: string
  description: string
  attrs: CanvasElementDocumentAttribute[]
  rules?: string[]
}

export const contential = (document: CanvasElementDocument) => {
  return `
  ### \`${document.name}\`
  > ${document.description}
  
  #### Attributes
  ${document.attrs.map(attr => `- \`${attr.name}\`: ${attr.description} ${attr.required ? '**(required)**' : '(optional)'} ${attr.default ? `**(default: ${attr.default})**` : ''}`).join('\n')}

  #### Rules
  ${document.rules?.map(rule => `- \`${rule}\``).join('\n')}
  `.trim()
}

export const canvasElementDocuments = new Map<string, CanvasElementDocument>()
export const registerCanvasElementDocument = (document: CanvasElementDocument) => {
  canvasElementDocuments.set(document.name, document)
}
export const unregisterCanvasElementDocument = (name: string) => {
  canvasElementDocuments.delete(name)
}