


function fn() {
    let inp = document.getElementById('inp').value

    let ul = document.getElementById('ul')

    if (inp !== '') {
        let li = document.createElement('li')
        li.textContent = inp;
        ul.appendChild(li)

        document.getElementById('inp').value=' '                  



        let del = document.createElement('button')
        del.textContent = 'delete'
        li.appendChild(del)

        del.className = 'delete'

        del.addEventListener('click', function () {

            del.parentNode.remove()

            // del.className = 'delete'

        })

    }
    else {
        alert('plz add something ')
    }
}
