import React, { useState } from 'react';
import styled from 'styled-components';
const PageContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fcfaf5;
  border-radius: 8px;
`;
const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Textarea = styled.textarea`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-height: 150px;
`;
const Button = styled.button`
  padding: 15px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      alert(data.msg);
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };
  return (
    <PageContainer>
      <h1>Contact Adnan</h1>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <Input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <Button type="submit">Send Message</Button>
      </FormContainer>
    </PageContainer>
  );
};
export default Contact;