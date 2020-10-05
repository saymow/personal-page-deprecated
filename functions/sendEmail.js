const SendEmailService = require('./utils/emailService');
const validateInputs = require('./utils/validateInputs');
const { formattedResponse } = require('./utils/formattedResponse');
const { InputError } = require('./utils/Errors');

exports.handler = async (event, context, callback) => {
  try {
    const { email, subject, body } = JSON.parse(event.body);
    const emailService = new SendEmailService();

    await validateInputs({ email, subject, body });

    await emailService.execute({
      email,
      subject,
      body,
    });

    return formattedResponse({ message: 'Email sent successfully' });
  } catch (err) {
    if (err instanceof InputError) {
      return formattedResponse(
        { message: 'Invalid input fields', fields: err.errorMap },
        400,
      );
    }

    console.error(err);

    return formattedResponse({ message: 'Something went wrong' }, 500);
  }
};
