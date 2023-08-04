import { TextFieldProps } from './text-field.props';
import { FieldHookConfig, useField, ErrorMessage } from 'formik';
const TextField = ({ ...props }: TextFieldProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);

	return (
		<div className='w-full inline-block'>
			<label
				className={`w-full inline-block ${
					meta.touched && meta.error && 'border-red-500 border-2'
				}`}
			>
				<input className='input invalid:border-red-500' {...props} {...field} />
			</label>
			<p className='text-red-500'>
				<ErrorMessage name={field.name} />
			</p>
		</div>
	);
};

export default TextField;
