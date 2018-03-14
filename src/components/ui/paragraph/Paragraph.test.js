import React from 'react';
import { shallow } from 'enzyme';
import Paragraph from './Paragraph';

test('Render a p', () => {
    const wrapper = shallow(
        <p>Hello Jest!</p>
    );
    expect(wrapper).toMatchSnapshot();
});
