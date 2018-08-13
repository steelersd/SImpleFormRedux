import * as types from './actionTypes'
import api from '../api/api'

export const updateGUID = guid => ({
    type: types.UPDATE_RANDOM_GUID,
    guid 
})

export const updateFormfield = (name, value) => ({
    type: types.UPDATE_FORM_FIELD,
    name,
    value
})

export const updateGUID2 = guid => ({
  type: types.UPDATE_RANDOM_GUID,
  guid 
})