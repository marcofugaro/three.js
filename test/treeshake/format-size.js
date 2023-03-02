import prettyBytes from 'pretty-bytes';

// used in report-size.yml

const n = Number( input );
const ret = prettyBytes( n, { minimumFractionDigits: 0, maximumFractionDigits: 1 } );
