import React, {Component} from 'react'
import EventListItem from "./EventListItem"

class EventList extends Component{
    render(){
        const {events, deleteEvent} = this.props;
        return(
            <div>
                {events.map((event) =>{
                    return <EventListItem key={events.id} event={event} deleteEvent={deleteEvent}/>
                })}


            </div>
        );
    }
}
export default EventList
