import React from 'react';
import { useState } from 'react';

export default function Register() {

    const [email,setEmail] = useState

  return (
    <form action=''>
        <input type='email' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button type='submit'>Register</button>
    </form>
  );
}
