import React, { ChangeEvent, useState } from 'react';
import { useGlobalContext } from '../../../lib/wrapRootElement';
import Button from '../Button';
import { Container, Fieldset, Input, Textarea } from './styles';

const FORM_NAME = 'contact';

const ContactForm: React.FC = () => {
  const { pushNotification } = useGlobalContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
      setIsLoading(true);
      await postForm();
      clearForm();
      pushNotification('success', 'Message sent with success!');
    } catch (error) {
      console.error(error);
      pushNotification(
        'error',
        'An error has occurred, please try again later.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  async function postForm() {
    function encode(data: Record<string, unknown>) {
      return Object.keys(data)
        .map(
          (key) =>
            `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
        )
        .join('&');
    }

    return fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encode({
        'form-name': FORM_NAME,
        ...formData,
      }),
    });
  }

  function clearForm() {
    setFormData({
      email: '',
      subject: '',
      body: '',
    });
  }

  return (
    <Container
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
      name={FORM_NAME}
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
      {/* <CaptchaContainer data-netlify-recaptcha="true"></CaptchaContainer> */}
      <Button type="submit" isLoading={isLoading}>
        Submit
      </Button>
    </Container>
  );
};

export default ContactForm;
