export const getContainerWidth = element => {
    const w = window
    const d = document
    const e = d.documentElement
    // const g = d.getElementsByTagName('body')[0]
    const g = d.querySelector(element)

    return g.clientWidth
}

export const getContainerLeft = element => {
    const w = window
    const d = document
    const g = d.querySelector(element)
    
    return g.offsetLeft
}