
import sstsdk from '@symplify-conversion/sst-sdk-nodejs';
export default (context: any, inject: any) => {
  console.log(context);
  inject('sstsdk', sstsdk)
}
