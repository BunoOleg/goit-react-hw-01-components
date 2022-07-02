import PropTypes from 'prop-types';
import style from './Statistics.module.css';



const Statistics = ({title, stats}) => {
  return (
    <section className={style.statistics}>

      {title ? <h2 className={style.title}>{title}</h2> : ''}

      <ul className={style.statList}>
        {stats.map(({id, label, percentage}) => {
        return (       
          <li className={style.item} 
              key={id} 
              style={{backgroundColor: `#${getRandomColor()}`}}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
          </li>)})}
      </ul>

    </section>)
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};

export default Statistics;

const getRandomColor = () => {
  return Math.floor(Math.random()*16777215).toString(16);
}