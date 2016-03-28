import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import Sidebar from '../../src/common/components/layout/Sidebar';

describe('Sidebar Rending', function(){

	const user =  {
		name : 'John Smith',
		dept : 'Web Team',
		lastLogin : new Date(),
		email : 'john@smith.com',
		id : 'abcde1234'
	};
	const version = '0.0.1';


  before('render and locate element', function() {
    const renderedComponent = TestUtils.renderIntoDocument(
    	<Sidebar user={user} version={version} />
    );

    const username = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'user-name'
    );

    const versionNumber = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'version'
    );

    this.linkArray = TestUtils.scryRenderedDOMComponentsWithClass(
      renderedComponent,
      'sidebar-nav-item'
    );

    this.firstLink = ReactDOM.findDOMNode(this.linkArray[0]);
    this.username = ReactDOM.findDOMNode(username);
    this.versionNumber = ReactDOM.findDOMNode(versionNumber);

  });

  it('user name should be "' + user.name+ '"', function() {
    expect(this.username.textContent).toBe(user.name);
  });

  it('version should not be ' + version , function() {
    expect(this.versionNumber.textContent).toBe('Currently version ' + version);
  });

  it('There should be 5 Navigation Links', function() {
    expect(this.linkArray.length - 1).toBe(5);
  });

  it('First link should be "Home [static]"', function() {
    expect(this.firstLink.textContent).toBe('Home [static]');
  });

});
