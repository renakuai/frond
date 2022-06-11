// NavSide.test.js
import React from 'react';
// use "screen" - a newer way to utilize query in 2020 
import { render, screen } from '@testing-library/react';
import NavSide from './NavSide'; // component to test;
import { BrowserRouter as Router } from "react-router-dom"; // our router
import '@testing-library/jest-dom';


//community test cases
const commCases = [
]

it('displays proper community names', () => {
  const communitiesList = commCases
  render(<Router>
    <NavSide communitiesList={communitiesList} />
  </Router>)
  const element = screen.getByTestId('test-li')
  expect(element).not.toBeInTheDocument();
});