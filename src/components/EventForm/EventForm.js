import React from 'react';
import actions from '../../duck/actions/eventActions';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


let EventForm = ({ handleSubmit, add }) => {
    
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
        <form onSubmit={handleSubmit(submit)}>
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
            <button type='submit'>add</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    add: (event) => dispatch(actions.add(event))
})

const EventFormFunc = reduxForm({
    form: 'new-event',
})(EventForm);


export default connect(null, mapDispatchToProps)(EventFormFunc)




