import {b} from './b';
// ensure the Program is in the correct state after fixing 'b.ts' caused syntax errors
<string>b; // finding is here after fixing 'b.ts'
<number>b; // findnig is here before fixing 'b.ts'
<any>b; // should never have a finding
