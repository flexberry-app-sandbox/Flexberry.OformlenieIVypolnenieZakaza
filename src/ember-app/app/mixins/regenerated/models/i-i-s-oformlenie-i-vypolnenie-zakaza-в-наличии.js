import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  количество: DS.attr('number'),
  местоВыдачи: DS.belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  местоВыдачи: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии.validations.местоВыдачи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ВНаличииE', 'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии', {
    количество: attr('Количество', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    местоВыдачи: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи', 'Место выдачи', {
      адрес: attr('Адрес', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'адрес' })
  });

  modelClass.defineProjection('ВНаличииL', 'i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии', {
    количество: attr('Количество', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    местоВыдачи: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи', 'Адрес', {
      адрес: attr('Адрес', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
