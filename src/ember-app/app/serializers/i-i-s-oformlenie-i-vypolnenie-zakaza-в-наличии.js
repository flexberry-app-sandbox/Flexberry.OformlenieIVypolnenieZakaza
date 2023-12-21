import { Serializer as ВНаличииSerializer } from
  '../mixins/regenerated/serializers/i-i-s-oformlenie-i-vypolnenie-zakaza-в-наличии';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВНаличииSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
