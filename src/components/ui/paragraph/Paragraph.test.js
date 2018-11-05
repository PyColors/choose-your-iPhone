import React from 'react'
test('Render a p', () => {
  const wrapper = shallow(
        <p>Hello Jest!</p>
    )
  expect(wrapper).toMatchSnapshot()
})
