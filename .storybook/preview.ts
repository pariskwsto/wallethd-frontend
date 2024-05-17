import { Preview } from '@storybook/react';

import { withAppProvider } from '../src/stories/decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withAppProvider],
};

export default preview;
