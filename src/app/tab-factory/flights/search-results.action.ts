import { Form } from '@angular/forms';
import { createAction, props } from '@ngrx/store';

export const initialformData = createAction('[Form] initialformData', props<{ form: undefined }>());
export const formData = createAction('[Form] formData',   props<{ form: Form }>());

