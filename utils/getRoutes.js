export default async () => {
  const { $content } = require('@nuxt/content')
  const files = await $content({ deep: true })
    .only(['slug', 'updatedAt'])
    .fetch()
  return files.map((file) => (file.path === '/index' ? '/' : file.path))
}
