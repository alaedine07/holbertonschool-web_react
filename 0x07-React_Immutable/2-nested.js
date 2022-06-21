import { fromJS, getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
  const map = fromJS(object);
  return getIn(map, array, undefined);
}
