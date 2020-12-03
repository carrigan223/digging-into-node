// My first Node.js program

//process.stdout.write("Hello world");

 console.log("Hello world");
//console.log is essentially a standard output 
//which is wrapped in dev convenience

console.error("oops");

// the > symbol is a redirect if used with the node command to dev/null
//we can tell if its std.out or std.err, we have a different stream for
// handling errors which have dev benefits, the third standard stream
// is standard in much more touchy we will use it later with a package