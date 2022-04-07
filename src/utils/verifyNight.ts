import moment from 'moment';

const getTimezone = (dt) => {
  const getTimezone = moment(dt * 1000).format('HH:mm');
  return getTimezone;
};

export default getTimezone;
