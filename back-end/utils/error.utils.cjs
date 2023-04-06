module.exports.signUpErrors = (err) => {
  let errors = { pseudo: '', email: '', password: '' };

  if (err.message.includes('pseudo'))
    errors.pseudo = 'Pseudo incorrect ou déjà pris';

  if (err.message.includes('email')) errors.email = 'Email incorrect';

  if (err.message.includes('password'))
    errors.password = 'Le mot de passe doit faire 6 caractères minimum';

  if (err.code === 'P2002' && err.meta.target.includes('pseudo'))
    errors.pseudo = 'Ce pseudo est déjà pris';

  if (err.code === 'P2002' && err.meta.target.includes('email'))
    errors.email = 'Cet email est déjà enregistré';

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: '', password: '' };

  if (err.message.includes('email')) errors.email = 'Email inconnu';

  if (err.message.includes('password'))
    errors.password = "L'email ou le password ne correspondent pas";

  return errors;
};
