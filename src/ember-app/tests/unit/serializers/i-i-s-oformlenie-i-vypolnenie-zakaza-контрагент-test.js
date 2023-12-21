import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент', 'Unit | Serializer | i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-oformlenie-i-vypolnenie-zakaza-контрагент',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-oformlenie-i-vypolnenie-zakaza-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
