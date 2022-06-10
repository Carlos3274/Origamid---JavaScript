// seleciona as imgagens 
const tabMenu = document.querySelectorAll('.js-tabmenu li')

// tabContent = seções
const tabContent = document.querySelectorAll('.js-tabcontent section')  


if(tabMenu.length && tabContent.length){//verifica se existe tabmenu e tabcontent
  
  // começar com uma seção ativa no site
  tabContent[0].classList.add('ativo')

// adiciona 'ativo' na seção index
function activeTab(index){ 
  tabContent.forEach((section) => {
    section.classList.remove('ativo')
  })
  tabContent[index].classList.add('ativo') 
}


// para cada 'li' do menu, adiciona o evento de escuta,
// caso haja o click, chama o activeTab(index)
tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click',function(){
    // function callback
    activeTab(index)
  })
})
} 

