export default function(delay, cb) {
  
  let timer,
      lastExec = 0;

  return function(...args) {
    let elapsed = Date.now() - lastExec;

    function exec() {
      timer = undefined;
      lastExec = Date.now();
      cb(...args);
    }

    if (timer) clearTimeout(timer);

    if (elapsed > delay) {
      exec();
    } else {
      timer = setTimeout(exec, delay - elapsed);
    }
  };
}
