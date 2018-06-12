import React from 'react';
test('Render a img', () => {
    const wrapper = shallow(
        <figure>Hello Jest!</figure>
    );
    expect(wrapper).toMatchSnapshot();
});
