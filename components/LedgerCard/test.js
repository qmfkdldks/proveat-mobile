import 'react-native';
import React from 'react';
import LedgerCard from './index';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const data = { total: 215.2, created_at: "", description: "Some description", tag_list: ["income"] }
  const tree = renderer.create(<LedgerCard {...data} />).toJSON();

  expect(tree).toMatchSnapshot();
});
