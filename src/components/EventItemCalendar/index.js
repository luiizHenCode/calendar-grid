import React from 'react';


import styles from './styles.module.scss';

export function EventItemCalendar(eventInfo){
  return (
    <div className={styles.container}>
        <span>{eventInfo.event.title}</span>
    </div>
  );
}