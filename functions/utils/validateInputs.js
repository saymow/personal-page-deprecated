const yup = require('yup');

const { InputError } = require('./Errors');

module.exports = validate = async (data) => {
  try {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required('Email is required.')
        .email('Invalid format.')
        .max(180, 'Email is too large.'),
      subject: yup
        .string()
        .required('Subject is required.')
        .min(3, 'Subject too short.')
        .max(120, 'Subject too large.'),
      body: yup
        .string()
        .required('Body is required.')
        .min(16, 'Body is too short.')
        .max(520, 'Body is too large'),
    });

    await schema.validate(data, {
      abortEarly: false,
    });
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      const errorMessage = {};

      err.inner.forEach((error) => {
        errorMessage[error.path] = error.message;
      });

      throw new InputError(errorMessage);
    }
  }
};
