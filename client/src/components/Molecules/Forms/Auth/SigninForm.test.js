// NavSide.test.js
import React from 'react';
// use "screen" - a newer way to utilize query in 2020 
import { render, screen, fireEvent, act } from '@testing-library/react';
import SigninFormBase from './SigninFormBase'; // component to test;
import { BrowserRouter as Router } from "react-router-dom"; // our router
import '@testing-library/jest-dom';


const entries = [
  { email: 'john_doe@yahoo', password: 'helloworld' },
  { email: 'renafrond@gmail.com', password: '123WX&abcd' },
  { email: 'renafrond', password: '123WX&abcd' },
  { email: 'renafrond@gmail.com', password: 'password123' },
]

// signupForm.test.js
// this mostly a input validate test
describe('Input validate', () => {
  /* 
   I use test.each to iterate every case again
   I need use 'async' here because wait for 
   validation is await function 
  */
  test.each(entries)('test with %s entry', async (entry) => {
    render(<Router><SigninFormBase /></Router>);
    const emailInput = screen.getByLabelText(/email/i)
      || screen.queryByPlaceholderText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i)
      || screen.queryByPlaceholderText(/password/i);

    /* use fireEvent.change and fireEvent.blur to change name input value
    and trigger the validation
    */
    fireEvent.change(emailInput, { target: { value: entry.email } });
    fireEvent.blur(emailInput);

    //email inputs
    if (entry.email.length === 0) {
      expect(await screen.findByText(/please fill out this field/i)).not.toBeNull();
      console.log('email needs to be filled out');
    }
    else if (!(entry.email)) {
      // if the name is invalid, error msg will showup somewhere in the form
      expect(await screen.findByText(/the email address entry.email is not associated with any account. double-check your email address and try again./i)).not.toBeNull();
      console.log(entry.name + ' is invalid name.');
    };

    //now for password
    fireEvent.change(passwordInput, { target: { value: entry.password } });
    fireEvent.blur(passwordInput);

    if (entry.password.length === 0) {
      expect(await screen.findByText(/please fill out this field/i)).not.toBeNull();
      console.log('password needs to be filled out');
    }
    else if (!(entry.password)) {
      expect(await screen.findByText(/invalid email or password. Please try again./i)).not.toBeNull();
      console.log(entry.password + ' is invalid.');
    };

    /*  Remember to add this line at the end of your test to 
    avoid act wrapping warning.
    More detail please checkout Kent C.Dodds's post:
    (He is the creator of Testing Library)
    https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning
    */
    await act(() => Promise.resolve());

  })
})