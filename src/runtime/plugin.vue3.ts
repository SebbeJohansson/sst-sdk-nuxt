import { defineNuxtPlugin } from '#app'
import sstsdk from '@symplify-conversion/sst-sdk-nodejs';

export default defineNuxtPlugin(() => {
  console.log('Plugin injected by my-module!');
  return {
    provide: {
      sst: (websiteid: string) => {
        const sst = new sstsdk(websiteid);
        return sst;
      },
    },
  }
})
