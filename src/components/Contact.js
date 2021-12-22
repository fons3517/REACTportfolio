import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { emailValidation } from "../utils/helper";
import { Form, Button } from "react-bootstrap";

function FormState() {
  const [state, setState] = useState({ name: '', email: '', message: '' });
  const [form, setForm] = useState('');

  function validation(e) {
    if (e.target.name === 'email') {
      const valid = emailValidation(e.target.value);
      if (!valid) {
        setForm('Please use a valid email addresss');
      }
      setForm('');
    }
    if (!form) {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  }
  return (
    <div className="mt-5 w-75 container bg-light text-dark">

    </div>
  )
}
