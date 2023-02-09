
import sstsdk from '@symplify-conversion/sst-sdk-nodejs';
export default (context: any, inject: any) => {
  inject('sstsdk', sstsdk)
}
