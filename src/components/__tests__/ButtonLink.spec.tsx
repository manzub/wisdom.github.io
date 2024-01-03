import React from 'react';
import { render } from '@testing-library/react';
import ButtonLink from '../ButtonLink';

describe('<ButtonLink />', () => {
  test('should render correctly', () => {
    const { asFragment } = render(
      <ButtonLink
        text="wizzdom.dev"
        title="wizzdom.dev"
        href="https://wizzdom.dev"
        icon={{
          prefix: 'fas',
          iconName: 'coffee',
        }}
        size="lg"
        showCount={false}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
