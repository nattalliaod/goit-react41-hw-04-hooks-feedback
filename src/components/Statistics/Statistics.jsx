import PropTypes from 'prop-types';
import { Option } from './Statistics.styled';

export const Statistics = ({ options, total, positivePercentage }) => {
    return (
        <ul>
            {Object.keys(options).map(option => (
                <Option key={option}>
                    {option}: {options[option]}
                </Option>
            ))}
            <Option>Total: {total} </Option>
            <Option>Positive feedback: {positivePercentage}%</Option>
        </ul>
    );
}

Statistics.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}