import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-oformlenie-i-vypolnenie-zakaza-продавец', 'Unit | Model | i-i-s-oformlenie-i-vypolnenie-zakaza-продавец', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии',
    'model:i-i-s-oformlenie-i-vypolnenie-zakaza-заказы',
    'model:i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент',
    'model:i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи',
    'model:i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения',
    'model:i-i-s-oformlenie-i-vypolnenie-zakaza-продавец',
    'model:i-i-s-oformlenie-i-vypolnenie-zakaza-состав-заказа',
    'model:i-i-s-oformlenie-i-vypolnenie-zakaza-товары',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
