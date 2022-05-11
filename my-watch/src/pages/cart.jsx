import React from 'react'
import NavigationBar from '../component/navigationBar'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {
    Table,
    Image,
    Button,
    FormControl
} from 'react-bootstrap'
import { delCart, saveCart } from '../redux/actions'

class CartPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            indexEdit: null,
            qty: null
        }
    }

    showTableHead = () => {
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    showTableBody = () => {
        const { qty } = this.state
        return (
            <tbody>
                {this.props.cart.map((item, index) => {
                    if (index === this.state.indexEdit) {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td><Image src={item.image} style={{ width: '70px' }} rounded /></td>
                                <td>{item.name}</td>
                                <td>IDR {item.price.toLocaleString()},00</td>
                                <td>
                                    <div style={styles.inputEdit}>
                                        <Button variant="danger" onClick={this.onMinus} disabled={qty === 1 ? true : false}>
                                            <i className="fas fa-minus"></i>
                                        </Button>
                                        <FormControl
                                            style={{ width: '40%' }}
                                            value={this.state.qty}
                                            onChange={(e) => this.onChangeQty(e, item.stock)}
                                        />
                                        <Button variant="success" onClick={this.onPlus} disabled={qty === item.stock ? true : false}>
                                            <i className="fas fa-plus"></i>
                                        </Button>
                                    </div>
                                </td>
                                <td>IDR {(item.price * item.qty).toLocaleString()},00</td>
                                <td>
                                    <Button variant="success" className="mr-2" onClick={() => this.onSave(index)}>Save</Button>
                                    <Button variant="danger" onClick={() => this.setState({ indexEdit: null })}>Cancel</Button>
                                </td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><Image src={item.image} style={{ width: '70px' }} rounded /></td>
                            <td>{item.name}</td>
                            <td>IDR {item.price.toLocaleString()},00</td>
                            <td>{item.qty}</td>
                            <td>IDR {(item.price * item.qty).toLocaleString()},00</td>
                            <td>
                                <Button variant="warning" onClick={() => this.onEdit(index)} className="mr-2">Edit</Button>
                                <Button variant="danger" onClick={() => this.onDelete(index)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    onDelete = (index) => {
        this.props.delCart(this.props.id, index)
    }

    onEdit = (index) => {
        this.setState({ indexEdit: index, qty: this.props.cart[index].qty })
    }

    onMinus = () => {
        this.setState({ qty: this.state.qty - 1 })
    }

    onPlus = () => {
        this.setState({ qty: this.state.qty + 1 })
    }

    onChangeQty = (e, stockProd) => {
        let value = +e.target.value

        if (value <= 1) {
            this.setState({ qty: 1 })
        } else if (value > stockProd) {
            this.setState({ qty: stockProd })
        } else {
            this.setState({ qty: value })
        }
    }

    onSave = (index) => {
        this.props.saveCart(this.props.id, index, this.state.qty)
        this.setState({ indexEdit: null })
    }

    render() {
        if (!this.props.username) {
            return <Navigate to='/login' />
        }

        console.log(this.props.cart)

        return (
            <div style={{ padding: '1%' }}>
                <NavigationBar />
                <h1 style={{ marginTop: '10vh' }}>Cart Page</h1>
                <Table style={styles.table} striped bordered hover variant="dark">
                    {this.showTableHead()}
                    {this.showTableBody()}
                </Table>
            </div>
        )
    }
}

const styles = {
    table: {
        textAlign: 'center'
    },
    inputEdit: {
        display: 'flex',
        width: '60%',
        justifyContent: 'space-around',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}

const mapStateToProps = (state) => {
    return {
        username: state.userReducer.username,
        cart: state.userReducer.cart,
        id: state.userReducer.id
    }
}

export default connect(mapStateToProps, { delCart, saveCart })(CartPage)