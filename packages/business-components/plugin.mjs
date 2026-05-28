// import type { Plugin }from '@ice/pkg';
/**
* @type {import('@ice/pkg').Plugin}
*/
import { TaskName } from '@ice/pkg';

const plugin = (api) => {
  const { onGetConfig } = api;

  const bundleTaskCallback = async (
    config,
  ) => {
    config.modifyStylesOptions ??= [];
    config.modifyStylesOptions.push((options) => {
      options.less = {
        javascriptEnabled: true,
      };
      return options;
    });
  };

  onGetConfig(TaskName.BUNDLE_ES2017, bundleTaskCallback);
  onGetConfig(TaskName.BUNDLE_ES5, bundleTaskCallback);
};
export default plugin;