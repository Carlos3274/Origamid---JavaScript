const funcaoAutomovel = {
  acelerar() {
    return 'acelerou'
  },
  buzinar() {
    return 'buzinou'
  }
}

const moto = {
  rodas: 2,
  caoacete: true
}

Object.assign(moto, funcaoAutomovel)

Object.defineProperties(moto, {
  get() {
    return this._rodas
  },
  set(valor) {
    this._rodas = valor * 4
  }
})