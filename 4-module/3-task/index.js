function highlight(table) {
        let thead = table.querySelector('thead');
        let tbody = table.querySelector('tbody');
        let tbodyTrs = tbody.querySelectorAll('tr');
        let theadTrs = thead.querySelectorAll('tr');

        
        tbodyTrs.forEach(function(item) {
            let tds = item.querySelectorAll('td');
            let noDataset = true;
            
            tds.forEach(function(td) {
                if (td.dataset.available === 'true') {
                    td.parentNode.classList.add('available');
                    noDataset = false;
                } else if (td.dataset.available === 'false') {
                    td.parentNode.classList.add('unavailable');
                    noDataset = false;
                }
            });
            
            if (noDataset) {
                item.setAttribute('hidden', '');
            }  
        });

        
        let genderTd;
        let ageTd;
        theadTrs.forEach(function(item) {
            let tds = item.querySelectorAll('td');
            tds.forEach(function(td,i) {                
                if (td.innerHTML.includes('Gender')) {
                    genderTd = i;
                }
                if (td.innerHTML.includes('Age')) {
                    ageTd = i;
                }                
            });
        });
        
        
        tbodyTrs.forEach(function(item) {
            let tds = item.querySelectorAll('td');
            
            
            tds.forEach(function(td,i) {
                if (tds[genderTd].innerHTML.includes('m')) {
                    td.parentNode.classList.add('male');
                } else if (tds[genderTd].innerHTML.includes('f')) {
                    td.parentNode.classList.add('female');
                }

                if (Number(tds[ageTd].innerHTML) < 18) {
                    td.parentNode.style.textDecoration = 'line-through';
                }
                
            });            
            
        });
    }