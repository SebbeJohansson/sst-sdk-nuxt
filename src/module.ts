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
    console.log("options:", options.websiteId);
    if (options.websiteId === '') {
      console.error("Please provide a websiteId in your nuxt.config file.");
      return;
    }

    const resolver = createResolver(import.meta.url);

    // console.log(nuxt.options.publicRuntimeConfig);
    if (isNuxt2()) {
      nuxt.options.publicRuntimeConfig.sst = options;
      console.log(nuxt.options.publicRuntimeConfig);
      addPlugin(resolver.resolve('./runtime/plugin.vue2'));
    } else {
      nuxt.options.runtimeConfig.public.sst = options;
      console.log(nuxt.options.runtimeConfig);
      addPlugin(resolver.resolve('./runtime/plugin.vue3'));
    }
  }
})
