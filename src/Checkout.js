import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CheckoutItem from './components/CheckoutItem'

const Checkout = () => {
    // Total is hard coded to start because the values are hard coded,
    // If I was given an array of products total would be calculated dynamically
    const [total, setTotal] = useState((52.52).toFixed(2))
    const changeTotal = (val) => {
        setTotal((parseFloat(total) + val).toFixed(2))
        console.log(total)
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-xs-8">
                    <div class="panel panel-info">
                        <div class="panel-heading">
                            <div class="panel-title">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <h5><span class="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                    </div>
                                    <div class="col-xs-6">
                                        <button type="button" class="btn btn-primary btn-sm btn-block">
                                            <span class="glyphicon glyphicon-share-alt"></span> Continue shopping
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <CheckoutItem changeTotal={changeTotal} amount={25.00} quantity={1} />
                            <CheckoutItem changeTotal={changeTotal} amount={27.52} quantity={1} />
                            <div class="row">
                                <div class="text-center">
                                    <div class="col-xs-9">
                                        <h6 class="text-right">Added items?</h6>
                                    </div>
                                    <div class="col-xs-3">
                                        <button type="button" class="btn btn-default btn-sm btn-block">
                                            Update cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel-footer">
                            <div class="row text-center">
                                <div class="col-xs-9">
                                    <h4 class="text-right">Total <strong>${total}</strong></h4>
                                </div>
                                <div class="col-xs-3">
                                    <Link to={{
                                        pathname: "/payment",
                                        state: total
                                    }}>
                                        <button type="button" class="btn btn-success btn-block">
                                            Checkout
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
