class CssPropControl {
  constructor(element) {
    this.element = element
  }
  get(varName) {
    return getComputedStyle(this.element).getPropertyValue(varName)
  }
  set(varName, val) {
    return this.element.style.setProperty(varName, val)
  }
}

const bodyCssProps = new CssPropControl(document.body)
  
  let toggle = document.querySelector('#dark-mode-toggle')
    toggle.addEventListener('click', () => { 
    
      let mode = toggle.checked ? 'dark' : 'light'
      
        bodyCssProps.set('--greenOlive', bodyCssProps.get(`--${mode}-greenOlive`))
        bodyCssProps.set('--white', bodyCssProps.get(`--${mode}-white`))
        bodyCssProps.set('--creamWhite', bodyCssProps.get(`--${mode}-creamWhite`))
        bodyCssProps.set("--mainBackground", bodyCssProps.get(`--${mode}-mainBackground`))
        bodyCssProps.set("--colorButton", bodyCssProps.get(`${mode}-colorButton`))
      }
  )
