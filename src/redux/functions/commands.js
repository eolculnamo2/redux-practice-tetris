//Long Peice

const longPieceFlipDown = shape => {
    let updatedShape = []

    shape.forEach((x,i)=>{
        //needs work
        updatedShape.push([x[x.length-1],x[1+i]])
    })

    return updatedShape
}

const longPieceFlipUp = shape => {
    let updatedShape = []

    return updatedShape
}

const longPieceMoveRight = shape => {
    let updatedShape = []

    shape.forEach((x,i)=>{
        updatedShape.push([x[0],x[i+1]])
    })

    return updatedShape
}

const longPieceMoveLeft = shape => {
    let updatedShape = []

    shape.forEach((x,i)=>{
        updatedShape.push([x[0],x[i-1]])
    })

    return updatedShape
}