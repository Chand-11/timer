const args = process.argv;

if(args.length > 1) 
{

  for(let i = 2; i < args.length; i++) {
    //console.log(process.argv[i]);
    if( !isNaN(args[i]) && (args[i]) > 0 )
    {
     
        setTimeout(() => {process.stdout.write('\x07'); }, args[i] * 1000);
    }
  }
}