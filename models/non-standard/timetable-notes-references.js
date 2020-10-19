module.exports = {
  filenameBase: 'timetable_notes_references',
  schema: [
    {
      name: 'note_id',
      type: 'varchar(255)',
      primary: true
    },
    {
      name: 'timetable_id',
      type: 'varchar(255)',
      index: true
    },
    {
      name: 'route_id',
      type: 'varchar(255)',
      index: true
    },
    {
      name: 'trip_id',
      type: 'varchar(255)',
      index: true
    },
    {
      name: 'stop_id',
      type: 'varchar(255)',
      index: true
    },
    {
      name: 'stop_sequence',
      type: 'integer',
      min: 0,
      index: true
    }
  ]
};
