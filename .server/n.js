export default { world };

function world(r) {
  r.headersOut['content-type'] = 'application/json';
  r.return(
    200,
    JSON.stringify({ timestamp: Date.now(), message: 'Hello World from njs!' })
  );
}
