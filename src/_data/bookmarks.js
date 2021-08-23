const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'yuhl93j9',
  dataset: 'production',
  apiVersion: '2021-08-23',
	// useCdn: true,
})

module.exports = client.fetch(`
	*[_type == 'bookmarks']
`)
