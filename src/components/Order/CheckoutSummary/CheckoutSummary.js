import React from 'react';

import Button from '../../UI/Button/Button';
import Burger from '../../Burger/Burger';

import styles from './CheckoutSummary.css';

const CheckoutSummary = (props) => {

  return(
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{margin: 'auto', width: '100%'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType='Danger'>CANCEL</Button>
      <Button btnType='Success'>CONTINUE</Button>
    </div>
  );
}

export default CheckoutSummary;