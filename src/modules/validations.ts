import { checkSchema } from 'express-validator';

const stringNotEmpty = {
  trim: true,
  isString: true,
  notEmpty: true,
  exists: true,
};

export const validateName = checkSchema({
  name: {
    errorMessage: 'Invalid name',
    ...stringNotEmpty,
  },
});

export const validatePutUpdate = checkSchema({
  title: {
    errorMessage: 'Invalid title',
    optional: true,
    ...stringNotEmpty,
  },
  body: {
    errorMessage: 'Invalid body',
    optional: true,
    ...stringNotEmpty,
  },
  status: {
    errorMessage: 'Invalid status',
    optional: true,
    isIn: { options: [['IN_PROGRESS', 'DEPRECATED', 'SHIPPED']] },
  },
  version: {
    errorMessage: 'Invalid version',
    optional: true,
    ...stringNotEmpty,
  },
});

export const validatePostUpdate = checkSchema({
  title: {
    errorMessage: 'Invalid title',
    ...stringNotEmpty,
  },
  body: {
    errorMessage: 'Invalid body',
    ...stringNotEmpty,
  },
});

export const validatePutUpdatePoint = checkSchema({
  name: {
    errorMessage: 'Invalid name',
    optional: true,
    ...stringNotEmpty,
  },
  description: {
    errorMessage: 'Invalid description',
    optional: true,
    ...stringNotEmpty,
  },
});

export const validatePostUpdatePoint = checkSchema({
  name: {
    errorMessage: 'Invalid name',
    ...stringNotEmpty,
  },
  description: {
    errorMessage: 'Invalid description',
    ...stringNotEmpty,
  },
  updateId: {
    errorMessage: 'Invalid update id',
    ...stringNotEmpty,
  },
});
