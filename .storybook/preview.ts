import { Preview } from '@storybook/react';

import { withGlobalStyle } from '../src/stories/decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withGlobalStyle],
};

export default preview;
