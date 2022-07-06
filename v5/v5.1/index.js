import React from 'react';
import {render} from 'react-dom';

import Counter from './Counter';

render(<Counter initCount={10}/>, document.getElementById('root'));


// v5.1 (第二重點)
// defaultProps 指定預設prose
// render(<Counter/>, document.getElementById('root'));