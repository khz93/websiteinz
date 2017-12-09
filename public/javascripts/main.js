function indicators(next) {
  let len   = $('.concept').length;
  let table = [];
  for (let i = 0; i < len; i++) {
    let ind   = $('.concept')[i].innerText;
    let value = $('[name=indValue]').eq(i).val();
    let obj   = {};
    obj[ind]  = value;
    table.push(obj);
  };
  table = JSON.stringify(table)
  next(table);
}

function getData(file, next) {
  Papa.parse(file, {
    download: true,
    complete: function (results) {
      next(results)
    }
  });
}