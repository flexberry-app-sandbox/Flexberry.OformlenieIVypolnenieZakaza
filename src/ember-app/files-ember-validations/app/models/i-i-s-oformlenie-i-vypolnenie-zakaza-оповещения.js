import {
  defineNamespace,
  defineProjections,
  Model as ОповещенияMixin
} from '../mixins/regenerated/models/i-i-s-oformlenie-i-vypolnenie-zakaza-оповещения';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОповещенияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
