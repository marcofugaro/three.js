// used in report-size.yml

const filesize = Number( process.argv[ 2 ] );
const filesizeBase = Number( process.argv[ 3 ] );

const diff = ( filesize - filesizeBase ) * 100 / filesizeBase;
const formatted = `${diff >= 0 ? '+' : ''}${diff.toFixed( 1 )}%`;

console.log( formatted );
