import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  кодЗаказа: DS.attr('number'),
  статус: DS.attr('i-i-s-oformlenie-i-vypolnenie-zakaza-статусы'),
  контрагент: DS.belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент', { inverse: null, async: false }),
  продавец: DS.belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-продавец', { inverse: null, async: false }),
  составЗаказа: DS.hasMany('i-i-s-oformlenie-i-vypolnenie-zakaza-состав-заказа', { inverse: 'заказы', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-заказы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаказа: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-заказы.validations.кодЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-заказы.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-заказы.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  продавец: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-заказы.validations.продавец.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  составЗаказа: {
    descriptionKey: 'models.i-i-s-oformlenie-i-vypolnenie-zakaza-заказы.validations.составЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказыE', 'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    контрагент: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент', 'Контрагент', {
      фамилия: attr('Фамилия', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фамилия' }),
    продавец: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-продавец', 'Продавец', {
      фамилия: attr('Фамилия', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'фамилия' }),
    составЗаказа: hasMany('i-i-s-oformlenie-i-vypolnenie-zakaza-состав-заказа', 'Состав заказа', {
      номер: attr('Номер', { index: 0 }),
      количество: attr('Количество', { index: 1 }),
      товары: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-товары', 'Товары', {
        название: attr('Название', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'название' })
    })
  });

  modelClass.defineProjection('ЗаказыL', 'i-i-s-oformlenie-i-vypolnenie-zakaza-заказы', {
    кодЗаказа: attr('Код заказа', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    контрагент: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 3 })
    }, { index: -1, hidden: true }),
    продавец: belongsTo('i-i-s-oformlenie-i-vypolnenie-zakaza-продавец', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 4 })
    }, { index: -1, hidden: true })
  });
};
