import { defineNuxtModule, isNuxt2, addPlugin, addImports, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  websiteId: string,
}

export default defineNuxtModule({
  meta: {
    name: 'sst-sdk-nuxt',
    configKey: 'sst'
  },
  defaults: {
    websiteId: '',
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url);

    if (isNuxt2()) {
      addPlugin(resolver.resolve('./runtime/plugin.vue2'));
    } else {
      if (options.websiteId === '') {
        console.error("Please provide a websiteId in your nuxt.config file.");
        return;
      }
      nuxt.options.runtimeConfig.public.sst = options;
      addPlugin(resolver.resolve('./runtime/plugin.vue3'));
    }
  }
})
