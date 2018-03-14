import React from 'react';
test('Render a section', () => {
    const wrapper = shallow(
        <section>Hello Jest!</section>
    );
    expect(wrapper).toMatchSnapshot();
});
