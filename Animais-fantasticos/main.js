function iniTabNav() {
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
}

iniTabNav()

function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const activeClass = 'ativo'
  if(accordionList.length) {
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion(){
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }
    accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
    })
  }
  
}

initAccordion()


