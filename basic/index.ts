import path from 'path';
import { blogTemplate } from './template';

export const useStyle = () => {
	return [
		path.resolve(__dirname, "./style.scss"),
		blogTemplate
	]
}