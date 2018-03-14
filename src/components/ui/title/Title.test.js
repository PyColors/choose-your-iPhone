import React from 'react';
test('Render a h1', () => {
    const wrapper = shallow(
        <h1>Hello Jest!</h1>
    );
    expect(wrapper).toMatchSnapshot();
});
