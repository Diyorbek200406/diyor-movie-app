import {
	DetailedHTMLProps,
	HtmlHTMLAttributes,
	InputHTMLAttributes,
} from 'react';

export interface TextFieldProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {}
