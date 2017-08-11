import DS from 'ember-data';

export default DS.Model.extend({
  answer: DS.attr(),
  writer: DS.attr(),
  shake: DS.belongsTo('shake', { async: true })
});
