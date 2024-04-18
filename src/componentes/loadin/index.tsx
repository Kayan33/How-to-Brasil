import React from 'react';
import "../../style/loadin.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';

interface LoadingSpinnerProps {
  loading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading }) => {
  return loading ? (
    <div className="loading-container">
      <div className="loading"></div>
      <FontAwesomeIcon icon={faSpinner} spinPulse size="3x" />
      <p>Carregando...</p>
    </div>
  ) : null;
};

export default LoadingSpinner;
