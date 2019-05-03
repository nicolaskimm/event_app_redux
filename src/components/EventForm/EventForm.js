import React from 'react';
import actions from '../../duck/actions/eventActions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import './styles/EventForm.css';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


let EventForm = ({ handleSubmit, add, openDialog, closeDialog, isOpen }) => {
    console.log(isOpen)

   
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
            <Button variant="outlined" color="primary" onClick={openDialog}> add event </Button>
            <Dialog
                aria-labelledby="new-event-form-dialog"
                open={isOpen}
                onClose={closeDialog}
            >
            <DialogTitle id="new-event-form-dialog"> add new event </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(submit)} className='eventFormAdd'>
                    <div>
                        <label htmlFor='city'>City</label>
                            <Field 
                                name='organisator' 
                                component='input' 
                                type='text' 
                                placeholder='organisator'
                            />
                            <label htmlFor='name'>Name</label>
                            <Field 
                                name='city' 
                                component='input' 
                                type='text' 
                                placeholder='city'
                            />
                            <Field 
                                name='street' 
                                component='input' 
                                type='text' 
                                placeholder='street'
                            />
                            <Field 
                                name='place' 
                                component='input' 
                                type='text' 
                                placeholder='place'
                            />
                            <Field 
                                name='category' 
                                component='input' 
                                type='text' 
                                placeholder='category'
                            />
                    </div>
                    <Button color="primary" onClick={closeDialog}> cancel </Button>
                    <Button color="primary" type='submit'> add </Button>
                </form>
            </DialogContent>
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

const EventFormFunc = reduxForm({
    form: 'new-event',
})(EventForm);


export default connect(mapStateToProps, mapDispatchToProps)(EventFormFunc)




