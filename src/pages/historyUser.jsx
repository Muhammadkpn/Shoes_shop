import React from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    IconButton,
    Collapse,
    Box,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating';
import NavbarMaterial from '../components/navbar'
import Footer from '../components/footer'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import {History} from '../actions'

class HistoryUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            history : [], 
            open: false, 
            selId: null,
            read: false,
            rate: 0,
            alert: false,
            idProduct: null,
            date : null,
            selHist: null,
            selProd: null
        }
    }

    componentDidMount () {
        Axios.get(`http://localhost:2000/transaction_history?userID=${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res.data)
            // this.setState({history : res.data})
            this.props.History(res.data)
        })
        .catch(err => console.log(err))
    }

    handleOpen = (id) =>{
        const {open} = this.state
        this.setState({open: !open, selId: id})
    }
    
    renderTableHead = () => {
        return (
            <TableRow>
            <TableCell>#</TableCell>
            <TableCell>No</TableCell>
            <TableCell>User ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Total Quantity</TableCell>
            <TableCell>Total Price</TableCell>
            </TableRow>
        )
    }

    buttonRating = (index, id) => {
        let idProduct = this.props.history[index].products[id].id
        let dateProduct = this.props.history[index].date
        console.log(this.props.product)
        console.log(index, id);
        console.log(idProduct)

        this.props.history.map((item, idx) => {
            if(item.id === index+1){
                console.log(item.products[id])
            }
        })

        this.setState({ alert: true, idProduct: idProduct, date : dateProduct, selHist: index, selProd: id});
    }

    handleRating = (newvalue) => {
        console.log(newvalue)
        this.setState({ rate: newvalue })
    }

    handleConfirm = () => {
        const { rate, selHist, selProd } = this.state
        // console.log(tempHistory)
        
        let tempHistory = this.props.history[selHist].products
        tempHistory[selProd].rating = rate
        console.log('tempHistory', tempHistory)
        Axios.patch(`http://localhost:2000/transaction_history?id=${selHist+1}`, {products: tempHistory})
        .then(res => { 
            console.log(res.data)
            Axios.get(`http://localhost:2000/transaction_history?id=${selHist+1}`)
            .then(res => { 
                // this.props.History(res.data)
                // this.setState({ alert: false})
                this.setState({ alert: false})
                this.props.History(res.data)
            console.log(res.data)
            })
        })
        .catch(err => console.log(err))

        // this.props.history.map((item, idx) => {
        //     if(item.id === selHist+1){
        //         // tempHistory.splice(selProd, 1, )
        //         console.log(item.products[selProd])
        //     }
        // })



        // Axios.get(`http://localhost:2000/products/${this.state.idProduct}`)
        // .then(res => {
        //     console.log(res.data.rating)
        //     let total = res.data.rating
        //     total.push(rate)
        //         console.log(total)
        //         Axios.patch(`http://localhost:2000/products/${this.state.idProduct}`, { rating: total })
        //         .then(res => console.log(res.data))
        //             .catch(err => console.log(err))
                    


        //         this.setState({ alert: false})
        //     })
        //     .catch(err => console.log(err))
    }
    
    renderTableBody = () =>{
        const {open, selId,rate, idProduct, date, selHist, selProd} = this.state
        return this.props.history.map((item, index)=>{
            return (
            <React.Fragment>
                <TableRow>
                    <TableCell>
                        <IconButton aria-label="expand row" size="small" onClick={() => this.setState({open: !open, selId: index}) }>
                        {selId === index ? open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{item.userID}</TableCell>
                    <TableCell>{item.username}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.totalQty}</TableCell>
                    <TableCell>Rp. {item.totalPrice.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow key={index}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                <Collapse in={selId === index ? open : false } timeout="auto" unmountOnExit>
                    <Box margin={1}>
                    <Typography variant="h6" gutterBottom component="div">
                        History Details
                    </Typography>
                    <Table size="small" aria-label="purchases">
                        <TableHead>
                            <TableRow>
                                <TableCell>Image</TableCell>
                                <TableCell>Name</TableCell>
                                <TableCell>Brand</TableCell>
                                <TableCell>Color</TableCell>
                                <TableCell>Size</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Rating</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {item.products.map((value, id) => (
                            <TableRow key={id}>
                                <TableCell>
                                    <img src={value.images} width='100px' alt='product-image'/>
                                </TableCell>
                                <TableCell component="th" scope="row">{item.name}</TableCell>
                                <TableCell>{value.brand}</TableCell>
                                <TableCell>{value.color}</TableCell>
                                <TableCell>{value.size}</TableCell>
                                <TableCell>{value.qty}</TableCell>
                                <TableCell>Rp. {value.price.toLocaleString()}</TableCell>
                                {value.rating > 0 ?
                                <TableCell>
                                    <Box
                                        component="fieldset"
                                        mb={3}
                                        borderColor="transparent"
                                    >
                                        <Rating
                                            name="read-only"
                                            readOnly
                                            value={value.rating}
                                            precision={0.5}
                                        />
                                    </Box>
                                </TableCell>
                                :
                                <TableCell>
                                    <Button onClick={() => this.buttonRating(index, id) } color='primary' variant='outlined'>Rate</Button>
                                </TableCell>
                                }
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </Box>
                </Collapse>
                </TableCell>
            </TableRow>
          </React.Fragment>
            )
        })
        
    }


    render () {
        const { read, rate, alert } = this.state
        return (
            <div style={styles.root}>
                <NavbarMaterial/>
                <div style={styles.container}>
                    <h1 style={styles.title}>Transaction History {this.props.username}'s</h1>
                    <Table style={styles.table}>
                        <TableHead>
                            {this.renderTableHead()}
                        </TableHead>
                        <TableBody>
                            {this.renderTableBody()}
                        </TableBody>
                    </Table>
                    <Dialog
                    open={alert}
                    onClose={() => this.setState({ alert: false })}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="form-dialog-title">Rate our products</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {'Give us a feedback!'}
                        </DialogContentText>
                        <Box
                            component="fieldset"
                            mb={3}
                            borderColor="transparent"
                        >
                            <Rating
                                name="simple-controlled"
                                value={rate}
                                onChange={(event, newvalue) =>
                                    this.handleRating(newvalue)
                                }
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ () => this.setState({ alert: false })} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={this.handleConfirm} color="primary" autoFocus>
                            Confirm
                    </Button>
                    </DialogActions>
                </Dialog>
                </div>
                <Footer/>
            </div>
        )
    }
}

const styles={
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#f2f2f2'
    },
    container:{
        minHeight: 'calc(100vh - 160px)',
        width: '70%',
        margin: '90px auto 30px auto',
    },
    title:{
        textAlign: 'center',
        margin:'1%'
    },
    table: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    }
}

const mapStateToProps = (state) => {
    return {
        role : state.user.role,
        username : state.user.username,
        history : state.history
    }
}

export default connect(mapStateToProps, {History})(HistoryUser)
