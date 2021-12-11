import React, { ChangeEvent, useRef, useState } from 'react';
import { useGlobalContext } from '../../../lib/wrapRootElement';
import {
  Button,
  CaptchaContainer,
  Container,
  Fieldset,
  Input,
  Textarea,
} from './styles';

const ContactForm: React.FC = () => {
  const { pushNotification } = useGlobalContext();
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

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    try {
      await postForm();
      pushNotification('success', 'Message sent with success!');
    } catch (error) {
      console.error(error);
      pushNotification(
        'error',
        'An error has occurred, please try again later.',
      );
    }
  }

  async function postForm() {
    return fetch('/', {
      method: 'POST',
      headers: {
        Content_Type: 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData).toString(),
    });
  }

  return (
    <Container
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      name="contact"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p
        style={{
          display: 'none',
        }}
      >
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
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
            value={formData.body}
            onChange={handleInputChange}
          />
        </Textarea>
      </Fieldset>
      <CaptchaContainer data-netlify-recaptcha="true"></CaptchaContainer>
      <Button type="submit">Submit</Button>
    </Container>
  );
};

export default ContactForm;
