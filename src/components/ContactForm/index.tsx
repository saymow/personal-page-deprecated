import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useGlobalContext } from '../../../lib/wrapRootElement';

import { Container, Fieldset, Button, Input, Textarea } from './styles';

const ContactForm: React.FC = () => {
  const { pushNotification } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/sendEmail', {
        body: JSON.stringify(formData),
        method: 'POST',
      });

      const responseBody = await response.json();

      if (response.status !== 200) {
        throw responseBody;
      }

      pushNotification('success', responseBody.message);
    } catch (err) {
      if (err.message.includes('input fields')) {
        Object.values(err.fields).forEach((value) => {
          pushNotification('warning', value);
        });
      } else {
        pushNotification('error', err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Fieldset>
        <Input>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
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
            placeholder=" "
            max="120"
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
            maxLength={520}
            placeholder="Type your message here."
            value={formData.body}
            onChange={handleInputChange}
          />
        </Textarea>
      </Fieldset>
      <Button disabled={isLoading}>Submit</Button>
    </Container>
  );
};

export default ContactForm;
