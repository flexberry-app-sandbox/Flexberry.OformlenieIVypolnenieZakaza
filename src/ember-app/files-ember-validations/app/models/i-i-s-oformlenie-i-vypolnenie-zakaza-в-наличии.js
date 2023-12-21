import {
  defineNamespace,
  defineProjections,
  Model as ВНаличииMixin
} from '../mixins/regenerated/models/i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ВНаличииMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
