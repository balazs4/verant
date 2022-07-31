import fs from 'fs';
export default { world };

function world(r) {
  r.log(r.variables.request_body_file);
  if (r.method.toLowerCase() === 'post' && r.variables.request_body_file) {
    fs.promises
      .readFile(r.variables.request_body_file)
      // .then((content) => {
      //   return fs.promises.writeFile('/tmp/random', content);
      // })
      .then(() => {
        return r.return(200, 'ok');
      });
    return;
  }

  r.headersOut['content-type'] = 'application/json';
  r.return(200, JSON.stringify({ r }));
}
