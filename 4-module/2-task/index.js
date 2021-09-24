function makeDiagonalRed(table) {      

    let trs = table.querySelectorAll('tr');
    trs.forEach(function(item, index, array) {
        let tds = item.querySelectorAll('td');
        tds.forEach(function(td, i) {
            if (i == index) {
                td.style.backgroundColor = "red";
            }
        });
    });      

}