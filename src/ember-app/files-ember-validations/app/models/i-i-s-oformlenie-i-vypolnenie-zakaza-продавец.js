import {
  defineNamespace,
  defineProjections,
  Model as ПродавецMixin
} from '../mixins/regenerated/models/i-i-s-oformlenie-i-vypolnenie-zakaza-продавец';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПродавецMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
