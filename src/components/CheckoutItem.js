import React from 'react'
import { useState, useEffect } from 'react'

const CheckoutItem = (props) => {
    const [ quantity, setQuantity ] = useState(props.quantity)
    const [ amount, setAmount ] = useState((props.amount * props.quantity).toFixed(2))
    const [ priorAmount, setPriorAmount ] = useState() 
    const [ display, setDisplay ] = useState("")
    useEffect(() => {
        if(priorAmount > amount) {
            props.changeTotal(parseFloat(-(priorAmount - amount)))
        } else if(priorAmount < amount) {
            props.changeTotal(parseFloat(amount - priorAmount))
        }
        setPriorAmount(amount)
    }, [amount])
    const handleChange = (e) => {
        if(e.target.value < 1 && e.target.value.length > 0) {
            setQuantity(1)
        } else {
            setQuantity(e.target.value)
            setAmount((props.amount * e.target.value).toFixed(2))
        }
    }
    const handleDelete = () => {
        setQuantity(0)
        setAmount(0)
        setDisplay("d-none")
    }
    return (
        <div class={`row ${display}`}>
            <div class="col-xs-2">
                <img class="img-responsive" src="http://placehold.it/100x70" alt="product" />
            </div>
            <div class="col-xs-4">
                <h4 class="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
            </div>
            <div class="col-xs-6">
                <div class="col-xs-6 text-right">
                    <h6><strong>{amount} <span class="text-muted">x</span></strong></h6>
                </div>
                <div class="col-xs-4">
                    <input type="number" class="form-control input-sm" value={quantity} onChange={(e) => handleChange(e)} />
                </div>
                <div class="col-xs-2">
                    <button onClick={() => handleDelete()} type="button" class="btn btn-link btn-xs">
                        <span class="glyphicon glyphicon-trash"> </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem
