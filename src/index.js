import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import './editor.scss';

import Edit from './edit';
import metadata from './block.json';

registerBlockType( metadata.name, {
  icon: {
		src: <svg viewBox="-4 0 72 72" xmlns="http://www.w3.org/2000/svg">
      <path d="m27 59a2 2 0 0 1 -2-2v-19.23l-18.54-20.39a5.61 5.61 0 0 1 4.15-9.38h42.78a5.61 5.61 0 0 1 4.15 9.38l-18.54 20.39v11.23a2 2 0 0 1 -.75 1.56l-10 8a2 2 0 0 1 -1.25.44zm-16.39-47a1.61 1.61 0 0 0 -1.19 2.69l19.06 21a2 2 0 0 1 .52 1.31v15.84l6-4.84v-11a2 2 0 0 1 .52-1.35l19.06-21a1.61 1.61 0 0 0 -1.19-2.65z"></path>
    </svg>
	},
	edit: Edit,
} );
