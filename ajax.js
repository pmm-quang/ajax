function loadData(btn) {
    btn.disabled = true;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =  function() {
        if(this.readyState == 4  && this.status == 200) {

            console.log(this.responseText);
            var tbody =  document.querySelector('#tbn1 tbody');

            var info = JSON.parse(this.responseText);
            for (i = 0; i < info.length; i++) {
                r = document.createElement('tr');
                c1 = document.createElement('td');
                c2 = document.createElement('td');
                c3 = document.createElement('td');
                
                c1.innerHTML = info[i].name;
                c2.innerHTML = info[i].age;
                var tmp = info[i].cars.length + '\r\n';
                c3.appendChild(document.createTextNode(tmp));
                c3.appendChild(document.createElement('br'));
                tmp = '';
                for(j = 0; j < info[i].cars.length; j++){
                    tmp += info[i].cars[j].name + " - ";
                    for(k = 0; k < info[i].cars[j].models.length; k++) {
                        tmp += info[i].cars[j].models[k] + ' ';
                    }
                    c3.appendChild(document.createTextNode(tmp));
                    c3.appendChild(document.createElement('br'));
                    tmp = '';

                }
                console.log(tmp);
               
                r.appendChild(c1);
                r.appendChild(c2);
                r.appendChild(c3);
               tbody.appendChild(r);
            }
            
        }
    }

    xhttp.open("GET", "/n4/data", true);
    xhttp.send(null);
}