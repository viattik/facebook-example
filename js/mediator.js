// Generated by CoffeeScript 1.3.1

define(['chaplin'], function(Chaplin) {
  'use strict';

  var mediator;
  console.log(Chaplin);
  mediator = Chaplin.CreateMediator({
    createUserProperty: true
  });
  if (Chaplin.Support.propertyDescriptors && Object.seal) {
    Object.seal(mediator);
  }
  return mediator;
});