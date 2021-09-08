import React, { ChangeEvent, useState } from 'react';

import { Container, Fieldset, Button, Input, Textarea } from './styles';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    body: '',
  });

  function handleInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
    <Container method="POST" data-netlify="true" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <Fieldset>
        <Input>
          <input
            type="email"
            name="email"
            id="email"
            required
            max="180"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="email">Email</label>
        </Input>
      </Fieldset>
      <Fieldset>
        <Input>
          <input
            name="subject"
            id="subject"
            max="120"
            required
            value={formData.subject}
            onChange={handleInputChange}
          />
          <label htmlFor="subject">Subject</label>
        </Input>
      </Fieldset>

      <Fieldset>
        <Textarea>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            required
            maxLength={520}
            placeholder="Type your message here."
            value={formData.body}
            onChange={handleInputChange}
          />
        </Textarea>
      </Fieldset>
      <Button type="submit">Submit</Button>
    </Container>
  );
};

export default ContactForm;
