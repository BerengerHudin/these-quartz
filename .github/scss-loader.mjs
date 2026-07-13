// Loader Node.js ESM : intercepts les imports .scss et retourne un module vide.
// Nécessaire car tsx 4.x / Node 22 ESM ne gère pas les fichiers CSS/SCSS nativement.
export async function load(url, context, next) {
  if (url.endsWith('.scss') || url.endsWith('.css')) {
    return { format: 'module', shortCircuit: true, source: 'export default {}' }
  }
  return next(url, context)
}
