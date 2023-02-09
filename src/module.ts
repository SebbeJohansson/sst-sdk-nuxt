import { defineNuxtModule, isNuxt2, addPlugin, addImports, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'sst-sdk-nuxt',
    configKey: 'sst'
  },
  setup () {
    const resolver = createResolver(import.meta.url);

    if (isNuxt2()) {
      addPlugin(resolver.resolve('./runtime/plugin.vue2'));
    } else {
      addPlugin(resolver.resolve('./runtime/plugin.vue3'));
    }
  }
})
