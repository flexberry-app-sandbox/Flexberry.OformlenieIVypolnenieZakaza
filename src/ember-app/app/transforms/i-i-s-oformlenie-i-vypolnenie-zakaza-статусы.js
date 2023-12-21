import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусыEnum from '../enums/i-i-s-oformlenie-i-vypolnenie-zakaza-статусы';

export default FlexberryEnum.extend({
  enum: СтатусыEnum,
  sourceType: 'IIS.Oformlenie_i_vypolnenie_zakaza.Статусы'
});
