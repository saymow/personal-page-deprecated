import React, { ChangeEvent, FormEvent, useState } from 'react';

import { Container, Fieldset, Button, Input, Textarea } from './styles';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
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

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  }

  return (
    <Container onSubmit={handleSubmit}>
      <Fieldset>
        <Input>
          <input
            type="text"
            name="name"
            id="name"
            placeholder=" "
            value={formData.name}
            onChange={handleInputChange}
          />
          <label htmlFor="name">Name</label>
        </Input>
      </Fieldset>
      <Fieldset>
        <Input>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder=" "
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
            placeholder="Type your message here."
            value={formData.body}
            onChange={handleInputChange}
          />
        </Textarea>
      </Fieldset>
      <Button>Submit</Button>
    </Container>
  );
};

export default ContactForm;
