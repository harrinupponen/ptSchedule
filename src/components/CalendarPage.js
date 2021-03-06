import React, {useState, useEffect} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = momentLocalizer(moment)

const CalendarPage = () => {
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        fetchTrainings();
    }, [])

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }
    
    const events = trainings.map(tr => {
      let date = new Date(tr.date)
      
      const eventsDetails = {
          start: date,
          end: new Date(moment(date).add(tr.duration, "minutes")),
          title: tr.activity
      }

      return eventsDetails
  })

  return(
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultView="week"
      style={{height: 500}}
    />
  )
  }


export default CalendarPage;