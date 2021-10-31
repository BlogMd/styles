import path from 'path';
import { blogTemplate } from './template';

export const useStyle = () => {
	return [
		path.resolve("./style.scss"),
		blogTemplate
	]
}