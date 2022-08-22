window.onload=function(){
    let list = document.getElementById("shuffleAndSort")
    function shuffle(items)
    {
        let cached = items.slice(0), temp, i = cached.length, rand;
        while(--i)
        {
            rand = Math.floor(i * Math.random());
            temp = cached[rand];
            cached[rand] = cached[i];
            cached[i] = temp;
        }
        return cached;
    }

    function shuffleNodes()
    {
        let nodes = list.children, i = 0;
        nodes = Array.prototype.slice.call(nodes);
        nodes = shuffle(nodes);
        while(i < nodes.length)
        {
            list.appendChild(nodes[i]);
            ++i;
        }
    } 
    document.getElementById("shuffle").onclick = shuffleNodes;
    } 
    //sort
    function sortList(){
    let list = document.getElementById('shuffleAndSort');
    
    let items = list.childNodes;
    let itemsArr = [];
    for (let i in items) {
        if (items[i].nodeType == 1) { 
            itemsArr.push(items[i]);
        }
    }
    
    itemsArr.sort(function(a, b) {
      return a.innerHTML == b.innerHTML
              ? 0
              : (a.innerHTML > b.innerHTML ? 1 : -1);
    });
    
    for (i = 0; i < itemsArr.length; ++i) {
      list.appendChild(itemsArr[i]);
    }
    }