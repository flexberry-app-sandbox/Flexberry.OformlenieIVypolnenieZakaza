import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодТовара: DS.attr('number'),
  название: DS.attr('string'),
  ценаЗаЕд: DS.attr('decimal'),
  вНаличии: DS.belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии', { inverse: null, async: false })
});

export let ValidationRules = {
  кодТовара: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-товары.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-товары.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ценаЗаЕд: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-товары.validations.ценаЗаЕд.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  вНаличии: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-товары.validations.вНаличии.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварыE', 'i-i-s-oformlenie-i-vypolnenie-zakaza-товары', {
    ценаЗаЕд: attr('Цена за ед', { index: 0 }),
    кодТовара: attr('Код товара', { index: 1 }),
    название: attr('Название', { index: 2 }),
    вНаличии: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии', 'В наличии', {
      количество: attr('Количество', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'количество' })
  });

  modelClass.defineProjection('ТоварыL', 'i-i-s-oformlenie-i-vypolnenie-zakaza-товары', {
    ценаЗаЕд: attr('Цена за ед', { index: 0 }),
    кодТовара: attr('Код товара', { index: 1 }),
    название: attr('Название', { index: 2 }),
    вНаличии: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии', 'Количество', {
      количество: attr('Количество', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
