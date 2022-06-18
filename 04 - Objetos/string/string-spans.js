// substitua todos os spans's por a's

let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
</ul>`

html = html.split('span').join('a')
console.log(html)
