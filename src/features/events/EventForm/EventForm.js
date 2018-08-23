import React, {Component} from 'react'
import {Button, Form, Segment, Grid, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {createEvent, updateEvent} from '../eventActions'
import {reduxForm, Field} from 'redux-form'
import { composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import cuid from 'cuid'
import TextInput from "../../../app/form/TextInput";
import TextArea from "../../../app/form/TextArea";
import SelectInput from "../../../app/form/SelectInput";
import {Link} from 'react-router-dom'

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

const mapState = (state, ownProps) =>{
  const eventId = ownProps.match.params.id;

  let event = {}

  if(eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return{
    initialValues: event
  }
}

const actions = {
  createEvent,
  updateEvent
}

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'Please provide a category'}),
  description: composeValidators(
    isRequired({message: 'Please enter a desciption'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be atleast 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue')
})

class EventForm extends Component{

    onFormSubmit= (values) =>{
        if(this.props.initialValues.id){
            this.props.updateEvent(values)
            this.props.history.goBack();
        }else {
            const newEvent = {
              ...values,
              id: cuid(),
              hostPhotoURL: '/assets/user.png',
              hostedBy: 'Bob'
            }
            this.props.createEvent(newEvent)
            this.props.history.push('/events')
        }
    }

    render(){
        const {invalid, submiting, pristine} = this.props;
        return(
                <Grid>
                    <Grid.Column width={10}>
                        <Segment>
                            <Header sub color={'teal'} content={"Event Detailes"}/>
                            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                                <Field name="title" type='text' component={TextInput} placeholder="Give your event a name"/>
                                <Field name="category" type='text' component={SelectInput} options={category} placeholder="What is your event about"/>
                                <Field name="description" type='text' rows={3} component={TextArea} placeholder="Tell us about your event"/>
                                <Header sub color={'teal'} content={"Event Location Details"}/>
                                <Field name="city" type='text' component={TextInput} placeholder="Event City"/>
                                <Field name="venue" type='text' component={TextInput} placeholder="Event Venue"/>
                                <Field name="date" type='text' component={TextInput} placeholder="Event Date"/>
                                <Button disabled={invalid || submiting || pristine} positive type="submit">
                                    Submit
                                </Button>
                                <Button as={Link} to='/events' type="button">Cancel</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid>


        );
    }
}

export default connect(mapState,actions)(reduxForm({form: 'eventForm', enableReinitialize: true, validate})(EventForm));
