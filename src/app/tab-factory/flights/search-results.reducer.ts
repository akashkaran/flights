import { createReducer, on } from '@ngrx/store';
import { formData, initialformData} from './search-results.action';

export const initialState = {};
 
const _formReducer = createReducer(
  initialState,
  on(formData, (state,{...form}) => ({...state, ...form}))
);
 
export function formReducer(state, action) {
  return _formReducer(state, action);
}