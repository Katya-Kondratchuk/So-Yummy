import * as yup from 'yup';

export const recipeShema = yup.object().shape({
  fullImage: yup
    .mixed()
    .test('required', 'Photo is required', value => {
      return !value || (value && value.name.length > 0);
    })
    .test('fileType', 'Only picture files are allowed', value => {
      return (
        !value ||
        (value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type))
      );
    })
    .test('fileSize', 'Picture size is too large', value => {
      return !value || (value && value.size <= 16777216);
    })
    .required('Image recipe is required'),
  title: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(80, 'Maximum 80 characters')
    .required('Title recipe is required'),
  description: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(200, 'Maximum 200 characters')
    .required('Description recipe is required'),
  category: yup.string().required('Category recipe is required'),
  time: yup.string().required('Time recipe is required'),
  ingredients: yup
    .array()
    .min(1, 'You need and minimun one ingregient')
    .max(20, 'No more than 20 ingredients')
    .of(
      yup.object().shape({
        id: yup.string(),
        title: yup
          .object()
          .shape({
            _id: yup.string(),
            ttl: yup
              .string()
              .min(2, 'Minimum 2 characters')
              .max(200, 'Maximum 250 characters')
              .required('You need choose name from the drop down list'),
          })
          .required('You need choose name from the drop down list'),
        amount: yup
          .string('Amount must be a number')
          .min(1, 'You need to add weight')
          .max(3, 'Amount must be less than 999')
          .required('Amount ingredient is required'),
        unit: yup.string().required(),
      }),
    )
    .required('At least one ingredient is required'),
  instructions: yup
    .string()
    .min(2, 'Minimum 2 characters')
    .max(2000, 'Maximum 2000 characters')
    .required('Recipe instruction is required'),
});
