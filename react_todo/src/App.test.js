import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import withToken from './helpers/withToken';

configure({ adapter: new Adapter() });

describe('withToken component testing', () => {
  it('renders token in localstorage', () => {
    const tokenApp = shallow(<withToken />);
    const welcome = <withToken />
    expect(tokenApp.contains(welcome)).to.equal(true);
  });
});
