import {
  defineNamespace,
  defineProjections,
  Model as МестоВыдачиMixin
} from '../mixins/regenerated/models/i-i-s-oformlenie-i-vypolnenie-zakaza-место-выдачи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(МестоВыдачиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
