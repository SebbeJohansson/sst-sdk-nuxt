import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import sstsdk from '@symplify-conversion/sst-sdk-nodejs';

export default defineNuxtPlugin(() => {
  const { sst: sstConfig } = useRuntimeConfig();
  const sst = new sstsdk(sstConfig.websiteId);
  return {
    provide: {
      sst: () => {
        return sst;
      },
    },
  }
})
