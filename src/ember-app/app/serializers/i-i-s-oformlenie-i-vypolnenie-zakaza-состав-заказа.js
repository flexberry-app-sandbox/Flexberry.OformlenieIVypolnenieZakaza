import { Serializer as СоставЗаказаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-oformlenie-i-vypolnenie-zakaza-состав-заказа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставЗаказаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
