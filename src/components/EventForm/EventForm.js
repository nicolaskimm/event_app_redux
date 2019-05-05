import React from 'react';
import actions from '../../duck/actions/eventActions';
import { connect } from 'react-redux';
import './style/EventForm.css';

import { Formik } from 'formik';

import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

let EventForm = ({ add, openDialog, closeDialog, isOpen }) => {
   
    const submit = (values) => {
        const newEvent = {
            organisator: values.organisator,
            place: values.place,
            city: values.city,
            street: values.street,
            category: values.category
        }
    
        add(newEvent);
    }

    return (
        <div>
            <Button className='button-dialog' color='primary' variant="outlined" onClick={openDialog}>
                add new event
            </Button>
            <Dialog
                open={isOpen}
                onClose={closeDialog}
                aria-labelledby="new-event-form-dialog"
            >
                <DialogTitle id="new-event-form-dialog">add new event</DialogTitle>
                <DialogContent>
                    <Formik
                        initialValues={{ city: '', color: 'red' }}
                        onSubmit={(values) => {
                            submit(values)
                        }}
                        render={props => (
                            <form onSubmit={props.handleSubmit}>
                                <TextField
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.organisator}
                                    name='organisator'
                                    label='Organisator'
                                    halfWidth
                                />
                                <br />
                                <TextField
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.place}
                                    name='place'
                                    label='Place'
                                    halfWidth
                                />
                                <br />
                                <TextField
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.city}
                                    name='city'
                                    label='City'
                                    halfWidth
                                />
                                <br />                     
                                <TextField
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.street}
                                    name='street'
                                    label='Street'
                                    halfWidth
                                />
                                <br />
                                <TextField
                                    type="text"
                                    onChange={props.handleChange}
                                    value={props.values.category}
                                    name='category'
                                    label='Category'
                                    halfWidth
                                />
                                <br />
                                <br />
                            <button type="submit">Submit</button>
                            </form>
                        )}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog} color="primary">
                    Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    add: (event) => dispatch(actions.add(event)),
    openDialog: () => dispatch(actions.openDialog()),
    closeDialog: () => dispatch(actions.closeDialog())
})

const mapStateToProps = state => ({
    isOpen: state.events.openDialog
})


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);



