
export default (User)=> {
  let excludedProperties = [
    'credentials',
    'challenges',
    'realm',
    'lastUpdated',
  ];
  excludedProperties.forEach((property)=> {
    delete User.definition.rawProperties[property];
    delete User.definition.properties[property];
    delete User.prototype[property];
  });

  User.afterRemote('create', (context, model, next)=> {
    let tokenGenerator =
    context.generateVerificationToken || User.generateVerificationToken;
    tokenGenerator(model, (err, token)=> {
      model.verificationToken = token;
      model.emailVerified = false;
      model.save()
      .then((response)=>{
        next(null, response);
      })
      .catch((error)=>{
        next(error);
      });
    });
  });
};
