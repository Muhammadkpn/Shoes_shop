import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Card,
    CardContent
} from '@material-ui/core'
import NavbarMaterial from '../components/navbar'
import Footer from '../components/footer'

class HistoryUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history : []
        }
    }

    componentDidMount () {
        Axios.get(`http://localhost:2000/transaction_history?userID=${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res.data)
            this.setState({history : res.data})
        })
        .catch(err => console.log(err))
    }

    renderTableHead = () => {
        return (
            <TableHead>
                <TableRow>
                    <TableCell>No</TableCell>
                    <TableCell>User ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Products</TableCell>
                </TableRow>
            </TableHead>
        )
    }

    renderTableBody = () => {
        const {history} = this.state

        return (history.map((item, index) => {
            return (
                <TableRow key={item.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item.userID}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>Rp. {item.totalPrice.toLocaleString()},00</TableCell>
                    <TableCell>
                        {
                            item.products.map((value, index) => {
                                return (
                                    <Card style={styles.card} elevation={4}>
                                        <CardContent>
                                            <h4>{value.name}</h4>
                                            <h5>Brand : {value.brand}</h5>
                                            <h5>Color : {value.color}</h5>
                                            <h5>Price : Rp. {value.price.toLocaleString()},00</h5>
                                            <h5>Size : {value.size}</h5>
                                            <h5>Quantity : {value.qty}</h5>
                                        </CardContent>
                                    </Card>
                                )
                            })
                        }
                    </TableCell>
                </TableRow>
            )
        }))
    }
    
    render () {
        return (
            <div style={styles.root}>
                <NavbarMaterial/>
                <div style={styles.container}>
                    <h1 style={styles.title}>{this.props.username}'s Transaction History</h1>
                    <Table style={styles.table}>
                        {this.renderTableHead()}
                        <TableBody>{this.renderTableBody()}</TableBody>
                    </Table>
                </div>
                <Footer/>
            </div>
        )
    }
}

const styles = {
    root : {
        minHeight : '100vh',
        backgroundColor : '#f2f2f2',
        paddingTop : '90px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    container:{
        margin: '0 2% 2% 2%'
    },
    title : {
        margin : '2% 0px',
        textAlign: 'center'
    },
    table : {
        backgroundColor : 'white'
    },
    card:{
        marginBottom: '1%'
    }
}

const mapStateToProps = (state) => {
    return {
        role : state.user.role,
        username : state.user.username
    }
}

export default connect(mapStateToProps)(HistoryUser)
