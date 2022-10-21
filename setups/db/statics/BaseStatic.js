


export class DbStatic {
  // Turns entries into an array
  get Data() {
    let out = []
    Object.keys(this).forEach(k => out.push(this[k]))
    return out

  }
}
