import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import sstsdk from '@symplify-conversion/sst-sdk-nodejs';

export default defineNuxtPlugin(() => {
  console.log('Plugin injected by my-module!');
  const { sst: sstConfig } = useRuntimeConfig();
  const sst = new sstsdk(sstConfig.websiteId);
  console.log(sstConfig.websiteId);
  return {
    provide: {
      sst: () => {
        return sst;
      },
    },
  }
})
